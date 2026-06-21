import type { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';
import type { Role } from '../generated/client/index.js';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: Role;
  };
}

export const getProfile = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        shopName: true,
        shopAddress: true,
        gstNumber: true,
        shopPhone: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Get Profile Error:', error);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const updateProfile = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const {
      name,
      shopName,
      shopAddress,
      gstNumber,
      shopPhone,
    } = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: req.user.id,
      },
data: {
  ...(name !== undefined && { name }),
  ...(shopName !== undefined && { shopName }),
  ...(shopAddress !== undefined && { shopAddress }),
  ...(gstNumber !== undefined && { gstNumber }),
  ...(shopPhone !== undefined && { shopPhone }),
},
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        shopName: true,
        shopAddress: true,
        gstNumber: true,
        shopPhone: true,
      },
    });

    return res.status(200).json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Update Profile Error:', error);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};