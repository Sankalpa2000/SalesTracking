import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function SubCompanyEdit() {
    const [SubName,setSubName] = useState();
    const [id,setID] = useState();
    const [SubLocation,setSubLocation] = useState();
    const [Company,setCompany] = useState([]);
    const [MainCompanyID,setMainCompanyID] = useState();
    // const [id,setId] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const data = location.state.props;
            const id = location.state.props._id
            
            setSubLocation(data.SubLocation)
            setSubName(data.SubName)
            setMainCompanyID(data.MainCompanyID)
            // setID(data._id)
            console.log(id);
            
        } catch (error) {
            navigate(-1)
        }
    },[])
    useEffect(() => {
        
        axios.get("http://localhost:8080/Company/").then((res) =>{
            setCompany(res.data.Company);
            
        }).catch((e) =>{
            alert(e)
        })
        
        
    }, [])
    const SubCompany = (e) =>{
        e.preventDefault();
        
        const id = location.state.props._id
            
        const Data ={
            id,
            MainCompanyID,
            SubName,
            SubLocation,
        }
        axios.put("http://localhost:8080/SubCompany/Update/",Data).then((res) => {
            console.log(id);
            alert("Data Added");
            Navigate(-1)
        }).catch(err => {
           alert(err)
            
        })

    } 
       
  return (
    <Container style={{marginTop : '5%',display : 'block',width : '80%',justifyContent : 'center'}}>

            <Form onSubmit={(e) => {SubCompany(e)}}>
                <h4  style={{marginBottom : '30px'}}>
                Edit Sub Company Details             </h4>
                <Form.Group  className=' mb-3'>
                    <Form.Select onChange = {(e)=>{setMainCompanyID(e.target.value)}} required >
                    <option value = 'select'  selected>{MainCompanyID}</option>
                        {Company.map((e,i) =>(
                    <option key={i} value={e.Name}>{e.Name}-{e.Location}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                
                <Form.Group  className='form-floating mb-3'>
                    <Form.Control type="text" placeholder="Enter Name " value={SubName}  onChange={(e) => {setSubName(e.target.value)}} />
                    <Form.Label>Enter Sub Company Name</Form.Label>
                </Form.Group>
                <Form.Group  className='form-floating mb-3'>
                    <Form.Control type="text" placeholder="Enter Sub Location" value={SubLocation} onChange={(e) => {setSubLocation(e.target.value)}}/>
                    <Form.Label>Enter Sub Company Location</Form.Label>
                </Form.Group>
                <Button type='submit' >
                    Save
                </Button>
                <hr style={{height:"5px",color:'black',background:'black'}}/>

            </Form>
            </Container>
  )
}

export default SubCompanyEdit