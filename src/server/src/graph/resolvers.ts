import { books } from '../data/books';

export const resolvers = {
  Query: {
    books: () => books,
  },
};
