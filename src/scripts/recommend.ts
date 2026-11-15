import { problems, roles, partnerRole, type Role } from '../data/mixer';

export type Recommendation = { role: Role; services: string[] };

// Z označených problémov vyberie rolu a zoradí služby podľa toho, ako veľmi sa ich výber týka.
export function recommend(ids: string[]): Recommendation | null {
  const weight = new Map<string, number>();
  for (const p of problems) {
    if (!ids.includes(p.id)) continue;
    p.services.forEach((slug, i) => weight.set(slug, (weight.get(slug) ?? 0) + (i === 0 ? 2 : 1)));
  }
  if (weight.size === 0) return null;

  const scored = roles
    .map((role) => ({ role, score: role.services.reduce((n, s) => n + (weight.get(s) ?? 0), 0) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const role = scored.length >= 3 ? partnerRole : scored[0].role;
  const ordered = [...weight.entries()].sort((a, b) => b[1] - a[1]).map(([slug]) => slug);
  return { role, services: ordered };
}
