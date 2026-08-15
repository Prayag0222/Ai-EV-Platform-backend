import "dotenv/config";
import { DiagnosticExtractorService } from "./services/diagnostic-extractor.service.js";

const extractor = new DiagnosticExtractorService();

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

const technicianMessage =
  "Battery 65V hai, throttle dene pe 57V tak gir rahi hai aur BMS me ek cell 2.9V dikha raha hai. Bike acceleration pe cut ho rahi hai.";

const result = await extractor.extract(
  technicianMessage,
  context
);

console.log("\n===== DIAGNOSTIC UPDATE =====\n");

console.log(
  JSON.stringify(result, null, 2)
);