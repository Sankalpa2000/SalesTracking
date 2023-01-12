const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Registration = new mongoose.Schema({

    Name:{
        type:String,
        required:true,
        unique:true,
    },
    EPFNO:{
        type:String,
        index:true,
        required:true,
        unique:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
});

const Registrations = mongoose.model("Registration" ,Registration)
//Export the model
module.exports = Registrations;