import { Schema, Document } from 'mongoose';

import { getEnumValues } from '../../../utils/get-enum-values';

import { User } from '../model/user.type';
import { Role } from '../model/role.enum';

export const UserSchema = new Schema<User & Document>({
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: getEnumValues(Role),
  },
});
