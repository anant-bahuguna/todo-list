const router = require('express').Router()
const TodoList = require('../models/todoList')
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/todo',auth,async(req,res)=>{
    const { title, description, label, dueDate } = req.body
    const todo = new TodoList({
        title,
        description,
        label,
        dueDate,
        owner: req.user.id
    })
    try{
        await todo.save()
        res.send(todo)
    } catch(e){
        res.status(400).send()
    }
})

router.get('/todo/:id',auth,async(req,res)=>{
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

router.patch('/todo/:id',auth,async(req, res)=>{
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

router.delete('/todo/:id',auth,async(req, res)=>{
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

module.exports = router