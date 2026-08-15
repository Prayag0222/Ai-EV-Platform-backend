export const diagnosticUpdateSchema = {
  type: "object",
  properties: {
    symptom: {
      type: ["string", "null"],
    },

    measurements: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          value: {
            type: "number",
          },
          unit: {
            type: "string",
          },
          source: {
            type: "string",
            enum: [
              "TECHNICIAN",
              "DATABASE",
              "TEST_RESULT",
            ],
          },
          timestamp: {
            type: ["string", "null"],
          },
        },
        required: [
          "name",
          "value",
          "unit",
          "source",
          "timestamp",
        ],
      },
    },

    observations: {
      type: "array",
      items: {
        type: "string",
      },
    },

    newFacts: {
      type: "array",
      items: {
        type: "string",
      },
    },

    missingInformation: {
      type: "array",
      items: {
        type: "string",
      },
    },

    testResult: {
      type: ["object", "null"],
      properties: {
        testName: {
          type: "string",
        },
        result: {
          type: "string",
        },
      },
      required: [
        "testName",
        "result",
      ],
    },

    contradictions: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },

  required: [
    "symptom",
    "measurements",
    "observations",
    "newFacts",
    "missingInformation",
    "testResult",
    "contradictions",
  ],
} as const;