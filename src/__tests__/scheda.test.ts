import { describe, it, expect } from 'vitest';
import {
  interventoLabel, interventoBySlug, mestiereLabel, mestiereSlug, mestiereBySlug,
  isMeaningful, displayInterventoLabel, formatValoreRange,
} from '../scheda';

describe('scheda helpers', () => {
  it('interventoLabel', () => { expect(interventoLabel('ristrutturazione')).toBe('Ristrutturazione'); });
  it('interventoBySlug round-trip', () => {
    expect(interventoBySlug('manutenzione-straordinaria')).toBe('manutenzione_straordinaria');
    expect(interventoBySlug('inesistente')).toBeNull();
  });
  it('mestiere slug e lookup', () => {
    expect(mestiereSlug('impianti_elettrici')).toBe('impianti-elettrici');
    expect(mestiereBySlug('impianti-elettrici')).toBe('impianti_elettrici');
    expect(mestiereLabel('serramenti')).toBe('Serramenti e infissi');
    expect(mestiereBySlug('boh')).toBeNull();
  });
  it('isMeaningful', () => {
    expect(isMeaningful('ristrutturazione')).toBe(true);
    expect(isMeaningful('altro')).toBe(false);
    expect(isMeaningful('sconosciuta')).toBe(false);
    expect(isMeaningful('non_stimabile')).toBe(false);
    expect(isMeaningful(null)).toBe(false);
    expect(isMeaningful(undefined)).toBe(false);
  });
  it('displayInterventoLabel degrada su altro', () => {
    expect(displayInterventoLabel('ampliamento')).toBe('Ampliamento');
    expect(displayInterventoLabel('altro')).toBeNull();
  });
  it('formatValoreRange', () => {
    expect(formatValoreRange(100000, 500000, 'stima_formula')).toBe('100.000 - 500.000 €');
    expect(formatValoreRange(250000, 250000, 'dichiarato_atto')).toBe('250.000 €');
    expect(formatValoreRange(null, null, 'non_stimabile')).toBeNull();
    expect(formatValoreRange(100000, 500000, 'non_stimabile')).toBeNull();
  });
});
