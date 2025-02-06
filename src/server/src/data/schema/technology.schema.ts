import { Schema, Document } from 'mongoose';

import { getEnumValues } from '../../../utils';

import {
  Technology,
  TechnologyCategory,
  TechnologyCircle,
  TechnologyStatus,
} from '../model';

export const TechnologySchema = new Schema<Technology & Document>({
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

