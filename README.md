## Description

This project is for trying out [NestJS](https://nestjs.com/).

Please note this was created on a windows PC, while running on WSL2. Keep that in mind if you run into any issues.

### Prerequisites

This demo assumes you've already setup your development environment following the prisma demo repo (node, npm, etc). You will need at least Node 20+ to run this project.

One additional requirement is the NestJS CLI. If you don't have it installed, you can do so via npm:

```bash
npm install -g @nestjs/cli
```

### Up and Running

First, install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run start:dev
```

Access the application at `http://localhost:3000`.

### Commands you might find useful

Generate a new module:

```bash
nest generate module some-module-name
nest generate service some-module-name
nest generate controller some-module-name
```

### What you need to do

1. Complete the books module (CRUD operations).
2. Support a publishers module (a book has a single publisher).
3. Support a genres module (a book can have multiple genres). **NOTE:** be careful how you handle this to avoid duplicating data - you only want to store either books inside genres, or genres inside books, not both. **NOTE Number 2:** this isn't ideal and you wouldn't have to do this with a real database, this is just for the purpose of this demo.

**Bonus Points:** add a query param to the books GET endpoint called `includeAuthor` which when set to true will include the author details in the response. So a request to `/books?includeAuthor=true` would return something like:

```json
[
  {
    "id": 1,
    "title": "Book Title",
    "author": {
      "id": 1,
      "name": "Author Name"
    }
  }
]
```

Hint: you'll need to make use of the `@Query` decorator, I've already injected the AuthorsService into the BooksService for you to make this easier.

**Extra Bonus Points:** use [pipes](https://docs.nestjs.com/pipes) to validate id params as integers
**More Extra Bonus Points:** add swagger to your endpoints - see [NestJS openapi intro](https://docs.nestjs.com/openapi/introduction) for more info
