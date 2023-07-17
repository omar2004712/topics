import mongoose, { Model, Schema } from 'mongoose';

interface ITopic {
  title: string;
  description: string;
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
