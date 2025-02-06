import { Resolver } from '../resolver.type';
import { createTechnology } from './technologies/create-technology.mutation';
import { login } from './auth/login.mutation';

export const mutations: Resolver[] = [
  {
    name: 'createTechnology',
    function: createTechnology,
  },
  {
    name: 'login',
    function: login,
  },
];
