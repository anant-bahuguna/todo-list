
const router = require('express').Router()
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/signUp', async(req,res)=>{
    const user = new User(req.body)
    try{
        const token = await user.generateAuthToken()
        await user.save()
        //console.log(user.password)
        res.send({user})
    } catch(e){
        res.status(401).send()
    } 
})

router.post('/users/login', async(req, res)=>{
    
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(201).send({user})
    } catch(e){
        //console.log(e)
        res.send(e)
    }
})

router.get('/users/profile', auth, async(req,res)=>{
    res.send(req.user)
})

router.get('/users/:id',async(req,res)=>{
    var _id = req.params._id
    try{
        const user= await User.findOne({_id})
        res.send(user)
    } catch(e){
        res.send({error:e})
    }
})

module.exports = router