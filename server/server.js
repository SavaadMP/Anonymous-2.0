const express = require("express");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", indexRouter);

app.listen(3300, () => console.log("Server running on 3300"));
