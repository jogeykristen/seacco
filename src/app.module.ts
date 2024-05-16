import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jogeykristen:<password>@cluster0.dpdcq5r.mongodb.net/',
    ),
    BlogModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
