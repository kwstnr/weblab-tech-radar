import { Schema } from 'mongoose';

import { getEnumValues } from '../../../utils/get-enum-values';

import { TechnologySchemaType } from './type/technology.schema.type';
import { TechnologyCategory } from '../model/technology-category.enum';
import { TechnologyCircle } from '../model/technology-circle.enum';
import { TechnologyStatus } from '../model/technology-status.enum';

export const TechnologySchema = new Schema<TechnologySchemaType>({
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String,
    enum: getEnumValues(TechnologyCategory),
    required: true
  },
  circle: {
      type: String,
      enum: getEnumValues(TechnologyCircle),
  },
  circleDescription: { type: String },
  status: {
      type: String,
      enum: getEnumValues(TechnologyStatus),
  },
  changed: { type: Date },
  published: { type: Date },
  created: { type: Date, required: true, default: Date.now },
});

