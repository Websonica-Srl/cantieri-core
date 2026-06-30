"use strict";
// Predicati di pubblicazione condivisi (doppio gate) + soglie inventario + prefissi riservati.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESERVED_PREFIXES = exports.MESTIERE_PROVINCIA_THRESHOLD = exports.INVENTORY_THRESHOLD = void 0;
exports.isReservedPrefix = isReservedPrefix;
exports.isSchedaPubblicabile = isSchedaPubblicabile;
exports.passesListGate = passesListGate;
exports.passesIndexGate = passesIndexGate;
exports.hasInventory = hasInventory;
exports.INVENTORY_THRESHOLD = 5;
exports.MESTIERE_PROVINCIA_THRESHOLD = 3;
exports.RESERVED_PREFIXES = ['lavori', 'cantieri', 'guide', 'esplora'];
function isReservedPrefix(seg) {
    return exports.RESERVED_PREFIXES.includes(seg.toLowerCase());
}
/** Replica TS del campo generato DB scheda_pubblicabile.
 *  = is_cantiere_reale AND confidence >= 0.6. null = non arricchito. */
function isSchedaPubblicabile(input) {
    if (input.is_cantiere_reale == null || input.confidence == null)
        return null;
    return input.is_cantiere_reale && input.confidence >= 0.6;
}
/** Liste: visibilita_pubblica AND scheda_pubblicabile IS NOT FALSE (NULL incluso). */
function passesListGate(r) {
    return r.visibilita_pubblica === true && r.scheda_pubblicabile !== false;
}
/** Foglie indicizzate: visibilita_pubblica AND scheda_pubblicabile = TRUE. */
function passesIndexGate(r) {
    return r.visibilita_pubblica === true && r.scheda_pubblicabile === true;
}
function hasInventory(count, kind = 'default') {
    const threshold = kind === 'mestiere_provincia' ? exports.MESTIERE_PROVINCIA_THRESHOLD : exports.INVENTORY_THRESHOLD;
    return count >= threshold;
}
