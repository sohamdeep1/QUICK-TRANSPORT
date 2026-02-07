import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const createRide = async (req: Request, res: Response) => {
  const { riderId, pickupLat, pickupLng, dropLat, dropLng } = req.body;

  const ride = await prisma.ride.create({
    data: {
      riderId,
      pickupLat,
      pickupLng,
      dropLat,
      dropLng
    }
  });

  res.status(201).json(ride);
};

export const assignCaptain = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { captainId } = req.body;

    const rideExists = await prisma.ride.findUnique({
      where: { id }
    });

    if (!rideExists) {
      return res.status(404).json({ message: "Ride not found" });
    }

    const ride = await prisma.ride.update({
      where: { id },
      data: {
        captainId,
        status: "ACCEPTED"
      }
    });

    return res.json(ride);
  } catch (error) {
    return res.status(500).json({ message: "Failed to assign captain" });
  }
};

export const updateRideStatus = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { status } = req.body;

  const ride = await prisma.ride.update({
    where: { id },
    data: { status }
  });

  res.json(ride);
};
