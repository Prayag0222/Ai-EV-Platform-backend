import express from 'express';
import {
  createTechnician,
  getAllTechnicians,
  updateTechnician,
  deleteTechnician,
  getMobileWorkspaceTicket,
  updateMobileTicketStatus,
  addMobileTicketNote,
  addUsedPartToTicket,
  removeUsedPartFromTicket,
  createManualNote,
  updateNote,
  deleteNote,
  updateRepairCosts
} from '../controllers/technician.Controller.js';

import { getAssignedTickets,updateTicketProgress } from '../controllers/technicianDashboard.Controller.js';
import { authMiddleware } from '../middlewares/auth.Middleware.js';
const router = express.Router();

router.use(authMiddleware)

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
router.delete('/workspace/:id/parts/:partId', removeUsedPartFromTicket);
router.patch('/workspace/:id/costs', updateRepairCosts);
// 🚀 Manual note CRUD endpoints
router.post('/workspace/:ticketId/notes/manual', createManualNote);
router.put('/notes/:noteId', updateNote);
router.delete('/notes/:noteId', deleteNote);














export default router;
