import { GoogleStrategy } from './google.strategy';
import { Module } from '@nestjs/common';
import { AppController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AppController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
