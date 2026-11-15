export type Service = {
  slug: string;
  name: string;
  short: string;
  lead: string;
  when: string[];
  get: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'platene-kampane',
    name: 'Platené kampane',
    short: 'Meta a Google Ads, ktoré sa riadia podľa zisku, nie podľa preklikov.',
    lead: 'Nastavíme a spravujeme kampane v Meta a Google Ads. Rozpočet presúvame tam, kde zarába, a čo nezarába, vypneme. Každý mesiac viete, koľko ste minuli a čo ste za to dostali.',
    when: [
      'Do reklamy dávate peniaze a neviete povedať, či sa vracajú.',
      'Kampane beží niekto „popri práci" a mesiace sa v nich nič nezmenilo.',
      'Rozbiehate nový produkt alebo e-shop a potrebujete prvé predaje.',
    ],
    get: [
      'Audit účtov s konkrétnym zoznamom, čo nechať, čo opraviť a čo vypnúť.',
      'Štruktúru kampaní, publiká a kreatívne zadania.',
      'Priebežnú optimalizáciu a mesačný report, ktorý sa dá prečítať za päť minút.',
    ],
    faq: [
      {
        q: 'Aký rozpočet na reklamu dáva zmysel?',
        a: 'Záleží na marži a cene objednávky. Pred spustením spolu spočítame, koľko môže stáť jeden zákazník, aby sa kampaň oplatila. Ak čísla nevychádzajú, povieme to skôr, než miniete prvé euro.',
      },
      {
        q: 'Preberiete aj existujúci účet?',
        a: 'Áno. Čo v ňom funguje, necháme bežať. Nezačíname od nuly len preto, aby bolo vidieť zmenu.',
      },
    ],
  },
  {
    slug: 'nastavenie-trackingu',
    name: 'Nastavenie trackingu',
    short: 'GTM, GA4, Conversions API a e-commerce eventy, ktorým sa dá veriť.',
    lead: 'Bez spoľahlivých dát sa kampane riadia podľa pocitu. Nastavíme Google Tag Manager, GA4, Meta Conversions API a e-commerce meranie tak, aby čísla v nástrojoch sedeli s tým, čo vidíte v objednávkach.',
    when: [
      'E-shop, GA4 a reklamné účty ukazujú každý iné čísla.',
      'Po zmene webu alebo cookie lišty prestali chodiť konverzie.',
      'Chcete merať celý nákupný proces, nielen poslednú objednávku.',
    ],
    get: [
      'Merací plán: ktoré eventy, kde a prečo.',
      'Nastavený GTM kontajner, GA4, Consent Mode a server-side odosielanie (CAPI).',
      'Dokumentáciu, podľa ktorej sa v meraní vyzná aj ďalší človek.',
    ],
    faq: [
      {
        q: 'Čo je Conversions API a potrebujem ho?',
        a: 'Conversions API posiela udalosti do Mety priamo zo servera, nielen z prehliadača. Vyplatí sa každému, kto inzeruje na Mete a prichádza o konverzie pre blokovanie cookies a reklamy. Pri malom rozpočte stačí aj dobre nastavený Pixel.',
      },
      {
        q: 'Funguje meranie aj so súhlasmi podľa GDPR?',
        a: 'Áno. Tagy naviažeme na súhlas návštevníka cez Consent Mode, takže sa meria len to, na čo máte povolenie.',
      },
    ],
  },
  {
    slug: 'marketingova-automatizacia',
    name: 'Marketingová automatizácia',
    short: 'Správa v pravý čas pravému človeku, bez ručného posielania.',
    lead: 'Navrhneme a postavíme automatizované scenáre: uvítaciu sériu, opustený košík, starostlivosť po nákupe aj návrat neaktívnych zákazníkov. Obsah sa prispôsobuje tomu, čo človek naozaj urobil.',
    when: [
      'Všetkým kontaktom posielate ten istý newsletter.',
      'Zákazníci nakúpia raz a viac sa neozvú.',
      'Máte nástroj na automatizáciu, ale používate z neho desatinu.',
    ],
    get: [
      'Mapu scenárov zoradenú podľa toho, čo prinesie najviac.',
      'Segmentáciu a personalizáciu postavenú na vašich dátach.',
      'Nastavené a otestované automatizácie vrátane merania výsledkov.',
    ],
    faq: [
      {
        q: 'V akom nástroji pracujete?',
        a: 'Pracujeme s tým, čo už máte, ak to stačí. Nový nástroj odporučíme až vtedy, keď ten súčasný brzdí to, čo potrebujete.',
      },
      {
        q: 'Koľko kontaktov treba mať, aby sa to oplatilo?',
        a: 'Základné scenáre ako uvítanie a opustený košík sa oplatia aj pri pár stovkách kontaktov. Zložitejšia personalizácia má zmysel až pri väčšej databáze.',
      },
    ],
  },
  {
    slug: 'omnichannel',
    name: 'Omnichannel',
    short: 'E-mail, SMS, reklama a obchodník ako jedna súvislá komunikácia.',
    lead: 'Prepojíme automatizáciu s priamou komunikáciou. Zákazník dostane nadväzujúce správy naprieč kanálmi a váš obchod alebo podpora vidí, čo sa s ním dialo predtým.',
    when: [
      'Kanály spravujú rôzni ľudia a navzájom o sebe nevedia.',
      'Zákazník dostane zľavu e-mailom deň po tom, čo nakúpil za plnú cenu.',
      'Obchodníci volajú ľuďom bez toho, aby vedeli, čo si pozerali.',
    ],
    get: [
      'Návrh komunikácie podľa fázy zákazníka, nie podľa kanála.',
      'Prepojenie nástrojov a dát, aby mali všetci rovnaký obraz.',
      'Pravidlá, kedy správu posiela systém a kedy sa ozve človek.',
    ],
    faq: [
      {
        q: 'Je omnichannel len pre veľké firmy?',
        a: 'Nie. Aj malý e-shop vie prepojiť e-mail, SMS a remarketing. Rozdiel je len v počte scenárov, nie v princípe.',
      },
    ],
  },
  {
    slug: 'automatizacia-procesov',
    name: 'Automatizácia procesov',
    short: 'Opakovanú ručnú prácu prenechajte systému.',
    lead: 'Prejdeme s vami, ako u vás práca naozaj prebieha, nájdeme kroky, ktoré sa opakujú, a navrhneme, ako ich zjednodušiť alebo automatizovať. Najprv proces, až potom nástroj.',
    when: [
      'Ľudia prepisujú údaje z jedného systému do druhého.',
      'Reporty, faktúry alebo ponuky skladáte každý týždeň ručne.',
      'Proces stojí na jednom človeku a keď chýba, zastaví sa.',
    ],
    get: [
      'Zmapovaný proces s vyznačenými miestami, kde sa stráca čas.',
      'Návrh zmien zoradený podľa pomeru prínosu a náročnosti.',
      'Postavené automatizácie a krátky návod pre tím.',
    ],
    faq: [
      {
        q: 'Treba kvôli tomu meniť systémy, ktoré používame?',
        a: 'Väčšinou nie. Vo väčšine prípadov stačí prepojiť to, čo už máte.',
      },
    ],
  },
  {
    slug: 'web-development',
    name: 'Web development',
    short: 'Weby a e-shopy na mieru. WordPress alebo vlastný kód.',
    lead: 'Staviame weby a e-shopy, ktoré sú rýchle, dajú sa spravovať a majú meranie pripravené od prvého dňa. Na WordPresse tam, kde potrebujete redakčný systém, a vo vlastnom kóde tam, kde rozhoduje výkon.',
    when: [
      'Web je pomalý a každá úprava trvá týždne.',
      'Spúšťate nový produkt, službu alebo e-shop.',
      'Súčasný web vyzerá dobre, ale neprináša dopyty.',
    ],
    get: [
      'Štruktúru a obsah navrhnuté podľa toho, čo má návštevník urobiť.',
      'Web pripravený pre vyhľadávače aj AI asistentov: čistý kód, štruktúrované dáta, rýchle načítanie.',
      'Meranie, formuláre a zaškolenie, aby ste si obsah menili sami.',
    ],
    faq: [
      {
        q: 'WordPress alebo vlastný kód?',
        a: 'WordPress sa hodí, keď obsah upravuje viac ľudí a potrebujete hotové rozšírenia. Vlastný kód je vhodný pre menší web, kde chcete maximálnu rýchlosť a minimum údržby. Odporučíme to, čo vám ušetrí viac starostí.',
      },
      {
        q: 'Robíte aj e-shopy?',
        a: 'Áno, vrátane platieb, dopravy a e-commerce merania.',
      },
    ],
  },
  {
    slug: 'brand',
    name: 'Brand',
    short: 'Vizuálna identita a pravidlá, podľa ktorých značka drží pokope.',
    lead: 'Navrhneme vizuálnu identitu a spíšeme ju do dizajn manuálu alebo brandbooku. Výsledkom je sada pravidiel, podľa ktorej vie pracovať grafik, agentúra aj váš tím.',
    when: [
      'Značka vyzerá inak na webe, v reklame a na faktúre.',
      'Začínate a potrebujete viac než len logo.',
      'Každý dodávateľ si vašu značku vykladá po svojom.',
    ],
    get: [
      'Logo, farby, písmo a vizuálny štýl.',
      'Dizajn manuál s príkladmi použitia.',
      'Podklady pripravené pre web, sociálne siete a tlač.',
    ],
    faq: [
      {
        q: 'Aký je rozdiel medzi dizajn manuálom a brandbookom?',
        a: 'Dizajn manuál popisuje, ako značka vyzerá: logo, farby, písmo a ich použitie. Brandbook k tomu pridáva, ako značka hovorí a za čím stojí.',
      },
    ],
  },
  {
    slug: 'ai',
    name: 'AI v praxi',
    short: 'AI zapojená do každodennej práce tak, aby šetrila hodiny.',
    lead: 'Pomôžeme vám nájsť činnosti, kde AI ušetrí najviac času, a zapojíme ju priamo do nástrojov, ktoré váš tím používa každý deň.',
    when: [
      'AI v tíme skúša každý sám a výsledky sa nedajú porovnať.',
      'Opakovane píšete podobné texty, odpovede alebo reporty.',
      'Chcete vedieť, kde sa AI oplatí a kde je to len módna vlna.',
    ],
    get: [
      'Prehľad činností s odhadom ušetreného času.',
      'Nastavené pracovné postupy a prepojenie s vašimi nástrojmi.',
      'Školenie tímu na vlastných úlohách, nie na ukážkových príkladoch.',
    ],
    faq: [
      {
        q: 'Kde začať s AI vo firme?',
        a: 'Pri jednej opakovanej úlohe, ktorá zaberá veľa času a kde chyba veľa nestojí. Na nej sa tím naučí pracovať s AI a výsledok sa dá ľahko zmerať.',
      },
      {
        q: 'Sú naše dáta v bezpečí?',
        a: 'Pred nasadením určíme, ktoré dáta do AI nástrojov ísť môžu a ktoré nie, a podľa toho vyberieme nástroj aj nastavenia.',
      },
    ],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
