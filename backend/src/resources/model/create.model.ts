import { Schema, model } from 'mongoose';
import createInterface from '../../utils/interfaces/create.interface';

const createPoemSchema = new Schema({
  firstName: String,
  adjectives: String,
  importantRelation: String,
  loves: String,
  feelings: String,
  fears: String,
  accomplishments: String,
  expectations: String,
  residence: String,
  lastName: String,
  backgroundTheme: String,
  profileImage: String,
  upvote: Number,
  downvote: Number,
});

export default model<createInterface>('CreatePoem', createPoemSchema);
