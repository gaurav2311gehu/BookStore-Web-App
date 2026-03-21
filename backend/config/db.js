const mongoose = require('mongoose');

const connectDB = async () => {
  const MAX_RETRIES = 5;
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return;
    } catch (error) {
      retries += 1;
      console.error(`Error connecting to MongoDB (Attempt ${retries}/${MAX_RETRIES}): ${error.message}`);
      if (retries === MAX_RETRIES) {
        console.error('Max retries reached. Exiting...');
        process.exit(1);
      }
      // Wait for 5 seconds before retrying
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

module.exports = connectDB;
