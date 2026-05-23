export interface Provincia {
    sigla: string;
    nome: string;
    regione: string;
}
export declare const PROVINCE: Provincia[];
/** Risolve un input (sigla o nome provincia) a una Provincia, o null. */
export declare function resolveProvincia(input: string | null | undefined): Provincia | null;
/** Normalizza un valore "provincia" (sporco) a SIGLA. Se non riconosciuto, ritorna l'input invariato. */
export declare function normalizeProvinciaValue(input: string | null | undefined): string;
/** Tutte le province di una regione (per dropdown gerarchici). */
export declare function provinceOfRegione(regione: string): Provincia[];
/** true se la stringa è una sigla provincia valida. */
export declare function isSigla(input: string | null | undefined): boolean;
