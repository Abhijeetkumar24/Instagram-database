import { Request, Response, NextFunction } from 'express';
import { createClient } from 'redis';



const redisMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
   
    const {postId} = req.body;
    
    try {
        const client = createClient();
        await client.connect();
        const result= await client.get(postId);
       
        if(result){
            console.log("data fetch from redis");
            const answer = JSON.parse(result);
            res.status(200).json({message: "data fetch from redis", answer} );
        }
        else{
            next();
        }
    }
    catch (err) {
        console.log("error message: ", err);
    }
} 

export default redisMiddleWare;











