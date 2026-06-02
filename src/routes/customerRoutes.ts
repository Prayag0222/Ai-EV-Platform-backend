import  express, { Router } from 'express'
import { createCustomer,getCustomer } from '../controllers/customerController.js'


const router = express.Router();


router.post('/createCustomer',createCustomer);
router.get('/getCustomer',getCustomer)


export default router;