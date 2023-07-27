import { Request, Response ,NextFunction } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";


const authMiddleware = async (req: Request, res: Response, next:NextFunction) => {
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({error: "Header not found"});
    }

    const token = header.split(' ')[1];

    try{
        const decodedToken = <JwtPayload>jwt.verify(token, 'this is my secret') ;
        req.body.userId = decodedToken?.userId;        // request ke body me userId key ko add krege agar nhi hoga agar hoga to phir 
                                  // usme decodedToken me se userId assign kr dege,(?.) optional chaining mtlb agar mtlb agar exist 
                                   // nhi hoga decoded token to null or error nhi dega
                         
        next();

    }catch(error){
        res.status(403).json({error: "Authentication fail. Invalid token"});
    }

}

export default authMiddleware;


// import { Request, Response ,NextFunction } from "express";
// import jwt, { JwtPayload }  from "jsonwebtoken";
// import { createClient } from "redis";
// import sessionModel  from "../database/models/sessionModel";

// const client = createClient()

// const authMiddleware = async (req: Request, res: Response, next:NextFunction) => {
//     const header = req.headers.authorization;
//     if(!header){
//         return res.status(401).json({error: "Header not found"});
//     }

//     const token = header.split(' ')[1];

//     try{
//         const decodedToken = <JwtPayload>jwt.verify(token, 'this is my secret') ;
//         req.body.userId = decodedToken?.userId;        // request ke body me userId key ko add krege agar nhi hoga agar hoga to phir 
//                                   // usme decodedToken me se userId assign kr dege,(?.) optional chaining mtlb agar mtlb agar exist 
//                                   // nhi hoga decoded token to null or error nhi dega
//         console.log(decodedToken?.userId);
//         if(decodedToken?.userId){
//             console.log("hello");
//             let findSession:any = await client.get(`${decodedToken?.userId}_session`) || await sessionModel.find({userId: decodedToken?.userId})
//             console.log(findSession);

//         }                        
//         next();

//     }catch(error){
//         res.status(403).json({error: "Authentication fail. Invalid token"});
//     }

// }

// export default authMiddleware;


// import { NextFunction, Request, Response } from "express";
// import jwt from 'jsonwebtoken';
// import { createClient } from "redis";
// import sessionModel  from "../database/models/sessionModel";

// const client = createClient()

// client.on("error", (err) => console.log("Redis Client Error", err));
// client.connect();
// export default  async function auth(req:Request,res:Response,next:NextFunction){
//     const token: any = req.headers.authorization;
//     const verifyToken :any = jwt.verify(token,'this is my secret');
    
//     if(verifyToken.id){
//         let findSession:any = await client.get(`${verifyToken.id}_session`) || await sessionModel.find(verifyToken.id)

//         if(findSession.length!=0){
//             req.body.id= verifyToken.id;
//             next()
//         }else{
//             res.send("Session out")
//         }


//     }else{
//         res.send({message:"invalid token"})
//     }

// }