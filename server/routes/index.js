const express = require("express");
const app = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const {
  verifyUserCode,
  getSingleUser,
  sendMessage,
} = require("../controllers/messageController");

app.post("/register", registerUser);
app.post("/login", loginUser);

app.post("/verifyUserCode/:id", verifyUserCode);
app.get("/getSingleUser/:id", getSingleUser);
app.post("/sendMessage", sendMessage);

module.exports = app;
