import User from "../user/user.model.js";
import { hashPassword, comparePassword } from "../../utils/hash.js";
import { generateToken } from "../../utils/jwt.js";

export const signupService = async (data) => {
  const { name, email, password } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashed = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  const token = generateToken(user._id);

  return { user, token };
};

export const loginService = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken(user._id);

  return { user, token };
};