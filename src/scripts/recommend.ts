import { problems, roles, wideRoles, type Role } from '../data/mixer';

export type Recommendation = { role: Role; services: string[] };

// Z označených problémov vyberie rolu a zoradí služby podľa toho, ako veľmi sa ich výber týka.
export function recommend(ids: string[]): Recommendation | null {
  const picked = problems.filter((p) => ids.includes(p.id));
  if (picked.length === 0) return null;

  const weight = new Map<string, number>();
  for (const p of picked) {
    p.services.forEach((slug, i) => weight.set(slug, (weight.get(slug) ?? 0) + (i === 0 ? 2 : 1)));
  }
  const selected = new Set(weight.keys());
  const ordered = [...weight.entries()].sort((a, b) => b[1] - a[1]).map(([slug]) => slug);
  const forced = picked.map((p) => p.role).filter(Boolean) as string[];

  // Stratégia má prednosť; široký výber (štyri a viac služieb) je tiež práca pre stratéga.
  if (forced.includes('strateg') || selected.size >= 4) return { role: wideRoles.strateg, services: ordered };
  if (selected.size === 0) return { role: wideRoles[forced[0]] ?? wideRoles.konzultant, services: ordered };

  // Najlepšia zhoda sady služieb (Jaccardov index); pri rovnosti vyhráva užšia rola.
  let best: Role | null = null;
  let bestScore = 0;
  for (const role of roles) {
    const hit = role.services.filter((s) => selected.has(s)).length;
    const score = hit / (role.services.length + selected.size - hit);
    if (score > bestScore) {
      best = role;
      bestScore = score;
    }
  }
  // Slabá zhoda (napr. dve nesúvisiace oblasti) je skôr na konzultáciu než na jednu rolu.
  const weak = bestScore < 0.5 || (selected.size > 1 && bestScore <= 0.5);
  if (!best || weak || forced.includes('konzultant')) {
    return { role: wideRoles.konzultant, services: ordered };
  }
  return { role: best, services: ordered };
}
