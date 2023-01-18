import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table';
import { useLocation, useNavigate } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TaskDetails() {
  const Location = useLocation();
  const data = Location.state.props
  const navigate = useNavigate();
    const [UserDetails,setUserDetails] = useState();
    const [CustomerName,setCustomerName] = useState();
    const [CustomerEmail,setCustomerEmail] = useState();
    const [CustomerPhone,setCustomerPhone] = useState();
    const [CustomerDetails,setCustomerDetails] = useState();
    const [GroupCompany,setGroupCompany] = useState();
    const [CompanyName,setCompanyName] = useState();
    const [CompanyLocation,setCompanyLocation] = useState();
    const [CompanyID,setCompanyID] = useState();
    const [GroupSubCompany,setGroupSubCompany] = useState();
    const [Title,setTitle] = useState();
    const [Description,setDescription] = useState();
    const [Date,setDate] = useState();
    const [STime,setSTime] = useState();
    const [ETime,setETime] = useState();
    const [UserName,setUsersName] = useState();
    const [UserEPFNO,setUserEPFNO] = useState();
    const [UserEmail,setUserEmail] = useState();
    const [SubGroup,setSubGroup] = useState([]);
    const [Customer,setCustomer] = useState([]);
    const [User,setUsers] = useState([]);
    const [Company,setCompany] = useState([]);
    const [SubCompanyID,setSubCompanyID] = useState();
    const [SubCompanyName,setSubCompanyName] = useState();
    const [SubCompanyLocation,setSubCompanyLocation] = useState();
  const [visibleXL, setVisibleXL] = useState(true)
  console.log(data);

  useEffect(() => {
    try {

            setSTime(data.STime)
            setDate(data.Date.substring(0,10))
            setETime(data.ETime)
            setDescription(data.Description)
            setUsersName(data.UserName)
            setUserEmail(data.UserEmail)
            setTitle(data.Title)
            setUserEPFNO(data.UserEPFNO)
            setCustomerName(data.CustomerName)
            setCustomerPhone(data.CustomerPhone)
            setCustomerEmail(data.CustomerEmail)
            setCompanyID(data.CompanyID)
            setCompanyName(data.CompanyName)
            setCompanyLocation(data.CompanyLocation)
            setSubCompanyLocation(data.SubCompanyLocation)
            setSubCompanyName(data.SubCompanyName)
      } catch (error) {
        
      }
          
     
  },[])

  
  return (
    <div>
      <CModal fullscreen visible={visibleXL} onClose={() => navigate(-1)}>
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
        

      <CModalTitle>
        Amount Completed :
      </CModalTitle>
      <ProgressBar variant="success" now={40} />
      <CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: `${Title}` ,
        backgroundColor: '#f87979',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            </tr>
            
          </tbody>
        </Table>
        <CButton class="btn btn-success" style={{marginBottom:'10%'}} >Completed</CButton>
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