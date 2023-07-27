import Follow from '../database/models/followModel';
import { Schema } from 'mongoose';


const followService = async (senderId:Schema.Types.ObjectId, receiverId:Schema.Types.ObjectId, status:string, created_at: Date) => {
    const newFollow = new Follow ({
        senderId,
        receiverId,
        status,
        created_at
    })
    await newFollow.save();
    return newFollow

}

export default followService;