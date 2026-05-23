import { describe, it, expect } from 'vitest';
import { resolveProvincia, normalizeProvinciaValue, provinceOfRegione, isSigla, PROVINCE } from '../geo';

describe('geo', () => {
  it('ci sono 107 province', () => { expect(PROVINCE.length).toBe(107); });
  it('risolve nome -> sigla', () => {
    expect(resolveProvincia('torino')?.sigla).toBe('TO');
    expect(resolveProvincia('Milano')?.sigla).toBe('MI');
    expect(resolveProvincia('reggio emilia')?.sigla).toBe('RE');
    expect(resolveProvincia('reggio calabria')?.sigla).toBe('RC');
  });
  it('risolve sigla -> sigla', () => {
    expect(resolveProvincia('MI')?.sigla).toBe('MI');
    expect(resolveProvincia('to')?.sigla).toBe('TO');
  });
  it('gestisce varianti/accenti', () => {
    expect(resolveProvincia('Forlì-Cesena')?.sigla).toBe('FC');
    expect(resolveProvincia('Forli-Cesena')?.sigla).toBe('FC');
    expect(resolveProvincia('Monza e Brianza')?.sigla).toBe('MB');
    expect(resolveProvincia('Monza e della Brianza')?.sigla).toBe('MB');
    expect(resolveProvincia("L'Aquila")?.sigla).toBe('AQ');
    expect(resolveProvincia('Vibo-Valentia')?.sigla).toBe('VV');
  });
  it('sconosciuto -> null', () => { expect(resolveProvincia('atlantide')).toBeNull(); });
  it('normalizeProvinciaValue', () => {
    expect(normalizeProvinciaValue('Milano')).toBe('MI');
    expect(normalizeProvinciaValue('TO')).toBe('TO');
    expect(normalizeProvinciaValue('Basilea')).toBe('Basilea'); // estero: invariato
    expect(normalizeProvinciaValue('')).toBe('');
  });
  it('isSigla', () => { expect(isSigla('TO')).toBe(true); expect(isSigla('ZZ')).toBe(false); expect(isSigla('Torino')).toBe(false); });
  it('provinceOfRegione', () => {
    const lomb = provinceOfRegione('Lombardia');
    expect(lomb.map((p) => p.sigla)).toContain('MI');
    expect(lomb.length).toBe(12);
  });
});
