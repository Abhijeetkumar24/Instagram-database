import { Request , Response } from "express"
import likeService from "../services/likeService";


const likeController = async (req: Request, res: Response) => {
    try{
        const {userId, postId, created_At} = req.body;
        const like = await likeService(userId, postId, created_At);
        res.status(200).json({message: "new like created"});

    }catch(err){
        res.status(400).json({message: "error in like creation"});

    }

}

export default likeController;