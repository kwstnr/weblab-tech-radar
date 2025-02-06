import { books } from '../data/books';
import { DbContextFactory } from '../data/db-context.factory';

export const getResolvers = (connectionString: string) => {
  const dbContextFactory = new DbContextFactory(connectionString);

  return {
    Query: {
      books: () => books,

      technologies: async () => {
        const dbContext = await dbContextFactory.getDbContext();
        return await dbContext.getTechnologies();
      },

      technologyById: async (parent, { id }, ctx, info) => {
        const dbContext = await dbContextFactory.getDbContext();
        return await dbContext.getTechnologyById(id);
      }
    },
  };
};
