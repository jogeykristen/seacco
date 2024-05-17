import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './interfaces/blog.interface';
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

@Injectable()
export class BlogsService {
  constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog>) {}
  async create(createBlogDto: CreateBlogDto) {
    try {
      const createdBlog = new this.blogModel({
        title: createBlogDto.title,
        description: createBlogDto.description,
        author: createBlogDto.author,
        createdAt: new Date().getTime(),
      });
      return await createdBlog.save();
    } catch (error) {
      throw new HttpException('Error creating article', HttpStatus.BAD_REQUEST);
    }
  }

  async showAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async showOne(title: string): Promise<Blog> {
    const blog = await this.blogModel.findOne({ title }).exec();
    if (!blog) {
      throw new NotFoundException(`Blog with title "${title}" not found`);
    }
    return blog;
  }

  async update(title: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    const existingBlog = await this.blogModel.findOne({ title }).exec();
    if (!existingBlog) {
      throw new NotFoundException(`Blog with title "${title}" not found`);
    }

    if (updateBlogDto.title) {
      existingBlog.title = updateBlogDto.title;
    }
    if (updateBlogDto.description) {
      existingBlog.description = updateBlogDto.description;
    }
    if (updateBlogDto.author) {
      existingBlog.author = updateBlogDto.author;
    }

    return existingBlog.save();
  }

  async remove(title: string) {
    const del = await this.blogModel.findOneAndDelete({ title }).exec();
    if (!del) {
      throw new NotFoundException(`Blog with title "${title}" not found`);
    }
    return del;
  }
}
