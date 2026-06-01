import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


    interface AuthenticatedRequest extends Request {
        user?:{
            id:string;
            email:string;
            password:string;
        };
    }


export const authMiddleware = async (req: AuthenticatedRequest, res:Response,next:NextFunction) => {

    const token = req.cookies?.authToken || req.headers?.cookie?.split('authToken=')[1]?.split(';')[0];
    
    if(!token){
        return res.status(401).json({message:"access denied. Token is missing"});
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)as {
            id:string;
            email:string;
            password:string;
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