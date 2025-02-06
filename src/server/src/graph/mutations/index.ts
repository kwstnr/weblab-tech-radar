import { Resolver } from '../resolver.type';
import { createTechnology } from './technologies/create-technology.mutation';

export const mutations: Resolver[] = [
  {
    name: 'createTechnology',
    function: createTechnology,
  },
];
