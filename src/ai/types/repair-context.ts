export interface RepairContext {
  repair: {
    id: number;
    issueCategory: string;
    description: string;
    status: string;
    priority: string;
    manufacturer: string | null;
  };

  customer: {
    name: string;
    phone: string;
  };

  vehicle: {
    vin: string;
    vehicleModel: string;
    manufacturer: string | null;
    modelYear: number | null;

    battery: {
      packSerial: string | null;
      capacity: string | null;
      soh: number | null;
      cycles: number | null;
      temperature: string | null;
    };

    motor: {
      serial: string | null;
      type: string | null;
      notes: string | null;
    };

    controller: {
      serial: string | null;
      version: string | null;
      notes: string | null;
    };

    healthScore: number | null;
  };

  technician: {
    name: string;
    specialization: string;
    experienceYears: number;
  } | null;

  notes: Array<{
    structuredText: string;
    quickTags: string[];
    createdAt: string;
  }>;

  timeline: Array<{
    status: string;
    createdAt: string;
  }>;

  parts: Array<{
    quantity: number;
    lockedCost: number;
  }>;
}