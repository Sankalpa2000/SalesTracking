import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function SubCompanyEdit() {

  const [SubName,setSubName] = useState();
  const [SubLocation, setSubLocation] = useState();
  const [id,SetID] = useState();
  const [MainCompanyID,setMainCompanyID] = useState();
  const [MainCompanyLocation,setMainCompanyLocation] = useState();
  const [MainCompanyName,setMainCompanyName] = useState();
  const location = useLocation();
  const navigate = useNavigate();


  const data = location.state.data;
  useEffect(() => {
    console.log(data);
    
    try {
        setMainCompanyName(data.MainCompanyName)
        setMainCompanyID(data.MainCompanyID)
        setMainCompanyLocation(data.MainCompanyLocation)
        SetID(data._id)
        setSubName(data.SubName)
        setSubLocation(data.SubLocation)
        
      } catch (error) {
        navigate(-1)
      }
    },[])
    const SendData = (e) => {
      e.preventDefault();

      const dataSample = {
        id,
        MainCompanyName,
        MainCompanyID,
        MainCompanyLocation,
        SubName,
        SubLocation
      }
      console.log(dataSample);
      axios.put("http://localhost:8080/SubCompany/Update",dataSample).then((res) => {
            alert('data inserted')
            console.log(res.state);
            navigate(-1)
        }).catch(err => {
           alert(err)
        })
    }




  return (
    <Container style={{marginTop : '5%',display : 'block',width : '80%',justifyContent : 'center'}}>

            <Form onSubmit={(e) => {SendData(e)}}>
                <h4  style={{marginBottom : '30px'}}>
                Sub Company Details             </h4>
                <Form.Group  className=' mb-3'>
                    {/* <Form.Select onChange = {(e)=>{setMainCompanyName(e.target.value)}} required >
                    <option value = 'select'  selected>Select Main Company</option>
                        {Company.map((e,i) =>(
                    <option key={i} value={e.Name}>{e.Name}-{e.Location}</option>
                        ))}
                    </Form.Select> */}
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
                    Update
                </Button>
                <hr style={{height:"5px",color:'black',background:'black'}}/>
          </Form>
        </Container>
  )
}

export default SubCompanyEdit