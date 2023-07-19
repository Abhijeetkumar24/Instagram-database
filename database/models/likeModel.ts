import mongoose, { Document, Schema } from 'mongoose';

interface Like extends Document {
  userId: mongoose.Types.ObjectId;
  postId: mongoose.Types.ObjectId;
  created_at: Date;
}

const likeSchema = new Schema<Like>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<Like>('Like', likeSchema);
