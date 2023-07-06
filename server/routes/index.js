const express = require("express");
const app = express.Router();
const { registerUser } = require("../controllers/authController");

app.get("/", registerUser);
module.exports = app;
