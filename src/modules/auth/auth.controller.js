import { signupService, loginService } from "./auth.service.js";

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