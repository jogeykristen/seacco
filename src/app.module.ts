import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: 'blog' }),
    ConfigModule.forRoot(),
    BlogsModule,
    AuthModule,
  ],
})
export class AppModule {}
