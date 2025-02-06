import { Document } from 'mongoose';

import { TechnologyCategory } from './technology-category.enum';
import { TechnologyCircle } from './technology-circle.enum';
import { TechnologyStatus } from './technology-status.enum';

export interface Technology extends Document {
  id: string;
  name: string;
  description: string;
  category: TechnologyCategory;
  circle?: TechnologyCircle;
  circleDescription?: string;
  status: TechnologyStatus;
  created: Date;
  published?: Date;
  changed?: Date;
}
