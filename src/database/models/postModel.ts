import mongoose, { Document, Schema } from 'mongoose';

interface Post extends Document {
  userId: mongoose.Types.ObjectId;
  image: string;
  caption: string;
  likes: number;
  comments: object;
  created_at: Date;
}

const postSchema = new Schema<Post>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  image: { type: String, required: true },
  caption: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<Post>('Post', postSchema);
