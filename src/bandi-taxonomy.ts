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

/**
 * Label dei gruppi CPV a 2 cifre (38 divisioni). CPV_GROUP_LABELS sopra mappa
 * solo 44/45/71 (+ alcuni sotto-prefissi specifici), ma i bandi vengono spesso
 * raggruppati per le prime 2 cifre del codice CPV: qui copriamo le divisioni
 * restanti per label leggibili, filtri e pagine categoria.
 */
export const CPV_GROUP_LABELS_2D: Record<string, string> = {
  '03': 'Prodotti agricoli e forestali',
  '09': 'Prodotti petroliferi ed energia',
  '14': 'Prodotti delle miniere e cave',
  '15': 'Prodotti alimentari e bevande',
  '18': 'Indumenti e accessori',
  '22': 'Stampati e prodotti affini',
  '24': 'Prodotti chimici',
  '30': 'Macchine per ufficio e informatica',
  '31': 'Macchine e apparecchi elettrici',
  '32': 'Apparecchiature per radiotrasmissione e TLC',
  '33': 'Apparecchiature mediche e farmaceutiche',
  '34': 'Attrezzature di trasporto',
  '35': 'Attrezzature di sicurezza e difesa',
  '37': 'Strumenti musicali, articoli sportivi e giochi',
  '38': 'Apparecchiature di laboratorio e di precisione',
  '39': 'Mobili, arredi ed elettrodomestici',
  '42': 'Macchinari industriali',
  '48': 'Pacchetti software e sistemi informatici',
  '50': 'Servizi di riparazione e manutenzione',
  '51': 'Servizi di installazione',
  '55': 'Servizi alberghieri, di ristorazione e commercio',
  '60': 'Servizi di trasporto',
  '63': 'Servizi di supporto ai trasporti',
  '64': 'Servizi di poste e telecomunicazioni',
  '65': 'Servizi di pubblica utilità',
  '66': 'Servizi finanziari e assicurativi',
  '70': 'Servizi immobiliari',
  '72': 'Servizi informatici e affini',
  '73': 'Servizi di ricerca e sviluppo',
  '75': 'Servizi della pubblica amministrazione',
  '76': 'Servizi connessi al settore petrolifero',
  '77': 'Servizi agricoli, forestali e di giardinaggio',
  '79': 'Servizi alle imprese e gestionali',
  '80': 'Servizi di istruzione e formazione',
  '85': 'Servizi sanitari e di assistenza sociale',
  '90': 'Servizi ambientali e di smaltimento rifiuti',
  '92': 'Servizi ricreativi, culturali e sportivi',
  '98': 'Altri servizi di comunità, sociali e personali',
};

export function proceduraLabel(p: string | null | undefined): string {
  if (!p) return '';
  return PROCEDURA_LABELS[p] ?? p.replace(/_/g, ' ');
}

export function statoBandoLabel(s: string | null | undefined): string {
  if (!s) return '';
  return BANDO_STATO_LABELS[s] ?? s;
}

/** Estrae il gruppo CPV (prime 2 cifre) da un codice CPV. */
export function cpvGroup(cpv: string | null | undefined): string | null {
  if (!cpv) return null;
  const g = cpv.replace(/[^0-9]/g, '').slice(0, 2);
  return g.length === 2 ? g : null;
}

/**
 * Label del gruppo CPV: prende il prefisso più lungo che combacia in
 * CPV_GROUP_LABELS; in mancanza di match, cade sul dizionario a 2 cifre
 * (CPV_GROUP_LABELS_2D); altrimenti restituisce il codice in input.
 */
export function cpvGroupLabel(cpv: string | null | undefined): string {
  if (!cpv) return '';
  const code = cpv.replace(/[^0-9]/g, '');
  const prefixes = Object.keys(CPV_GROUP_LABELS).sort((a, b) => b.length - a.length);
  for (const p of prefixes) if (code.startsWith(p)) return CPV_GROUP_LABELS[p];
  const g = cpvGroup(cpv);
  if (g && CPV_GROUP_LABELS_2D[g]) return CPV_GROUP_LABELS_2D[g];
  return cpv;
}

/**
 * Slugify deterministico: minuscole, accenti rimossi (NFD), spazi → '-',
 * scarta ogni carattere non [a-z0-9-], collassa i trattini multipli.
 */
function slugify(label: string): string {
  return label
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // diacritici
    .toLowerCase()
    .replace(/&/g, ' e ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

/**
 * Slug parlante per gruppo CPV (2 cifre) → derivato dalle label leggibili.
 * Popolato per OGNI gruppo con label nota (package + dizionario 2D), così gli
 * URL sono parlanti per tutte le categorie navigabili.
 */
export const CPV_GROUP_SLUGS: Record<string, string> = {};
export const SLUG_TO_CPV_GROUP: Record<string, string> = {};

/** Gruppo CPV (2 cifre) → slug parlante. Fallback: il gruppo stesso. */
export function cpvGroupToSlug(group: string): string {
  return CPV_GROUP_SLUGS[group] || group;
}

/** Slug parlante → gruppo CPV (2 cifre), oppure null se non riconosciuto. */
export function slugToCpvGroup(slug: string): string | null {
  return SLUG_TO_CPV_GROUP[slug] || null;
}

/**
 * Popola CPV_GROUP_SLUGS / SLUG_TO_CPV_GROUP per TUTTI i gruppi a 2 cifre con
 * label nota (package + dizionario 2D). Eseguito una sola volta al load del
 * modulo. In caso di collisione di slug vince il primo gruppo.
 */
(() => {
  for (let n = 0; n <= 99; n++) {
    const group = String(n).padStart(2, '0');
    const label = cpvGroupLabel(group);
    // Scarta i gruppi senza label leggibile (label === codice grezzo).
    if (label === group) continue;
    const slug = slugify(label);
    if (!slug) continue;
    CPV_GROUP_SLUGS[group] = slug;
    if (!SLUG_TO_CPV_GROUP[slug]) SLUG_TO_CPV_GROUP[slug] = group;
  }
})();

/**
 * Descrizione editoriale estesa per la pagina hub di categoria (contenuto UNICO,
 * non duplica il dato grezzo CPV). Copy SEO del network.
 */
export const CPV_GROUP_EDITORIAL: Record<
  string,
  { intro: string; cosa: string; chiVince: string }
> = {
  '45': {
    intro:
      'La divisione CPV 45 raccoglie i lavori di costruzione: nuove opere, ristrutturazioni, manutenzioni straordinarie di edifici e infrastrutture pubbliche. È la categoria più consistente del mercato degli appalti edili in Italia.',
    cosa:
      'Comprende la costruzione di edifici civili e industriali, opere stradali e ponti, impianti tecnologici, opere di urbanizzazione e demolizioni. È la categoria di riferimento per imprese edili generali e specializzate qualificate SOA (categorie OG/OS).',
    chiVince:
      'Vincono tipicamente imprese di costruzione strutturate, spesso in raggruppamento temporaneo (RTI) per gli appalti di importo elevato. Il track record di gare aggiudicate è un indicatore chiave di affidabilità della stazione appaltante.',
  },
  '71': {
    intro:
      'La divisione CPV 71 raccoglie i servizi di architettura e ingegneria: progettazione, direzione lavori, collaudi, studi di fattibilità, indagini geologiche e servizi tecnici per la Pubblica Amministrazione.',
    cosa:
      'Include progettazione architettonica e strutturale, ingegneria civile e impiantistica, urbanistica, servizi di consulenza tecnica e supporto al RUP. È il terreno di gara di studi di progettazione, professionisti e società di ingegneria.',
    chiVince:
      'Si aggiudicano questi incarichi studi tecnici, società di ingegneria e raggruppamenti di professionisti. La capacità di vincere gare di progettazione è un segnale forte di solidità professionale di uno studio.',
  },
  '50': {
    intro:
      'La divisione CPV 50 raccoglie i servizi di riparazione e manutenzione: manutenzione di edifici, impianti, mezzi e attrezzature affidata dalla PA tramite appalto.',
    cosa:
      'Comprende manutenzione di impianti tecnologici, riparazione di immobili e infrastrutture, assistenza tecnica continuativa. Spesso bandita con contratti pluriennali a canone.',
    chiVince:
      'Vincono imprese di facility management e manutenzione specializzata, in grado di garantire continuità del servizio sul territorio.',
  },
  '90': {
    intro:
      'La divisione CPV 90 raccoglie i servizi ambientali: raccolta e smaltimento rifiuti, bonifiche, pulizia e igiene urbana affidati dalla PA.',
    cosa:
      'Include gestione rifiuti urbani, bonifica di siti contaminati, servizi di pulizia e disinfestazione, manutenzione del verde ambientale.',
    chiVince:
      'Si aggiudicano questi appalti imprese di igiene ambientale e multiutility, spesso con contratti di lungo periodo.',
  },
};
