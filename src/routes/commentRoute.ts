import  express  from "express";
import commentController from '../controllers/commentController'
import authMiddleware from "../middleware/authMiddleware";
import {commentJoiMiddleware} from '../middleware/joiMiddleware';


const router = express.Router();

router.post('/',commentJoiMiddleware, authMiddleware, commentController);

export default router;



