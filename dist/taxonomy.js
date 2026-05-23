"use strict";
// Tassonomia categorie cantiere -> label leggibili + quali mostrare per settore satellite.
// Le chiavi sono gli slug usati in cantieri.categorie e in categoria_sector_map.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIPO_TITOLO_LABELS = exports.SECTOR_FILTER_CATEGORIE = exports.CATEGORIA_LABELS = void 0;
exports.categoriaLabel = categoriaLabel;
exports.tipoTitoloLabel = tipoTitoloLabel;
exports.CATEGORIA_LABELS = {
    infissi: 'Sostituzione infissi e serramenti',
    facciate: 'Facciate e cappotto termico',
    sicurezza: 'Sicurezza e porte blindate',
    piscine: 'Realizzazione piscine',
    wellness: 'SPA, sauna e wellness',
    ristrutturazione_bagno: 'Ristrutturazione bagno',
    ristrutturazione: 'Ristrutturazione edilizia',
    nuova_costruzione: 'Nuova costruzione',
    ampliamento: 'Ampliamento',
    impianti_elettrici: 'Impianti elettrici',
    impianti_termoidraulici: 'Impianti termoidraulici',
    carpenteria_metallica: 'Carpenteria metallica',
    pareti_interne: 'Pareti e divisori interni',
    pavimenti: 'Pavimenti',
    tetti: 'Coperture e tetti',
    demolizione: 'Demolizione',
    opera_pubblica: 'Opera pubblica',
    generico_edilizia: 'Intervento edilizio generico',
};
// Categorie da mostrare come chip-filtro su un dato settore satellite.
// (Coerente con categoria_sector_map; per il settore 1 si mostrano solo le top per non saturare la UI.)
exports.SECTOR_FILTER_CATEGORIE = {
    1: ['ristrutturazione', 'nuova_costruzione', 'ampliamento', 'impianti_termoidraulici'],
    2: ['infissi', 'facciate'],
    3: ['sicurezza'],
    4: ['piscine', 'wellness'],
    5: ['wellness'],
    11: ['ristrutturazione_bagno'],
};
exports.TIPO_TITOLO_LABELS = {
    PDC: 'Permesso di Costruire',
    SCIA: 'SCIA',
    CILA: 'CILA',
    DIA: 'DIA',
    PAS: 'PAS',
    SANATORIA: 'Sanatoria',
    ALTRO: 'Altro titolo',
};
/** Label leggibile di una categoria; se sconosciuta, "prettifica" lo slug. */
function categoriaLabel(slug) {
    return exports.CATEGORIA_LABELS[slug] ?? slug.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
/** Label leggibile del tipo titolo. */
function tipoTitoloLabel(tipo) {
    return exports.TIPO_TITOLO_LABELS[tipo?.toUpperCase()] ?? tipo;
}
