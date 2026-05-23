import { describe, it, expect } from 'vitest';
import { proceduraLabel, statoBandoLabel, cpvGroupLabel } from '../bandi-taxonomy';
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
