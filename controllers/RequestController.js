// controllers/authController.js
const { UserRegistration } = require('../modal/schema');

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  console.log("hello");
  try {
    // Check if the email already exists
    const existingUser = await UserRegistration.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

     console.log('Hi');
    // Create a new user
    const newUser = new UserRegistration({ username, email, password });
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

console.log("Hello hii");

module.exports = { registerUser };
