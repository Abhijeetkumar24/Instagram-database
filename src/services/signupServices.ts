import bcrypt from 'bcrypt';
import User from '../database/models/userModel';


/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API endpoints for user authentication
 */

/**
 * @swagger
 * path:
 *   /signup:
 *     post:
 *       summary: Register a new user
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 name:
 *                   type: string
 *                 bio:
 *                   type: string
 *                 profileImage:
 *                   type: string
 *               required:
 *                 - username
 *                 - email
 *                 - password
 *                 - name
 *       responses:
 *         201:
 *           description: User successfully registered
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   user:
 *                     type: object
 *         400:
 *           description: Error in signup process
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */

// The existing code for signupRoute.ts
// ...


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


