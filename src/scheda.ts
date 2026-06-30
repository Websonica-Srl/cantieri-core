import {
  INTERVENTO_META, INTERVENTI, MESTIERE_LABELS, MESTIERI,
  type InterventoCategoria, type InterventoMeta, type Mestiere, type ValoreMetodo,
} from './scheda-vocab';

export function interventoMeta(k: InterventoCategoria): InterventoMeta { return INTERVENTO_META[k]; }
export function interventoLabel(k: InterventoCategoria): string { return INTERVENTO_META[k].label; }

export function interventoBySlug(slug: string): InterventoCategoria | null {
  return INTERVENTI.find((k) => INTERVENTO_META[k].slug === slug) ?? null;
}

export function mestiereLabel(m: Mestiere): string { return MESTIERE_LABELS[m]; }
export function mestiereSlug(m: Mestiere): string { return m.replace(/_/g, '-'); }
export function mestiereBySlug(slug: string): Mestiere | null {
  return MESTIERI.find((m) => mestiereSlug(m) === slug) ?? null;
}

/** Valori "vuoti di significato" che vanno nascosti/degradati nella UI. */
const NON_MEANINGFUL = new Set(['altro', 'sconosciuta', 'non_stimabile']);
export function isMeaningful(value: string | null | undefined): boolean {
  return value != null && value !== '' && !NON_MEANINGFUL.has(value);
}

/** Label intervento per H1/titoli; null quando non significativo (consente "Cantiere a {comune}"). */
export function displayInterventoLabel(k: InterventoCategoria): string | null {
  return isMeaningful(k) ? INTERVENTO_META[k].label : null;
}

const NF = new Intl.NumberFormat('it-IT');
/** Range valore largo per la foglia pubblica. null se non stimabile o privo di dati. */
export function formatValoreRange(
  min: number | null | undefined,
  max: number | null | undefined,
  metodo: ValoreMetodo | null | undefined,
): string | null {
  if (metodo === 'non_stimabile') return null;
  if (min == null && max == null) return null;
  if (min != null && max != null && min !== max) return `${NF.format(min)} - ${NF.format(max)} €`;
  const single = (max ?? min) as number;
  return `${NF.format(single)} €`;
}
