import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './interfaces/blog.interface';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post('create')
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @Get('showAll')
  findAll() {
    return this.blogsService.showAll();
  }

  @Get('show/:title')
  async showOne(@Param('title') title: string): Promise<Blog> {
    return this.blogsService.showOne(title);
  }

  @Put('update/:title')
  async update(
    @Param('title') title: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ): Promise<Blog> {
    return this.blogsService.update(title, updateBlogDto);
  }

  @Delete('del/:title')
  async remove(@Param('title') title: string): Promise<Blog> {
    return this.blogsService.remove(title);
  }
}
