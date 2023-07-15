const mongoose=require('mongoose');
const Schema2={
    patientname:{
        type:String,
    },
    patientemail:{
        type:String,
    },
    patientnumber:{
        type:Number,
    },
    date:{
        type:Date,
    },
    time:{
        type:String,
    },
    address:{
        type:String,
    },
    doctorname:{
        type:String,
    },
    pincode:{
        type:Number
    }

                
}
module.exports = mongoose.model('appointmentdata',Schema2);