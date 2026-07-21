import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('⚠ MONGODB_URI not set — running without database (auth/history disabled)');
    return null;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✓ MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('✗ MongoDB connection failed:', error.message);
    console.warn('  Continuing without database (auth/history disabled)');
    return null;
  }
}

export function isDBConnected() {
  return mongoose.connection.readyState === 1;
}
