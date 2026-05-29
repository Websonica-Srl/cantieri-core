export declare const PROCEDURA_LABELS: Record<string, string>;
export declare const BANDO_STATO_LABELS: Record<string, string>;
export declare const CPV_GROUP_LABELS: Record<string, string>;
/**
 * Label dei gruppi CPV a 2 cifre (38 divisioni). CPV_GROUP_LABELS sopra mappa
 * solo 44/45/71 (+ alcuni sotto-prefissi specifici), ma i bandi vengono spesso
 * raggruppati per le prime 2 cifre del codice CPV: qui copriamo le divisioni
 * restanti per label leggibili, filtri e pagine categoria.
 */
export declare const CPV_GROUP_LABELS_2D: Record<string, string>;
export declare function proceduraLabel(p: string | null | undefined): string;
export declare function statoBandoLabel(s: string | null | undefined): string;
/** Estrae il gruppo CPV (prime 2 cifre) da un codice CPV. */
export declare function cpvGroup(cpv: string | null | undefined): string | null;
/**
 * Label del gruppo CPV: prende il prefisso più lungo che combacia in
 * CPV_GROUP_LABELS; in mancanza di match, cade sul dizionario a 2 cifre
 * (CPV_GROUP_LABELS_2D); altrimenti restituisce il codice in input.
 */
export declare function cpvGroupLabel(cpv: string | null | undefined): string;
/**
 * Slug parlante per gruppo CPV (2 cifre) → derivato dalle label leggibili.
 * Popolato per OGNI gruppo con label nota (package + dizionario 2D), così gli
 * URL sono parlanti per tutte le categorie navigabili.
 */
export declare const CPV_GROUP_SLUGS: Record<string, string>;
export declare const SLUG_TO_CPV_GROUP: Record<string, string>;
/** Gruppo CPV (2 cifre) → slug parlante. Fallback: il gruppo stesso. */
export declare function cpvGroupToSlug(group: string): string;
/** Slug parlante → gruppo CPV (2 cifre), oppure null se non riconosciuto. */
export declare function slugToCpvGroup(slug: string): string | null;
/**
 * Descrizione editoriale estesa per la pagina hub di categoria (contenuto UNICO,
 * non duplica il dato grezzo CPV). Copy SEO del network.
 */
export declare const CPV_GROUP_EDITORIAL: Record<string, {
    intro: string;
    cosa: string;
    chiVince: string;
}>;
