import type { APIRoute } from 'astro';
import { site } from '../../data/site';

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

  const key = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.LEAD_TO_EMAIL || site.email;
  // Odosielateľ musí byť z domény overenej v Resend.
  const from = import.meta.env.LEAD_FROM_EMAIL;
  if (!key || !from) return json({ error: 'not-configured' }, 503);

  const labels: Record<string, string> = {
    company: 'Firma / web',
    phone: 'Telefón',
    role: 'Odporúčaná rola',
    problems: 'Čo riešia',
    business: 'Čo predávajú',
    audience: 'Komu predávajú',
    timing: 'Kedy začať',
    form: 'Spolupráca',
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

  const role = clean(body.role, 80);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: `thetittels.sk <${from}>`,
      to: [to],
      reply_to: email,
      subject: `Dopyt z webu: ${name}${role ? ` (${role})` : ''}`,
      text: lines.join('\n'),
    }),
  });

  if (!res.ok) return json({ error: 'send-failed' }, 502);
  return json({ ok: true }, 200);
};
