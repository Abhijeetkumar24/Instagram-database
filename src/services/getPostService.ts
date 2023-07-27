import Post from '../database/models/postModel';
import { createClient } from 'redis';

const getPostService = async (postId: any) => {
    const client = createClient();
    client.connect();

    try {
        const result = await Post.findOne({ _id: postId }).lean(); // Use `lean()` here
        //The .lean() method allows you to obtain plain JavaScript objects instead of Mongoose documents. 
        //It makes the query lean by removing all the Mongoose-specific properties, getters, setters, and other functionalities. 
        await client.set(postId, JSON.stringify(result));
        return result;
    } catch (err) {
        console.log(err);
        throw new Error("Error in post fetching from the service.");
    } finally {
        client.quit();
    }
};

export default getPostService;
