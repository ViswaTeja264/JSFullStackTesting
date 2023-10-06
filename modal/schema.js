const mongoose = require('mongoose');

// Define a schema for the data you want to store
const UserRegistrationSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String, // Store the hashed password
    // Add more fields as needed based on your specific data requirements
});

// Create a Mongoose model based on the schema
 
const UserRegistration = mongoose.model('UserRegistration', UserRegistrationSchema);

module.exports = { UserRegistration };


