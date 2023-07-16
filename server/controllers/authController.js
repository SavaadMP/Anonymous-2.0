const { mongoose } = require("mongoose");
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
    res.status(200).json({ username, usercode, email, token, _id: user._id });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({
      email,
      username: user.username,
      usercode: user.usercode,
      token,
      _id: user._id,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { id } = req.params;

  const updatedProfile = await User.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    { ...req.body }
  ).then(async () => {
    const data = await User.find({ _id: new mongoose.Types.ObjectId(id) });
    const token = createToken(new mongoose.Types.ObjectId(id));
    return {
      email: data[0].email,
      token: token,
      username: data[0].username,
      usercode: data[0].usercode,
      _id: data[0]._id,
    };
  });
  if (!updatedProfile) {
    return res.status(404).json({ error: "Profile not found!!" });
  }

  return res.status(200).json(updatedProfile);
};

module.exports = { registerUser, loginUser, updateProfile };
