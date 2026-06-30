import { Router } from "express";
import { getTechnicianVehiclesDashboard, getVehicleWorkspace, updateVehicleTelemetry, updateVehicleWorkspace } from "../controllers/vehiclesController.js";


const router = Router();

// 📡 FIXED: Added leading slashes and explicit dynamic path parameters
router.get("/dashboard/:id", getTechnicianVehiclesDashboard);
router.patch("/vehicle/tickets/:id", updateVehicleTelemetry);
router.get("/vehicle/workspace/:vehicleId",getVehicleWorkspace);
router.patch("/vehicle/workspace/:vehicleId",updateVehicleWorkspace)
export default router;