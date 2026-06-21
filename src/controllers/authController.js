import { prisma } from '../config/prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Imported for secure session signing
import { Role } from '../generated/client/client.js';

/**
 * @desc   Register a new user account
 * @route  POST /api/auth/signup
 */
export const signupUser = async (req, res) => {
  try {
    const { email, name, password, role } = req.body;
    console.log("Received role:", role);

  if(role && !Object.values(Role).includes(role))
  {
     return res.status(400).json({
        message:"Invalid role."});
  }

    if (!email || !name || !password) {
      return res.status(400).json({ message: 'Missing required account fields' });
    }
      const normalizedEmail =
        email.toLowerCase().trim();
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'This email is already registered' });
    }

    // Keep your brother's salt rounds at 12 as verified on your database push
    const saltRounds = 12;
    const hashedResponse = await bcrypt.hash(password, saltRounds);

    // Safe handling for role conversion to avoid crashes if role is missing
    const finalRole = role || Role.USER;

    const newuser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedResponse,
        role: finalRole
      }
    });

    return res.status(201).json({
      message: 'Account created successfully',
      user: {
        id: newuser.id,
        email: newuser.email,
        name: newuser.name,
        role: newuser.role
      }
    });

  } catch (error) {
    console.error('Signup Controller error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * @desc   Authenticate user credentials & establish session validation
 * @route  POST /api/auth/login
 */
export const loginUser = async (req, res) => {
  try {
    // 1. Extract plain-text login variables from the incoming request body
    const { email, password } = req.body;

    // 2. Validate inputs: Ensure both tracking fields are provided
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email and password are required fields.' 
      });
    }

    // 3. Database Lookup: Locate the specific user account using Prisma
    const user = await prisma.user.findUnique({
      where: { email: email.trim() } 
    });

    // 4. Uniform Security Boundary: Prevent user enumeration
    if (!user) {
      return res.status(401).json({ 
        message: 'Invalid email or password credentials.' 
      });
    }

    // 5. Password Evaluation: Compare raw text with database hash
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ 
        message: 'Invalid email or password credentials.' 
      });
    }


    if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing");
}
    // 6. GENERATE THE JWT TOKEN DYNAMICALLY
    // We bundle the user metadata securely inside the token signature
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // Session card automatically invalidates after 24 hours
    );

    // 7. INJECT THE JWT INTO AN HTTP-ONLY COOKIE ENVELOPE
    res.cookie('authToken', token, {
      httpOnly: true,                      // Absolutely blocks client-side browser JS from stealing the token
      secure: process.env.NODE_ENV === 'production', // Transmit only over HTTPS in active production
      sameSite: 'lax',                     // Clean defense blocking Cross-Site Request Forgery (CSRF)
      maxAge: 24 * 60 * 60 * 1000          // Lifespan set to match 1 day in clean milliseconds
    });

    // 8. Success Response: Return user data (The token stays hidden inside the cookie headers!)
    return res.status(200).json({
      message: 'Login successful!',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        shopName: user.shopName,
        shopAddress: user.shopAddress,
        gstNumber: user.gstNumber,
        shopPhone: user.shopPhone
      }
    });

  } catch (error) {
    console.error('Login Controller error:', error);
    return res.status(500).json({ 
      message: 'Internal server error. Please try again later.' 
    });
  }
};





// ============================================================
// PROFILE VERIFICATION CONTROLLER
// ============================================================
export const getCurrentUser = async (req, res) => {
  try {
    // 1. Extract the credential User ID verified by your authMiddleware
    const authUserId = req.user?.id;

    if (!authUserId) {
      return res.status(401).json({ error: "Unauthorized. Session identity missing." });
    }

    // 2. Fetch the base credentials account from the User table
    const userAccount = await prisma.user.findUnique({
      where: { id: authUserId }
    });

    if (!userAccount) {
      return res.status(404).json({ error: "User login account records not found." });
    }

    // 🎯 THE GOLDEN BRIDGE FIX:
    // This variable starts as the userAccount ID (perfect for Owners)
    let targetWorkspaceId = userAccount.id;

    // If the logging-in user is a TECHNICIAN, discover their real Profile ID!
    if (userAccount.role === 'TECHNICIAN') {
      const technicianProfile = await prisma.technician.findFirst({
        where: { email: userAccount.email.toLowerCase().trim() }
      });

      if (technicianProfile) {
        // OVERWRITE the returned ID with the ID that the repairTicket table uses!
        targetWorkspaceId = technicianProfile.id; 
      }
    }

    // 3. Return the payload. The frontend gets the exact ID it needs to query tickets!
    return res.status(200).json({
      success: true,
      user: {
        id: targetWorkspaceId, // ⚡ Switches dynamically to Technician ID or User ID based on role
        name: userAccount.name,
        email: userAccount.email,
        role: userAccount.role
      }
    });

  } catch (error) {
    console.error("Profile Resolution Gateway Mismatch Error:", error);
    return res.status(500).json({ error: "Internal server data compilation error." });
  }
};

