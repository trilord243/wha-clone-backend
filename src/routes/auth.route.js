import express from "express";
import trimRequest from "trim-request";
import {
  register,
  login,
  logout,
  refreshToken,
} from "../controller/auth.controller.js";

const router = express.Router();
router.route("/login").post(trimRequest.all, login);
router.route("/register").post(trimRequest.all, register);
router.route("/logout").post(trimRequest.all, logout);
router.route("/refreshToken").post(trimRequest.all, refreshToken);

export default router;
