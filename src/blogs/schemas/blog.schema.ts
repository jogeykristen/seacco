import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  createdAt: { type: String, required: true },
  author: { type: String, required: true },
});
