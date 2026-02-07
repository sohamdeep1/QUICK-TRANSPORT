import { Router } from "express";
import {
  createRide,
  assignCaptain,
  updateRideStatus
} from "../controllers/ride.controller";

const router = Router();

router.post("/", createRide);
router.patch("/:id/assign", assignCaptain);
router.patch("/:id/status", updateRideStatus);

export default router;
