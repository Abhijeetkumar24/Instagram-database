// import redis from 'redis';
// import Post from '../database/models/postModel';
// import { Request, Response } from 'express';


// const redisClient = redis.createClient();

// const allPostService = (req: Request , res:Response) =>{
//     redisClient.get('posts', async (err: any, cachedPosts: string) => {
//         if(cachedPosts){
//             const parsedPost = JSON.parse(cachedPosts);
//             res.status(200).json(parsedPost);
//         }
//         else{
//             try{
//                 const posts = await Post.find();
//                 redisClient.setex('posts', 300, JSON.stringify(posts));
//                 res.status(200).json(posts);
//             }
//             catch(err){
//                 res.status(500).json({message:  "Server Error"});
//             }
//         }
//     });

// };

// export default allPostService;
