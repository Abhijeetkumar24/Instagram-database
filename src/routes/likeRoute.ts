import  express  from "express";
import likeController from '../controllers/likeController'
import authMiddleware from "../middleware/authMiddleware";
import {likeJoiMiddleware} from '../middleware/joiMiddleware';


const router = express.Router();

router.post('/',likeJoiMiddleware ,authMiddleware, likeController);

export default router;



