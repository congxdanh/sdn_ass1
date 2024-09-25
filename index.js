const express = require("express");
const app = express();
const quizzesRouter = require("./src/routes/quizzRouter");
const questionsRouter = require("./src/routes/questionRouter");
const connectDB = require("./src/config/connectDB");

app.use(express.json());
connectDB();

app.use("/quizzes", quizzesRouter);
app.use("/questions", questionsRouter);

app.use("/", (req, res) => {
  res.send("home");
});
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
