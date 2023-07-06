const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "3d",
  });
};

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
    const token = createToken(user._id);
    res.status(200).json({ username, usercode, email, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { registerUser };
