import { Request , Response } from "express"
import commentService from "../services/commentService";


const commentController = async (req: Request, res: Response) => {
    try{
        const {userId, postId, text, created_At} = req.body;
        const comment = await commentService(userId, postId, text, created_At);
        res.status(200).json({message: "new comment created"});

    }catch(err){
        res.status(400).json({message: "error in comment creation"});

    }

}

export default commentController;