import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jogeykristen:<password>@cluster0.dpdcq5r.mongodb.net/blog',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
