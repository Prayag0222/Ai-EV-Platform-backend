import type { DiagnosticMeasurement } from "./diagnostic-state.js";

export interface DiagnosticUpdate {
  symptom: string | null;

  measurements: DiagnosticMeasurement[];

  observations: string[];

  newFacts: string[];

  missingInformation: string[];

  testResult: {
    testName: string;
    result: string;
  } | null;

  contradictions: string[];
}
