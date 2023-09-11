import { Schema, model } from 'mongoose';
import createInterface from '../../utils/interfaces/create.interface';

const createPoemSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    adjectives: {
      type: String,
      required: true,
    },
    importantRelation: {
      type: String,
      required: true,
    },
    loves: {
      type: String,
      required: true,
    },
    feelings: {
      type: String,
      required: true,
    },
    fears: {
      type: String,
      required: true,
    },
    accomplishments: {
      type: String,
      required: true,
    },
    expectations: {
      type: String,
      required: true,
    },
    residence: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    backgroundTheme: {
      type: String,
    },
    user:{
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default model<createInterface>('CreatePoem', createPoemSchema);
