import { TechnologyCategory } from '../../../data/model/technology-category.enum';
import { TechnologyCircle } from '../../../data/model/technology-circle.enum';
import { TechnologyStatus } from '../../../data/model/technology-status.enum';

export interface CreateTechnologyInput {
  name: string;
  description: string;
  category: TechnologyCategory;
  circle: TechnologyCircle;
  circleDescription: string;
  status: TechnologyStatus;
}
