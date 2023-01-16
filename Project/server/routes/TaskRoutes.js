const router = require('express').Router();
const Task = require('../models/Task.js');


//Read All
router.route("/").get(async (req,res) => {
    await Task.find().then((data) => {
        res.status(200).send({status :"Data Recieved" ,Task : data});
    }).catch((err) => {
        res.status(400).send({status:err});
    })
});


//Insert Data
router.route("/Add").post(async(req,res) => {
    const { 
        TaskID ,
        OwnerID ,
        Title ,
        Description , 
        StartTimezone,
        Start,
        End,
        EndTimezone,
        RecurrenceRule,
        RecurrenceID,
        RecurrenceException,
        isAllDay
     } = req.body;
    console.log(TaskID);
    const newTask = new Task({
        TaskID ,
        OwnerID ,
        Title ,
        Description , 
        Start,
        StartTimezone,
        End,
        EndTimezone,
        RecurrenceRule,
        RecurrenceID,
        RecurrenceException,
        isAllDay
    })
    console.log(newTask);
    await newTask.save().then(() => {
        res.status(200).send({status:"New Task Added"})
    }).catch((err) => {
        res.status(400).send({status:err})
        console.log(err)
    })
}) 

module.exports = router;