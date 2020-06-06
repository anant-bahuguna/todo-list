const express = require("express");
const connectDB = require("./config/mongoose");

const userRouter = require("./routes/user");
const TodoListRouter = require("./routes/todoList");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));
app.use(userRouter);
app.use(TodoListRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
