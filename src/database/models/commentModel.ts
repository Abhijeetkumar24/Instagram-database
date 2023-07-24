import mongoose, { Document, Schema } from 'mongoose';

interface Comment extends Document {
  userId: mongoose.Types.ObjectId;
  postId: mongoose.Types.ObjectId;
  text: string;
  created_at: Date;
}

const commentSchema = new Schema<Comment>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  text: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<Comment>('Comment', commentSchema);
