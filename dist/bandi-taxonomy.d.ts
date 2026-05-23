export declare const PROCEDURA_LABELS: Record<string, string>;
export declare const BANDO_STATO_LABELS: Record<string, string>;
export declare const CPV_GROUP_LABELS: Record<string, string>;
export declare function proceduraLabel(p: string | null | undefined): string;
export declare function statoBandoLabel(s: string | null | undefined): string;
/** Label del gruppo CPV: prende il prefisso più lungo che combacia. */
export declare function cpvGroupLabel(cpv: string | null | undefined): string;
