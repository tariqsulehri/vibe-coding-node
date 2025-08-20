import mongoose from 'mongoose';
import logger from '../utils/logger.js';

let isConnected = false;

/**
 * Connect to MongoDB using mongoose and return the connection.
 * Throws if `mongoUri` is falsy.
 *
 * @param {string} mongoUri - MongoDB connection string
 * @returns {Promise<mongoose.Connection>} Mongoose connection
 * @throws {Error} If connection fails or no URI provided
 */
const connectDB = async (mongoUri) => {
  if (!mongoUri) throw new Error('MONGO_URI not provided');
  if (isConnected) return mongoose.connection;

  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    logger.info('Connected to MongoDB');
    return mongoose.connection;
  } catch (err) {
    logger.error('MongoDB connection error', err);
    throw err;
  }
};

export default connectDB;
