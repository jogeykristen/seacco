import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import { User } from './user.schema';
import { User } from './user.interface';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(@InjectModel('User') private userModel: Model<User>) {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, emails, displayName, photos } = profile;
    const user = await this.userModel.findOne({ googleId: id });
    if (!user) {
      const newUser = new this.userModel({
        googleId: id,
        email: emails[0].value,
        name: displayName,
        picture: photos[0].value,
      });
      await newUser.save();
      return done(null, newUser);
    }
    return done(null, user);
  }
}
