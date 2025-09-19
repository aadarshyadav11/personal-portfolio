import mongoose from 'mongoose';

async function connectDB() {
  const URI = process.env.MONGO_URI;
  if (!URI) {
    throw new Error('MONGO_URI not set in environment variables');
  }

  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}

export default connectDB;
