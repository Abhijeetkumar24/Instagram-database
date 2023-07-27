
import signupController from '../controllers/signupController';
import express from "express";
import {signUpJoiMiddleware} from '../middleware/joiMiddleware';


const router = express.Router();



router.post('/' , signUpJoiMiddleware , signupController);

export default router;



// {
//     "username": "Abhijeet24",
//     "email": "abhijeet@gmail.com",
//     "password": "1234",
//     "name": "Abhijeet",
//     "bio": "Software engineer",
//     "profileImage": "https://example.com/profile-image/john123.jpg",
//     "created_at": "2021-01-15T09:30:00Z"
// }