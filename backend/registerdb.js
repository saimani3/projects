const mongoose=require('mongoose');
const Schema={
    name :{
        type:String,
    },
    email:{
        type:String,
    },
    phonenumber:{
        type:Number,
    },
    dateofbirth:{
        type:Date,
    },
    gender:{
        type:String,
    },
    password:{
        type:String,
    },
    confirmpassword:{
        type:String,
    },
                
}
module.exports = mongoose.model('registerdata',Schema);