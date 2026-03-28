import express from "express";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/auth.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import cors from "cors";
dotenv.config();

const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

export default app;