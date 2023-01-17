const router = require('express').Router();
const Task = require('../models/Task.js');


//Read All
router.route("/").get(async (req,res) => {
    await Task.find().then((data) => {
        res.status(200).send({status :"Data Recieved" ,data : data});
    }).catch((err) => {
        res.status(400).send({status:err});
    })
});


//Insert Data
router.route("/Add").post(async(req,res) => {
    const { 
        UserName,
        UserEPFNO,
        UserEmail,
        CustomerName,
        CustomerEmail,
        CustomerPhone,
        CompanyName,
        CompanyLocation,
        CompanyID,
        SubCompanyName,
        SubCompanyLocation,
        SubCompanyID,
        Title,
        Date,
        STime,
        ETime,
        Description,
     } = req.body;
    const newTask = new Task({
        UserName,
        UserEPFNO,
        UserEmail,
        CustomerName,
        CustomerEmail,
        CustomerPhone,
        CompanyName,
        CompanyLocation,
        CompanyID,
        SubCompanyName,
        SubCompanyLocation,
        SubCompanyID,
        Title,
        Date,
        STime,
        ETime,
        Description,
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