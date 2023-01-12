const router = require('express').Router();
const Customer = require('../models/Customer');

//Read All 
router.route("/").get(async(req,res) => {
    await Customer.find().then((data) => {
        res.status(200).send({status :"Data Recieved" ,Customer : data});
    }).catch((err) => {
        res.status(400).send({status:err});
    })
});

//Insert Data
router.route("/AddCustomer").post(async(req,res) => {
    const{Name , Email , Phone, Designation, Group, SubCompany} = req.body;
    //console.log(Name);
    const newCustomer = new Customer({
        Name,
        Email,
        Phone,
        Designation,
        Group,
        SubCompany
    })
    await newCustomer.save().then(() => {
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
        Email,
        Phone,
        Designation,
        Group,
        SubCompany} = req.body;
    const newData = {
        Name,
        Email,
        Phone,
        Designation,
        Group,
        SubCompany
    }
    await Customer.findByIdAndUpdate(id,newData).then(() => {
        console.log(newData);
        res.status(200).send({state:"Updated" , data:newData})
    }).catch((err) => {
        res.state(400).send({state:err});
    }) 
})

router.route("/Delete/:id").delete(async (req,res) => {
    const id = req.params.id;
    console.log(id);
    Customer.findByIdAndDelete(id).then(() => {
        res.status(200).send({state:"Deleted Successfully"});
    }).catch((err) => {
        res.status(100).send({status : err})
    })
 })

module.exports = router;