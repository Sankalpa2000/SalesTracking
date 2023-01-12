const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Customer = new mongoose.Schema({

    Name:{
        type:String,
        required:true,
        unique:true,
    },
    Email:{
        type:String,
        index:true,
        required:true,
        unique:true,
    },
    Phone:{
        type:String,
        required:true,
        unique:true,
    },
    Designation:{
        type:String,
        required:true,
    },
    Group:{
        type:String,
        required:true,
    },
    SubCompany:{
        type:String,
        required:true,
    },
});

const Customers = mongoose.model("Customer" ,Customer)
//Export the model
module.exports = Customers;