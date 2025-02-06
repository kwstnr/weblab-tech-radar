import { Document } from 'mongoose';
import { Technology } from '../../model/technology.type';

export type TechnologySchemaType = Technology & Document;
