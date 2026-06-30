import { type Scheda, type ValoreMetodo } from './scheda-vocab';
export interface SchedaFragmentsInput {
    scheda: Scheda;
    valoreMin?: number | null;
    valoreMax?: number | null;
    valoreMetodo?: ValoreMetodo | null;
    baseUrl?: string;
}
export interface SchedaFragments {
    additionalProperty: Array<{
        '@type': 'PropertyValue';
        name: string;
        value: string;
    }>;
    estimatedCost?: {
        '@type': 'MonetaryAmount';
        currency: 'EUR';
        minValue: number;
        maxValue: number;
    };
    about: Array<{
        '@type': 'DefinedTerm';
        name: string;
        url?: string;
    }>;
}
export declare function schedaToSchemaFragments(input: SchedaFragmentsInput): SchedaFragments;
