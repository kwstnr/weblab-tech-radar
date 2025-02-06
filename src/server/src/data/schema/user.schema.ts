import { Schema, Document } from 'mongoose';

import { getEnumValues } from '../../../utils';

import { User, Role } from '../model';

export const UserSchema = new Schema<User & Document>({
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  role: {
    type: String,
    enum: getEnumValues(Role),
  },
});
