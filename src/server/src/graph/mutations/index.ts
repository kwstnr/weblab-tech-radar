import { Resolver } from '../resolver.type';
import { createTechnology } from './technologies/create-technology.mutation';
import { editTechnology } from './technologies/edit-technology.mutation';
import { login } from './auth/login.mutation';

export const mutations: Resolver[] = [
  {
    name: 'createTechnology',
    function: createTechnology,
  },
  {
    name: 'editTechnology',
    function: editTechnology,
  },
  {
    name: 'login',
    function: login,
  },
];
