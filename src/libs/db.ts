import mongoose from 'mongoose';

const connectMongoDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGO_URI) throw new Error('Mongo URI is not available');

    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to database');
  } catch (err) {
    console.log(err);
  }
};

export { connectMongoDB };
