const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
},{
    timestamps:true
})

userSchema.virtual('todos',{
    ref:'User',
    localField: 'owner',
    foreignField:'_id'
})

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()},'atodolist123')

    //user.tokens = user.tokens.concat({token})
    //await user.save()

    return token
}

userSchema.statics.findByCredentials = async(email,password)=>{
    const user = await User.findOne({email})
    //console.log(user)

    if(!user){
       throw new Error('Unable to login pass'); 
    }

    const isMatch = await bcrypt.compare(password, user.password)
    //console.log(isMatch)

    if(!isMatch){
        throw new Error('Unable to login pass');
    }

    return user
}

userSchema.pre('save',async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
        //console.log(user.password)
    }

    next()
})

const User = mongoose.model('User',userSchema)
module.exports = User