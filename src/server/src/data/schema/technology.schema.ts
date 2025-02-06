import { Schema } from 'mongoose';
import { ITechnology } from '../model/itechnology';

export const TechnologySchema = new Schema<ITechnology>({
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Number, required: true },
  circle: {
    type: String,
    enum: ['ASSESS', 'TRIAL', 'ADOPT', 'HOLD'],
  },
  circleDescription: { type: String },
  status: { type: Number, required: true },
  changed: { type: Date },
  published: { type: Date },
  created: { type: Date, required: true, default: Date.now },
});

