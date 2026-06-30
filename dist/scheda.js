"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interventoMeta = interventoMeta;
exports.interventoLabel = interventoLabel;
exports.interventoBySlug = interventoBySlug;
exports.mestiereLabel = mestiereLabel;
exports.mestiereSlug = mestiereSlug;
exports.mestiereBySlug = mestiereBySlug;
exports.isMeaningful = isMeaningful;
exports.displayInterventoLabel = displayInterventoLabel;
exports.formatValoreRange = formatValoreRange;
const scheda_vocab_1 = require("./scheda-vocab");
function interventoMeta(k) { return scheda_vocab_1.INTERVENTO_META[k]; }
function interventoLabel(k) { return scheda_vocab_1.INTERVENTO_META[k].label; }
function interventoBySlug(slug) {
    return scheda_vocab_1.INTERVENTI.find((k) => scheda_vocab_1.INTERVENTO_META[k].slug === slug) ?? null;
}
function mestiereLabel(m) { return scheda_vocab_1.MESTIERE_LABELS[m]; }
function mestiereSlug(m) { return m.replace(/_/g, '-'); }
function mestiereBySlug(slug) {
    return scheda_vocab_1.MESTIERI.find((m) => mestiereSlug(m) === slug) ?? null;
}
/** Valori "vuoti di significato" che vanno nascosti/degradati nella UI. */
const NON_MEANINGFUL = new Set(['altro', 'sconosciuta', 'non_stimabile']);
function isMeaningful(value) {
    return value != null && value !== '' && !NON_MEANINGFUL.has(value);
}
/** Label intervento per H1/titoli; null quando non significativo (consente "Cantiere a {comune}"). */
function displayInterventoLabel(k) {
    return isMeaningful(k) ? scheda_vocab_1.INTERVENTO_META[k].label : null;
}
const NF = new Intl.NumberFormat('it-IT');
/** Range valore largo per la foglia pubblica. null se non stimabile o privo di dati. */
function formatValoreRange(min, max, metodo) {
    if (metodo === 'non_stimabile')
        return null;
    if (min == null && max == null)
        return null;
    if (min != null && max != null && min !== max)
        return `${NF.format(min)} - ${NF.format(max)} €`;
    const single = (max ?? min);
    return `${NF.format(single)} €`;
}
