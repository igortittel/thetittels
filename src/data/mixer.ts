// Mixér: návštevník označí, čo rieši, a dostane odporúčanie roly a služieb.
// Všetko sa dá meniť tu, komponenty si dáta len čítajú.

export type Problem = { id: string; label: string; services: string[] };

export const problems: Problem[] = [
  { id: 'k1', label: 'Kampane míňajú, ale nezarábajú', services: ['platene-kampane'] },
  { id: 'k2', label: 'Neviem, ktorý kanál naozaj predáva', services: ['nastavenie-trackingu', 'platene-kampane'] },
  { id: 't1', label: 'Čísla v GA4 a v reklame nesedia', services: ['nastavenie-trackingu'] },
  { id: 't2', label: 'E-shop nemá poriadne meranie nákupov', services: ['nastavenie-trackingu'] },
  { id: 'a1', label: 'Zákazníci nakúpia raz a nevrátia sa', services: ['marketingova-automatizacia'] },
  { id: 'a2', label: 'Všetkým posielame ten istý e-mail', services: ['marketingova-automatizacia'] },
  { id: 'o1', label: 'E-mail, SMS a obchod idú každý po svojom', services: ['omnichannel'] },
  { id: 'p1', label: 'Veľa vecí robíme ručne a dookola', services: ['automatizacia-procesov', 'ai'] },
  { id: 'i1', label: 'AI skúšame, ale v práci nám nepomáha', services: ['ai'] },
  { id: 'w1', label: 'Web je pomalý a ťažko sa upravuje', services: ['web-development'] },
  { id: 'w2', label: 'Potrebujeme nový web alebo e-shop', services: ['web-development'] },
  { id: 'b1', label: 'Značka vyzerá všade inak', services: ['brand'] },
];

export type Role = { id: string; title: string; text: string; services: string[] };

export const roles: Role[] = [
  {
    id: 'performance',
    title: 'Performance manažér',
    text: 'Vezmem si na starosť kampane aj meranie, aby ste vedeli, čo zarába, a rozpočet išiel tam.',
    services: ['platene-kampane', 'nastavenie-trackingu'],
  },
  {
    id: 'crm',
    title: 'Špecialista na automatizáciu',
    text: 'Postavím komunikáciu, ktorá sa o zákazníka stará sama a nadväzuje naprieč kanálmi.',
    services: ['marketingova-automatizacia', 'omnichannel'],
  },
  {
    id: 'ops',
    title: 'Konzultant pre procesy a AI',
    text: 'Nájdem, kde váš tím stráca hodiny, a opakovanú prácu prenechám automatizácii a AI.',
    services: ['automatizacia-procesov', 'ai'],
  },
  {
    id: 'build',
    title: 'Dodávateľ webu a značky',
    text: 'Dostanete web, ktorý je rýchly a dá sa spravovať, a značku, ktorá vyzerá všade rovnako.',
    services: ['web-development', 'brand'],
  },
];

// Keď výber zasahuje tri a viac oblastí, jedna rola nestačí.
export const partnerRole: Role = {
  id: 'partner',
  title: 'Externý marketingový partner',
  text: 'Riešite viac vecí naraz. Začneme poradím: čo treba opraviť hneď, čo počká a čo netreba robiť vôbec.',
  services: [],
};

export const steps = {
  company: {
    legend: 'Čím sa firma živí',
    options: ['E-shop', 'Služby', 'B2B', 'Niečo iné'],
  },
  team: {
    legend: 'Koľko vás je',
    options: ['1 – 10', '11 – 50', '51 – 250', 'Viac ako 250'],
  },
  marketing: {
    legend: 'Kto sa dnes stará o marketing',
    options: ['Nikto', 'Vlastný človek alebo tím', 'Agentúra', 'Freelancer'],
  },
  timing: {
    legend: 'Kedy chcete začať',
    options: ['Čo najskôr', 'Do troch mesiacov', 'Zatiaľ zisťujem možnosti'],
  },
  form: {
    legend: 'Akú spoluprácu hľadáte',
    options: ['Jednorazový projekt', 'Dlhodobú spoluprácu', 'Konzultáciu', 'Ešte neviem'],
  },
  budget: {
    legend: 'Mesačný rozpočet na marketing vrátane reklamy',
    options: ['Do 1 000 €', '1 000 – 5 000 €', '5 000 – 20 000 €', 'Viac ako 20 000 €', 'Neviem povedať'],
  },
};
