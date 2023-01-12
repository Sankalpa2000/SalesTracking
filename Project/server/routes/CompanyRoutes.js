const router = require('express').Router();
const Company = require('../models/Company.js');


//Read All
router.route("/").get(async (req,res) => {
    await Company.find().then((data) => {
        res.status(200).send({status :"Data Recieved" ,Company : data});
    }).catch((err) => {
        res.status(400).send({status:err});
    })
})

//Insert Data
router.route("/Add").post(async(req,res) => {
    const{Name , Location} = req.body;
    console.log(Name);
    const newCompany = new Company({
        Name,
        Location
    })
    await newCompany.save().then(() => {
        res.status(200).send({status:"New Company Added"})
    }).catch((err) => {
        res.status(400).send({status:err})
    })
}) 
router.route("/Update").put(async(req,res) => {
    const id = req.body.id;
    console.log(id);
    const {
        Name,
        Location} = req.body;
    const newData = {
        Name,
        Location
    }
    await Company.findByIdAndUpdate(id,newData).then(() => {
        res.status(200).send({state:"Updated" , data:newData})
    }).catch((err) => {
        res.state(400).send({state:err});
    }) 
})
router.route("/Delete/:id").delete(async (req,res) => {
    const id = req.params.id;
    // console.log(id);
    Company.findByIdAndDelete(id).then(() => {
        res.status(200).send({state:"Deleted Successfully"});
    }).catch((err) => {
        res.status(100).send({status : err})
    })
 })
 router.route("/getCompany/:id").get(async(req,res) =>{
    const id = req.params.id;
    console.log(id);
    await Company.find({_id:id}).then((data)=>{
        console.log(data);
        res.status(200).send({SubCompany:data})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
})
module.exports = router;