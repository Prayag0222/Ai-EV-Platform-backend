import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';
import customerRoutes from './routes/customerRoutes.ts'
import ticketRoutes from './routes/ticketRoutes.ts'
import operationRoutes from './routes/operationRoutes.js';
// Add this to your imports at the top:
import inventoryRoutes from './routes/inventoryRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import technicianRoutes from './routes/technicianRoutes.ts';
import cors from 'cors';
import voiceNotes from './routes/voiceNotes.js'
import vehicleRoutes from './routes/vehicleRoutes.ts'
import ownersRoutes from './routes/ownersRoutes.ts'


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.get('/api/health',(req,res)=>(
    res.status(200).json({
        status:'active',
        message:'AI EV reapair backend engine is running smoothly !.'

    })
))
app.use(voiceNotes)
app.use('/api/auth', authRoutes)
app.use('/api/owner',customerRoutes)
app.use('/api/owner',ticketRoutes)
// 🛠️ OPERATIONAL DOMAIN LINK: Mount your greasy-hands technician workspace routes
app.use('/api/operation', operationRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/invoice', invoiceRoutes);
app.use('/api/technician', technicianRoutes);
app.use('/api/vehicles',vehicleRoutes)
app.use('/api/owner',ownersRoutes)

app.listen(PORT,()=>{
    console.log(`Industry grade server is running on port ${PORT}`)
})