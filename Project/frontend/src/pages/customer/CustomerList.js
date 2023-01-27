import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners';
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


function CustomerList() {
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    const [Users,setUsers] = useState();
    const navigate = useNavigate();
    
    const [ customers, setCustomers ] = useState ( [] )
        useEffect( () => {
            async function fetchCustomers(){
            const { data } = await axios.get('http://127.0.0.1:8000/api/customers/')
            setCustomers(data)
        }
        fetchCustomers()
    }, [])

    useEffect(() => {
        
        axios.get("http://localhost:8080/Customer/").then((res) =>{
            setUsers(res.data.Customer);
            //console.log(Users);
            
            setTimeout(() => {
                setLoading(false);
            }, 1);
            
        }).catch((e) =>{
            alert(e)
        })
        
        
    }, [])
    
    
    const updateDetails = (e) => {
        navigate('/EditCustomer',{state : {props : e}})
    }
    
    const deleteCustomer = (e) => {
        // e.preventDefault();
        if(window.confirm("Confirm Delete Customer ?") === true){
            const id = e._id;
            // console.log(id);
            axios.delete(`http://localhost:8080/Customer/Delete/${id}`).then((res)=>{
                alert(res.data.state)
                navigate(0)
            })
        }
    }

    return (
        <>
    <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1>Customers  :</h1>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <a href='/Customer'>
                
            <Button variant="primary" style={{fontWeight : 'bold', marginRight:'10px'}}>+ Add</Button>
            </a>
            <Form className="d-flex" style={{width : '30%'}}>

            <Form.Control
              type="search"
              value = {search}
              placeholder="Name"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>{setSearch(e.target.value)}}
            />
            <Button >Search</Button>
          </Form>
        </div>
        {loading ? (<div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',height : '100%',marginTop : '10%'}}><HashLoader color="#3637da" /> </div>) : (
            
            <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Designation</th>
            <th>Group</th>
            <th>Sub Company</th>
            </tr>
        </thead>
        <tbody>
            {
                Users.filter((element) => {
                    if(search === ""){
                        return element
                    }else if ((element.Name.toLowerCase()).includes(search.toLowerCase())){
                        return element
                    }
                }).map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.Name}</td>
                    <td>{e.Email}</td>
                    <td>{e.Phone}</td>
                    <td>{e.Designation}</td>
                    <td>{e.Group}</td>
                    <td>{e.SubCompany}</td>
                    <td>
                        <Button variant="primary" style={{marginRight:'20px'}} onClick={() => {updateDetails(e)}}>Edit</Button>     
                        <Button  variant="danger" onClick={() => deleteCustomer(e)}>Delete</Button>
                    </td>
                </tr>
            ))}
    
        </tbody>
        </Table>
        )}

    </Container>
        </>
  )
}

export default CustomerList