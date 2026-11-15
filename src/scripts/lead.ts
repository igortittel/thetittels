// Odoslanie formulára na /api/lead. Formulár označený data-lead, stav sa vypisuje do [data-status].
export function wireLeadForm(form: HTMLFormElement, extra: () => Record<string, unknown> = () => ({})) {
  const status = form.querySelector<HTMLElement>('[data-status]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const done = document.querySelector<HTMLElement>(form.dataset.done || '');

  const say = (msg: string, isError = false) => {
    if (!status) return;
    status.textContent = msg;
    status.classList.toggle('error', isError);
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    button?.setAttribute('disabled', '');
    say('Odosielam…');
    try {
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, ...extra(), page: location.pathname }),
      });
      if (!res.ok) throw new Error(String(res.status));
      (window as any).dataLayer?.push({ event: 'generate_lead', lead_source: form.dataset.lead });
      form.hidden = true;
      if (done) {
        done.hidden = false;
        done.focus();
      }
    } catch {
      say(`Správu sa nepodarilo odoslať. Skúste to znova alebo napíšte na ${form.dataset.email}.`, true);
      button?.removeAttribute('disabled');
    }
  });
}
