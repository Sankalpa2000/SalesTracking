import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';

function SubCompanyInsert() {
    const [SubName,setSubName] = useState();
    const [SubLocation,setSubLocation] = useState();
    const [Company,setCompany] = useState([]);
    const [DataArray,setDataArray] = useState([]);
    // const [MainCompanyID,setMainCompanyID] = useState();
    const [MainCompanyName,setMainCompanyName] = useState();
    
    const SubCompany = ( (e) => {
        e.preventDefault();
        
        console.log(MainCompanyName.split("-")[0]);
        console.log(MainCompanyName.split("-")[1]);
        console.log(MainCompanyName.split("-")[2]);

        const Sub = {
            MainCompanyName,
            SubName,
            SubLocation
        }
        axios.post("http://localhost:8080/SubCompany/Add",Sub).then((res) => {
            alert('data inserted')
        }).catch(err => {
           alert(err)
        //    alert(err.state)
            
        })
        DataArray.push(Sub);
        setSubName('');
        setSubLocation('');
    })
    useEffect(() => {
        
        axios.get("http://localhost:8080/Company/").then((res) =>{
                setCompany(res.data.Company);

            }).catch((e) =>{
                alert(e)
            })
            

        }, [])
  return (
    <Container style={{marginTop : '5%',display : 'block',width : '80%',justifyContent : 'center'}}>

            <Form>
                <h4  style={{marginBottom : '30px'}}>
                Sub Company Details             </h4>
                <Form.Group  className=' mb-3'>
                    <Form.Select onChange = {(e)=>{setMainCompanyName(e.target.value)}} required >
                    <option value = 'select'  selected>Select Main Company</option>
                        {Company.map((e,i) =>(
                    <option key={i} value={`${e.Name}-${e.Location}-${e._id}`}>{e.Name}-{e.Location}</option>
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
                <Button onClick={SubCompany} >
                    Save
                </Button>
                <hr style={{height:"5px",color:'black',background:'black'}}/>
        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>No</th>
            <th>Name</th>
            <th>Location</th>
            </tr>
        </thead>
        <tbody>
            {DataArray.map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.SubName}</td>
                    <td>{e.SubLocation}</td>
                </tr>
            ))}
    
        </tbody>
        </Table>
                
                {/* <Button onClick={SubmitAll()} style={{marginBottom : '30px' ,marginTop:"10px"}}>
                    Submit
                </Button> */}

            </Form>
            </Container>
  )
}

export default SubCompanyInsert