import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify';

function CustomerInsert() {

    const [Name,setName] = useState();
    const [Email,setEmail] = useState();
    const [Phone,setPhone] = useState();
    const [Designation,setDesignation] = useState();
    const [Group,setGroup] = useState();
    const navigate = useNavigate();
    const [SubGroup,setSubGroup] = useState([]);
    const [Company,setCompany] = useState([]);
    const [SubCompany,setSubCompany] = useState();
    const SubmitData = (e) =>{
        e.preventDefault();
        const Data ={
            Name,
            Email,
            Phone,
            Designation,
            Group,
            SubCompany
        }
        //console.log(Data);
        axios.post(`http://localhost:8080/Customer/AddCustomer`,Data).then((res) => {
            alert("Data Added");
            navigate('/CustomerList')
        }).catch(err => {
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
        <Container style={{marginTop : '5%',  display : 'block',width : '80%',justifyContent : 'center'}}>
            <h4 style={{align:'center'}}>
                Customer Registration Form : 
            </h4>
            <Form onSubmit= {SubmitData} >
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text'  onChange={(e) => {setName(e.target.value)}} required/>
                    <Form.Label>Name :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='email'  onChange={(e) => {setEmail(e.target.value)}} required/>
                    <Form.Label>Email :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='number'  onChange={(e) => {setPhone(e.target.value)}} required/>
                    <Form.Label>Phone :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3'>
                    <Form.Control type='text'  onChange={(e) => {setDesignation(e.target.value)}} required/>
                    <Form.Label>Designation :</Form.Label>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                <Form.Label>Group Company :</Form.Label>
                <Form.Select onChange={(e) => {setGroup(e.target.value)}}  required >
                <option value = 'select'  selected></option>
                {Company.map((e,i) =>(
                    <option key={i} value={e.Name}>{e.Name}-{e.Location}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                <Form.Label>Sub Company :</Form.Label>
                <Form.Select onChange={(e) => {setSubCompany(e.target.value)}}  required >
                <option value = 'select'  selected></option>
                {SubGroup.map((e,i) =>(
                    <option key={i} value={e.SubName}>{e.SubName}-{e.SubLocation}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                
                <Button variant="primary" type="submit" style={{width:'20%',marginBottom:'5%'}}>Register</Button>
                {/* <ToastContainer position="top-center" autoClose={8080}/> */}
            </Form>
        </Container>
        
    </>
  )
}

export default CustomerInsert