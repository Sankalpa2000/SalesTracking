const router = require('express').Router();
const TaskDone = require('../models/CompletedTask');


//Read All
router.route("/").get(async (req,res) => {
    await TaskDone.find().then((data) => {
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
    const newTask = new TaskDone({
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
    await TaskDone.findByIdAndUpdate(id,data).then(() => {
        res.status(200).send({state:"Updated" , data:data})
    }).catch((err) => {
        res.state(400).send({state:err});
    }) 
})
router.route("/Delete/:id").delete(async (req,res) => {
    const id = req.params.id;
    console.log(id);
    TaskDone.findByIdAndDelete(id).then(() => {
        res.status(200).send({state:"Deleted Successfully"});
    }).catch((err) => {
        res.status(100).send({status : err})
    })
 })
module.exports = router;