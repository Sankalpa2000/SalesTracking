import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function TaskEdit() {

    const navigate = useNavigate();
    const [UserDetails,setUserDetails] = useState();
    const [CustomerName,setCustomerName] = useState();
    const [CustomerEmail,setCustomerEmail] = useState();
    const [id,setID] = useState();
    const [CustomerPhone,setCustomerPhone] = useState();
    const [CustomerDetails,setCustomerDetails] = useState();
    const [GroupCompany,setGroupCompany] = useState();
    const [CompanyName,setCompanyName] = useState();
    const [CompanyLocation,setCompanyLocation] = useState();
    const [CompanyID,setCompanyID] = useState();
    const [GroupSubCompany,setGroupSubCompany] = useState();
    const [Title,setTitle] = useState();
    const [Description,setDescription] = useState();
    const [Date,setDate] = useState();
    const [STime,setSTime] = useState();
    const [ETime,setETime] = useState();
    const [UserName,setUsersName] = useState();
    const [UserEPFNO,setUserEPFNO] = useState();
    const [UserEmail,setUserEmail] = useState();
    const [SubCompanyID,setSubCompanyID] = useState();
    const [SubCompanyName,setSubCompanyName] = useState();
    const [SubCompanyLocation,setSubCompanyLocation] = useState();
    const [SubGroup,setSubGroup] = useState([]);
    const [Customer,setCustomer] = useState([]);
    const [User,setUsers] = useState([]);
    const [Company,setCompany] = useState([]);
    const Location = useLocation();
    const data = Location.state.props

    console.log(data);

    useEffect(() => {
        try{
            setDate(data.Date.substring(0,10));
            setSTime(data.STime)
            setETime(data.ETime)
            setDescription(data.Description)
            setUsersName(data.UserName)
            setUserEmail(data.UserEmail)
            setTitle(data.Title)
            setUserEPFNO(data.UserEPFNO)
            setCustomerName(data.CustomerName)
            setCustomerPhone(data.CustomerPhone)
            setCustomerEmail(data.CustomerEmail)
            setCompanyID(data.CompanyID)
            setCompanyName(data.CompanyName)
            setCompanyLocation(data.CompanyLocation)
            setSubCompanyLocation(data.SubCompanyLocation)
            setSubCompanyName(data.SubCompanyName)
            setSubCompanyID(data.SubCompanyID)
            setID(data._id)
            
        }catch(err){ 
            alert(err)
        }    
    },[])
        useEffect(() => {
            axios.get("http://localhost:8080/User/").then((res) =>{
                    setUsers(res.data.Registration);
                }).catch((err) =>{
                    alert(err)
                })
            }, [])

        useEffect(() => {
            axios.get("http://localhost:8080/Customer/").then((res) =>{
                    setCustomer(res.data.Customer);
                }).catch((err) =>{
                    alert(err)
                })
            }, [])
        useEffect(() => {
            axios.get("http://localhost:8080/Company/").then((res) =>{
                    setCompany(res.data.Company);
                }).catch((err) =>{
                    alert(err)
                })
            }, [])
        
        useEffect(() => {
            axios.get("http://localhost:8080/SubCompany/").then((res)=>{
                    setSubGroup(res.data.SubCompany);
                }).catch(err =>{
                    alert(err)
                })
            }, [])
            const SubmitData = (e) =>{
                e.preventDefault();
                
                const Data ={
                    id,
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
                console.log(Data);
                axios.put("http://localhost:8080/Task/Update",Data).then((res) => {
                    alert("Data Added");
                    navigate(-1)
                }).catch(err => {
                   alert(err)
                    
                })
        
            }

  return (
    <>
    <Container style={{marginTop : '5%',  marginBottom : '10%',display : 'block',width : '80%',justifyContent : 'center'}}>
            <h4 style={{align:'center' ,marginBottom : '3%'}}>
                Update Task : {Title}
            </h4>
            <Form onSubmit={SubmitData}>
                <Form.Group className= 'mb-3'>
                <Form.Label>User Name :</Form.Label>
                <Form.Select onChange={(e) => {setUserDetails(e.target.value)}}  required >
                <option value = {`${UserName}-${UserEPFNO}-${UserEmail}`}  selected>{UserName}</option>
                {User.map((e,i) =>(
                    <option key={i} value={`${e.Name}-${e.EPFNO}-${e.Email}`} >{e.Name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                <Form.Label>Customer Name :</Form.Label>
                <Form.Select onChange={(e) => {setCustomerDetails(e.target.value)}}  required >
                <option value = {`${CustomerName}-${CustomerEmail}-${CustomerPhone}`}  selected>{CustomerName}</option>
                {Customer.map((e,i) =>(
                    <option key={i} value={`${e.Name}-${e.Email}-${e.Phone}`}>{e.Name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                <Form.Label>Group Company :</Form.Label>
                <Form.Select onChange={(e) => {setGroupCompany(e.target.value)}}  required >
                <option  value={`${CompanyName}-${CompanyLocation}`}  selected>{CompanyName}-{CompanyLocation}</option>
                {Company.map((e,i) =>(
                    <option key={i} value={`${e.Name}-${e.Location}`}>{e.Name}-{e.Location}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3' >
                <Form.Label>Sub Company :</Form.Label>
                <Form.Select onChange={(e) => {setGroupSubCompany(e.target.value)}}  required >
                <option value={`${SubCompanyName}-${SubCompanyLocation}-${SubCompanyID}-${CompanyID}`}  selected>{SubCompanyName}-{SubCompanyLocation}</option>
                {SubGroup.map((e,i) =>(
                    <option key={i} value={`${e.SubName}-${e.SubLocation}-${e._id}-${e.MainCompanyID}`}>{e.SubName}-{e.SubLocation}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' value={Title} onChange={(e) => {setTitle(e.target.value)}} required/>
                    <Form.Label>Task Title:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    <Form.Control type="date" value={Date} onChange={(e) => {setDate(e.target.value)}}  required />
                    <Form.Label>Date:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    <Form.Control type="time" placeholder="From" value={STime} onChange={(e) => {setSTime(e.target.value)}}  required />
                    <Form.Label>From:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    <Form.Control type="time" placeholder="To" value={ETime} onChange={(e) => {setETime(e.target.value)}} required />
                    <Form.Label>To:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' value={Description}   onChange={(e) => {setDescription(e.target.value)}} required/>
                    <Form.Label>Description :</Form.Label>
                </Form.Group>
                
                <Button variant="primary" type="submit" style={{width:'20%',marginBottom:'15px'}}>Update</Button>
                {/* <ToastContainer position="top-center" autoClose={8080}/> */}
            </Form>
        </Container>
        
    </>
  )
}

export default TaskEdit