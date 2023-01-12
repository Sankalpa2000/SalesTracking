import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';

function CustomerEdit() {

    const [id,setid] = useState();
    const [Name,setName] = useState();
    const [Email,setEmail] = useState();
    const [Phone,setPhone] = useState();
    const [Designation,setDesignation] = useState();
    const [Group,setGroup] = useState();
    const navigate = useNavigate();
    const [SubGroup,setSubGroup] = useState([]);
    const [Company,setCompany] = useState([]);
    const [SubCompany,setSubCompany] = useState();

    const location = useLocation()
    useEffect(() => {
        
        const data = location.state.props;
        console.log(data);
        setid(data._id)
        setName(data.Name)
        setEmail(data.Email)
        setPhone(data.Phone)
        setDesignation(data.Designation)
        setGroup(data.Group)
        setSubCompany(data.SubCompany)
        
    },[])

    const SubmitData = (e) =>{
        e.preventDefault();
        // alert('hi')
        const Data ={
            id,
            Name,
            Email,
            Phone,
            Designation,
            Group,
            SubCompany
        }

        axios.put('http://localhost:8080/Customer/Update',Data).then((res) => {
            alert("Details Updated");
            // console.log(res.state);
            navigate(-1);
        }).catch(err =>{
            alert(err)
          })
    } 
useEffect(() => {
        
    axios.get("http://localhost:8080/Company/").then((res) =>{
        setCompany(res.data.Company);
        // console.log(Company);
    }).catch((e) =>{
        alert(e)
    })
    

}, [])

    useEffect(() => {
        axios.get("http://localhost:8080/SubCompany/").then((res)=>{
            setSubGroup(res.data.SubCompany);
    }).catch(err =>{
      alert(err)
    })
    },[])

  return (
    <>
    <Container style={{marginTop : '5%', marginBottom: '10%',display : 'block',width : '80%',justifyContent : 'center'}}>
        <h4 style={{align:'center'}}>
            Customer Update Details Form : 
        </h4>
        <Form onSubmit={(e) => {SubmitData(e)}}>
            <Form.Group className='form-floating mb-3'>
                <Form.Control type='text' placeholder='Enter Your Name :' value={Name} onChange={(e) => {setName(e.target.value)}} required/>
                <Form.Label>Name :</Form.Label>
            </Form.Group>
            <Form.Group className='form-floating mb-3'>
                <Form.Control type='email' placeholder='Enter Email :' value={Email} onChange={(e) => {setEmail(e.target.value)}} required/>
                <Form.Label>Email :</Form.Label>
            </Form.Group>
            <Form.Group className='form-floating mb-3'>
                <Form.Control type='text' placeholder='Enter EPF No :' value={Phone} onChange={(e) => {setPhone(e.target.value)}} required/>
                <Form.Label>Phone :</Form.Label>
            </Form.Group>
            <Form.Group className='form-floating mb-3'>
                <Form.Control type='text' placeholder='Enter Password :' value={Designation} onChange={(e) => {setDesignation(e.target.value)}} required/>
                <Form.Label>Designation :</Form.Label>
            </Form.Group>
            <Form.Group className= 'mb-3'>
                <Form.Label>Group Company :</Form.Label>
                <Form.Select onChange={(e) => {setGroup(e.target.value)}}  required >
                <option value = 'select'  selected>{Group}</option>
                {Company.map((e,i) =>(
                    <option key={i} value={e.Name}>{e.Name}-{e.Location}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                <Form.Label>Sub Company :</Form.Label>
                <Form.Select onChange={(e) => {setSubCompany(e.target.value)}}  required >
                <option value = 'select' selected>{SubCompany}</option>
                {SubGroup.map((e,i) =>(
                    <option key={i} value={e.SubName}>{e.SubName}-{e.SubLocation}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            <Button variant="primary" type="submit" style={{width:'20%'}}>Update</Button>
            {/* <ToastContainer position="top-center" autoClose={8080}/> */}
        </Form>
    </Container>
    
</>
  )
}

export default CustomerEdit