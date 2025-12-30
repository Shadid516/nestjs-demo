import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorsService } from '../authors/authors.service';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, title: 'The Economics of Shawarma', authorId: 1 },
    { id: 2, title: 'A Guide to Beirut', authorId: 2 },
    {
      id: 3,
      title: 'The Origins of "Put of the Fries in the Bag"',
      authorId: 1,
    },
    { id: 4, title: 'Zany Book Title 4', authorId: 3 },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }
  create(book: { title: string; authorId: number }) {
    const newBook = {
      id: this.books[this.books.length - 1].id + 1,
      ...book, // Revise how destructuring is done here
    };
    this.books.push(newBook);
    return newBook;
  }
  update(id: number, book: { title?: string; authorId?: number }) {
    const bookIndex = this.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...book,
    };
    return this.books[bookIndex];
  }
  delete(id: number) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books.splice(bookIndex, 1);
    return bookIndex;
  }

  constructor(private readonly authorsService: AuthorsService) {} // What does this do?
}
