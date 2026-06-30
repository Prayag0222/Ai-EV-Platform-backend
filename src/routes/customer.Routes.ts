import  express, { Router } from 'express'
import { createCustomer,getCustomer,deleteCustomer,updateCustomer } from '../controllers/customer.Controller.js'
import { authMiddleware } from '../middlewares/auth.Middleware.js';


const router = express.Router();

router.use(authMiddleware)


router.post('/createCustomer',createCustomer);
router.get('/getCustomer',getCustomer)
router.delete('/deleteCustomer/:id',deleteCustomer)
router.put('/updateCustomer/:id', updateCustomer);


export default router;