const mongoose = require('mongoose') 

var TaskModel = new mongoose.Schema({
    
    
    UserName:{
        type:String,
        require:true
    },
    UserEPFNO:{
        type:Number,
        require:true
    },
    UserEmail:{
        type:String,
        require:true
    },
    CustomerName:{
        type:String,
        require:true
    },
    CustomerEmail:{
        type:String,
        require:true
    },
    CustomerPhone:{
        type:String,
        require:true
    },
    CompanyName:{
        type:String,
        require:true
    },
    CompanyLocation:{
        type:String,
        require:true
    },
    CompanyID:{
        type:String,
        require:true
    },
    SubCompanyName:{
        type:String,
        require:true
    },
    SubCompanyLocation:{
        type:String,
        require:true
    },
    SubCompanyID:{
        type:String,
        require:true
    },
    Title:{
        type:String,
        require:true
    },
    Date:{
        type:String,
        require:true
    },
    STime:{
        type:String,
        require:true
    },
    ETime:{
        type:String,
    },    
    Description:{
        type:String,
    },

});

const Task = mongoose.model("TaskModel" ,TaskModel)
//Export the model
module.exports = Task;