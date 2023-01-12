const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Company = new mongoose.Schema({

    Name:{
        type:String,
        required:true,
    },
    Location:{
        type:String,
        required:true,
    }
});

const CompanyModle = mongoose.model("Company" ,Company)
//Export the model
module.exports = CompanyModle;