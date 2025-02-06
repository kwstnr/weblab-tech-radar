import { books } from '../data/books';
import { DbContextFactory } from '../data/db-context.factory';
import { getTechnologies } from './resolvers/technologies/technologies.resolver';
import { getTechnologyById } from './resolvers/technologies/technology-by-id.resolver';
import { createTechnology } from './mutations/technologies/create-technology.mutation';
import { CreateTechnologyInput } from './mutations/inputs/create-technology.input';

export const getResolvers = (connectionString: string) => {
  const dbContextFactory = new DbContextFactory(connectionString);

  return {
    Query: {
      books: () => books,

      technologies: async () => {
        const dbContext = await dbContextFactory.getDbContext();
        return await getTechnologies(dbContext);
      },

      technologyById: async (_: any, { id }: { id: string }) => {
        const dbContext = await dbContextFactory.getDbContext();
        return await getTechnologyById(dbContext, id);
      }
    },
    Mutation: {
      createTechnology: async (_: any, { input }: { input: CreateTechnologyInput }) => {
        const dbContext = await dbContextFactory.getDbContext();
        return await createTechnology(dbContext, input);
      }
    }
  };
};
