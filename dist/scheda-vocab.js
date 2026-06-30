"use strict";
// Vocabolario "scheda" allineato 1:1 agli enum Postgres prod e alla dataclass SchedaEstratta del backend.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESTIERE_LABELS = exports.MESTIERI = exports.TITOLO_GUIDA_SLUG = exports.TITOLO_LABELS = exports.VALORE_METODO_LABELS = exports.SEGNALE_META = exports.POSIZIONE_META = exports.TIPOLOGIA_META = exports.SCALA_META = exports.DESTINAZIONE_META = exports.INTERVENTO_META = exports.INTERVENTI = void 0;
const slugify = (k) => k.replace(/_/g, '-');
exports.INTERVENTI = [
    'nuova_costruzione', 'demo_ricostruzione', 'ampliamento', 'ristrutturazione',
    'manutenzione_straordinaria', 'frazionamento', 'accorpamento',
    'cambio_destinazione', 'opere_esterne', 'altro',
];
exports.INTERVENTO_META = {
    nuova_costruzione: { label: 'Nuova costruzione', icon: 'Building2', color: '#2563eb', slug: 'nuova-costruzione', hasPillar: false },
    demo_ricostruzione: { label: 'Demolizione e ricostruzione', icon: 'Hammer', color: '#dc2626', slug: 'demo-ricostruzione', hasPillar: true },
    ampliamento: { label: 'Ampliamento', icon: 'Maximize2', color: '#16a34a', slug: 'ampliamento', hasPillar: true },
    ristrutturazione: { label: 'Ristrutturazione', icon: 'Wrench', color: '#ea580c', slug: 'ristrutturazione', hasPillar: true },
    manutenzione_straordinaria: { label: 'Manutenzione straordinaria', icon: 'HardHat', color: '#ca8a04', slug: 'manutenzione-straordinaria', hasPillar: true },
    frazionamento: { label: 'Frazionamento', icon: 'Split', color: '#0891b2', slug: 'frazionamento', hasPillar: false },
    accorpamento: { label: 'Accorpamento', icon: 'Merge', color: '#0d9488', slug: 'accorpamento', hasPillar: false },
    cambio_destinazione: { label: "Cambio di destinazione d'uso", icon: 'Repeat', color: '#7c3aed', slug: 'cambio-destinazione', hasPillar: true },
    opere_esterne: { label: 'Opere esterne', icon: 'Trees', color: '#65a30d', slug: 'opere-esterne', hasPillar: false },
    altro: { label: 'Altro intervento', icon: 'CircleDot', color: '#64748b', slug: 'altro', hasPillar: false },
};
exports.DESTINAZIONE_META = {
    residenziale: { label: 'Residenziale', icon: 'Home', color: '#2563eb', slug: 'residenziale' },
    commerciale: { label: 'Commerciale', icon: 'Store', color: '#ea580c', slug: 'commerciale' },
    direzionale: { label: 'Direzionale e uffici', icon: 'Briefcase', color: '#7c3aed', slug: 'direzionale' },
    produttivo: { label: 'Produttivo e industriale', icon: 'Factory', color: '#dc2626', slug: 'produttivo' },
    ricettivo: { label: 'Ricettivo', icon: 'BedDouble', color: '#0891b2', slug: 'ricettivo' },
    agricolo: { label: 'Agricolo', icon: 'Wheat', color: '#65a30d', slug: 'agricolo' },
    pubblico: { label: 'Pubblico', icon: 'Landmark', color: '#0d9488', slug: 'pubblico' },
    misto: { label: 'Misto', icon: 'Layers', color: '#64748b', slug: 'misto' },
    altro: { label: 'Altra destinazione', icon: 'CircleDot', color: '#64748b', slug: 'altro' },
};
exports.SCALA_META = {
    puntuale: { label: 'Intervento puntuale', icon: 'Dot', color: '#64748b', slug: 'puntuale' },
    medio: { label: 'Media scala', icon: 'BarChart2', color: '#ca8a04', slug: 'medio' },
    grande: { label: 'Grande scala', icon: 'BarChart3', color: '#dc2626', slug: 'grande' },
};
exports.TIPOLOGIA_META = {
    casa_singola: { label: 'Casa singola', icon: 'Home', color: '#2563eb', slug: 'casa-singola' },
    villetta: { label: 'Villetta', icon: 'House', color: '#16a34a', slug: 'villetta' },
    villa_pregio: { label: 'Villa di pregio', icon: 'Castle', color: '#7c3aed', slug: 'villa-pregio' },
    palazzina: { label: 'Palazzina', icon: 'Building', color: '#0891b2', slug: 'palazzina' },
    condominio: { label: 'Condominio', icon: 'Building2', color: '#ea580c', slug: 'condominio' },
    attico: { label: 'Attico', icon: 'PanelTop', color: '#ca8a04', slug: 'attico' },
    casa_legno_prefabbricato: { label: 'Casa in legno o prefabbricata', icon: 'TreePine', color: '#65a30d', slug: 'casa-legno-prefabbricato' },
    capannone: { label: 'Capannone', icon: 'Warehouse', color: '#dc2626', slug: 'capannone' },
    rustico_casale: { label: 'Rustico o casale', icon: 'Tractor', color: '#a16207', slug: 'rustico-casale' },
    altro: { label: 'Altra tipologia', icon: 'CircleDot', color: '#64748b', slug: 'altro' },
};
exports.POSIZIONE_META = {
    centro_storico: { label: 'Centro storico', icon: 'Landmark', color: '#7c3aed', slug: 'centro-storico' },
    semicentro: { label: 'Semicentro', icon: 'MapPin', color: '#0891b2', slug: 'semicentro' },
    periferia: { label: 'Periferia', icon: 'MapPinned', color: '#16a34a', slug: 'periferia' },
    extraurbano: { label: 'Extraurbano', icon: 'Trees', color: '#65a30d', slug: 'extraurbano' },
    sconosciuta: { label: 'Posizione non indicata', icon: 'HelpCircle', color: '#64748b', slug: 'sconosciuta' },
};
exports.SEGNALE_META = {
    pdc_nuova_costruzione: { label: 'Permesso di costruire (nuova costruzione)', icon: 'FileCheck2', color: '#2563eb', slug: 'pdc-nuova-costruzione' },
    scia_ristrutturazione: { label: 'SCIA (ristrutturazione)', icon: 'FileText', color: '#ea580c', slug: 'scia-ristrutturazione' },
    cila_minore: { label: 'CILA (intervento minore)', icon: 'FileText', color: '#ca8a04', slug: 'cila-minore' },
    cosap_avvio_cantiere: { label: 'Occupazione suolo (avvio cantiere)', icon: 'Construction', color: '#dc2626', slug: 'cosap-avvio-cantiere' },
    variante_in_corso: { label: "Variante in corso d'opera", icon: 'GitBranch', color: '#7c3aed', slug: 'variante-in-corso' },
    appalto_pubblicato: { label: 'Appalto pubblicato', icon: 'Gavel', color: '#0891b2', slug: 'appalto-pubblicato' },
    appalto_aggiudicato: { label: 'Appalto aggiudicato', icon: 'Award', color: '#16a34a', slug: 'appalto-aggiudicato' },
    altro: { label: 'Altro segnale', icon: 'CircleDot', color: '#64748b', slug: 'altro' },
};
exports.VALORE_METODO_LABELS = {
    dichiarato_atto: "Valore dichiarato nell'atto",
    da_importo_bando: 'Da importo a base di gara',
    stima_formula: 'Stima da parametri',
    non_stimabile: 'Non stimabile',
};
exports.TITOLO_LABELS = {
    PDC: 'Permesso di Costruire',
    SCIA: 'SCIA',
    CILA: 'CILA',
    PAS: 'PAS',
    DIA: 'DIA',
    AUA: 'Autorizzazione Unica Ambientale',
    CONCESSIONE: 'Concessione',
    OPERA_PUBBLICA: 'Opera pubblica',
    ALTRO: 'Altro titolo',
};
/** Titolo edilizio → slug del pillar-guida normativa (null se non c'è guida). */
exports.TITOLO_GUIDA_SLUG = {
    CILA: 'cila',
    SCIA: 'scia',
    PDC: 'permesso-di-costruire',
    PAS: null, DIA: null, AUA: null, CONCESSIONE: null, OPERA_PUBBLICA: null, ALTRO: null,
};
exports.MESTIERI = [
    'edili_generali', 'demolizioni', 'movimento_terra', 'fondazioni_strutture',
    'carpenteria_metallica', 'impermeabilizzazioni', 'isolamento_cappotto',
    'lattoneria_coperture', 'facciate_rivestimenti', 'serramenti',
    'cartongesso_controsoffitti', 'pavimenti_rivestimenti', 'pitture_decorazioni',
    'impianti_termoidraulici', 'impianti_climatizzazione', 'impianti_elettrici',
    'fotovoltaico_rinnovabili', 'ascensori_elevatori', 'antincendio',
    'domotica_sicurezza', 'piscine', 'spa_wellness', 'ristrutturazione_bagno',
    'arredo_interni', 'verde_giardini', 'ponteggi_noleggio', 'bonifiche_smaltimento',
    'fornitori_materiali', 'general_contractor',
];
exports.MESTIERE_LABELS = {
    edili_generali: 'Edili generali', demolizioni: 'Demolizioni', movimento_terra: 'Movimento terra',
    fondazioni_strutture: 'Fondazioni e strutture', carpenteria_metallica: 'Carpenteria metallica',
    impermeabilizzazioni: 'Impermeabilizzazioni', isolamento_cappotto: 'Isolamento e cappotto',
    lattoneria_coperture: 'Lattoneria e coperture', facciate_rivestimenti: 'Facciate e rivestimenti',
    serramenti: 'Serramenti e infissi', cartongesso_controsoffitti: 'Cartongesso e controsoffitti',
    pavimenti_rivestimenti: 'Pavimenti e rivestimenti', pitture_decorazioni: 'Pitture e decorazioni',
    impianti_termoidraulici: 'Impianti termoidraulici', impianti_climatizzazione: 'Impianti di climatizzazione',
    impianti_elettrici: 'Impianti elettrici', fotovoltaico_rinnovabili: 'Fotovoltaico e rinnovabili',
    ascensori_elevatori: 'Ascensori ed elevatori', antincendio: 'Antincendio',
    domotica_sicurezza: 'Domotica e sicurezza', piscine: 'Piscine', spa_wellness: 'SPA e wellness',
    ristrutturazione_bagno: 'Ristrutturazione bagno', arredo_interni: 'Arredo interni',
    verde_giardini: 'Verde e giardini', ponteggi_noleggio: 'Ponteggi e noleggio',
    bonifiche_smaltimento: 'Bonifiche e smaltimento', fornitori_materiali: 'Fornitori materiali',
    general_contractor: 'General contractor',
};
