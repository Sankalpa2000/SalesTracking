import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners';
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Card, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CModal, CModalBody, CModalHeader, CModalTitle, CRow } from '@coreui/react';

import { useLocation, useNavigate } from 'react-router-dom';


function TaskCompleted() {
    var dateMDY;
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    const [Task,setTask] = useState([]);
    const navigate = useNavigate();
    const [visibleXL, setVisibleXL] = useState(false)
    
    
    useEffect(() => {
        
        axios.get("http://localhost:8080/TaskCompleted/").then((res) =>{
            setTask(res.data.data);
            console.log(Task);
            
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
        // e.preventDefault();
        if(window.confirm("Confirm Delete Task ?") === true){
            const id = e._id;
            console.log(id);
            axios.delete(`http://localhost:8080/Task/Delete/${id}`).then((res)=>{
                alert(res.data.state)
                navigate(0)
            })
        }
    }
    const Completed = (e) => {
        // e.preventDefault();
        if(window.confirm("Confirm Task Completion ?") === true){

            
            const id = e._id;
            console.log(id);
            axios.delete(`http://localhost:8080/Task/Delete/${id}`).then((res)=>{
                alert(res.data.state)
                navigate(0)
            })
        }
    }

    return (
        <>
    <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center' }}>
        <h1>Completed Task  :</h1>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginBottom:'2%'}}>
            
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
                            Username : </b> {e.UserName} - {e.UserEPFNO}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                            Date : </b> {e.Date.substring(0, 10)}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                             Description :</b>{e.Description.substring(0, 200)}
                    
                    </CCardText>
                    <CButton ovariant="outline-primary" style={{marginRight:'20px'}} onClick={() => {MoreDetails(e)}}>Details</CButton>
                    {/* <CButton class="btn btn-warning" style={{marginRight:'20px'}} onClick={() => {updateDetails(e)}}>Edit</CButton> */}
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

export default TaskCompleted