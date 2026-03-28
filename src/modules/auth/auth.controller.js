// src/modules/auth/auth.controller.js
import { signupService, loginService } from "./auth.service.js";
import User from "../user/user.model.js"; // Add this import

export const signup = async (req, res) => {
  try {
    const data = await signupService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginService(req.body);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    // The user is already attached by the protect middleware
    // req.user contains the full user object from the database
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    // req.user already has password removed by the middleware
    res.json(req.user);
  } catch (error) {
    console.error("Get me error:", error);
    res.status(500).json({ message: "Server error" });
  }
};