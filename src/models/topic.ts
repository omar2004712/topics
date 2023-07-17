import mongoose, { Model, ObjectId, Schema } from 'mongoose';

export interface ITopic {
  _id: string | ObjectId;
  title: string;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

const topicSchema = new Schema<ITopic>(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

export const Topic =
  (mongoose.models.topic as Model<ITopic>) ||
  mongoose.model<ITopic>('topic', topicSchema);
