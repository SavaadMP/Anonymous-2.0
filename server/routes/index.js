const express = require("express");
const app = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const {
  verifyUserCode,
  getSingleUser,
  sendMessage,
  viewAllMessages,
  viewQuestions,
  viewAdvices,
  viewOpinions,
  viewCompliments,
  viewMessages,
} = require("../controllers/messageController");
const requireAuth = require("../middlewares/requireAuth");

app.post("/register", registerUser);
app.post("/login", loginUser);

app.post("/verifyUserCode/:id", verifyUserCode);
app.get("/getSingleUser/:id", getSingleUser);
app.post("/sendMessage", sendMessage);

app.get("/viewAllMessages", requireAuth, viewAllMessages);
app.get("/viewMessages", requireAuth, viewMessages);
app.get("/viewQuestions", requireAuth, viewQuestions);
app.get("/viewAdvices", requireAuth, viewAdvices);
app.get("/viewOpinions", requireAuth, viewOpinions);
app.get("/viewCompliments", requireAuth, viewCompliments);

module.exports = app;
