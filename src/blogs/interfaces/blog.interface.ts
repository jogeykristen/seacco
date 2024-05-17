import { Document } from 'mongoose';

export interface Blog extends Document {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
}
