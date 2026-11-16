export type Service = {
  slug: string;
  name: string;
  short: string;
  tag: string;
  today: string;
  after: string;
  lead: string;
  when: string[];
  get: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'web-development',
    name: 'Web development',
    short: 'Weby a e-shopy na mieru. WordPress alebo vlastný kód.',
    tag: 'WEB',
    today: 'Každá úprava webu trvá týždne.',
    after: 'Text si zmeníte sami a stránka sa načíta skôr, než stihnete žmurknúť.',
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
      {
        q: 'Viete prebrať a opraviť existujúci web?',
        a: 'Áno. Najprv sa pozrieme, čo sa dá opraviť. Prerábať od základu odporučíme len vtedy, keď by opravy vyšli drahšie než nový web.',
      },
      {
        q: 'Kto sa o web stará po spustení?',
        a: 'Vy, ak chcete. Web odovzdáme so zaškolením a všetky prístupy sú na vaše meno. Ak sa o aktualizácie a úpravy starať nechcete, dohodneme sa na správe.',
      },
      {
        q: 'Bude web pripravený na kampane a meranie?',
        a: 'Áno. Meranie, súhlasy a konverzie nastavujeme ako súčasť webu, nie až po spustení.',
      },
    ],
  },
  {
    slug: 'nastavenie-trackingu',
    name: 'Nastavenie trackingu',
    short: 'GTM, GA4, Conversions API a e-commerce eventy, ktorým sa dá veriť.',
    tag: 'TRACKING',
    today: 'GA4, reklamné účty a e-shop ukazujú každý iné číslo.',
    after: 'Jedno číslo, ktorému veria marketing aj účtovníčka.',
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
      {
        q: 'Treba meranie postaviť odznova, alebo stačí opraviť to, čo máme?',
        a: 'Väčšinou stačí opraviť. Začíname auditom, z ktorého vyjde zoznam: čo funguje, čo meria zle a čo chýba.',
      },
      {
        q: 'Prečo čísla v GA4 nikdy nesedia presne s e-shopom?',
        a: 'Úplná zhoda nie je reálna. Časť ľudí odmietne cookies a časť meranie blokuje. Cieľom je rozdiel, ktorý je malý, stabilný a viete ho vysvetliť.',
      },
      {
        q: 'Čo od nás budete potrebovať?',
        a: 'Prístup do GTM, GA4 a reklamných účtov a kontakt na človeka, ktorý vie upraviť web alebo e-shop.',
      },
    ],
  },
  {
    slug: 'platene-kampane',
    name: 'Platené kampane',
    short: 'Meta a Google Ads, ktoré sa riadia podľa zisku, nie podľa preklikov.',
    tag: 'KAMPANE',
    today: 'Reklama beží a nikto nevie povedať, či sa vracia.',
    after: 'Každý mesiac viete, koľko ste minuli a čo ste za to dostali.',
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
      {
        q: 'Kedy uvidíme výsledky?',
        a: 'Prvé dáta prídu v priebehu dní. Na rozhodnutia treba počkať, kým sa nazbiera dosť konverzií. Pred spustením si povieme, aký je cieľ a kedy ho vyhodnotíme.',
      },
      {
        q: 'Komu patria reklamné účty?',
        a: 'Vám. Kampane bežia vo vašich účtoch a keď spolupráca skončí, všetko zostáva u vás.',
      },
      {
        q: 'Potrebujeme mať najprv meranie?',
        a: 'Aspoň základ áno. Bez neho sa nedá povedať, čo zarába. Ak chýba, začneme ním.',
      },
    ],
  },
  {
    slug: 'marketingova-automatizacia',
    name: 'Marketingová automatizácia',
    short: 'Správa v pravý čas pravému človeku, bez ručného posielania.',
    tag: 'AUTOMATIZÁCIA',
    today: 'Všetkým chodí ten istý newsletter.',
    after: 'Správa príde vtedy, keď ju človek čaká, a nikto ju neposiela ručne.',
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
        a: 'Pracujeme s tým, čo už máte, ak to stačí. Skúsenosti máme s HubSpotom, Bloomreachom aj ActiveCampaign. Nový nástroj odporučíme až vtedy, keď ten súčasný brzdí to, čo potrebujete.',
      },
      {
        q: 'Koľko kontaktov treba mať, aby sa to oplatilo?',
        a: 'Základné scenáre ako uvítanie a opustený košík sa oplatia aj pri pár stovkách kontaktov. Zložitejšia personalizácia má zmysel až pri väčšej databáze.',
      },
      {
        q: 'Čím začať?',
        a: 'Scenármi, ktoré sú najbližšie k nákupu: uvítanie, opustený košík a starostlivosť po nákupe. Tie sa vrátia najskôr.',
      },
      {
        q: 'Ako spoznáme, že automatizácia funguje?',
        a: 'Každý scenár má vopred určené číslo, podľa ktorého ho hodnotíme, napríklad podiel dokončených objednávok alebo opakovaných nákupov. Čo nezaberá, upravíme alebo vypneme.',
      },
      {
        q: 'Nebudú automatické správy pôsobiť ako spam?',
        a: 'Nie, ak vychádzajú z toho, čo človek naozaj urobil, a prídu v správnom čase. Súčasťou návrhu sú aj pravidlá, kedy správu neposlať.',
      },
    ],
  },
  {
    slug: 'omnichannel',
    name: 'Omnichannel',
    short: 'E-mail, SMS, reklama a obchodník ako jedna súvislá komunikácia.',
    tag: 'OMNICHANNEL',
    today: 'E-mail, SMS a obchodník idú každý po svojom.',
    after: 'Zákazník počuje jednu nadväzujúcu komunikáciu, nech sa ozve ktokoľvek.',
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
      {
        q: 'Čím sa to líši od marketingovej automatizácie?',
        a: 'Automatizácia rieši, čo pošle systém sám. Omnichannel rieši, aby na seba nadväzovali všetky kanály vrátane ľudí: obchodníka, podpory aj reklamy.',
      },
      {
        q: 'Aké nástroje na to potrebujeme?',
        a: 'Väčšinou stačí to, čo už máte: nástroj na e-maily, reklamné účty a CRM. Dôležité je, aby si medzi sebou vymieňali dáta.',
      },
      {
        q: 'Kde začať?',
        a: 'Pri jednom momente, kde nesúlad zákazník cíti najviac. Typicky je to chvíľa po nákupe alebo po dopyte.',
      },
    ],
  },
  {
    slug: 'automatizacia-procesov',
    name: 'Automatizácia procesov',
    short: 'Opakovanú ručnú prácu prenechajte systému.',
    tag: 'PROCESY',
    today: 'Ľudia prepisujú údaje z jedného systému do druhého.',
    after: 'Systémy si údaje posielajú samy a tím robí prácu, na ktorú treba hlavu.',
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
      {
        q: 'Ako zistíte, čo sa oplatí automatizovať?',
        a: 'Spočítame, koľko času krok zaberá, ako často sa opakuje a čo stojí chyba. Podľa toho zoradíme, čím začať a čo nechať tak.',
      },
      {
        q: 'Čo ak sa proces časom zmení?',
        a: 'Automatizácie staviame tak, aby ich vedel upraviť aj niekto z vášho tímu, a odovzdávame ich s krátkym návodom.',
      },
      {
        q: 'Týka sa to len marketingu?',
        a: 'Nie. Najčastejšie ide o reporty, ponuky, faktúry a prenos údajov medzi systémami.',
      },
    ],
  },
  {
    slug: 'ai',
    name: 'AI v praxi',
    short: 'AI zapojená do každodennej práce tak, aby šetrila hodiny.',
    tag: 'AI',
    today: 'AI skúša každý sám a výsledky sa nedajú porovnať.',
    after: 'Tím má postupy, ktoré mu každý týždeň ušetria hodiny.',
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
      {
        q: 'Nahradí AI ľudí v tíme?',
        a: 'O to nejde. Cieľom je, aby ľudia trávili menej času rutinou a viac prácou, na ktorú treba úsudok.',
      },
      {
        q: 'Aké AI nástroje používate?',
        a: 'Vyberáme podľa úlohy a podľa toho, čo už vo firme máte. Nástroj je až druhý krok. Prvý je vedieť, ktorú prácu má uľahčiť.',
      },
      {
        q: 'Ako zmeriame, že sa to oplatilo?',
        a: 'Pri každej úlohe si vopred zapíšeme, koľko času zaberá dnes. Po zavedení to zmeriame znova.',
      },
    ],
  },
  {
    slug: 'brand',
    name: 'Brand',
    short: 'Vizuálna identita a pravidlá, podľa ktorých značka drží pokope.',
    tag: 'BRAND',
    today: 'Značka vyzerá inak na webe, v reklame a na faktúre.',
    after: 'Jedny pravidlá, podľa ktorých vás ľudia spoznajú všade.',
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
      {
        q: 'Logo už máme. Treba ho meniť?',
        a: 'Nie nutne. Ak funguje, necháme ho a doplníme pravidlá okolo neho: farby, písmo a príklady použitia.',
      },
      {
        q: 'Potrebuje malá firma dizajn manuál?',
        a: 'Stačí krátky. Aj pár strán ušetrí čas pri každom letáku, príspevku či ponuke a značka prestane vyzerať zakaždým inak.',
      },
      {
        q: 'Viete na brand nadviazať webom?',
        a: 'Áno. Keď robíme oboje, web vychádza z tých istých pravidiel a netreba nič prekladať medzi dodávateľmi.',
      },
    ],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
