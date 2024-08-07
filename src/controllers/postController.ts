import { Request, Response } from "express";
import Post from "../models/Post";
import {
  createSchema,
  getAllPosttsQuerySchema,
  getSinglePostSchema,
} from "../schemas/postSchemas";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const query = getAllPosttsQuerySchema.parse(req.query);
    const page = query.page || 1;
    const limit = query.limit || 10;
    const startIndex = (page - 1) * limit;
    const posts = await Post.find().skip(startIndex).limit(limit);
    const count = await Post.countDocuments();
    const total_pages = count < limit ? 1 : Math.ceil(count / limit);
    
    res.status(200).json({
      message: "Opeartion Successfull",
      result: {
        items: posts,
        meta: {
          total_items: count,
          item_count: posts.length,
          items_per_page: limit,
          current_page: page,
          total_pages,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export const createPort = async (req: Request, res: Response) => {
  try {
    const body = createSchema.parse(req.body);
    await Post.create(body);
    res.status(200).json({
      message: "Operation Successfull",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const params = getSinglePostSchema.parse(req.params);
    const post = await Post.findById(params.id);
    if (!post) {
      res.status(404).json({
        message: "Post Not Found with id " + params.id,
      });
    } else {
      res.status(200).json({
        message: "Operation Successfull",
        result: post,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const body = createSchema.parse(req.body);
    const params = getSinglePostSchema.parse(req.params);
    const exists = await Post.findById(params.id);
    if (exists) {
      const post = await Post.findByIdAndUpdate(params.id, body, { new: true });
      res.status(200).json({
        message: "Operation successfull",
        result: post,
      });
    } else {
      res.status(404).json({ message: "Post Not Found with id " + params.id });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const params = getSinglePostSchema.parse(req.params);
    const exists = await Post.findById(params.id);
    if (exists) {
      await Post.findByIdAndDelete(params.id);
      res.status(200).json({
        message: "Operation Successfull",
      });
    } else {
      res.status(404).json({
        message: "Post Not Found with id " + params.id,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
