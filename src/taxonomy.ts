// Tassonomia categorie cantiere -> label leggibili + quali mostrare per settore satellite.
// Le chiavi sono gli slug usati in cantieri.categorie e in categoria_sector_map.

export const CATEGORIA_LABELS: Record<string, string> = {
  infissi: 'Sostituzione infissi e serramenti',
  facciate: 'Facciate e cappotto termico',
  sicurezza: 'Sicurezza e porte blindate',
  piscine: 'Realizzazione piscine',
  wellness: 'SPA, sauna e wellness',
  ristrutturazione_bagno: 'Ristrutturazione bagno',
  ristrutturazione: 'Ristrutturazione edilizia',
  nuova_costruzione: 'Nuova costruzione',
  ampliamento: 'Ampliamento',
  impianti_elettrici: 'Impianti elettrici',
  impianti_termoidraulici: 'Impianti termoidraulici',
  carpenteria_metallica: 'Carpenteria metallica',
  pareti_interne: 'Pareti e divisori interni',
  pavimenti: 'Pavimenti',
  tetti: 'Coperture e tetti',
  demolizione: 'Demolizione',
  opera_pubblica: 'Opera pubblica',
  generico_edilizia: 'Intervento edilizio generico',
};

// Categorie da mostrare come chip-filtro su un dato settore satellite.
// (Coerente con categoria_sector_map; per il settore 1 si mostrano solo le top per non saturare la UI.)
export const SECTOR_FILTER_CATEGORIE: Record<number, string[]> = {
  1: ['ristrutturazione', 'nuova_costruzione', 'ampliamento', 'impianti_termoidraulici'],
  2: ['infissi', 'facciate'],
  3: ['sicurezza'],
  4: ['piscine', 'wellness'],
  5: ['wellness'],
  11: ['ristrutturazione_bagno'],
};

export const TIPO_TITOLO_LABELS: Record<string, string> = {
  PDC: 'Permesso di Costruire',
  SCIA: 'SCIA',
  CILA: 'CILA',
  DIA: 'DIA',
  PAS: 'PAS',
  SANATORIA: 'Sanatoria',
  ALTRO: 'Altro titolo',
};

/** Label leggibile di una categoria; se sconosciuta, "prettifica" lo slug. */
export function categoriaLabel(slug: string): string {
  return CATEGORIA_LABELS[slug] ?? slug.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Label leggibile del tipo titolo. */
export function tipoTitoloLabel(tipo: string): string {
  return TIPO_TITOLO_LABELS[tipo?.toUpperCase()] ?? tipo;
}
