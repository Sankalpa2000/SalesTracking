import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6' style={{marginTop:"7%"}}>

    <Form.Group className='form-floating mb-3'>
      <Form.Control type='email' placeholder='Enter Email :'  required/>
      <Form.Label>Email :</Form.Label>
    </Form.Group>
    <Form.Group className='form-floating mb-3'>
      <Form.Control type='password' placeholder='Enter Password :'  required/>
      <Form.Label>Password :</Form.Label>
    </Form.Group>
    <div className='text-center text-md-start mt-4 pt-2'>
      <Button className="mb-0 px-5" size='lg'>Login</Button>
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Register" className="link-danger">Register</a></p>
    </div>

  </MDBCol>

</MDBRow>



</MDBContainer>
  )
}
