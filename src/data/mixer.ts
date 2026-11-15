// Mixér: návštevník označí, čo rieši, a dostane odporúčanie roly a služieb.
// Všetko sa dá meniť tu, komponenty si dáta len čítajú.

export type Problem = { id: string; label: string; services: string[]; role?: string };

export const problems: Problem[] = [
  { id: 'k1', label: 'Kampane míňajú, ale nezarábajú', services: ['platene-kampane'] },
  { id: 'k2', label: 'Nevieme, ktorý kanál naozaj predáva', services: ['nastavenie-trackingu', 'platene-kampane'] },
  { id: 't1', label: 'Čísla v GA4 a v reklame nesedia', services: ['nastavenie-trackingu'] },
  { id: 't2', label: 'E-shop nemá poriadne meranie nákupov', services: ['nastavenie-trackingu'] },
  { id: 'a1', label: 'Zákazníci nakúpia raz a nevrátia sa', services: ['marketingova-automatizacia'] },
  { id: 'a2', label: 'Všetkým posielame ten istý e-mail', services: ['marketingova-automatizacia'] },
  { id: 'o1', label: 'E-mail, SMS a obchod idú každý po svojom', services: ['omnichannel'] },
  { id: 'p1', label: 'Veľa vecí robíme ručne a dookola', services: ['automatizacia-procesov'] },
  { id: 'i1', label: 'AI skúšame, ale v práci nám nepomáha', services: ['ai'] },
  { id: 'w1', label: 'Web je pomalý a ťažko sa upravuje', services: ['web-development'] },
  { id: 'w2', label: 'Potrebujeme nový web alebo e-shop', services: ['web-development'] },
  { id: 'b1', label: 'Značka vyzerá všade inak', services: ['brand'] },
  // Tieto dve nemajú konkrétnu službu, vedú rovno k role.
  { id: 's1', label: 'Chýba nám marketingová stratégia a plán', services: [], role: 'strateg' },
  { id: 's2', label: 'Chceme nezávislý pohľad na to, čo robí agentúra', services: [], role: 'konzultant' },
];

export type Role = { id: string; title: string; text: string; services: string[] };

// Rola sa vyberá podľa toho, ktorej sada služieb sa najviac prekrýva s výberom.
export const roles: Role[] = [
  {
    id: 'ppc',
    title: 'PPC špecialista',
    text: 'Vezmeme si kampane v Meta a Google Ads. Rozpočet pôjde tam, kde zarába.',
    services: ['platene-kampane'],
  },
  {
    id: 'analytik',
    title: 'Webový analytik',
    text: 'Dáme do poriadku meranie, aby ste sa pri rozhodovaní mohli oprieť o čísla.',
    services: ['nastavenie-trackingu'],
  },
  {
    id: 'performance',
    title: 'Performance manažér',
    text: 'Vezmeme si na starosť kampane aj meranie, aby ste vedeli, čo zarába, a rozpočet išiel tam.',
    services: ['platene-kampane', 'nastavenie-trackingu'],
  },
  {
    id: 'automation',
    title: 'Špecialista na automatizáciu',
    text: 'Postavíme scenáre, ktoré sa o zákazníka starajú samy od prvého nákupu.',
    services: ['marketingova-automatizacia'],
  },
  {
    id: 'crm',
    title: 'CRM manažér',
    text: 'Postavíme komunikáciu, ktorá sa o zákazníka stará sama a nadväzuje naprieč kanálmi.',
    services: ['marketingova-automatizacia', 'omnichannel'],
  },
  {
    id: 'growth',
    title: 'Growth manažér',
    text: 'Prepojíme získavanie zákazníkov s tým, čo sa deje po nákupe: kampane, meranie aj automatizáciu.',
    services: ['platene-kampane', 'nastavenie-trackingu', 'marketingova-automatizacia'],
  },
  {
    id: 'procesy',
    title: 'Procesný konzultant',
    text: 'Nájdeme, kde váš tím stráca hodiny, a opakované kroky zjednodušíme alebo zautomatizujeme.',
    services: ['automatizacia-procesov'],
  },
  {
    id: 'ai',
    title: 'AI konzultant',
    text: 'Ukážeme, kde AI vášmu tímu ušetrí čas, a zapojíme ju do nástrojov, ktoré už používate.',
    services: ['ai'],
  },
  {
    id: 'ops',
    title: 'Konzultant pre procesy a AI',
    text: 'Nájdeme, kde váš tím stráca hodiny, a opakovanú prácu prenecháme automatizácii a AI.',
    services: ['automatizacia-procesov', 'ai'],
  },
  {
    id: 'dev',
    title: 'Web developer',
    text: 'Postavíme web alebo e-shop, ktorý je rýchly, dá sa spravovať a má meranie od prvého dňa.',
    services: ['web-development'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce manažér',
    text: 'Dáme dokopy e-shop, jeho meranie a kampane tak, aby na seba nadväzovali.',
    services: ['web-development', 'nastavenie-trackingu', 'platene-kampane'],
  },
  {
    id: 'brand',
    title: 'Brand dizajnér',
    text: 'Navrhneme identitu a pravidlá, podľa ktorých bude značka vyzerať všade rovnako.',
    services: ['brand'],
  },
  {
    id: 'build',
    title: 'Web a brand štúdio',
    text: 'Dostanete web, ktorý je rýchly a dá sa spravovať, a značku, ktorá vyzerá všade rovnako.',
    services: ['web-development', 'brand'],
  },
];

// Roly bez pevnej sady služieb: vyberajú sa priamo (problém s `role`) alebo pri širokom výbere.
export const wideRoles: Record<string, Role> = {
  konzultant: {
    id: 'konzultant',
    title: 'Marketingový konzultant',
    text: 'Pozrieme sa na váš marketing zvonka a povieme, čo funguje, čo nie a čo s tým.',
    services: [],
  },
  strateg: {
    id: 'strateg',
    title: 'Marketingový stratég',
    text: 'Riešite viac vecí naraz. Začneme poradím: čo opraviť hneď, čo počká a čo netreba robiť vôbec.',
    services: [],
  },
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
    options: ['Čo najskôr', 'Do troch mesiacov', 'Zatiaľ zisťujeme možnosti'],
  },
  form: {
    legend: 'Akú spoluprácu hľadáte',
    options: ['Jednorazový projekt', 'Dlhodobú spoluprácu', 'Konzultáciu', 'Ešte nevieme'],
  },
  budget: {
    legend: 'Mesačný rozpočet na marketing vrátane reklamy',
    options: ['Do 1 000 €', '1 000 – 5 000 €', '5 000 – 20 000 €', 'Viac ako 20 000 €', 'Nevieme povedať'],
  },
};
