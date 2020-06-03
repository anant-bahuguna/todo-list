const express = require('express')
require('./db/mongoose')

const userRouter = require('./routes/user')
const TodoListRouter = require('./routes/todoList')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(TodoListRouter)


app.listen(port,()=>{
    console.log('Server is running on port '+port)
})




