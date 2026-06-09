import type { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';

// Explicit interfaces for strictly checking incoming payload shapes
interface CreateTechnicianInput {
  fullName: string;
  email: string;
  phone: string;
  employeeId: string;
  specialization: 'BATTERY' | 'MOTOR' | 'CONTROLLER' | 'GENERAL_EV';
  experienceYears: string;
  address?: string;
  profileImage?: string;
}

// ==========================================
// 1. CREATE A NEW TECHNICIAN (POST)
// ==========================================
export const createTechnician = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { 
      fullName, 
      email, 
      phone, 
      employeeId, 
      specialization, 
      experienceYears, 
      address, 
      profileImage 
    }: CreateTechnicianInput = req.body;

    
    // Validation Guard: Ensure all non-nullable payload keys are provided
    if (!fullName || !email || !phone || !employeeId || !specialization || experienceYears === undefined || experienceYears === null) {
      return res.status(400).json({ message: 'Missing required technician account fields.' });
    }



    // Uniqueness Safety Check: Prevent accidental data duplication
    const duplicateCheck = await prisma.technician.findFirst({
      where: {
        OR: [
          { email: email.toLowerCase().trim() },
          { employeeId: employeeId.trim() }
        ]
      }
    });

    if (duplicateCheck) {
      return res.status(400).json({ message: 'A technician with this email or Employee ID already exists.' });
    }

    const newTechnician = await prisma.technician.create({
      data: {
        fullName,
        email ,
        phone,
        employeeId,
        specialization,
        experienceYears,
        address: address || null,
        profileImage: profileImage || null
      }
    });

    return res.status(201).json({
      message: 'Technician registered successfully.',
      technician: newTechnician
    });
  } catch (error) {
    console.error('Create Technician Error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};




export const getAllTechnicians = async (req: Request, res: Response): Promise<Response> => {
  try {
    // We removed the 'include' block so TypeScript stops complaining
    const technicians = await prisma.technician.findMany();

    return res.status(200).json(technicians);
  } catch (error) {
    console.error('Get All Technicians Error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};



export const updateTechnician = async (req: Request, res: Response): Promise<Response> => {
  try {
    // 1. Grab the raw ID from Express parameters
    const idParam = req.params.id;
    
    // 2. Unpack it if it is accidentally wrapped in a list/array
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    // 🚨 NEW FIX: The TypeScript Guard! 
    // This removes 'undefined' and proves to the compiler that 'id' is strictly a string.
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'A valid technician ID parameter is required.' });
    }

    // 3. Capture the updates object from the form body safely
    const updates = req.body;

    // 4. Clean up unique fields safely if they are strings
    if (typeof updates.email === 'string') {
      updates.email = updates.email.toLowerCase().trim();
    }
    if (typeof updates.employeeId === 'string') {
      updates.employeeId = updates.employeeId.trim();
    }

    // 5. Fix optional fields so they match what Prisma expects (string or null)
    if (updates.address === '' || updates.address === undefined) {
      updates.address = null;
    } else if (Array.isArray(updates.address)) {
      updates.address = updates.address[0];
    }

    if (updates.profileImage === '' || updates.profileImage === undefined) {
      updates.profileImage = null;
    } else if (Array.isArray(updates.profileImage)) {
      updates.profileImage = updates.profileImage[0];
    }

    // 6. Tell Prisma to update the record. (This will compile cleanly now!)
    const updatedTechnician = await prisma.technician.update({
      where: { id }, // TypeScript is happy now because 'id' is guaranteed to be a string
      data: updates
    });

    // 7. Return the successful response
    return res.status(200).json({
      message: 'Technician record updated successfully.',
      technician: updatedTechnician
    });

  } catch (error) {
    console.error('Update Technician Error:', error);
    return res.status(500).json({ message: 'Failed to modify technician record.' });
  }
};


export const deleteTechnician = async (req: Request, res: Response): Promise<Response> => {
  try {
    // 1. Grab the raw ID from the dynamic URL parameter
    const idParam = req.params.id;
    
    // 2. Safety Check: Extract the string if it is inside a list/array
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    // 3. The TypeScript Guard: Proves to the compiler that 'id' is strictly a string
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'A valid technician ID parameter is required.' });
    }

    // 🚨 NEW CHECK: Look up the technician first before trying to delete!
    const existingTechnician = await prisma.technician.findUnique({
      where: { id }
    });

    // If the record does not exist in the table, return a nice error to the user
    if (!existingTechnician) {
      return res.status(404).json({ message: 'Technician profile not found or already deleted.' });
    }

    // 4. Instruct Prisma to erase them from the table (Safe to do now!)
    await prisma.technician.delete({
      where: { id }
    });

    // 5. Send back a clean validation message to the frontend
    return res.status(200).json({ 
      message: 'Technician permanently removed from database ecosystem.' 
    });

  } catch (error) {
    console.error('Delete Technician Error:', error);
    return res.status(500).json({ message: 'Failed to purge technician data.' });
  }
};