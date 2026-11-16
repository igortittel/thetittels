# thetittels.sk

Web značky The Tittels. Statický web v [Astro](https://astro.build), nasadenie na Vercel.

## Spustenie

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # produkčný build
```

## Kde čo meniť

| Čo | Súbor |
| --- | --- |
| Kontaktný e-mail, navigácia, popis webu | `src/data/site.ts` |
| Služby (texty, FAQ, poradie = poradie dielov stroja) | `src/data/services.ts` |
| Dopyt (problémy, roly, otázky) | `src/data/assessment.ts` |
| Referencie (značky, weby, nástroje) | `src/data/proof.ts` |
| Pohyb pri skrolovaní (GSAP) | `src/scripts/motion.ts` |
| 3D stroj na úvode (tvary dielov) | `src/scripts/machine.ts` |
| Články | `src/content/blog/*.md` |
| Farby, písmo, rozostupy | `src/styles/global.css` |

Nový článok je nový `.md` súbor v `src/content/blog/` s hlavičkou `title`, `description`, `date`.
S `draft: true` sa nezverejní.

## Premenné prostredia (Vercel)

Vzor je v `.env.example`.

- `RESEND_API_KEY`, `LEAD_FROM_EMAIL`: odosielanie dopytov z formulárov e-mailom cez Resend.
  `LEAD_FROM_EMAIL` musí byť adresa na doméne overenej v Resend. Bez týchto hodnôt formuláre vrátia
  chybu a návštevníka odkážu na e-mail.
- `LEAD_TO_EMAIL`: kam dopyty chodia (predvolene e-mail zo `src/data/site.ts`).
- `PUBLIC_GTM_ID`: Google Tag Manager. Keď je nastavené, načíta sa GTM s Consent Mode v2 a cookie lišta.

## Pred spustením

- Doplniť údaje prevádzkovateľa v `src/pages/ochrana-sukromia.astro` (miesta v hranatých zátvorkách).
- Skontrolovať texty, najmä `O nás` a dva úvodné články.
