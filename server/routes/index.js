const express = require("express");
const app = express.Router();
const { registerUser } = require("../controllers/authController");

app.post("/register", registerUser);

module.exports = app;
