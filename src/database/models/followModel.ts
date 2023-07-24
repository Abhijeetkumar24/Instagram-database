import mongoose, { Document, Schema } from 'mongoose';

interface Follow extends Document {
  senderId: mongoose.Types.ObjectId;
  receiverId: mongoose.Types.ObjectId;
  status: string;
  created_at: Date;
}

const followSchema = new Schema<Follow>({
  senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<Follow>('Follow', followSchema);
