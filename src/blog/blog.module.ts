import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
//import { Post, PostSchema } from './post.schema';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
