// src/__tests__/scheda-vocab.test.ts
import { describe, it, expect } from 'vitest';
import {
  INTERVENTO_META, DESTINAZIONE_META, SCALA_META, TIPOLOGIA_META,
  POSIZIONE_META, SEGNALE_META, MESTIERE_LABELS, MESTIERI,
  VALORE_METODO_LABELS, TITOLO_LABELS, TITOLO_GUIDA_SLUG, INTERVENTI,
} from '../scheda-vocab';

describe('scheda-vocab', () => {
  it('ogni intervento ha meta completo', () => {
    for (const k of INTERVENTI) {
      const m = INTERVENTO_META[k];
      expect(m.label).toBeTruthy();
      expect(m.icon).toBeTruthy();
      expect(m.color).toBeTruthy();
      expect(m.slug).toBe(k.replace(/_/g, '-'));
      expect(typeof m.hasPillar).toBe('boolean');
    }
  });
  it('i 5 pillar-intervento hanno hasPillar=true e gli altri no', () => {
    const withPillar = INTERVENTI.filter((k) => INTERVENTO_META[k].hasPillar).sort();
    expect(withPillar).toEqual(
      ['ampliamento', 'cambio_destinazione', 'demo_ricostruzione', 'manutenzione_straordinaria', 'ristrutturazione'].sort(),
    );
  });
  it('mestieri canonici: 29 voci con label', () => {
    expect(MESTIERI).toHaveLength(29);
    for (const m of MESTIERI) expect(MESTIERE_LABELS[m]).toBeTruthy();
  });
  it('mappe enum hanno slug univoci', () => {
    for (const map of [INTERVENTO_META, DESTINAZIONE_META, SCALA_META, TIPOLOGIA_META, POSIZIONE_META, SEGNALE_META]) {
      const slugs = Object.values(map).map((m) => m.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });
  it('titolo→guida: CILA/SCIA/PDC mappati, altri null', () => {
    expect(TITOLO_GUIDA_SLUG.CILA).toBe('cila');
    expect(TITOLO_GUIDA_SLUG.SCIA).toBe('scia');
    expect(TITOLO_GUIDA_SLUG.PDC).toBe('permesso-di-costruire');
    expect(TITOLO_GUIDA_SLUG.DIA).toBeNull();
    expect(TITOLO_LABELS.AUA).toBeTruthy();
  });
  it('valore metodo: 4 voci', () => {
    expect(Object.keys(VALORE_METODO_LABELS)).toHaveLength(4);
    expect(VALORE_METODO_LABELS.non_stimabile).toBeTruthy();
  });
});
