import { Request , Response } from "express"
import addPostServices from "../services/addPostServices";


const addPostController = async (req: Request, res: Response) => {
    try{
        const {userId, image, caption} = req.body;
        const post = await addPostServices(userId, image, caption);
        console.log(post);
        res.status(200).json({message: "new post created"});

    }catch(err){
        res.status(400).json({message: "error in post creation"});

    }

}

export default addPostController;