// src/models/accountModel.ts
import {
  connLocal,
  mongoose
} from '../utils/db';

const { Schema, Document } = mongoose

export interface IUser extends Document {
  _id: String;
  username: String;
  email: String;
}

const userSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    email: { type: String, required: true },
    username: { type: String}
  },
  { collection: 'users', timestamps: true }
);

// const UserModel = connLocal.model('users', userSchema);

export default mongoose.model<IUser>('users', userSchema);

// export default UserModel;
