import { queries } from './queries';
import { mutations } from './mutations';
import { Resolver } from './resolver.type';

export const resolvers = {
  Query: queries.reduce((acc, resolver: Resolver) => ({
    ...acc,
    [resolver.name]: resolver.function,
  }), {}),
  Mutation: mutations.reduce((acc, resolver: Resolver) => ({
    ...acc,
    [resolver.name]: resolver.function,
  }), {}),
};
