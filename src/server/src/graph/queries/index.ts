import { Resolver } from '../resolver.type';
import { technologies } from './technologies/technologies.resolver';
import { technologyById } from './technologies/technology-by-id.resolver';


export const queries: Resolver[] = [
  {
    name: 'technologies',
    function: technologies,
  },
  {
    name: 'technologyById',
    function: technologyById,
  }
]
