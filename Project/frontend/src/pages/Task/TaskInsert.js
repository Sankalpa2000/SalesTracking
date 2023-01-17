import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify';

function TaskInsert() {

    const [UserDetails,setUserDetails] = useState();
    const [CustomerDetails,setCustomerDetails] = useState();
    const [GroupCompany,setGroupCompany] = useState();
    const [GroupSubCompany,setGroupSubCompany] = useState();
    const [Title,setTitle] = useState();
    const [Description,setDescription] = useState();
    const [Date,setDate] = useState();
    const [SubGroup,setSubGroup] = useState([]);
    const [User,setUsers] = useState([]);
    const [Customer,setCustomer] = useState([]);
    const [Company,setCompany] = useState([]);
    const [STime,setSTime] = useState();
    const [ETime,setETime] = useState();

    const navigate = useNavigate();

    const SubmitData = (e) =>{
      e.preventDefault();
      
      const UserName = (UserDetails.split("-")[0]);
      const UserEPFNO = (UserDetails.split("-")[1]);
      const UserEmail = (UserDetails.split("-")[2]);
      const CustomerName =  (CustomerDetails.split("-")[0])
      const CustomerEmail =  (CustomerDetails.split("-")[1])
      const CustomerPhone =  (CustomerDetails.split("-")[2])
      const CompanyName =  (GroupCompany.split("-")[0])
      const CompanyLocation =  (GroupCompany.split("-")[1])
      const SubCompanyName =  (GroupSubCompany.split("-")[0])
      const SubCompanyLocation =  (GroupSubCompany.split("-")[1])
      const SubCompanyID =  (GroupSubCompany.split("-")[2])
      const CompanyID =  (GroupSubCompany.split("-")[3])
      console.log(Date);
      const Data ={
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
        axios.post(`http://localhost:8080/Task/Add`,Data).then((res) => {
            alert("Data Added");
        }).catch(err => {
            alert(err)
            
        })
      } 
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

  return (
    <>
        <Container style={{marginTop : '5%',  marginBottom : '10%',display : 'block',width : '80%',justifyContent : 'center'}}>
            <h4 style={{align:'center' ,marginBottom : '3%'}}>
                Add Task : 
            </h4>
            <Form onSubmit= {SubmitData} >
                <Form.Group className= 'mb-3'>
                <Form.Label>User Name :</Form.Label>
                <Form.Select onChange={(e) => {setUserDetails(e.target.value)}}  required >
                <option value = 'select'  selected></option>
                {User.map((e,i) =>(
                    <option key={i} value={`${e.Name}-${e.EPFNO}-${e.Email}`}>{e.Name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                <Form.Label>Customer Name :</Form.Label>
                <Form.Select onChange={(e) => {setCustomerDetails(e.target.value)}}  required >
                <option value = 'select'  selected></option>
                {Customer.map((e,i) =>(
                    <option key={i} value={`${e.Name}-${e.Email}-${e.Phone}`}>{e.Name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                <Form.Label>Group Company :</Form.Label>
                <Form.Select onChange={(e) => {setGroupCompany(e.target.value)}}  required >
                <option value = 'select'  selected></option>
                {Company.map((e,i) =>(
                    <option key={i} value={`${e.Name}-${e.Location}`}>{e.Name}-{e.Location}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3' >
                <Form.Label>Sub Company :</Form.Label>
                <Form.Select onChange={(e) => {setGroupSubCompany(e.target.value)}}  required >
                <option value = 'select'  selected></option>
                {SubGroup.map((e,i) =>(
                    <option key={i} value={`${e.SubName}-${e.SubLocation}-${e._id}-${e.MainCompanyID}`}>{e.SubName}-{e.SubLocation}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text'  onChange={(e) => {setTitle(e.target.value)}} required/>
                    <Form.Label>Task Title:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    <Form.Control type="date" format='yyyy-mm-dd' placeholder="Date" value={Date} onChange={(e) => {setDate(e.target.value)}}  required />
                    <Form.Label>Date:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    <Form.Control type="time" placeholder="From" onChange={(e) => {setSTime(e.target.value)}}  required />
                    <Form.Label>From:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    <Form.Control type="time" placeholder="To" onChange={(e) => {setETime(e.target.value)}} required />
                    <Form.Label>To:</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='phone'  onChange={(e) => {setDescription(e.target.value)}} required/>
                    <Form.Label>Description :</Form.Label>
                </Form.Group>
                
                <Button variant="primary" type="submit" style={{width:'20%',marginBottom:'15px'}}>+ Add</Button>
                {/* <ToastContainer position="top-center" autoClose={8080}/> */}
            </Form>
        </Container>
        
    </>
  )
}

export default TaskInsert