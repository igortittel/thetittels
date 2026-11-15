import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { services } from '../data/services';

// Prehľad webu pre AI asistentov (llms.txt).
export async function GET() {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} je značka manželov Tittelovcov. Služby vedie Igor Tittel, marketingový konzultant s viac ako dvanásťročnou praxou. Pracujú najmä pre malé a stredné firmy na Slovensku. Web je v slovenčine.`,
    '',
    '## Služby',
    ...services.map((s) => `- [${s.name}](${site.url}/sluzby/${s.slug}/): ${s.short}`),
    '',
    '## Blog',
    ...posts.map((p) => `- [${p.data.title}](${site.url}/blog/${p.id}/): ${p.data.description}`),
    '',
    '## Kontakt',
    `- [Mixér](${site.url}/mixer/): krátky dotazník, ktorý odporučí vhodnú službu`,
    `- [Kontakt](${site.url}/kontakt/): ${site.email}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
