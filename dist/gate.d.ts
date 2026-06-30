export declare const INVENTORY_THRESHOLD = 5;
export declare const MESTIERE_PROVINCIA_THRESHOLD = 3;
export declare const RESERVED_PREFIXES: string[];
export declare function isReservedPrefix(seg: string): boolean;
/** Replica TS del campo generato DB scheda_pubblicabile.
 *  = is_cantiere_reale AND confidence >= 0.6. null = non arricchito. */
export declare function isSchedaPubblicabile(input: {
    is_cantiere_reale?: boolean | null;
    confidence?: number | null;
}): boolean | null;
interface GateRow {
    visibilita_pubblica?: boolean | null;
    scheda_pubblicabile?: boolean | null;
}
/** Liste: visibilita_pubblica AND scheda_pubblicabile IS NOT FALSE (NULL incluso). */
export declare function passesListGate(r: GateRow): boolean;
/** Foglie indicizzate: visibilita_pubblica AND scheda_pubblicabile = TRUE. */
export declare function passesIndexGate(r: GateRow): boolean;
export declare function hasInventory(count: number, kind?: 'default' | 'mestiere_provincia'): boolean;
export {};
