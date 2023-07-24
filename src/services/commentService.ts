import { Schema } from 'mongoose';
import Comment from '../database/models/commentModel';


const commentService = async (userId:Schema.Types.ObjectId , postId: Schema.Types.ObjectId, text:string, created_at:Date) => {
    const newComment = new Comment ({
        userId,
        postId,
        text,
        created_at,
    })
    await newComment.save();
    return newComment

}

export default commentService;