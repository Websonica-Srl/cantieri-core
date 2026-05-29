import { describe, it, expect } from 'vitest';
import {
  proceduraLabel,
  statoBandoLabel,
  cpvGroupLabel,
  cpvGroup,
  CPV_GROUP_LABELS_2D,
  CPV_GROUP_EDITORIAL,
  cpvGroupToSlug,
  slugToCpvGroup,
} from '../bandi-taxonomy';
describe('bandi-taxonomy', () => {
  it('procedura', () => { expect(proceduraLabel('aperta')).toBe('Procedura aperta'); });
  it('stato', () => { expect(statoBandoLabel('aggiudicato')).toBe('Aggiudicato'); });
  it('cpv prefisso piu lungo', () => {
    expect(cpvGroupLabel('45421000-4')).toBe('Serramenti e infissi'); // 45421 batte 45
    expect(cpvGroupLabel('45200000')).toBe('Lavori di costruzione');  // 45
    expect(cpvGroupLabel('71000000')).toBe('Servizi di architettura e ingegneria');
  });
  it('sconosciuto -> input', () => { expect(cpvGroupLabel('99999999')).toBe('99999999'); });
});

describe('bandi-taxonomy CPV 2D + slug + editorial', () => {
  it('cpvGroup prende le prime 2 cifre', () => {
    expect(cpvGroup('45213100')).toBe('45');
  });
  it('CPV_GROUP_LABELS_2D copre le divisioni a 2 cifre', () => {
    // '45'/'71' vivono nella mappa primaria del package; il dizionario 2D
    // copre le divisioni restanti (es. 90, 50, 33...).
    expect(CPV_GROUP_LABELS_2D['90']).toBeDefined();
    expect(Object.keys(CPV_GROUP_LABELS_2D).length).toBe(38);
  });
  it('cpvGroupToSlug genera uno slug non vuoto', () => {
    expect(cpvGroupToSlug('45')).not.toBe('');
    expect(cpvGroupToSlug('45').length).toBeGreaterThan(0);
  });
  it('slug <-> gruppo e reversibile', () => {
    expect(slugToCpvGroup(cpvGroupToSlug('45'))).toBe('45');
  });
  it('CPV_GROUP_EDITORIAL esiste', () => {
    expect(CPV_GROUP_EDITORIAL).toBeDefined();
    expect(CPV_GROUP_EDITORIAL['45']).toBeDefined();
  });
  it('fallback 2D per gruppi non coperti dal package', () => {
    // gruppo 90 non e nel package CPV_GROUP_LABELS ma e nel dizionario 2D
    expect(cpvGroupLabel('90000000')).toBe(CPV_GROUP_LABELS_2D['90']);
  });
});
