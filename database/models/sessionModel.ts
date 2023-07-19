import mongoose, { Document, Schema } from 'mongoose';

interface Session extends Document {
  userId: mongoose.Types.ObjectId;
  token: string;
  created_at: Date;
  expires_at: Date;
}

const sessionSchema = new Schema<Session>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  token: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  expires_at: { type: Date },
});

export default mongoose.model<Session>('Session', sessionSchema);
