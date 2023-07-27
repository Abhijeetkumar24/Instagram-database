import bcrypt from 'bcrypt';
import User from '../database/models/userModel';


const signupServices = async(username:string, email:string, password:string, name:string, bio:string, profileImage:string, created_at:Date) => {
    const hashedPassword = await bcrypt.hash(password , 2);
    
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        name,
        bio,
        profileImage,
        created_at
    });
    await newUser.save();
    return newUser;

}

export default signupServices;


