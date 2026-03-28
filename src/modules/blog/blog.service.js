import Blog from "./blog.model.js";

export const createBlogService = async (data, userId) => {
  const blog = await Blog.create({
    ...data,
    author: userId,
  });

  return blog;
};

export const getAllBlogsService = async () => {
  return Blog.find()
    .populate("author", "name email")
    .sort({ createdAt: -1 });
};

export const getSingleBlogService = async (id) => {
  return Blog.findById(id).populate("author", "name email");
};