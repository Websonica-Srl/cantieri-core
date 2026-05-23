// Tassonomia bandi/gare d'appalto — label leggibili per procedura, stato, gruppi CPV.

// bando_procedura_enum -> label
export const PROCEDURA_LABELS: Record<string, string> = {
  aperta: 'Procedura aperta',
  ristretta: 'Procedura ristretta',
  negoziata_con_pubblicazione: 'Negoziata con pubblicazione',
  negoziata_senza_pubblicazione: 'Negoziata senza pubblicazione',
  dialogo_competitivo: 'Dialogo competitivo',
  accordo_quadro: 'Accordo quadro',
  concessione: 'Concessione',
  altro: 'Altra procedura',
};

// bando_stato_enum -> label
export const BANDO_STATO_LABELS: Record<string, string> = {
  aperto: 'Aperto',
  in_valutazione: 'In valutazione',
  aggiudicato: 'Aggiudicato',
  revocato: 'Revocato',
  deserto: 'Deserto',
  scaduto_no_aggiud: 'Scaduto senza aggiudicazione',
};

// Gruppi CPV (prefisso) -> label leggibile (per chip-filtro e breadcrumb SEO).
export const CPV_GROUP_LABELS: Record<string, string> = {
  '45': 'Lavori di costruzione',
  '71': 'Servizi di architettura e ingegneria',
  '45421': 'Serramenti e infissi',
  '45310': 'Impianti elettrici',
  '45330': 'Impianti idraulici',
  '45331': 'Impianti di riscaldamento/climatizzazione',
  '45212212': 'Piscine',
  '45212': 'Impianti sportivi e ricreativi',
  '45454': 'Ristrutturazione',
  '44': 'Materiali e prodotti per costruzione',
};

export function proceduraLabel(p: string | null | undefined): string {
  if (!p) return '';
  return PROCEDURA_LABELS[p] ?? p.replace(/_/g, ' ');
}

export function statoBandoLabel(s: string | null | undefined): string {
  if (!s) return '';
  return BANDO_STATO_LABELS[s] ?? s;
}

/** Label del gruppo CPV: prende il prefisso più lungo che combacia. */
export function cpvGroupLabel(cpv: string | null | undefined): string {
  if (!cpv) return '';
  const code = cpv.replace(/[^0-9]/g, '');
  const prefixes = Object.keys(CPV_GROUP_LABELS).sort((a, b) => b.length - a.length);
  for (const p of prefixes) if (code.startsWith(p)) return CPV_GROUP_LABELS[p];
  return cpv;
}
