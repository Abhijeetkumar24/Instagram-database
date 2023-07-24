import  express  from "express";
import followController from '../controllers/followController'
import authMiddleware from "../middleware/authMiddleware";
import {followJoiMiddleware} from '../middleware/joiMiddleware';


const router = express.Router();

router.post('/',followJoiMiddleware, authMiddleware, followController);

export default router;



