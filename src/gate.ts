// Predicati di pubblicazione condivisi (doppio gate) + soglie inventario + prefissi riservati.

export const INVENTORY_THRESHOLD = 5;
export const MESTIERE_PROVINCIA_THRESHOLD = 3;
export const RESERVED_PREFIXES: string[] = ['lavori', 'cantieri', 'guide', 'esplora'];

export function isReservedPrefix(seg: string): boolean {
  return RESERVED_PREFIXES.includes(seg.toLowerCase());
}

/** Replica TS del campo generato DB scheda_pubblicabile.
 *  = is_cantiere_reale AND confidence >= 0.6. null = non arricchito. */
export function isSchedaPubblicabile(input: {
  is_cantiere_reale?: boolean | null;
  confidence?: number | null;
}): boolean | null {
  if (input.is_cantiere_reale == null || input.confidence == null) return null;
  return input.is_cantiere_reale && input.confidence >= 0.6;
}

interface GateRow { visibilita_pubblica?: boolean | null; scheda_pubblicabile?: boolean | null }

/** Liste: visibilita_pubblica AND scheda_pubblicabile IS NOT FALSE (NULL incluso). */
export function passesListGate(r: GateRow): boolean {
  return r.visibilita_pubblica === true && r.scheda_pubblicabile !== false;
}

/** Foglie indicizzate: visibilita_pubblica AND scheda_pubblicabile = TRUE. */
export function passesIndexGate(r: GateRow): boolean {
  return r.visibilita_pubblica === true && r.scheda_pubblicabile === true;
}

export function hasInventory(count: number, kind: 'default' | 'mestiere_provincia' = 'default'): boolean {
  const threshold = kind === 'mestiere_provincia' ? MESTIERE_PROVINCIA_THRESHOLD : INVENTORY_THRESHOLD;
  return count >= threshold;
}
