import { Request, Response } from "express";
import  getPostService  from '../services/getPostService';

const getPostController = async (req: Request, res: Response) => {
  const { postId } = req.body;

  try {
    const result = await getPostService(postId);
    res.status(200).json({ message: "post fetch from mongodb", result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error in post fetching" });
  }
};

export default getPostController;
