import { Schema, Document } from 'mongoose';

import { LoginLog } from '../model';

export const LoginLogSchema = new Schema<LoginLog & Document>({
  _id: { type: String, required: true, alias: 'id' },
  userId: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
})
