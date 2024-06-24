const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/user", userRouter);

mongoose
  .connect("MONGO_URL")
  .then((conn) => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
