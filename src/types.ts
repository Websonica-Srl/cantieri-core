// Tipi condivisi cantieri/soggetti (allineati alle view pubbliche del DB).

/** Riga ritornata da get_cantieri_by_sector / view cantieri_pubblici (sola lettura, colonne safe). */
export interface Cantiere {
  id: string;
  slug: string | null;
  protocollo: string | null;
  tipo_titolo: string | null;
  data_pubblicazione: string | null;
  comune: string | null;
  provincia: string | null;
  regione: string | null;
  descrizione: string | null;
  importo_lavori: number | null;
  superficie_mq: number | null;
  categorie: string[] | null;
  total_count?: number;
}

/** Soggetto del cantiere ESPOSTO al pubblico (view cantieri_soggetti_public).
 *  NB: niente partita_iva / codice_fiscale / contatti. committente_PF e da_classificare esclusi a monte. */
export interface CantiereSoggettoPublic {
  id: string;
  cantiere_id: string;
  ruolo: string;
  ragione_sociale_raw: string | null;
  iscrizione_albo: string | null;
  firm_id: string | null;
  profile_id: string | null;
  soggetto_tipo: string;
}

export type SoggettoTipo =
  | 'PG_capitali'
  | 'ditta_individuale'
  | 'PF_professionista'
  | 'committente_PG'
  | 'committente_PF'
  | 'PA'
  | 'da_classificare';

/** Filtri lato UI per la ricerca cantieri di un satellite. */
export interface CantieriFilters {
  sectorIds: number[];
  categoria?: string;
  tipoTitolo?: string;
  regione?: string;
  provincia?: string; // sigla
  comune?: string;
  q?: string;
  minConf?: number;
  limit?: number;
  offset?: number;
}

/** Bando/gara d'appalto pubblica (allineato a bandi_gara_public). */
export interface Bando {
  id: string;
  slug: string | null;
  cig: string | null;
  cup: string | null;
  oggetto: string | null;
  tipo_procedura: string | null;
  importo_base: number | null;
  importo_aggiudicazione: number | null;
  data_pubblicazione: string | null;
  scadenza_offerte: string | null;
  data_aggiudicazione: string | null;
  stato: string | null;
  stazione_appaltante: string | null;
  comune: string | null;
  provincia: string | null;
  regione: string | null;
  cpv_principale: string | null;
  cpv_codes: string[] | null;
  categorie: string[] | null;
  total_count?: number;
}

/** Gara vinta da un'azienda (get_gare_vinte_by_firm). */
export interface GaraVinta {
  bando_id: string;
  slug: string | null;
  oggetto: string | null;
  stazione_appaltante: string | null;
  comune: string | null;
  provincia: string | null;
  regione: string | null;
  importo_aggiudicazione: number | null;
  data_aggiudicazione: string | null;
  ruolo_rti: string;
  total_count?: number;
}

/** Filtri UI per la ricerca bandi di un satellite/hub. */
export interface BandiFilters {
  sectorIds: number[];
  categoria?: string;
  procedura?: string;
  stato?: string;
  regione?: string;
  provincia?: string;
  comune?: string;
  importoMin?: number;
  importoMax?: number;
  scadDa?: string;
  scadA?: string;
  q?: string;
  limit?: number;
  offset?: number;
}
