import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  username: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  profileImage: string;
  created_at: Date;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<User>('User', userSchema);
