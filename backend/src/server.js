require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const app = require('./app');
const connectDB = require('../config/db');

const PORT = process.env.PORT || 5000;

// Connect to Database, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
});
console.log("MONGO_URI:", process.env.MONGO_URI);
