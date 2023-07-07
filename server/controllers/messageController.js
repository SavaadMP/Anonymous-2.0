const User = require("../models/userModel");
const Message = require("../models/messageModel");

const verifyUserCode = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.verifyUserCode(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ usercode: id });
    if (!user) {
      return res.status(404).json({ error: "User not found!!" });
    }

    return res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const sendMessage = async (req, res) => {
  const { usercode, type, message } = req.body;

  try {
    await Message.sendMessage(usercode, type, message);
    res.status(200).json({ usercode, type, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { verifyUserCode, getSingleUser, sendMessage };
