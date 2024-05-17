import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findUserByGoogleId(googleId: string): Promise<User> {
    return this.userModel.findOne({ googleId });
  }

  async createUser(userData: any): Promise<User> {
    const newUser = new this.userModel(userData);
    return newUser.save();
  }
}
