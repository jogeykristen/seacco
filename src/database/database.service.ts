import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from '../blog/post.schema';
import { User, UserDocument } from '../user/user.schema';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  // You can define methods here for interacting with your database, such as CRUD operations for posts and users
}
