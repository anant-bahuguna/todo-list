const express = require("express");
require("./config/mongoose");
const path = require("path");
const userRouter = require("./routes/user");
const TodoListRouter = require("./routes/todoList");

const app = express();
const port = process.env.PORT;

app.use(express.json({ extended: false }));
app.use(userRouter);
app.use(TodoListRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
}

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
