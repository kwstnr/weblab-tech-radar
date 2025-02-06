import { books } from '../data/books';
import { DbContextFactory } from '../data/db-context.factory';
import { getTechnologies } from './resolvers/technologies/technologies.resolver';
import { getTechnologyById } from './resolvers/technologies/technology-by-id.resolver';

export const getResolvers = (connectionString: string) => {
  const dbContextFactory = new DbContextFactory(connectionString);

  return {
    Query: {
      books: () => books,

      technologies: async () => {
        const dbContext = await dbContextFactory.getDbContext();
        return await getTechnologies(dbContext);
      },

      technologyById: async (parent, { id }, ctx, info) => {
        const dbContext = await dbContextFactory.getDbContext();
        return await getTechnologyById(dbContext, id);
      }
    },
  };
};
