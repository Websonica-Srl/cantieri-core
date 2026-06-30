import { type InterventoCategoria, type InterventoMeta, type Mestiere, type ValoreMetodo } from './scheda-vocab';
export declare function interventoMeta(k: InterventoCategoria): InterventoMeta;
export declare function interventoLabel(k: InterventoCategoria): string;
export declare function interventoBySlug(slug: string): InterventoCategoria | null;
export declare function mestiereLabel(m: Mestiere): string;
export declare function mestiereSlug(m: Mestiere): string;
export declare function mestiereBySlug(slug: string): Mestiere | null;
export declare function isMeaningful(value: string | null | undefined): boolean;
/** Label intervento per H1/titoli; null quando non significativo (consente "Cantiere a {comune}"). */
export declare function displayInterventoLabel(k: InterventoCategoria): string | null;
/** Range valore largo per la foglia pubblica. null se non stimabile o privo di dati. */
export declare function formatValoreRange(min: number | null | undefined, max: number | null | undefined, metodo: ValoreMetodo | null | undefined): string | null;
