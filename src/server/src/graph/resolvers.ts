import { technologies } from './resolvers/technologies/technologies.resolver';
import { technologyById } from './resolvers/technologies/technology-by-id.resolver';
import { createTechnology } from './mutations/technologies/create-technology.mutation';

export const resolvers = {
  Query: {
    technologies,
    technologyById,
  },
  Mutation: {
    createTechnology,
  }
};
