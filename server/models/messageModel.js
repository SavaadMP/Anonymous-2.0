const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./userModel");

const messageSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    usercode: {
      type: String,
      required: true,
    },

    markedAsRead: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

messageSchema.statics.sendMessage = async function (usercode, type, message) {
  if (!usercode || !message || !type) {
    throw Error("all fields must be entered!!");
  }

  const isExistUsercode = User.findOne({ usercode });
  if (!isExistUsercode) throw Error("User not found!!");

  const msg = this.create({ usercode, type, message, markedAsRead: false });
  return msg;
};

module.exports = mongoose.model("Message", messageSchema);
