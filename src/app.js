import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/auth.Routes.js';
import customerRoutes from './routes/customer.Routes.js'
import ticketRoutes from './routes/ticket.Routes.js'
import operationRoutes from './routes/operation.Routes.js';
import inventoryRoutes from './routes/inventory.Routes.js';
import invoiceRoutes from './routes/invoice.Routes.js';
import technicianRoutes from './routes/technician.Routes.js';
import cors from 'cors';
import voiceNotes from './routes/voiceNotes.js'
import vehicleRoutes from './routes/vehicle.Routes.js'
import ownersRoutes from './routes/owners.Routes.js'
import profileRoutes from './routes/profile.Routes.js';
import shopRoutes from './routes/shop.Routes.js'
import cookieParser from 'cookie-parser'



const app = express();

const PORT = process.env.PORT || 5000;
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((url) => url.trim()).filter(Boolean)
  : [];

console.log("CLIENT_URL:", process.env.CLIENT_URL);
console.log("CORS allowed origins:", allowedOrigins.length ? allowedOrigins : "any");

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use(cookieParser())  // ← must be BEFORE your routes


app.get('/api/health',(req,res)=>(
    res.status(200).json({
        status:'active',
        message:'AI EV reapair backend engine is running smoothly !.'

    })
))
app.use(voiceNotes)
app.use(['/api/auth', '/auth'], authRoutes)
app.use(['/api/owner', '/owner'], customerRoutes)
app.use(['/api/owner', '/owner'], ticketRoutes)
app.use(['/api/operation', '/operation'], operationRoutes);
app.use(['/api/inventory', '/inventory'], inventoryRoutes);
app.use(['/api/invoice', '/invoice'], invoiceRoutes);
app.use(['/api/technician', '/technician'], technicianRoutes);
app.use(['/api/vehicles', '/vehicles'], vehicleRoutes)
app.use(['/api/owner', '/owner'], ownersRoutes)
app.use(['/api/profile', '/profile'], profileRoutes);
app.use(['/api/shop', '/shop'], shopRoutes)

app.listen(PORT,()=>{
    console.log(`Industry grade server is running on port ${PORT}`)
})
