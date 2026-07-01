import {type Request, type Response } from 'express';
import { prisma } from '../config/prisma.js';
import jwt from 'jsonwebtoken';

// ============================================================
//  CREATE SHOP
//  Called once after owner logs in and hasShop = false
//  POST /api/shop/create
// ============================================================
export const createShop = async (req: Request, res: Response) => {
  try {
    const ownerId = (req as any).user?.id;
    console.log("req.user =", (req as any).user);
console.log("ownerId =", ownerId);

    if (!ownerId) {
      return res.status(401).json({ message: 'Unauthorized.' });
    }

    const { shopName, shopAddress, gstNumber, shopPhone } = req.body;

    if (!shopName || !shopAddress) {
      return res.status(400).json({ message: 'All shop fields are required.' });
    }

    // Check if owner already has a shop
    const existingShop = await prisma.shop.findUnique({
      where: { ownerId }
    });

    if (existingShop) {
      return res.status(400).json({ message: 'Shop already exists for this owner.' });
    }

    const shop = await prisma.shop.create({
      data: {
        shopName,
        shopAddress,
        gstNumber:gstNumber || null,
        shopPhone:shopPhone || null,
        ownerId
      }
    });
    const newToken = jwt.sign(
  { id: ownerId, email: (req as any).user?.email, role: (req as any).user?.role, shopId: shop.id },
  process.env.JWT_SECRET!,
  { expiresIn: '1d' }
);

// Replace the old cookie
res.cookie('authToken', newToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000
});



    return res.status(201).json({
      message: 'Shop created successfully.',
      shop: {
        id: shop.id,
        shopName: shop.shopName,
        shopAddress: shop.shopAddress,
        gstNumber: shop.gstNumber,
        shopPhone: shop.shopPhone
      }
    });

  } catch (error) {
    console.error('Create Shop error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// ============================================================
//  UPDATE SHOP
//  Owner can update their shop details anytime
//  PUT /api/shop/update
// ============================================================
export const updateShop = async (req: Request, res: Response) => {
  try {
    const ownerId = (req as any).user?.id;

    if (!ownerId) {
      return res.status(401).json({ message: 'Unauthorized.' });
    }

    const { shopName, shopAddress, gstNumber, shopPhone } = req.body;

    const updatedShop = await prisma.shop.update({
      where: { ownerId },
      data: {
        ...(shopName && { shopName }),
        ...(shopAddress && { shopAddress }),
        ...(gstNumber && { gstNumber }),
        ...(shopPhone && { shopPhone })
      }
    });

    return res.status(200).json({
      message: 'Shop updated successfully.',
      shop: {
        id: updatedShop.id,
        shopName: updatedShop.shopName,
        shopAddress: updatedShop.shopAddress,
        gstNumber: updatedShop.gstNumber,
        shopPhone: updatedShop.shopPhone
      }
    });

  } catch (error) {
    console.error('Update Shop error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// ============================================================
//  GET SHOP
//  Returns the owner's shop details
//  GET /api/shop
// ============================================================
export const getShop = async (req: Request, res: Response) => {
  try {
    const ownerId = (req as any).user?.id;

    if (!ownerId) {
      return res.status(401).json({ message: 'Unauthorized.' });
    }

    const shop = await prisma.shop.findUnique({
      where: { ownerId }
    });

    if (!shop) {
      return res.status(404).json({ message: 'Shop not found.', hasShop: false });
    }

    return res.status(200).json({
      hasShop: true,
      shop: {
        id: shop.id,
        shopName: shop.shopName,
        shopAddress: shop.shopAddress,
        gstNumber: shop.gstNumber,
        shopPhone: shop.shopPhone
      }
    });

  } catch (error) {
    console.error('Get Shop error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};