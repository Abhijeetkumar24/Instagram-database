import { Request , Response } from "express"
import sessionService from "../services/sessionService";


const sessionController = async (req: Request, res: Response) => {
    try{
        const {userId, created_At, expires_at} = req.body;
        const header = req.headers.authorization;
        
        if(!header){
            return res.status(401).json({error: "Header not found"});
        }
    
        const token = header.split(' ')[1];


        const session = await sessionService(userId, token, created_At, expires_at);
        res.status(200).json({message: "new session created"});

    }catch(err){
        res.status(400).json({message: "error in session creation"});

    }

}

export default sessionController;