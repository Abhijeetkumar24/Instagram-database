import signupRoute from './signupRoutes';
import loginRoute from './loginRoutes';
import addPostRoute from './addPostRoute';
import commentRoute from './commentRoute';
import followRoute from './followRoute';
import likeRoute from './likeRoute';
import sessionRoute from './sessionRoute';
// import allpost from './allPost';
import express from "express";


const router = express.Router();




router.use('/signup', signupRoute);
router.use('/login', loginRoute);
router.use('/addPost', addPostRoute);
router.use('/comment', commentRoute);
router.use('/follow', followRoute);
router.use('/like', likeRoute);
router.use('/session', sessionRoute);
//router.use('/allpost', allpost);


export default router;

