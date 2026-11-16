// Referencie: s kým sme pracovali, čo sme postavili a aké nástroje poznáme.
export const clients = ['Billa', 'SPP', 'New Era Barbers', 'Ala Palla', 'Shantala Baby Spa', 'Supershape'];

// Bez `href` sa web zobrazí ako pripravovaný.
export const sites: { name: string; href?: string; note: string }[] = [
  { name: 'servisnyzaznam.sk', href: 'https://servisnyzaznam.sk', note: 'Web a vývoj' },
  { name: 'obvs.sk', note: 'Pred spustením' },
];

// `logo` je súbor v public/logos. Bloomreach a ActiveCampaign ho zatiaľ nemajú: stačí pridať SVG
// (oficiálne súbory sú v brand kite výrobcu) a doplniť cestu, bez neho sa zobrazí len názov.
export const tools: { name: string; logo?: string }[] = [
  { name: 'HubSpot', logo: '/logos/hubspot.svg' },
  { name: 'Bloomreach' },
  { name: 'Google Ads', logo: '/logos/google-ads.svg' },
  { name: 'Google Tag Manager', logo: '/logos/google-tag-manager.svg' },
  { name: 'Meta Ads', logo: '/logos/meta-ads.svg' },
  { name: 'Google Analytics 4', logo: '/logos/google-analytics-4.svg' },
  { name: 'ActiveCampaign' },
];
