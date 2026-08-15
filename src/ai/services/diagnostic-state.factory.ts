import type { DiagnosticState } from "../types/diagnostic-state.js";

export function createEmptyDiagnosticState(): DiagnosticState {
  return {
    currentSymptom: null,

    measurements: [],
    
    testsPerformed: [],

    observations: [],

    knownFacts: [],

    missingInformation: [],

    hypotheses: [],

    tests: [],

    currentDiagnosticStep: null,

    lastTestResult: null,

    overallConfidence: "LOW",

    updatedAt: new Date().toISOString(),
  };
}