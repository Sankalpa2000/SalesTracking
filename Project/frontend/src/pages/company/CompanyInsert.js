import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify';


function CompanyInsert() {

    const [Name,setName] = useState();
    const [Location,setLocation] = useState();
    
    
    const SubmitData = (e) =>{
        // e.preventDefault();
        const Data ={
            Name,
            Location,
        }
        //console.log(Data);
        axios.post("http://localhost:8080/Company/Add",Data).then((res) => {
            // toast.success("Data Added");
        }).catch(err => {
           alert(err)
            
        })

    } 
    

  return (
    <>
        <Container style={{marginTop : '5%',display : 'block',width : '50%',justifyContent : 'center'}}>
            <h4 style={{align:'center' , marginBottom:"30px"}}>
                Company Insertion Form : 
            </h4>
            <Form onSubmit={(e) => {SubmitData(e)}}>
                
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Comapny Name :'  id="floatingInput" onChange={(e) => {setName(e.target.value)}} required/>
                    <Form.Label for="floatingInput">Company Name :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :' onChange={(e) => {setLocation(e.target.value)}} required/>
                    <Form.Label>Location :</Form.Label>
                </Form.Group>
                <Button type='submit' style={{marginRight:"20px",fontWeight : 'bold'}}>
                    Save
                </Button>
                <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
                <a href='/SubCompanyInsert'>

                    <Button variant="primary" style={{fontWeight : 'bold',  marginRight:'10px'}}>+ Add Sub Company</Button>
                </a>
                </div>
                
            </Form>
            <hr></hr>
            
    </Container>
    </>
  )
}

export default CompanyInsert