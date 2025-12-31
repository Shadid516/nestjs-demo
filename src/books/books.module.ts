import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  providers: [BooksService],
  controllers: [BooksController],
  imports: [AuthorsModule, AuthorsModule],
})
export class BooksModule {}
