import { Request , Response } from "express"
import followService from "../services/followService";


const followController = async (req: Request, res: Response) => {
    try{
        const {userId, receiverId, status, created_At} = req.body;             // userId = senderId
        const follow = await followService(userId, receiverId, status, created_At);
        res.status(200).json({message: "new follow created"});

    }catch(err){
        res.status(400).json({message: "error in follow "});

    }

}

export default followController;