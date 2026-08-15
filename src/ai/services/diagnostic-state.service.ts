import type {
  DiagnosticState,
  DiagnosticTest,
} from "../types/diagnostic-state.js";
import type { DiagnosticUpdate } from "../types/diagnostic-update.js";

export class DiagnosticStateService {
  update(
    currentState: DiagnosticState,
    update: DiagnosticUpdate
  ): DiagnosticState {
    const now = new Date().toISOString();

    const measurements = [
      ...currentState.measurements,
      ...update.measurements,
    ];

    const observations = this.mergeUnique(
      currentState.observations,
      update.observations
    );

    const knownFacts = this.mergeUnique(
      currentState.knownFacts,
      update.newFacts
    );

    const missingInformation = this.mergeUnique(
      currentState.missingInformation,
      update.missingInformation
    );

    const tests = [...currentState.tests];

    if (update.testResult) {
      const test: DiagnosticTest = {
        id: crypto.randomUUID(),
        name: update.testResult.testName,
        purpose: "Captured from technician diagnostic activity.",
        status: "COMPLETED",
        measurements: update.measurements,
        result: update.testResult.result,
        performedAt: now,
      };

      tests.push(test);
    }

    return {
      ...currentState,

      currentSymptom:
        update.symptom ?? currentState.currentSymptom,

      measurements,

      observations,

      knownFacts,

      missingInformation,

      tests,

      lastTestResult:
        update.testResult?.result ??
        currentState.lastTestResult,

      updatedAt: now,
    };
  }

  private mergeUnique(
    existing: string[],
    incoming: string[]
  ): string[] {
    return Array.from(
      new Set([...existing, ...incoming])
    );
  }
}