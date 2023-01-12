import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify';
import { Alert } from 'bootstrap';

function EditUsers() {

    const [Name,setName] = useState();
    const [EPFNO,setEPFNO] = useState();
    const [Email,setEmail] = useState();
    const [Password,setPassword] = useState();
    const [id,setid] = useState();
    const navigate = useNavigate();

    const location = useLocation()
    useEffect(() => {
        
        const data = location.state.props;
        setName(data.Name)
        setEPFNO(data.EPFNO)
        setEmail(data.Email)
        setPassword(data.Password)
        setid(data._id)
        
    },[])
    //console.log(location.state.data);
    
    const SubmitData = (e) =>{
        e.preventDefault();
        const Data ={
            id,
            Name,
            EPFNO,
            Email,
            Password
        }

        axios.put('http://localhost:8080/User/Update',Data).then((res) => {
            alert("Details Updated");
            //console.log(res.state);
            navigate(-1);
        }).catch(err =>{
            //alert(err)
          })
    } 

  return (
    <>
        <Container style={{marginTop : '5%',display : 'block',width : '50%',justifyContent : 'center'}}>
            <h4 style={{align:'center' ,marginBottom:'40px'}}>
                Update Form : 
            </h4>
            <Form onSubmit={(e) => {SubmitData(e)}}>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Your Name :' value={Name} onChange={(e) => {setName(e.target.value)}} required/>
                    <Form.Label>Name :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='number' placeholder='Enter EPF No :' value={EPFNO} onChange={(e) => {setEPFNO(e.target.value)}} required/>
                    <Form.Label>EPF No :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='email' placeholder='Enter Email :' value={Email} onChange={(e) => {setEmail(e.target.value)}} required/>
                    <Form.Label>Email :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='password' placeholder='Enter Password :' value={Password} onChange={(e) => {setPassword(e.target.value)}} required/>
                    <Form.Label>Password :</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" style={{width:'20%'}}>Update</Button>
                <ToastContainer position="top-center" autoClose={8080}/>
            </Form>
        </Container>
    </>
  )
}

export default EditUsers