import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongo db connected at host - ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:`, error.message);
    process.exit(1);
  }
};

export default connectDb;