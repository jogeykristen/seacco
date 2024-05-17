import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  picture: String,
});
