import { Request ,Response } from "express";
import signupServices from "../services/signupServices";


const signupController = async (req: Request, res: Response) => {
    try{
        const {username, email, password, name, bio, profileImage, created_at} = req.body;

        const user = await signupServices(username, email, password, name, bio, profileImage, created_at);
        
        res.status(201).json({message: "Signup completed " ,user });
        

    }
    catch(err){
        console.log(err);
        res.status(400).json({message: err});
        
    }
}

export default signupController;