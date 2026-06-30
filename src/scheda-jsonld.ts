import {
  INTERVENTO_META, DESTINAZIONE_META, SCALA_META, TIPOLOGIA_META, SEGNALE_META,
  type Scheda, type ValoreMetodo,
} from './scheda-vocab';
import { isMeaningful } from './scheda';

export interface SchedaFragmentsInput {
  scheda: Scheda;
  valoreMin?: number | null;
  valoreMax?: number | null;
  valoreMetodo?: ValoreMetodo | null;
  baseUrl?: string;
}

export interface SchedaFragments {
  additionalProperty: Array<{ '@type': 'PropertyValue'; name: string; value: string }>;
  estimatedCost?: { '@type': 'MonetaryAmount'; currency: 'EUR'; minValue: number; maxValue: number };
  about: Array<{ '@type': 'DefinedTerm'; name: string; url?: string }>;
}

export function schedaToSchemaFragments(input: SchedaFragmentsInput): SchedaFragments {
  const { scheda: s, valoreMin, valoreMax, valoreMetodo, baseUrl } = input;
  const additionalProperty: SchedaFragments['additionalProperty'] = [];

  const push = (name: string, value: string | undefined) => {
    if (value) additionalProperty.push({ '@type': 'PropertyValue', name, value });
  };
  push('Tipo di intervento', isMeaningful(s.intervento_categoria) ? INTERVENTO_META[s.intervento_categoria].label : undefined);
  push('Destinazione', isMeaningful(s.destinazione_uso) ? DESTINAZIONE_META[s.destinazione_uso].label : undefined);
  push('Scala', isMeaningful(s.scala) ? SCALA_META[s.scala].label : undefined);
  push('Tipologia edilizia', s.tipologia_edilizia && isMeaningful(s.tipologia_edilizia) ? TIPOLOGIA_META[s.tipologia_edilizia].label : undefined);
  push('Segnale', isMeaningful(s.segnale_tipo) ? SEGNALE_META[s.segnale_tipo].label : undefined);

  const fragments: SchedaFragments = { additionalProperty, about: [] };

  if (valoreMetodo !== 'non_stimabile' && valoreMin != null && valoreMax != null) {
    fragments.estimatedCost = { '@type': 'MonetaryAmount', currency: 'EUR', minValue: valoreMin, maxValue: valoreMax };
  }

  const im = INTERVENTO_META[s.intervento_categoria];
  if (isMeaningful(s.intervento_categoria)) {
    const term: { '@type': 'DefinedTerm'; name: string; url?: string } = { '@type': 'DefinedTerm', name: im.label };
    if (im.hasPillar && baseUrl) term.url = `${baseUrl}/cantieri/${im.slug}`;
    fragments.about.push(term);
  }
  return fragments;
}
