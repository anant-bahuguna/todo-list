const mongoose = require('mongoose')

const todoListSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        default:""
    },
    dueDate:{
        type:Date,
    },
    status:{
        type:Number, //1:not started, 2: In progress, 3: completed
    },
    label:{
        type:String,
        trim:true,
        required:true
    }
},{
    timestamps:true
})

const TodoList = mongoose.model('TodoList', todoListSchema)
module.exports = TodoList

