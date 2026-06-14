import express from 'express';
import {
  createTechnician,
  getAllTechnicians,
  updateTechnician,
  deleteTechnician,
  getMobileWorkspaceTicket,
  updateMobileTicketStatus,
  addMobileTicketNote,
  addUsedPartToTicket 
} from '../controllers/technicianController.js';

import { getAssignedTickets,updateTicketProgress } from '../controllers/technicianDashboardController.js';
const router = express.Router();

router.post('/createTechnician', createTechnician);
router.get('/getAllTechnicians', getAllTechnicians);
// router.get('/:id', getTechnicianById);
router.put('/updateTechnician/:id', updateTechnician) ;
router.delete('/deleteTechnician/:id', deleteTechnician);
router.get('/dashboard', getAssignedTickets);
router.patch('/tickets/:id', updateTicketProgress);

router.get('/workspace/:id', getMobileWorkspaceTicket);
// 🚀 The new Status Update Route
router.patch('/workspace/:id/status', updateMobileTicketStatus);
// 🚀 The new Voice & Tags Route
router.post('/workspace/:id/notes', addMobileTicketNote);
// 🚀 The new Used Parts Inventory Route
router.post('/workspace/:id/parts', addUsedPartToTicket);
export default router;