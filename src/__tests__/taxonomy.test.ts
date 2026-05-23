import { describe, it, expect } from 'vitest';
import { categoriaLabel, tipoTitoloLabel, SECTOR_FILTER_CATEGORIE, CATEGORIA_LABELS } from '../taxonomy';

describe('taxonomy', () => {
  it('label categoria nota', () => { expect(categoriaLabel('infissi')).toContain('infissi'); });
  it('label categoria sconosciuta prettificata', () => { expect(categoriaLabel('mio_slug')).toBe('Mio Slug'); });
  it('tipo titolo', () => { expect(tipoTitoloLabel('pdc')).toBe('Permesso di Costruire'); });
  it('filtro settore serramenti', () => { expect(SECTOR_FILTER_CATEGORIE[2]).toContain('infissi'); });
  it('tutte le categorie del filtro hanno una label', () => {
    for (const cats of Object.values(SECTOR_FILTER_CATEGORIE))
      for (const c of cats) expect(CATEGORIA_LABELS[c]).toBeTruthy();
  });
});
