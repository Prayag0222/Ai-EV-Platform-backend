import { Router } from "express";
import { getTechnicianVehiclesDashboard, getVehicleWorkspace, updateVehicleTelemetry, updateVehicleWorkspace } from "../controllers/vehicles.Controller.js";


const router = Router();

router.get("/dashboard/:id", getTechnicianVehiclesDashboard);
router.patch("/vehicle/tickets/:id", updateVehicleTelemetry);
router.get("/vehicle/workspace/:vehicleId",getVehicleWorkspace);
router.patch("/vehicle/workspace/:vehicleId",updateVehicleWorkspace)
export default router;
