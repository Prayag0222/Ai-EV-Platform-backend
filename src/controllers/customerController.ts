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
};

    export const deleteCustomer = async (req:Request,res:Response)=>{

        try {
            const { id } = req.params

            if(!id || typeof  id !== 'string'){
                return res.status(400).json({ error: 'Missing target record identifier parameters.' });
            }

            const existingCustomer = await prisma.customer.findUnique({
                    where: { id: id}
            });

            if (!existingCustomer) {
                return res.status(404).json({ error: 'Requested customer ledger entry was not found in database records.' });
    }
            await prisma.customer.delete({
                where: {id:id}
            })
            res.status(200).json({ 
            message: `Customer ${existingCustomer.name} has been securely purged from VoltOps registries.` 
    });
        } catch (error) {
            console.error('Database Deletion Error:', error);
    res.status(500).json({ error: 'System failed to execute customer deletion script layout.' });

        }
    }

// 🔄 UPDATE AN EXISTING CUSTOMER RECORD
export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, phone, vehicleModel, email, address } = req.body;

    // 1. 🛡️ TYPE NARROWING: Strictly verify that ID is a single, populated string primitive!
    // This removes string[], undefined, or blank entities completely before Prisma reads it.
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid or malformed record identifier format.' });
    }

    // 2. Data Validation: Ensure mandatory fields aren't empty
    if (!name || !phone || !vehicleModel) {
      return res.status(400).json({ error: 'Name, phone, and vehicle model fields cannot be empty.' });
    }

    // 3. DATABASE ACTION: Execute update via Prisma
    // Safe from exactOptionalPropertyTypes because 'id' is guaranteed to be a string primitive here!
    const updatedCustomer = await prisma.customer.update({
      where: { 
        id: id 
      },
      data: {
        name,
        phone,
        vehicleModel,
        email: email || null,     // Uses clean database null instead of undefined text strings
        address: address || null, // Uses clean database null instead of undefined text strings
      },
    });

    // 4. ⚡ SUCCESS RESPONSES: Must happen AFTER the database actions execution completes!
    return res.status(200).json({
      message: 'Customer records updated seamlessly.',
      customer: updatedCustomer,
    });

  } catch (error) {
    console.error('Database Update Error:', error);
    return res.status(500).json({ error: 'System failed to execute customer update transactions.' });
  }
};  
