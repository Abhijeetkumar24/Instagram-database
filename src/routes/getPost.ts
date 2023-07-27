import  express  from "express";
import getPostController from '../controllers/getPostController';
import authMiddleware from "../middleware/authMiddleware";
import redisMiddleWare from "../middleware/redisMiddleware";


const router = express.Router();

router.get('/' , authMiddleware, redisMiddleWare, getPostController);

export default router;
