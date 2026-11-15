import type { APIRoute } from 'astro';

export const prerender = false;

const clean = (v: unknown, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid' }, 400);
  }

  // Honeypot: skutočný človek toto pole nevidí.
  if (clean(body.website)) return json({ ok: true }, 200);

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'validation' }, 422);

  const key = import.meta.env.BREVO_API_KEY;
  const to = import.meta.env.LEAD_TO_EMAIL;
  const from = import.meta.env.LEAD_FROM_EMAIL;
  if (!key || !to || !from) return json({ error: 'not-configured' }, 503);

  const labels: Record<string, string> = {
    company: 'Firma / web',
    phone: 'Telefón',
    role: 'Odporúčaná rola',
    problems: 'Čo riešia',
    business: 'Čím sa živia',
    team: 'Veľkosť',
    marketing: 'Kto robí marketing',
    timing: 'Kedy začať',
    form: 'Spolupráca',
    budget: 'Rozpočet',
    message: 'Správa',
    page: 'Stránka',
  };
  const lines = [`Meno: ${name}`, `E-mail: ${email}`];
  for (const [field, label] of Object.entries(labels)) {
    const value = Array.isArray(body[field])
      ? (body[field] as unknown[]).map((v) => clean(v, 200)).filter(Boolean).join('; ')
      : clean(body[field]);
    if (value) lines.push(`${label}: ${value}`);
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { email: from, name: 'thetittels.sk' },
      to: [{ email: to }],
      replyTo: { email, name },
      subject: `Dopyt z webu: ${name}${clean(body.role, 80) ? ` (${clean(body.role, 80)})` : ''}`,
      textContent: lines.join('\n'),
    }),
  });

  if (!res.ok) return json({ error: 'send-failed' }, 502);
  return json({ ok: true }, 200);
};
