const router = require('express').Router()
const TodoList = require('../models/todoList')
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/todo',auth,async(req,res)=>{ 
    const todo = new TodoList({
        ...req.body,
        owner:req.user._id
    })
    try{
        await todo.save()
        res.send(todo)
    } catch(e){
        res.status(400).send(e)
    }
})

router.get('/todo',auth,async(req,res)=>{
    try{
        // await req.user.populate('todos')
        // res.send(req.user.todos.task)
        const todos = await TodoList.find({owner:req.user._id})
        res.send(todos)

    }catch(e){
        console.log(e)
        res.status(404).send(e)
    }
})

router.get('/todo/:id',auth,async(req,res)=>{
    var _id = req.params.id
    
    try{
        const todo = await TodoList.findOne({_id, owner: req.user._id})
        if(!todo){
            return res.status(404).send()
        }
        res.send(todo)
    } catch(e){
        res.status(500).send(e)
    }
})

router.patch('/todo/:id',auth,async(req, res)=>{
    try{
        const todo = await TodoList.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!todo){
            return res.status(404).send()
        }
        console.log(req.token)
        res.send(todo)
    } catch(e){
        res.status(404).send(e)
    }
})

router.delete('/todo/:id',auth,async(req, res)=>{
    try{
        const todo = await TodoList.findOneAndDelete({_id:req.params.id},req.body)
        if(!todo){
            return res.status(404).send()
        }
        console.log(req.token)
        res.send(todo)
    } catch(e){
        res.status(404).send(e)
    }
})

module.exports = router