import User from '../database/models/userModel';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import sessionModel from "../database/models/sessionModel";
import { createClient } from "redis";

const client = createClient();
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

const loginService = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "Invalid email" };
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return { error: "Invalid password" };
    }

    const secret = "this is my secret"; 
    const accessToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

    const session_payload: any = {
      userId: user.id,
      isSessionActive: true
    };

    await sessionModel.insertMany([session_payload]);
    console.log(session_payload);

    return { message: "Login successful and session created", token: accessToken };
  } catch (err) {
    throw new Error("Error occurred");
  }
};

export default loginService ;
