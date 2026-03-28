import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlog,
} from "./blog.controller.js";
import { protect } from "../../middleware/protect.js";


const router = express.Router();
router.post("/", protect, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlog);

export default router;