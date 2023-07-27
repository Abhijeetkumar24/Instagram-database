import Like from '../database/models/likeModel';

const likeService = async (userId:string, postId:string, created_at: Date) => {
    const newLike = new Like ({
        userId,
        postId,
        created_at
    })
    await newLike.save();
    return newLike

}

export default likeService;