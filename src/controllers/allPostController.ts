// import { Request , Response } from "express"
// import allPostService from "../services/allPostService";
// import Post from '../database/models/postModel';


// const allPostController = async (req: Request, res: Response) => {
//     try{
//         // const {userId, image, caption} = req.body;
//         // const post = await allPostServices(userId, image, caption);
//         const allPosts = await allPostService(req, res);
//         // console.log(allPosts);
//         res.status(200).json({message: "all posts" , allPosts});

//     }catch(err){
//         res.status(400).json({message: "error in post creation"});

//     }

// }

// export default allPostController;
