const mongoose = require('mongoose')

const todoListSchema = new mongoose.Schema({
    task:{
        type:String,
        trim:true,
        required:true
    },
    dueDate:{
        type:Date,
    },
    status:{
        type:Number, //1:not started, 2: In progress, 3: completed
    }
},{
    timestamps:true
})

const TodoList = mongoose.model('TodoList', todoListSchema)
module.exports = TodoList

