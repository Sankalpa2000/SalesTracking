import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table';
import { useLocation, useNavigate } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskCompleted from './TaskCompleted';


function TaskDetails() {
  const Location = useLocation();
  const data = Location.state.props
  const navigate = useNavigate();
    const [CustomerName,setCustomerName] = useState();
    const [CustomerEmail,setCustomerEmail] = useState();
    const [CustomerPhone,setCustomerPhone] = useState();
    const [CompanyName,setCompanyName] = useState();
    const [CompanyLocation,setCompanyLocation] = useState();
    const [CompanyID,setCompanyID] = useState();
    const [Title,setTitle] = useState();
    const [id,setID] = useState();
    const [Description,setDescription] = useState();
    const [Date,setDate] = useState();
    const [STime,setSTime] = useState();
    const [ETime,setETime] = useState();
    const [UserName,setUsersName] = useState();
    const [UserEPFNO,setUserEPFNO] = useState();
    const [UserEmail,setUserEmail] = useState();
    const [SubCompanyID,setSubCompanyID] = useState();
    const [SubCompanyName,setSubCompanyName] = useState();
    const [SubCompanyLocation,setSubCompanyLocation] = useState();
  const [visibleXL, setVisibleXL] = useState(true)
  // console.log(data);

  useEffect(() => {
    try {
      
      setID(data._id)
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
      
      
    },[])
    // console.log(UserEPFNO);

  const TaskCompleted = () => {
    const data = {
            id,
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
            Description};
    navigate('/ViewCompleted',{state : {props : data}})
}
  return (
    <div>
      <CModal size='xl' visible={visibleXL} onClose={() => navigate(-1)}>
      <Container style={{marginTop : '5%', marginBottom: '10%',display : 'block',width : '80%',justifyContent : 'center'}}>
          
      <CModalHeader>
        <CModalTitle>
          Task : {Title}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <Row>
          <Col>

      <Table striped bordered hover style={{justifyContent : 'center',marginTop : 10,marginBottom:'1%'}}>
        <thead>
          <tr>
            <td><CModalTitle>Details</CModalTitle></td>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <b>
                  Date : </b>{Date}
                
            </td>
          </tr>
          <tr>
            <td>
                <b>
                  Time : From </b>[ {STime} ] <b>To</b> [ {ETime} ]
                
            </td>
          </tr>
          <tr>
            <td>
                <b>
                  Main Company :</b> {CompanyName} - {CompanyLocation}
            </td>
          </tr>
          <tr>
            <td>
                <b>
                  Sub Company :</b> {SubCompanyName} - {SubCompanyLocation}
                
            </td>
          </tr>
          <tr>
            <td>
                <b>
                  Description : </b>{Description}
                
            </td>
          </tr>
        </tbody>
      </Table>
          </Col>
          <Col>
        

      
      This Month Completed :
  
      <ProgressBar variant="success" now={45} animated value={25} style={{marginTop:'10px'}}/>
      <br/>
      <br/>
      Monthly Progress :
      <CChart
  type="bar" 
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August' ,'September' , 'October', 'November' ,'December'],
    datasets: [
      {
        label: [`${Title}`] ,
        backgroundColor: '#f87979',
        data: [60, 40, 60, 40, 30, 40, 50, 90, 10, 20,90,80],
      },
    ],
  }}
  labels="months"/>

          </Col>
        </Row>
        <Table striped bordered hover style={{justifyContent : 'center',marginTop : 10}}>
          <thead>
            <tr>
              <td></td>
              <td><b>User</b></td>
              <td><b>Customer</b></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td><b>{UserName}</b></td>
              <td><b>{CustomerName}</b></td>
            </tr>
            <tr>
              <td><b>Email</b></td>
              <td><b>{UserEmail}</b></td>
              <td><b>{CustomerEmail}</b></td>
            </tr>
            <tr>
              <td><b>Phone</b></td>
              <td><b>{}</b></td>
              <td><b>{CustomerPhone}</b></td>
              {/* <td><b>{id}</b></td> */}

            </tr>
            
          </tbody>
        </Table>
        <CButton class="btn btn-success" style={{marginBottom:'10%'}} onClick={TaskCompleted}>Completed</CButton>
        {/* <CButton class="btn btn-warning" style={{marginRight:'20px'}}>Edit</CButton> */}
      </CModalBody>
    </Container>
    </CModal>
    {/* 
   {CustomerName}
   {CustomerEmail}
   {CustomerPhone}
   
   {Title}
   {Date}
   {STime}
   {ETime}
  {Description} */}
    </div>
  )
}

export default TaskDetails