import { Document } from 'mongoose';

export interface User extends Document {
  id?: String;
  googleId: String;
  name: String;
  email: String;
  picture: String;
}
