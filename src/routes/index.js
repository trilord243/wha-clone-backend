import express from "express";
import autRoutes from "./auth.route.js";
const router = express.Router();
router.use("/", autRoutes);

export default router;
