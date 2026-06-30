export type InterventoCategoria = 'nuova_costruzione' | 'demo_ricostruzione' | 'ampliamento' | 'ristrutturazione' | 'manutenzione_straordinaria' | 'frazionamento' | 'accorpamento' | 'cambio_destinazione' | 'opere_esterne' | 'altro';
export type DestinazioneUso = 'residenziale' | 'commerciale' | 'direzionale' | 'produttivo' | 'ricettivo' | 'agricolo' | 'pubblico' | 'misto' | 'altro';
export type Scala = 'puntuale' | 'medio' | 'grande';
export type PosizioneUrbana = 'centro_storico' | 'semicentro' | 'periferia' | 'extraurbano' | 'sconosciuta';
export type TipologiaEdilizia = 'casa_singola' | 'villetta' | 'villa_pregio' | 'palazzina' | 'condominio' | 'attico' | 'casa_legno_prefabbricato' | 'capannone' | 'rustico_casale' | 'altro';
export type SegnaleTipo = 'pdc_nuova_costruzione' | 'scia_ristrutturazione' | 'cila_minore' | 'cosap_avvio_cantiere' | 'variante_in_corso' | 'appalto_pubblicato' | 'appalto_aggiudicato' | 'altro';
export type ValoreMetodo = 'dichiarato_atto' | 'da_importo_bando' | 'stima_formula' | 'non_stimabile';
export type TipoTitolo = 'PDC' | 'SCIA' | 'CILA' | 'PAS' | 'DIA' | 'AUA' | 'CONCESSIONE' | 'OPERA_PUBBLICA' | 'ALTRO';
export type Mestiere = 'edili_generali' | 'demolizioni' | 'movimento_terra' | 'fondazioni_strutture' | 'carpenteria_metallica' | 'impermeabilizzazioni' | 'isolamento_cappotto' | 'lattoneria_coperture' | 'facciate_rivestimenti' | 'serramenti' | 'cartongesso_controsoffitti' | 'pavimenti_rivestimenti' | 'pitture_decorazioni' | 'impianti_termoidraulici' | 'impianti_climatizzazione' | 'impianti_elettrici' | 'fotovoltaico_rinnovabili' | 'ascensori_elevatori' | 'antincendio' | 'domotica_sicurezza' | 'piscine' | 'spa_wellness' | 'ristrutturazione_bagno' | 'arredo_interni' | 'verde_giardini' | 'ponteggi_noleggio' | 'bonifiche_smaltimento' | 'fornitori_materiali' | 'general_contractor';
/** Forma del campo jsonb cantieri.scheda. valore_*, superficie_mq, unita_abitative
 *  vivono come COLONNE separate (non qui), tranne i duplicati legacy in scheda. */
export interface Scheda {
    is_cantiere_reale: boolean;
    intervento_categoria: InterventoCategoria;
    destinazione_uso: DestinazioneUso;
    destinazione_uso_origine?: string | null;
    scala: Scala;
    posizione_urbana: PosizioneUrbana;
    segnale_tipo: SegnaleTipo;
    segnale_forza: number;
    confidence: number;
    mestieri: Mestiere[];
    tipologia_edilizia?: TipologiaEdilizia | null;
    unita_abitative?: number | null;
    superficie_mq?: number | null;
    indirizzo_norm?: string | null;
    civico_norm?: string | null;
    frasi_sorgente?: Array<Record<string, string>>;
}
export interface EnumMeta {
    label: string;
    icon: string;
    color: string;
    slug: string;
}
export interface InterventoMeta extends EnumMeta {
    hasPillar: boolean;
}
export declare const INTERVENTI: InterventoCategoria[];
export declare const INTERVENTO_META: Record<InterventoCategoria, InterventoMeta>;
export declare const DESTINAZIONE_META: Record<DestinazioneUso, EnumMeta>;
export declare const SCALA_META: Record<Scala, EnumMeta>;
export declare const TIPOLOGIA_META: Record<TipologiaEdilizia, EnumMeta>;
export declare const POSIZIONE_META: Record<PosizioneUrbana, EnumMeta>;
export declare const SEGNALE_META: Record<SegnaleTipo, EnumMeta>;
export declare const VALORE_METODO_LABELS: Record<ValoreMetodo, string>;
export declare const TITOLO_LABELS: Record<TipoTitolo, string>;
/** Titolo edilizio → slug del pillar-guida normativa (null se non c'è guida). */
export declare const TITOLO_GUIDA_SLUG: Record<TipoTitolo, string | null>;
export declare const MESTIERI: Mestiere[];
export declare const MESTIERE_LABELS: Record<Mestiere, string>;
