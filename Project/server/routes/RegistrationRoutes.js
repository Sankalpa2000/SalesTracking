const router = require('express').Router();
const Registration = require('../models/Registration');

//Read All
router.route("/").get(async (req,res) => {
    await Registration.find().then((data) => {
        res.status(200).send({status :"Data Recieved" ,Registration : data});
    }).catch((err) => {
        res.status(400).send({status:err});
    })
})

//Insert Data
router.route("/AddUser").post(async(req,res) => {
    const{Name , EPFNO , Email, Password} = req.body;
    console.log(Name);
    const newUser = new Registration({
        Name,
        EPFNO,
        Email,
        Password
    })
    await newUser.save().then(() => {
        res.status(200).send({status:"New User Added"})
    }).catch((err) => {
        res.status(400).send({status:err})
    })
}) 
router.route("/Update").put(async(req,res) => {
    const id = req.body.id;
    console.log(id);
    const {
        Name,
        EPFNO,
        Email,
        Password} = req.body;
    const newData = {
        Name,
        EPFNO,
        Email,
        Password
    }
    await Registration.findByIdAndUpdate(id,newData).then(() => {
        res.status(200).send({state:"Updated" , data:newData})
    }).catch((err) => {
        res.state(400).send({state:err});
    }) 
})
router.route("/delete/:id").delete(async (req,res) => {
    const id = req.params.id;
    // console.log(id);
    Registration.findByIdAndDelete(id).then(() => {
        res.status(200).send({state:"Deleted Successfully"});
    }).catch((err) => {
        res.status(100).send({status : err})
    })
 })

module.exports = router;