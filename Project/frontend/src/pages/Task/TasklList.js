import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners';
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Card, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CModal, CModalBody, CModalHeader, CModalTitle, CRow } from '@coreui/react';

import { useLocation, useNavigate } from 'react-router-dom';


function TaskList() {
    const [search,setSearch] = useState("");
    const [Users,setUsers] = useState([]);
    const [Task,setTask] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8080/Task/").then((res) =>{
            setTask(res.data.data);
        }).catch((e) =>{
            alert(e)
        })
    }, [])
    const updateDetails = (e) => {
       navigate('/TaskEdit',{state : {props : e}})
    }
    const MoreDetails = (e) => {
       navigate('/TaskDetails',{state : {props : e}})
    }
    const Deletetask = (e) => {
        if(window.confirm("Confirm Delete Task ?") === true){
            const id = e._id;
            axios.delete(`http://localhost:8080/Task/Delete/${id}`).then((res)=>{
                alert(res.data.state)
                navigate(0)
            })
        }
    }
    useEffect(() => {
        axios.get("http://localhost:8080/User/").then((res) =>{
                setUsers(res.data.Registration);
            }).catch((err) =>{
              alert(err)
            })
        }, [])

    return (
        <>
    <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center' }}>
        <h1>Task  :</h1>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginBottom:'2%'}}>
            <a href='/InsertTask'>
                
            <Button variant="primary" style={{fontWeight : 'bold', marginRight:'10px'}}>+ Add</Button>
            </a>
            <a href='/CompletedList'>
                
            <Button variant="success" style={{fontWeight : 'bold', marginRight:'10px'}}>Completed</Button>
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
            
                    
           
            
                <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    
                    
                <Form.Select onChange={(e) =>{setSearch(e.target.value)}} required  style={{fontWeight : 'bold', marginRight:'10px'}}>
                            <option value = ''  selected>Select Name</option>
                        {Users.map((e,i) =>(
                            <option key={i} value={e.Name}>{e.Name}</option>
                            ))}
                    
                </Form.Select>
                            <Form.Label>Search By Name :</Form.Label>
                            </Form.Group>
                {/* <Form.Group className='form-floating mb-3' style={{width:'40%'}}>
                    <Form.Control type="date"  placeholder="Date" value={SearchDate} onChange={(e) => {setSearchDate(e.target.value)}}  required />
                    <Form.Label>Search By Date :</Form.Label>
                </Form.Group>        */}
                    
            
        
        <CRow>
         {
         Task.filter((element) => {
            if(search === ""){
                return element
            }else if ((element.UserName.toLowerCase()).includes(search.toLowerCase())){
                return element
            }
        }).map((e,i) =>(
             <CCol sm={6}>
    
                <CCard>
                <CCardBody>
                    <CCardTitle>
                        <b>
                            Task :</b>{e.Title}
                        
                    </CCardTitle>
                    <CCardText>
                        <b>
                            Username : </b> {e.UserName}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                            Date : </b> {e.Date.substring(0, 10)}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                             Description :</b>{e.Description.substring(0, 100)}
                    
                    </CCardText>
                    <CButton ovariant="info" style={{marginRight:'20px'}} onClick={() => {MoreDetails(e)}}>More Details</CButton>
                    <CButton class="btn btn-warning" style={{marginRight:'20px'}} onClick={() => {updateDetails(e)}}>Edit</CButton>
                    {/* <CButton class="btn btn-success" style={{marginRight:'20px'}} onClick={() => {Completed(e)}}>Completed</CButton> */}
                    <CButton class="btn btn-danger" style={{marginRight:'20px'}} onClick={() => {Deletetask(e)}}>Delete</CButton>
                </CCardBody>
                </CCard><br></br>
            </CCol>
            ))}
        </CRow>
    </Container>
        </>
  )
}

export default TaskList