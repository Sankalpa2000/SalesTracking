import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify';

function CompanyEdit() {
    const navigate = useNavigate();

    const [Location,setLocation] = useState();
    const [Name,setName] = useState();
    const [id,setID] = useState();
    const location = useLocation()
    useEffect(() => {
        
        const data = location.state.props;
        setLocation(data.Location)
        setName(data.Name)
        setID(data._id)
        console.log(data._id)
    },[])

    
    const SubmitData = (e) =>{
        e.preventDefault();
        const Data ={
            id,
            Name,
            Location,
        }
        console.log(Data);
        axios.put("http://localhost:8080/Company/Update",Data).then((res) => {
            alert("Data Added");
            navigate(-1)
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
                    <Form.Control type='text' placeholder='Enter Comapny Name :' value={Name}  id="floatingInput" onChange={(e) => {setName(e.target.value)}} required/>
                    <Form.Label for="floatingInput">Company Name :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text' placeholder='Enter Location :' value={Location} onChange={(e) => {setLocation(e.target.value)}} required/>
                    <Form.Label>Location :</Form.Label>
                </Form.Group>
                <Button type='submit' style={{marginRight:"20px",fontWeight : 'bold'}}>
                    Update
                </Button>
                <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
                </div>
                
            </Form>
            <hr></hr>
            
    </Container>
    </>
  )
}

export default CompanyEdit