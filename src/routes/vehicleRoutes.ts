import { Router } from "express";
import { getTechnicianVehiclesDashboard, updateVehicleTelemetry } from "../controllers/vehiclesController.js";

const router = Router();

// 📡 FIXED: Added leading slashes and explicit dynamic path parameters
router.get("/dashboard/:id", getTechnicianVehiclesDashboard);
router.patch("/vehicle/tickets/:id", updateVehicleTelemetry);

export default router;