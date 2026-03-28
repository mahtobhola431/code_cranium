import {
  createBlogService,
  getAllBlogsService,
  getSingleBlogService,
} from "./blog.service.js";

export const createBlog = async (req, res) => {
  try {
    const blog = await createBlogService(req.body, req.user.userId);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllBlogs = async (req, res) => {
  const blogs = await getAllBlogsService();
  res.json(blogs);
};

export const getBlog = async (req, res) => {
  const blog = await getSingleBlogService(req.params.id);
  res.json(blog);
};