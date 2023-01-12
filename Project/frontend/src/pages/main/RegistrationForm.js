import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {

    const [Name,setName] = useState();
    const [EPFNO,setEPFNO] = useState();
    const [Email,setEmail] = useState();
    const [Password,setPassword] = useState();
    const navigate = useNavigate()
    
    const SubmitData = (e) =>{
        e.preventDefault();
        const Data ={
            Name,
            EPFNO,
            Email,
            Password
        }
        //console.log(Data);
        // const navigate = useNavigate();
        axios.post("http://localhost:8080/User/AddUser",Data).then((res) => {
            alert("Data Added");
            navigate('/UserList')
        }).catch(err => {
            alert(err)
        })

    } 

  return (
    <>
        <Container style={{marginTop : '5%',display : 'block',width : '50%',justifyContent : 'center'}}>
            <h4 style={{align:'center' ,marginBottom:'40px'}}>
                Registration Form : 
            </h4>
            <Form onSubmit={(e) => {SubmitData(e)}}>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Your Name :' onChange={(e) => {setName(e.target.value)}} required/>
                    <Form.Label>Name :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='number' placeholder='Enter EPF No :' onChange={(e) => {setEPFNO(e.target.value)}} required/>
                    <Form.Label>EPF No :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='email' placeholder='Enter Email :' onChange={(e) => {setEmail(e.target.value)}} required/>
                    <Form.Label>Email :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='password' placeholder='Enter Password :' onChange={(e) => {setPassword(e.target.value)}} required/>
                    <Form.Label>Password :</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" style={{width:'20%'}}>Register</Button>
                <ToastContainer position="top-center" autoClose={8080}/>
            </Form>
        </Container>
    </>
  )
}

export default RegistrationForm