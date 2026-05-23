// Geografia province italiane — sorgente unica per tutto il network.
// Permette: ricerca per nome provincia (es. "torino" -> TO), normalizzazione dati sporchi
// (es. firms.province con nomi estesi -> sigla), filtri gerarchici regione->province.

export interface Provincia {
  sigla: string; // 2 lettere maiuscole, es. "TO"
  nome: string; // nome ufficiale, es. "Torino"
  regione: string; // es. "Piemonte"
}

export const PROVINCE: Provincia[] = [
  // Piemonte
  { sigla: 'TO', nome: 'Torino', regione: 'Piemonte' },
  { sigla: 'VC', nome: 'Vercelli', regione: 'Piemonte' },
  { sigla: 'NO', nome: 'Novara', regione: 'Piemonte' },
  { sigla: 'CN', nome: 'Cuneo', regione: 'Piemonte' },
  { sigla: 'AT', nome: 'Asti', regione: 'Piemonte' },
  { sigla: 'AL', nome: 'Alessandria', regione: 'Piemonte' },
  { sigla: 'BI', nome: 'Biella', regione: 'Piemonte' },
  { sigla: 'VB', nome: 'Verbano-Cusio-Ossola', regione: 'Piemonte' },
  // Valle d'Aosta
  { sigla: 'AO', nome: "Aosta", regione: "Valle d'Aosta" },
  // Lombardia
  { sigla: 'VA', nome: 'Varese', regione: 'Lombardia' },
  { sigla: 'CO', nome: 'Como', regione: 'Lombardia' },
  { sigla: 'SO', nome: 'Sondrio', regione: 'Lombardia' },
  { sigla: 'MI', nome: 'Milano', regione: 'Lombardia' },
  { sigla: 'BG', nome: 'Bergamo', regione: 'Lombardia' },
  { sigla: 'BS', nome: 'Brescia', regione: 'Lombardia' },
  { sigla: 'PV', nome: 'Pavia', regione: 'Lombardia' },
  { sigla: 'CR', nome: 'Cremona', regione: 'Lombardia' },
  { sigla: 'MN', nome: 'Mantova', regione: 'Lombardia' },
  { sigla: 'LC', nome: 'Lecco', regione: 'Lombardia' },
  { sigla: 'LO', nome: 'Lodi', regione: 'Lombardia' },
  { sigla: 'MB', nome: 'Monza e della Brianza', regione: 'Lombardia' },
  // Trentino-Alto Adige
  { sigla: 'BZ', nome: 'Bolzano', regione: 'Trentino-Alto Adige' },
  { sigla: 'TN', nome: 'Trento', regione: 'Trentino-Alto Adige' },
  // Veneto
  { sigla: 'VR', nome: 'Verona', regione: 'Veneto' },
  { sigla: 'VI', nome: 'Vicenza', regione: 'Veneto' },
  { sigla: 'BL', nome: 'Belluno', regione: 'Veneto' },
  { sigla: 'TV', nome: 'Treviso', regione: 'Veneto' },
  { sigla: 'VE', nome: 'Venezia', regione: 'Veneto' },
  { sigla: 'PD', nome: 'Padova', regione: 'Veneto' },
  { sigla: 'RO', nome: 'Rovigo', regione: 'Veneto' },
  // Friuli-Venezia Giulia
  { sigla: 'UD', nome: 'Udine', regione: 'Friuli-Venezia Giulia' },
  { sigla: 'GO', nome: 'Gorizia', regione: 'Friuli-Venezia Giulia' },
  { sigla: 'TS', nome: 'Trieste', regione: 'Friuli-Venezia Giulia' },
  { sigla: 'PN', nome: 'Pordenone', regione: 'Friuli-Venezia Giulia' },
  // Liguria
  { sigla: 'IM', nome: 'Imperia', regione: 'Liguria' },
  { sigla: 'SV', nome: 'Savona', regione: 'Liguria' },
  { sigla: 'GE', nome: 'Genova', regione: 'Liguria' },
  { sigla: 'SP', nome: 'La Spezia', regione: 'Liguria' },
  // Emilia-Romagna
  { sigla: 'PC', nome: 'Piacenza', regione: 'Emilia-Romagna' },
  { sigla: 'PR', nome: 'Parma', regione: 'Emilia-Romagna' },
  { sigla: 'RE', nome: 'Reggio Emilia', regione: 'Emilia-Romagna' },
  { sigla: 'MO', nome: 'Modena', regione: 'Emilia-Romagna' },
  { sigla: 'BO', nome: 'Bologna', regione: 'Emilia-Romagna' },
  { sigla: 'FE', nome: 'Ferrara', regione: 'Emilia-Romagna' },
  { sigla: 'RA', nome: 'Ravenna', regione: 'Emilia-Romagna' },
  { sigla: 'FC', nome: 'Forlì-Cesena', regione: 'Emilia-Romagna' },
  { sigla: 'RN', nome: 'Rimini', regione: 'Emilia-Romagna' },
  // Toscana
  { sigla: 'MS', nome: 'Massa-Carrara', regione: 'Toscana' },
  { sigla: 'LU', nome: 'Lucca', regione: 'Toscana' },
  { sigla: 'PT', nome: 'Pistoia', regione: 'Toscana' },
  { sigla: 'FI', nome: 'Firenze', regione: 'Toscana' },
  { sigla: 'PO', nome: 'Prato', regione: 'Toscana' },
  { sigla: 'LI', nome: 'Livorno', regione: 'Toscana' },
  { sigla: 'PI', nome: 'Pisa', regione: 'Toscana' },
  { sigla: 'AR', nome: 'Arezzo', regione: 'Toscana' },
  { sigla: 'SI', nome: 'Siena', regione: 'Toscana' },
  { sigla: 'GR', nome: 'Grosseto', regione: 'Toscana' },
  // Umbria
  { sigla: 'PG', nome: 'Perugia', regione: 'Umbria' },
  { sigla: 'TR', nome: 'Terni', regione: 'Umbria' },
  // Marche
  { sigla: 'PU', nome: 'Pesaro e Urbino', regione: 'Marche' },
  { sigla: 'AN', nome: 'Ancona', regione: 'Marche' },
  { sigla: 'MC', nome: 'Macerata', regione: 'Marche' },
  { sigla: 'FM', nome: 'Fermo', regione: 'Marche' },
  { sigla: 'AP', nome: 'Ascoli Piceno', regione: 'Marche' },
  // Lazio
  { sigla: 'VT', nome: 'Viterbo', regione: 'Lazio' },
  { sigla: 'RI', nome: 'Rieti', regione: 'Lazio' },
  { sigla: 'RM', nome: 'Roma', regione: 'Lazio' },
  { sigla: 'LT', nome: 'Latina', regione: 'Lazio' },
  { sigla: 'FR', nome: 'Frosinone', regione: 'Lazio' },
  // Abruzzo
  { sigla: 'AQ', nome: "L'Aquila", regione: 'Abruzzo' },
  { sigla: 'TE', nome: 'Teramo', regione: 'Abruzzo' },
  { sigla: 'PE', nome: 'Pescara', regione: 'Abruzzo' },
  { sigla: 'CH', nome: 'Chieti', regione: 'Abruzzo' },
  // Molise
  { sigla: 'CB', nome: 'Campobasso', regione: 'Molise' },
  { sigla: 'IS', nome: 'Isernia', regione: 'Molise' },
  // Campania
  { sigla: 'CE', nome: 'Caserta', regione: 'Campania' },
  { sigla: 'BN', nome: 'Benevento', regione: 'Campania' },
  { sigla: 'NA', nome: 'Napoli', regione: 'Campania' },
  { sigla: 'AV', nome: 'Avellino', regione: 'Campania' },
  { sigla: 'SA', nome: 'Salerno', regione: 'Campania' },
  // Puglia
  { sigla: 'FG', nome: 'Foggia', regione: 'Puglia' },
  { sigla: 'BA', nome: 'Bari', regione: 'Puglia' },
  { sigla: 'TA', nome: 'Taranto', regione: 'Puglia' },
  { sigla: 'BR', nome: 'Brindisi', regione: 'Puglia' },
  { sigla: 'LE', nome: 'Lecce', regione: 'Puglia' },
  { sigla: 'BT', nome: 'Barletta-Andria-Trani', regione: 'Puglia' },
  // Basilicata
  { sigla: 'PZ', nome: 'Potenza', regione: 'Basilicata' },
  { sigla: 'MT', nome: 'Matera', regione: 'Basilicata' },
  // Calabria
  { sigla: 'CS', nome: 'Cosenza', regione: 'Calabria' },
  { sigla: 'KR', nome: 'Crotone', regione: 'Calabria' },
  { sigla: 'CZ', nome: 'Catanzaro', regione: 'Calabria' },
  { sigla: 'VV', nome: 'Vibo Valentia', regione: 'Calabria' },
  { sigla: 'RC', nome: 'Reggio Calabria', regione: 'Calabria' },
  // Sicilia
  { sigla: 'TP', nome: 'Trapani', regione: 'Sicilia' },
  { sigla: 'PA', nome: 'Palermo', regione: 'Sicilia' },
  { sigla: 'ME', nome: 'Messina', regione: 'Sicilia' },
  { sigla: 'AG', nome: 'Agrigento', regione: 'Sicilia' },
  { sigla: 'CL', nome: 'Caltanissetta', regione: 'Sicilia' },
  { sigla: 'EN', nome: 'Enna', regione: 'Sicilia' },
  { sigla: 'CT', nome: 'Catania', regione: 'Sicilia' },
  { sigla: 'RG', nome: 'Ragusa', regione: 'Sicilia' },
  { sigla: 'SR', nome: 'Siracusa', regione: 'Sicilia' },
  // Sardegna
  { sigla: 'SS', nome: 'Sassari', regione: 'Sardegna' },
  { sigla: 'NU', nome: 'Nuoro', regione: 'Sardegna' },
  { sigla: 'OR', nome: 'Oristano', regione: 'Sardegna' },
  { sigla: 'CA', nome: 'Cagliari', regione: 'Sardegna' },
  { sigla: 'SU', nome: 'Sud Sardegna', regione: 'Sardegna' },
];

/** Normalizza per il matching: minuscolo, senza accenti, dash/slash/apostrofo -> spazio, spazi singoli. */
function norm(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // accenti
    .toLowerCase()
    .replace(/['`\-\/.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const BY_SIGLA = new Map<string, Provincia>(PROVINCE.map((p) => [p.sigla, p]));
const BY_NAME = new Map<string, Provincia>();
for (const p of PROVINCE) BY_NAME.set(norm(p.nome), p);
// alias/varianti comuni
const ALIASES: Record<string, string> = {
  'monza e brianza': 'MB',
  'monza brianza': 'MB',
  'reggio nell emilia': 'RE',
  'reggio di calabria': 'RC',
  'forli cesena': 'FC',
  'aosta valle': 'AO',
  "valle d aosta": 'AO',
};
for (const [alias, sigla] of Object.entries(ALIASES)) {
  const p = BY_SIGLA.get(sigla);
  if (p) BY_NAME.set(norm(alias), p);
}

/** Risolve un input (sigla o nome provincia) a una Provincia, o null. */
export function resolveProvincia(input: string | null | undefined): Provincia | null {
  if (!input) return null;
  const raw = input.trim();
  if (/^[A-Za-z]{2}$/.test(raw)) {
    const bySigla = BY_SIGLA.get(raw.toUpperCase());
    if (bySigla) return bySigla;
  }
  return BY_NAME.get(norm(raw)) ?? null;
}

/** Normalizza un valore "provincia" (sporco) a SIGLA. Se non riconosciuto, ritorna l'input invariato. */
export function normalizeProvinciaValue(input: string | null | undefined): string {
  if (!input) return '';
  const p = resolveProvincia(input);
  return p ? p.sigla : input.trim();
}

/** Tutte le province di una regione (per dropdown gerarchici). */
export function provinceOfRegione(regione: string): Provincia[] {
  const target = norm(regione);
  return PROVINCE.filter((p) => norm(p.regione) === target);
}

/** true se la stringa è una sigla provincia valida. */
export function isSigla(input: string | null | undefined): boolean {
  return !!input && /^[A-Za-z]{2}$/.test(input.trim()) && BY_SIGLA.has(input.trim().toUpperCase());
}
