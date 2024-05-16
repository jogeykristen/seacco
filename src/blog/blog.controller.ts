import { Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('list')
  getHello(): string {
    return this.blogService.getHello();
  }
}
