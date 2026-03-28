// src/modules/auth/auth.routes.js
import express from "express";
import { signup, login, getMe } from "./auth.controller.js";
import { protect } from "../../middleware/protect.js"; 

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", protect, getMe);

export default router;