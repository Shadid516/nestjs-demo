import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class GenresService {
  private genres = [
    { id: 1, name: 'Science Fiction' },
    { id: 2, name: 'Fantasy' },
    { id: 3, name: 'Mystery' },
    { id: 4, name: 'Romance' },
  ];

  findAll() {
    return this.genres;
  }

  findOne(id: number) {
    const genre = this.genres.find((genre) => genre.id === id);
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    return genre;
  }

  create(genre: { name: string }) {
    const newGenre = {
      id: this.genres[this.genres.length - 1].id + 1,
      ...genre,
    };
    this.genres.push(newGenre);
    return newGenre;
  }

  update(id: number, genre: { name?: string }) {
    const genreIndex = this.genres.findIndex((genre) => genre.id === id);

    if (genreIndex === -1) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    this.genres[genreIndex] = {
      ...this.genres[genreIndex],
      ...genre,
    };
    return this.genres[genreIndex];
  }

  delete(id: number) {
    const genreIndex = this.genres.findIndex((genre) => genre.id === id);
    if (genreIndex === -1) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    this.genres.splice(genreIndex, 1);
    return genreIndex;
  }
}
