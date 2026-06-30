import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { Role } from '../generated/client/index.js';


    interface AuthenticatedRequest extends Request {
        user?:{
            id:string;
            email:string;
            role:Role;
             shopId: string | null;  // ← add this
        };
    }


export const authMiddleware = async (req: AuthenticatedRequest, res:Response,next:NextFunction) => {

     console.log("🍪 Cookies:", req.cookies)      // ← add this
  console.log("🔑 Token:", req.cookies?.authToken)  // ← add this

    const token = req.cookies?.authToken || req.headers?.cookie?.split('authToken=')[1]?.split(';')[0];
    
    if(!token){
        return res.status(401).json({message:"access denied. Token is missing"});
    }
    
    try{
        if(!process.env.JWT_SECRET){
        throw new Error("JWT Secret missing");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)as {
            id:string;
            email:string;
            role:Role
            shopId: string | null;  // ← add this
        }

        req.user = decoded;


        console.log("🔓 Verified Token Payload Data:", decoded);


                next();
    
    
    
    
    }

    
    catch(error){
    // If token exists, continue to next middleware
        console.error("❌ Token verification failed:", error);
        return res.status(401).json({message:"invalid token"});
    }

};