"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedaToSchemaFragments = schedaToSchemaFragments;
const scheda_vocab_1 = require("./scheda-vocab");
const scheda_1 = require("./scheda");
function schedaToSchemaFragments(input) {
    const { scheda: s, valoreMin, valoreMax, valoreMetodo, baseUrl } = input;
    const additionalProperty = [];
    const push = (name, value) => {
        if (value)
            additionalProperty.push({ '@type': 'PropertyValue', name, value });
    };
    push('Tipo di intervento', (0, scheda_1.isMeaningful)(s.intervento_categoria) ? scheda_vocab_1.INTERVENTO_META[s.intervento_categoria].label : undefined);
    push('Destinazione', (0, scheda_1.isMeaningful)(s.destinazione_uso) ? scheda_vocab_1.DESTINAZIONE_META[s.destinazione_uso].label : undefined);
    push('Scala', (0, scheda_1.isMeaningful)(s.scala) ? scheda_vocab_1.SCALA_META[s.scala].label : undefined);
    push('Tipologia edilizia', s.tipologia_edilizia && (0, scheda_1.isMeaningful)(s.tipologia_edilizia) ? scheda_vocab_1.TIPOLOGIA_META[s.tipologia_edilizia].label : undefined);
    push('Segnale', (0, scheda_1.isMeaningful)(s.segnale_tipo) ? scheda_vocab_1.SEGNALE_META[s.segnale_tipo].label : undefined);
    const fragments = { additionalProperty, about: [] };
    if (valoreMetodo !== 'non_stimabile' && valoreMin != null && valoreMax != null) {
        fragments.estimatedCost = { '@type': 'MonetaryAmount', currency: 'EUR', minValue: valoreMin, maxValue: valoreMax };
    }
    const im = scheda_vocab_1.INTERVENTO_META[s.intervento_categoria];
    if ((0, scheda_1.isMeaningful)(s.intervento_categoria)) {
        const term = { '@type': 'DefinedTerm', name: im.label };
        if (im.hasPillar && baseUrl)
            term.url = `${baseUrl}/cantieri/${im.slug}`;
        fragments.about.push(term);
    }
    return fragments;
}
