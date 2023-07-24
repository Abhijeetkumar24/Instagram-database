import { Request, Response } from "express";
import User from '../database/models/userModel';
import bcrypt from 'bcrypt';
// import jwtClass from "../middleware/jwtMiddleware";
import joiVerification from "../services/loginServices";
import jwt from "jsonwebtoken";

const loginController = async (req: Request, res: Response) => {

    const { error } = joiVerification(req.body);
    if (error) {
        return res.status(400).json({ error: "validation fail" });
    }

    try {
        const user = await User.findOne({ email: req.body.email});
        // console.log(req.body.email);
        // console.log(user);

        if (!user) {
            return res.status(401).json({ error: "Invalid email" });
        }

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(401).json({ error: "Invalid password" });
        }
        let secret = "this is my secret"; 
        let accessToken = jwt.sign({userId: user.id}, secret,{expiresIn:'1h'});


        res.status(200).json({ message: "Login successful", token: accessToken });
    } catch (err) {
        res.status(500).json({ message: "Error occurred" });
    }
};

export default loginController;
