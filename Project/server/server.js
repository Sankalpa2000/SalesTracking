const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser');
const Port = process.env.PORT || 8080;
const app = express();


app.listen(Port, () => {
    console.log("PORT connected on "+ Port)
});
app.use(cors());
app.use(bodyParser.json());

//MongoDB Connection 
mongoose.set("strictQuery", false);
const url = process.env.MongoDB_URL;
mongoose.connect(url,{
    useNewUrlParser :true,
    useUnifiedTopology :true
});
const Connection = mongoose.connection;

Connection.once("open",() => {
    console.log("MongoDB Connected !!");
});

const UserRegistration = require('./routes/RegistrationRoutes.js');
app.use("/User",UserRegistration);

const CustomerReg = require('./routes/CustomerRoutes.js');
app.use("/Customer",CustomerReg);

const Company = require('./routes/CompanyRoutes.js');
app.use("/Company" , Company); 

const SubCompany = require('./routes/SubCompanyRoutes.js');
app.use("/SubCompany" , SubCompany);

const Task = require('./routes/TaskRoutes.js')
app.use("/Task" , Task); 

const TaskCompleted = require('./routes/CompletedTaskRoutes.js')
app.use("/CompletedTask" , TaskCompleted); 