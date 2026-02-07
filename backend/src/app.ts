import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rideRoutes from "./routes/ride.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/rides", rideRoutes);

export default app;
