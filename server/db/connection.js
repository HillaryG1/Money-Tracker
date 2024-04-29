// Import mongoose library
const mongoose = require('mongoose');
// Connect toMongoDB using Atlas URI from env variables
const conn = mongoose.connect(process.env.ATLAS_URI)
  // If connection is successful, log a success message and return the database connection
  .then(db => {
    console.log("Database Connected");
    return db;
  })
  // If there's an error, log an error message
  .catch(err => {
    console.log("Connection Error");
  });
// Export the connection object for reuse in other modules
module.exports = conn;
