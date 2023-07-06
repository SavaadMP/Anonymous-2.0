require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", indexRouter);

app.listen(3300, () => console.log("Server running on 3300"));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connected!!"))
  .catch((err) => console.log(err));
