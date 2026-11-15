import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://thetittels.sk',
  trailingSlash: 'always',
  adapter: vercel(),
  devToolbar: { enabled: false },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/ochrana-sukromia/') && !page.includes('/dakujem/') }),
  ],
});
