import  express  from "express";
import addPostController from '../controllers/addPostController';
import authMiddleware from "../middleware/authMiddleware";
import {addPostJoiMiddleware} from '../middleware/joiMiddleware';

const router = express.Router();

router.post('/' , addPostJoiMiddleware, authMiddleware, addPostController);

export default router;



// {
//     "userId": "64b898ba9510a6c2cf2d1202", 
//     "image": "https://example.com/image.jpg",
//     "caption": "Beautiful sunset"
//   }