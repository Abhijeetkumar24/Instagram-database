import Post from '../database/models/postModel';

const addPostServices = async (userId:string, image:string, caption:string ) => {
    const newPost = new Post ({
        userId,
        image,
        caption
    })
    await newPost.save();
    return newPost

}

export default addPostServices;