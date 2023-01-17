const mongoose = require('mongoose') 

var TaskModel = new mongoose.Schema({
    TaskID:{
        type:Number,
        index:true,
        unique:true,
        require:true
    },
    UserID: {
        type:Number,
        require:true
    },
    Company: {
        type:String,
        require:true
    },
    Title: {
        type:String,
        require:true
        
    },
    Description:{
        type:String,

    },
    Start: {
        type:Date
    },
    End: {
        type:Date
    },
    isAllDay: {
        type:Boolean
    }

});

const Task = mongoose.model("TaskModel" ,TaskModel)
//Export the model
module.exports = Task;