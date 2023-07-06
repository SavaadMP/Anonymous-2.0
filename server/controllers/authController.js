const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { username, usercode, email, password, confirmPassword } = req.body;
  try {
    const user = await User.signup(
      username,
      usercode,
      email,
      password,
      confirmPassword
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = { registerUser };
