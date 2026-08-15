import "dotenv/config";

import { aiService } from "./index.js";

const ticketId = 1;

const context = {
  repair: {
    id: 1,
    issueCategory: "Battery problem",
    description: "Battery isn't working correctly",
    status: "PENDING",
    priority: "LOW",
    manufacturer: null,
  },

  customer: {
    name: "Anmol",
    phone: "8966332215",
  },

  vehicle: {
    vin: "VOLT-REG-32215-1786015096",
    vehicleModel: "Infinity PLsu",
    manufacturer: null,
    modelYear: null,

    battery: {
      packSerial: null,
      capacity: null,
      soh: null,
      cycles: null,
      temperature: null,
    },

    motor: {
      serial: null,
      type: null,
      notes: null,
    },

    controller: {
      serial: null,
      version: null,
      notes: null,
    },

    healthScore: null,
  },

  technician: {
    name: "Jhon",
    specialization: "GENERAL",
    experienceYears: 5,
  },

  notes: [],
  timeline: [],
  parts: [],
};

const response = await aiService.generateResponse(
  ticketId,
  context,
  "The battery is dropping to 57V under load. What should I check?"
);

console.log("\n===== VOLTOPS AI =====\n");
console.log(response);