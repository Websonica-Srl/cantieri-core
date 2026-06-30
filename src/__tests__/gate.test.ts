import { describe, it, expect } from 'vitest';
import {
  INVENTORY_THRESHOLD, MESTIERE_PROVINCIA_THRESHOLD, RESERVED_PREFIXES,
  isReservedPrefix, isSchedaPubblicabile, passesListGate, passesIndexGate, hasInventory,
} from '../gate';

describe('gate', () => {
  it('costanti', () => {
    expect(INVENTORY_THRESHOLD).toBe(5);
    expect(MESTIERE_PROVINCIA_THRESHOLD).toBe(3);
    expect(RESERVED_PREFIXES).toEqual(['lavori', 'cantieri', 'guide', 'esplora']);
  });
  it('prefissi riservati', () => {
    expect(isReservedPrefix('guide')).toBe(true);
    expect(isReservedPrefix('lombardia')).toBe(false);
  });
  it('isSchedaPubblicabile replica campo generato', () => {
    expect(isSchedaPubblicabile({ is_cantiere_reale: true, confidence: 0.8 })).toBe(true);
    expect(isSchedaPubblicabile({ is_cantiere_reale: true, confidence: 0.5 })).toBe(false);
    expect(isSchedaPubblicabile({ is_cantiere_reale: false, confidence: 0.9 })).toBe(false);
    expect(isSchedaPubblicabile({})).toBeNull(); // non arricchito
  });
  it('passesListGate: include NULL (IS NOT FALSE)', () => {
    expect(passesListGate({ visibilita_pubblica: true, scheda_pubblicabile: null })).toBe(true);
    expect(passesListGate({ visibilita_pubblica: true, scheda_pubblicabile: true })).toBe(true);
    expect(passesListGate({ visibilita_pubblica: true, scheda_pubblicabile: false })).toBe(false);
    expect(passesListGate({ visibilita_pubblica: false, scheda_pubblicabile: true })).toBe(false);
  });
  it('passesIndexGate: solo TRUE', () => {
    expect(passesIndexGate({ visibilita_pubblica: true, scheda_pubblicabile: true })).toBe(true);
    expect(passesIndexGate({ visibilita_pubblica: true, scheda_pubblicabile: null })).toBe(false);
  });
  it('hasInventory rispetta le soglie', () => {
    expect(hasInventory(5)).toBe(true);
    expect(hasInventory(4)).toBe(false);
    expect(hasInventory(3, 'mestiere_provincia')).toBe(true);
    expect(hasInventory(2, 'mestiere_provincia')).toBe(false);
  });
});
