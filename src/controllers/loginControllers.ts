import { Request, Response } from "express";
import  loginService  from '../services/loginServices';

const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await loginService(email, password);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred" });
    }
};

export default loginController;
