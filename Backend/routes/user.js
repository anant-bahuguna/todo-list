
const router = require('express').Router()
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/signup', async(req,res)=>{
    const user = new User(req.body)
    try{
        const token = await user.generateAuthToken()
        await user.save()
        //console.log(user.password)
        res.send({user, token})
    } catch(e){
        res.status(401).send()
    } 
})

router.post('/users/login', async(req, res)=>{
    
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch(e){
        //console.log(e)
        res.send(e)
    }
})

router.get('/users/logout',auth, async(req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send({message:'logged out'})
    } catch(e){
        res.status(500).send()
    }
})

router.get('/users/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send({message:'All logged out'})
    } catch(e){
        res.status(500).send()
    }
})

router.get('/users/profile', auth, async(req,res)=>{
    res.send(req.user)
})




module.exports = router