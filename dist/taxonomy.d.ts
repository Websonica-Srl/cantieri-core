export declare const CATEGORIA_LABELS: Record<string, string>;
export declare const SECTOR_FILTER_CATEGORIE: Record<number, string[]>;
export declare const TIPO_TITOLO_LABELS: Record<string, string>;
/** Label leggibile di una categoria; se sconosciuta, "prettifica" lo slug. */
export declare function categoriaLabel(slug: string): string;
/** Label leggibile del tipo titolo. */
export declare function tipoTitoloLabel(tipo: string): string;
