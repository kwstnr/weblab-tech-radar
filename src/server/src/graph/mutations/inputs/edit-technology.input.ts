import {
  TechnologyCategory,
  TechnologyCircle,
  TechnologyStatus,
} from '../../../data/model';

export interface EditTechnologyInput {
  id: string;
  name?: string;
  description?: string;
  category?: TechnologyCategory;
  circle?: TechnologyCircle;
  circleDescription?: string;
  status?: TechnologyStatus;
}
