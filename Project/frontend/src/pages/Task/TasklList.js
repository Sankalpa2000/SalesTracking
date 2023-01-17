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
    var dateMDY;
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    const [Task,setTask] = useState([]);
    const navigate = useNavigate();
    const [visibleXL, setVisibleXL] = useState(false)
    
    
    useEffect(() => {
        
        axios.get("http://localhost:8080/Task/").then((res) =>{
            setTask(res.data.data);
            console.log(Task);
            
        }).catch((e) =>{
            alert(e)
        })
    }, [])
    
    
    const updateDetails = (e) => {
        navigate('/TaskEdit',{state : {props : e}})
    }
    
    const deleteCustomer = (e) => {
        // e.preventDefault();
        // if(window.confirm("Confirm Delete Customer ?") === true){
            const id = e._id;
            console.log(id);
            //axios.delete(`http://localhost:8080/Customer/Delete/${id}`).then((res)=>{
            //     alert(res.data.state)
            //     navigate(0)
            // })
        // }
    }

    return (
        <>
    <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center' }}>
        <h1>Task  :</h1>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginBottom:'2%'}}>
            <a href='/InsertTask'>
                
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
                            UserName : </b> {e.UserName} - {e.UserEPFNO}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                            Date : </b> {e.Date.substring(0, 10)}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                             Description :</b>{e.Description.substring(0, 200)}
                    
                    </CCardText>
                    <CButton onClick={(e) => setVisibleXL(!visibleXL)}>More Details</CButton>
                </CCardBody>
                </CCard><br></br>
        <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
      <CModalHeader>
        <CModalTitle>{e.Title}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {e.UserName}
        <br/>
            {e.Description}
        <br/>
        <br/>
        
            <Button ovariant="outline-primary" style={{marginRight:'20px'}} onClick={() => {updateDetails(e)}}>Edit</Button>
      </CModalBody>
    </CModal>
            </CCol>
            ))}
        </CRow>
    </Container>
        </>
  )
}

export default TaskList