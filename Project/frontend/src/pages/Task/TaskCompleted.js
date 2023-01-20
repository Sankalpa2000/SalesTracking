import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Card, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CModal, CModalBody, CModalHeader, CModalTitle, CRow } from '@coreui/react';

import { useLocation, useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';



function TaskCompleted() {
    const navigate = useNavigate();
    const [visibleXL, setVisibleXL] = useState(true)
    const [CustomerName,setCustomerName] = useState();
    const [CustomerEmail,setCustomerEmail] = useState();
    const [CustomerPhone,setCustomerPhone] = useState();
    const [CompanyName,setCompanyName] = useState();
    const [CompanyLocation,setCompanyLocation] = useState();
    const [CompanyID,setCompanyID] = useState();
    const [Title,setTitle] = useState();
    const [TaskID,setID] = useState();
    const [Description,setDescription] = useState();
    const [Date,setDate] = useState();
    const [STime,setSTime] = useState();
    const [ETime,setETime] = useState();
    const [UserName,setUsersName] = useState();
    const [UserEPFNO,setUserEPFNO] = useState();
    const [UserEmail,setUserEmail] = useState();
    const [SubCompanyID,setSubCompanyID] = useState();
    const [CompletedAt,setCompletedAt] = useState();
    const [Remark,setRemark] = useState();
    const [SubCompanyName,setSubCompanyName] = useState();
    const [SubCompanyLocation,setSubCompanyLocation] = useState();
    
    const Location = useLocation();
    const data = Location.state.props
    useEffect(() => {
        try {
            setID(data.id)
            setUsersName(data.UserName)
            setUserEPFNO(data.UserEPFNO)
            setUserEmail(data.UserEmail)
            setCustomerName(data.CustomerName)
            setCustomerEmail(data.CustomerEmail)
            setCustomerPhone(data.CustomerPhone)
            setCompanyID(data.CompanyID)
            setCompanyName(data.CompanyName)
            setCompanyLocation(data.CompanyLocation)
            setSubCompanyName(data.SubCompanyName)
            setSubCompanyLocation(data.SubCompanyLocation)
            setSubCompanyID(data.SubCompanyID)
            setTitle(data.Title)
            setDate(data.Date.substring(0,10))
            setSTime(data.STime)
            setETime(data.ETime)
            setDescription(data.Description)
        } catch (error) {
        
        }
        
        // console.log(data);
     
  },[])
    
    const SubmitData = (e) =>{
        e.preventDefault();
        
        
        // console.log(Date);
        const Data ={
            Remark,
            CompletedAt,
            TaskID,
            UserName,
            UserEPFNO,
            UserEmail,
            CustomerName,
            CustomerEmail,
            CustomerPhone,
            CompanyName,
            CompanyLocation,
            CompanyID,
            SubCompanyName,
            SubCompanyLocation,
            SubCompanyID,
            Title,
            Date,
            STime,
            ETime,
            Description,
          }
        //   console.log(UserEPFNO);
          axios.post(`http://localhost:8080/CompletedTask/Add`,Data).then((res) => {
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
              if(window.confirm("Confirm Delete Task ?") === true){
                const id = e._id;
                // console.log(id);
                axios.delete(`http://localhost:8080/Task/Delete/${TaskID}`).then((res)=>{
                    alert(res.data.state)
                    navigate('/CompletedList')
                })
            }
            navigate(-2)
          }).catch(err => {
              alert(err)
          })
        } 

    return (
        <>
    <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center' }}>
        
    <CModal size="sm" visible={visibleXL} onClose={() => navigate(-1)}>
      <CModalHeader>
        <CModalTitle>Complete Task</CModalTitle>
      </CModalHeader>
      <CModalBody>
            <CCardText>
                <Form onSubmit={SubmitData}>
                <Form.Group className='form-floating mb-3' style={{width:'100%' ,marginTop:'10px'}}>
                    <Form.Control type="date"  placeholder="Date" value={CompletedAt} onChange={(e) => {setCompletedAt(e.target.value)}}  required />
                    <Form.Label>Date :</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-3' style={{width:'100%' ,marginTop:'10px'}}>
                    <Form.Control type="text" value={Remark} onChange={(e) => {setRemark(e.target.value)}} />
                    <Form.Label>Remark :</Form.Label>
                    <CButton class="btn btn-success" style={{marginRight:'20px',marginTop:'20px'}} type='submit'>Complete</CButton>
                </Form.Group>
                </Form>
            </CCardText>
        
        
      </CModalBody>
    </CModal>
       
    </Container>
        </>
  )
}

export default TaskCompleted