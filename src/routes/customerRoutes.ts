import  express, { Router } from 'express'
import { createCustomer,getCustomer,deleteCustomer,updateCustomer } from '../controllers/customerController.js'


const router = express.Router();


router.post('/createCustomer',createCustomer);
router.get('/getCustomer',getCustomer)
router.delete('/deleteCustomer/:id',deleteCustomer)
router.put('/updateCustomer/:id', updateCustomer);


export default router;