import { describe, it, expect } from 'vitest';
import { schedaToSchemaFragments } from '../scheda-jsonld';
import type { Scheda } from '../scheda-vocab';

const base: Scheda = {
  is_cantiere_reale: true, intervento_categoria: 'ristrutturazione', destinazione_uso: 'residenziale',
  scala: 'medio', posizione_urbana: 'semicentro', segnale_tipo: 'scia_ristrutturazione',
  segnale_forza: 3, confidence: 0.8, mestieri: ['edili_generali'],
};

describe('schedaToSchemaFragments', () => {
  it('emette additionalProperty per le dimensioni significative', () => {
    const f = schedaToSchemaFragments({ scheda: base });
    const names = f.additionalProperty.map((p) => p.name);
    expect(names).toContain('Tipo di intervento');
    expect(names).toContain('Destinazione');
    const interv = f.additionalProperty.find((p) => p.name === 'Tipo di intervento');
    expect(interv?.value).toBe('Ristrutturazione');
  });
  it('omette le dimensioni non significative (altro/sconosciuta)', () => {
    const f = schedaToSchemaFragments({
      scheda: { ...base, destinazione_uso: 'altro', posizione_urbana: 'sconosciuta' },
    });
    const names = f.additionalProperty.map((p) => p.name);
    expect(names).not.toContain('Destinazione');
  });
  it('estimatedCost solo se stimabile', () => {
    const stimato = schedaToSchemaFragments({ scheda: base, valoreMin: 100000, valoreMax: 500000, valoreMetodo: 'stima_formula' });
    expect(stimato.estimatedCost).toEqual({ '@type': 'MonetaryAmount', currency: 'EUR', minValue: 100000, maxValue: 500000 });
    const nonStim = schedaToSchemaFragments({ scheda: base, valoreMin: 100000, valoreMax: 500000, valoreMetodo: 'non_stimabile' });
    expect(nonStim.estimatedCost).toBeUndefined();
  });
  it('DefinedTerm intervento con url pillar quando hasPillar', () => {
    const f = schedaToSchemaFragments({ scheda: base, baseUrl: 'https://italiacantieri.it' });
    const term = f.about.find((t) => t.name === 'Ristrutturazione');
    expect(term?.url).toBe('https://italiacantieri.it/cantieri/ristrutturazione');
  });
  it('DefinedTerm senza url quando intervento non ha pillar', () => {
    const f = schedaToSchemaFragments({ scheda: { ...base, intervento_categoria: 'frazionamento' }, baseUrl: 'https://italiacantieri.it' });
    const term = f.about.find((t) => t.name === 'Frazionamento');
    expect(term?.url).toBeUndefined();
  });
});
