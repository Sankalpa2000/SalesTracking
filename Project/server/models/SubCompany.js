const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var SubCompany = new mongoose.Schema({

    MainCompanyName:{
        required:true,
        type:String,
    },
    SubName:{
        type:String,
        required:true,
    },
    SubLocation:{
        type:String,
        required:true,
    }
});

const SubCompanyModel = mongoose.model("SubCompany" ,SubCompany)
//Export the model
module.exports = SubCompanyModel;