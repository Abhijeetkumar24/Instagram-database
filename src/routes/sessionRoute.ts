import  express  from "express";
import sessionController from '../controllers/sessionController'
import authMiddleware from "../middleware/authMiddleware";
import {sessionJoiMiddleware} from '../middleware/joiMiddleware';


const router = express.Router();

router.post('/',sessionJoiMiddleware ,authMiddleware, sessionController);

export default router;



