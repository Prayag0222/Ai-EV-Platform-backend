import express from 'express';
import {
  createTechnician,
  getAllTechnicians,
  updateTechnician,
  deleteTechnician
} from '../controllers/technicianController.js';

const router = express.Router();

router.post('/createTechnician', createTechnician);
router.get('/getAllTechnicians', getAllTechnicians);
// router.get('/:id', getTechnicianById);
router.put('/updateTechnician/:id', updateTechnician) ;
router.delete('/deleteTechnician/:id', deleteTechnician);

export default router;