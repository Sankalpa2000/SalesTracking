const router = require('express').Router();
const SubCompany = require('../models/SubCompany.js')


//Read All
router.route("/").get(async (req,res) => {
    await SubCompany.find().then((data) => {
        res.status(200).send({status :"Data Recieved" ,SubCompany : data});
    }).catch((err) => {
        res.status(400).send({status:err});
    })
})

//Insert Data
router.route("/Add").post(async(req,res) => {
    const { 
        MainCompanyName ,
        MainCompanyID ,
        MainCompanyLocation ,
        SubName , 
        SubLocation } = req.body;
    console.log(SubName);
    const newSubCompany = new SubCompany({
        MainCompanyName,
        MainCompanyID,
        MainCompanyLocation,
        SubName,
        SubLocation
    })
    await newSubCompany.save().then(() => {
        res.status(200).send({status:"New Sub Company Added"})
    }).catch((err) => {
        res.status(400).send({status:err})
        console.log(err)
    })
}) 

router.route("/:id").get(async (req,res) =>{
    const id = req.params.id;
    console.log(id);
    await SubCompany.findById({MainCompanyID:id}).then((SendData)=>{
        console.log(SendData);
        res.status(200).send({SendData:SendData})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
})
router.route("/Update").put(async(req,res) => {

    const id = req.body.id;
    console.log(id);
    const {
        MainCompanyName,
        MainCompanyID,
        MainCompanyLocation,
        SubName,
        SubLocation} = req.body;

    const dataSample = {
        MainCompanyName,
        MainCompanyID,
        MainCompanyLocation,
        SubName,
        SubLocation
    }
    console.log(dataSample);
    await SubCompany.findByIdAndUpdate(id,dataSample).then(() => {
        res.status(200).send({state:"Updated" , dataSample:dataSample})
    }).catch((err) => {
        res.state(400).send({state:err});
    }) 
})
router.route("/Delete/:id").delete(async (req,res) => {
    const id = req.params.id;
    console.log(id);
    SubCompany.findByIdAndDelete(id).then(() => {
        res.status(200).send({state:"Deleted Successfully"});
    }).catch((err) => {
        res.status(100).send({status : err})
    })
 })
module.exports = router;