const express = require("express");
const app = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { verifyUserCode } = require("../controllers/messageController");

app.post("/register", registerUser);
app.post("/login", loginUser);

app.post("/verifyUserCode/:id", verifyUserCode);

module.exports = app;
