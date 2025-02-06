import { books } from '../data/books';
import { DbContext } from '../data/db-context';
import { getTechnologies } from './resolvers/technologies/technologies.resolver';
import { getTechnologyById } from './resolvers/technologies/technology-by-id.resolver';
import { createTechnology } from './mutations/technologies/create-technology.mutation';
import { CreateTechnologyInput } from './mutations/inputs/create-technology.input';

export const resolvers = {
  Query: {
    books: () => books,

    technologies: async (_: any, __: any, { dbContext }: { dbContext: DbContext}) => {
      return await getTechnologies(dbContext);
    },

    technologyById: async (_: any, { id }: { id: string }, { dbContext }: { dbContext: DbContext}) => {
      return await getTechnologyById(dbContext, id);
    }
  },
  Mutation: {
    createTechnology: async (_: any, { input }: { input: CreateTechnologyInput }, { dbContext }: { dbContext: DbContext }) => {
      return await createTechnology(dbContext, input);
    }
  }
};
