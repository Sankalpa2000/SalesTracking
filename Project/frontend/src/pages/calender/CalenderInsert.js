import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CalenderInsert() {

    const SendData = (e) => {
        e.preventDefault();
        const data = {
            TaskID: 1,
            OwnerID: 2,
            Title: "Bowling tournament",
            Description: "",
            StartTimezone: null,
            Start: "2023-01-20T21:00:00.000Z",
            End: "2023-01-21T00:00:00.000Z",
            EndTimezone: null,
            RecurrenceRule: null,
            RecurrenceID: null,
            RecurrenceException: null,
            isAllDay: false
    }
    console.log(data);
    axios.post("http://localhost:8080/Task/Add",data).then((res) => {
            alert(res.state)
        }).catch(err => {
            alert(err)
            
        })
    }
  return (
    <Container style={{marginTop : '5%',display : 'block',width : '50%',justifyContent : 'center'}}>

        <Button onClick={(e) => {SendData(e)}}>Send</Button>
            {/* <h4 style={{align:'center' , marginBottom:"30px"}}>
                Company Insertion Form : 
            </h4>
            <Form >
            
                
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Comapny Name :'  id="floatingInput"  required/>
                    <Form.Label for="floatingInput">TaskID :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>OwnerID :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>Description :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>Start :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>End :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>OwnerID :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>OwnerID :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>OwnerID :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>OwnerID :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :'  required/>
                    <Form.Label>OwnerID :</Form.Label>
                </Form.Group>
                <Button type='submit' style={{marginRight:"20px",fontWeight : 'bold'}}>
                    Save
                </Button>
                <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
                <a href='/SubCompanyInsert'>

                    <Button variant="primary" style={{fontWeight : 'bold',  marginRight:'10px'}}>+ Add Sub Company</Button>
                </a>
                </div>
                
            </Form> */}
            <hr></hr>
            
    </Container>
  )
}

export default CalenderInsert