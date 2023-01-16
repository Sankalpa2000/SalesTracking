const mongoose = require('mongoose') 

var TaskModel = new mongoose.Schema({
    TaskID:{
        type:Number,
        index:true,
        unique:true,
        require:true
    },
    OwnerID: {
        type:Number,
        require:true
    },
    Title: {
        type:String,

    },
    Description:{
        type:String,

    },
    StartTimezone: {
        type:Date
    },
    Start: {
        type:Date
    },
    End: {
        type:Date
    },
    EndTimezone:{
        type:Date
    },
    RecurrenceRule: {
        type:String
    },
    RecurrenceID: {
        type:String
    },
    RecurrenceException: {
        type:Date
    },
    isAllDay: {
        type:Boolean
    }

});

const Task = mongoose.model("TaskModel" ,TaskModel)
//Export the model
module.exports = Task;