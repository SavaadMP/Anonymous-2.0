const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  usercode: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (
  username,
  usercode,
  email,
  password,
  confirmPassword
) {
  if (!username || !usercode || !email || !password || !confirmPassword) {
    throw Error("all fields must be enetered!!");
  }
  if (!validator.isEmail(email)) {
    throw Error("enter valid email!!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("enter a strong password!!");
  }
  if (usercode.length > 6 || usercode.length < 6) {
    throw Error("Usercode should be 6 characters long!!");
  }

  const isPasswordMatch = password === confirmPassword;
  if (!isPasswordMatch) {
    throw Error("password do not match!!");
  }

  const existEmail = await this.findOne({ email });
  if (existEmail) throw Error("email is already in use!!");

  const existUsercode = await this.findOne({ usercode });
  if (existUsercode) throw Error("usercode is already in use!!");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({
    username,
    usercode,
    email,
    password: hashedPassword,
  });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("all fields are required!!");

  const user = await this.findOne({ email });
  if (!user) throw Error("Incorrect Email!!");

  const isMatchingPassword = await bcrypt.compare(password, user.password);
  if (!isMatchingPassword) throw Error("Incorrect Password!!");

  return user;
};

module.exports = mongoose.model("User", userSchema);
