import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners';
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function UserList() {
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    const [Users,setUsers] = useState();
    
    useEffect(() => {
        
        axios.get("http://localhost:8080/User/").then((res) =>{
            setUsers(res.data.Registration);
            //console.log(Users);
            
            // setTimeout(() => {
                setLoading(false);
                //   }, 1000);
                
            }).catch((e) =>{
                alert(e)
            })
            

        }, [Users])

        const navigate = useNavigate();
        const updateDetails = (e) => {
            navigate('/EditUsers',{state : {props : e}})
        }

        const deleteUser = (e) => {
            if(window.confirm("Confirm Delete User ?") === true){
                const id = e._id;
                // console.log(id);
                axios.delete(`http://localhost:8080/User/delete/${id}`).then((res)=>{
                    alert(res.data.state)
                })
            }
        }
        return (
        <>
    <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1>Users :</h1>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <a href='/Register'>
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
            <th>EPF No</th>
            <th>Email</th>
            {/* <th>Password</th> */}
            <th>Other</th>
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
                    <td>{e.EPFNO}</td>
                    <td>{e.Email}</td>
                    {/* <td>{e.Password}</td> */}
                    <td>
                        <Button variant="outline-primary" style={{marginRight:'20px'}} onClick={() => {updateDetails(e)}}>Edit</Button>     
                        <Button  variant="outline-danger" onClick={() => deleteUser(e)}>Delete</Button>
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

export default UserList