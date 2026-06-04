import {  prisma } from '../config/prisma.js'
import { type Request, type Response } from 'express'




export const createCustomer = async (req: Request, res: Response) => {

try{

    const {name , phone , vehicleModel, email , address} = req.body

    if(!name || !phone || !vehicleModel){
        return res.status(400).json({message:"Missing required fields: name, phone, vehicleModel"})
    }
    const existingCustomer = await prisma.customer.findFirst({
        where:{phone:phone}
    });

    // 3. Optional Sanity Check (Optional): If an email was typed, make sure it has an @ symbol
    if (email && !email.includes('@')) {
        return res.status(400).json({ error: 'Provided text format is not a valid email address sequence.' });
    }

    if(existingCustomer){
        return res.status(400).json({ message: 'This customer is already registered' });

    }

    const newCustomer = await prisma.customer.create({
        data:{
            name:name,
            phone:phone,
            vehicleModel:vehicleModel,
            // ⚡ Prisma Power: If email or address are empty strings or missing altogether, 
             // passing them here as undefined/null tells Prisma to safely mark them as NULL in Postgres!
            email: email || null, 
            address: address || null,
        }
    })

    return res.status(201).json({message: 'Customer created successfully', newCustomer})

}catch(error){
    console.error('Error creating customer:', error)
    return res.status(500).json({message: 'Error creating customer', error})

}
}


export const getCustomer = async (req:Request,res:Response) =>{

    try {
        const customers = await prisma.customer.findMany({
            orderBy:{
                id:'desc'
            }
        })
        res.status(200).json({message:'Customers fetched',customers});
    } catch (error) {
        console.error('Database Fetch Error:', error);
    res.status(500).json({ error: 'Failed to retrieve customer directory records.' });
    }
    
}
