import {prisma} from '../config/prisma.js';
import bcrypt from 'bcrypt';


export const signupUser = async(req,res)=>{
 try{
    const {email,name,password,role} = req.body;

    if(!email || !name || !password){
           return res.status(400).json({message:'missin required account fields'})
    }
     

    const existingUser = await prisma.user.findUnique({
        where:{email:email}
    });

    if (existingUser)
        return res.status(400).json({message:'this email is already registered'})

    const saltRounds =12;
    const hsashedPAssword = await bcrypt.hash(password,saltRounds);

    const newuser = await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:hsashedPAssword,
            role:role || 'USER'
        }
    });

    return res.status(201).json({ message:'Account created succesfully ',
        user:{
            id:newuser.id,
            email:newuser.email,
            name:newuser.name,
            role:newuser.role
        }
    });
 }

 catch (error){
    console.error('Signup Controller error', error )
    return res.status(500).json({messaage:'internal server error '})
 }
}