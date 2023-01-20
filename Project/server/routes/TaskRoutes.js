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
router.route("/Update").put(async(req,res) => {

    const id = req.body.id;
    console.log(id);
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

    const data = {
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
    }
    console.log(data);
    await Task.findByIdAndUpdate(id,data).then(() => {
        res.status(200).send({state:"Updated" , data:data})
    }).catch((err) => {
        res.state(400).send({state:err});
    }) 
})
router.route("/Delete/:id").delete(async (req,res) => {
    const id = req.params.id;
    console.log(id);
    Task.findByIdAndDelete(id).then(() => {
        res.status(200).send({state:"Deleted Successfully"});
    }).catch((err) => {
        res.status(100).send({status : err})
    })
 })
router.route("/GetByDate/:Date").get(async (req,res) => {
    const Date = req.params.Date;
    console.log(Date);
    await Task.find({Date:Date}).then((data)=>{
        console.log(data);
        res.status(200).send({Task:data})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
 })
module.exports = router;