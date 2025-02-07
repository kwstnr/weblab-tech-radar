import { Resolver } from '../resolver.type';
import { technologies } from './technologies/technologies.resolver';
import { technologyById } from './technologies/technology-by-id.resolver';
import { me } from './users/me.resolver';


export const queries: Resolver[] = [
  {
    name: 'technologies',
    function: technologies,
  },
  {
    name: 'technologyById',
    function: technologyById,
  },
  {
    name: 'me',
    function: me,
  },
]
