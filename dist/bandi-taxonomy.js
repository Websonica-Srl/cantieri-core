"use strict";
// Tassonomia bandi/gare d'appalto — label leggibili per procedura, stato, gruppi CPV.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPV_GROUP_LABELS = exports.BANDO_STATO_LABELS = exports.PROCEDURA_LABELS = void 0;
exports.proceduraLabel = proceduraLabel;
exports.statoBandoLabel = statoBandoLabel;
exports.cpvGroupLabel = cpvGroupLabel;
// bando_procedura_enum -> label
exports.PROCEDURA_LABELS = {
    aperta: 'Procedura aperta',
    ristretta: 'Procedura ristretta',
    negoziata_con_pubblicazione: 'Negoziata con pubblicazione',
    negoziata_senza_pubblicazione: 'Negoziata senza pubblicazione',
    dialogo_competitivo: 'Dialogo competitivo',
    accordo_quadro: 'Accordo quadro',
    concessione: 'Concessione',
    altro: 'Altra procedura',
};
// bando_stato_enum -> label
exports.BANDO_STATO_LABELS = {
    aperto: 'Aperto',
    in_valutazione: 'In valutazione',
    aggiudicato: 'Aggiudicato',
    revocato: 'Revocato',
    deserto: 'Deserto',
    scaduto_no_aggiud: 'Scaduto senza aggiudicazione',
};
// Gruppi CPV (prefisso) -> label leggibile (per chip-filtro e breadcrumb SEO).
exports.CPV_GROUP_LABELS = {
    '45': 'Lavori di costruzione',
    '71': 'Servizi di architettura e ingegneria',
    '45421': 'Serramenti e infissi',
    '45310': 'Impianti elettrici',
    '45330': 'Impianti idraulici',
    '45331': 'Impianti di riscaldamento/climatizzazione',
    '45212212': 'Piscine',
    '45212': 'Impianti sportivi e ricreativi',
    '45454': 'Ristrutturazione',
    '44': 'Materiali e prodotti per costruzione',
};
function proceduraLabel(p) {
    if (!p)
        return '';
    return exports.PROCEDURA_LABELS[p] ?? p.replace(/_/g, ' ');
}
function statoBandoLabel(s) {
    if (!s)
        return '';
    return exports.BANDO_STATO_LABELS[s] ?? s;
}
/** Label del gruppo CPV: prende il prefisso più lungo che combacia. */
function cpvGroupLabel(cpv) {
    if (!cpv)
        return '';
    const code = cpv.replace(/[^0-9]/g, '');
    const prefixes = Object.keys(exports.CPV_GROUP_LABELS).sort((a, b) => b.length - a.length);
    for (const p of prefixes)
        if (code.startsWith(p))
            return exports.CPV_GROUP_LABELS[p];
    return cpv;
}
