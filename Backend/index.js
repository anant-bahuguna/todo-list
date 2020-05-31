const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const app = express()

const User = require('./models/user')
const TodoList = require('./models/todoList')


const port = process.env.PORT || 3000

app.use(express.json())

app.post('/signUp', async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.send(req.body)
    } catch(e){
        res.status(400).send()
    } 
})

app.get('/users/:id',async(req,res)=>{
    var _id = req.params._id
    try{
        const user= await User.findOne({_id})
        res.send(user)
    } catch(e){
        res.send({error:e})
    }
})

app.post('/todo',async(req,res)=>{
    const todo = new TodoList(req.body)
    try{
        await todo.save()
        res.send(todo)
    } catch(e){
        res.status(400).send()
    }
})

app.get('/todo/:id',async(req,res)=>{
    const todo = await TodoList.findById(req.params.id)

    try{
        if(!todo){
            return res.status(404).send()
        }
        res.send(todo)
    } catch(e){
        res.status(400).send(e)
    }
})

app.patch('/todo/:id',async(req, res)=>{
    try{
        const todo = await TodoList.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!todo){
            return res.status(404).send()
        }
        res.send(todo)
    } catch(e){
        res.status(404).send()
    }
})

app.delete('/todo/:id',async(req, res)=>{
    try{
        const todo = await TodoList.findOneAndDelete({_id:req.params.id},req.body)
        if(!todo){
            return res.status(404).send()
        }
        res.send(todo)
    } catch(e){
        res.status(404).send()
    }
})

app.listen(port,()=>{
    console.log('Server is running on port '+port)
})




