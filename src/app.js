import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js'

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health',(req,res)=>(
    res.status(200).json({
        status:'active',
        message:'AI EV reapair backend engine is running smoothly !.'

    })
))

app.use('/api/auth', authRoutes)

app.listen(PORT,()=>{
    console.log(`Industry grade server is running on port ${PORT}`)
})