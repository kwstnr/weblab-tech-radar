import { Schema } from 'mongoose';
import { Technology } from '../model/technology.type';

export const TechnologySchema = new Schema<Technology>({
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Number, required: true },
  circle: { type: Number },
  circleDescription: { type: String },
  status: { type: Number, required: true },
  changed: { type: Date },
  published: { type: Date },
  created: { type: Date, required: true, default: Date.now },
});

