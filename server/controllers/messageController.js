const { mongoose } = require("mongoose");
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
  const { usercode, type, message, userId } = req.body;

  try {
    await Message.sendMessage(usercode, type, message, userId);
    res.status(200).json({ usercode, type, message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const viewAllMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      userId: new mongoose.Types.ObjectId(req.user._id),
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const viewMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      userId: req.user._id,
      type: "Message",
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const viewQuestions = async (req, res) => {
  try {
    const messages = await Message.find({
      userId: req.user._id,
      type: "Question",
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const viewAdvices = async (req, res) => {
  try {
    const messages = await Message.find({
      userId: req.user._id,
      type: "Advice",
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const viewOpinions = async (req, res) => {
  try {
    const messages = await Message.find({
      userId: req.user._id,
      type: "Opinion",
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const viewCompliments = async (req, res) => {
  try {
    const messages = await Message.find({
      userId: req.user.usercode,
      type: "Compliments",
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const changeReadStatus = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      {
        markedAsRead: value,
      },
      { new: true }
    ).then(() => {});

    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  verifyUserCode,
  getSingleUser,
  sendMessage,
  viewAllMessages,
  viewQuestions,
  viewAdvices,
  viewOpinions,
  viewCompliments,
  viewMessages,
  changeReadStatus,
};
