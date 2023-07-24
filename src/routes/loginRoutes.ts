import loginController from '../controllers/loginControllers';
import express from "express";
import {loginJoiMiddleware} from '../middleware/joiMiddleware';


const router = express.Router();

router.post('/' ,loginJoiMiddleware ,loginController);

export default router;