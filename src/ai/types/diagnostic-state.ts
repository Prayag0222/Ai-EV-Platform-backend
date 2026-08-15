export type DiagnosticConfidence =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export type DiagnosticHypothesisStatus =
  | "POSSIBLE"
  | "LIKELY"
  | "TESTING"
  | "CONFIRMED"
  | "RULED_OUT";

export interface DiagnosticMeasurement {
  name: string;
  value: number;
  unit: string;
  source: "TECHNICIAN" | "DATABASE" | "TEST_RESULT";
  timestamp: string | null;
}

export interface DiagnosticHypothesis {
  cause: string;
  status: DiagnosticHypothesisStatus;
  confidence: DiagnosticConfidence;
  reasoning: string;
}

export interface DiagnosticState {
  currentSymptom: string | null;

  measurements: DiagnosticMeasurement[];

  observations: string[];

  knownFacts: string[];

  missingInformation: string[];

  hypotheses: DiagnosticHypothesis[];

  testsPerformed: string[];

  tests: DiagnosticTest[];

  currentDiagnosticStep: string | null;

  lastTestResult: string | null;

  overallConfidence: DiagnosticConfidence;

  updatedAt: string;
}

export type DiagnosticTestStatus =
  | "PLANNED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "SKIPPED";

export interface DiagnosticTest {
  id: string;
  name: string;
  purpose: string;
  status: DiagnosticTestStatus;

  measurements: DiagnosticMeasurement[];

  result: string | null;

  performedAt: string | null;
}