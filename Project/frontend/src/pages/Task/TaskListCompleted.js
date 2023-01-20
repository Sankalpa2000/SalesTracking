import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CRow, CCardHeader} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

function TaskListCompleted() {

    const [search,setSearch] = useState("");
    const [Users,setUsers] = useState([]);
    const [Task,setTask] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8080/CompletedTask/").then((res) =>{
            setTask(res.data.data);
            // console.log(Task);
            
        }).catch((e) =>{
            alert(e)
        })
    }, [])
    
    const MoreDetails = (e) => {
       navigate('/TaskCompleteDetails',{state : {props : e}})
    }
    const Deletetask = (e) => {
        if(window.confirm("Confirm Delete Task ?") === true){
            const id = e._id;
            axios.delete(`http://localhost:8080/CompletedTask/Delete/${id}`).then((res)=>{
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
           <h1>Completed Tasks  </h1>
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
            <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginBottom:'20px',alignItems:'center'}}>
                    Search By User :<br></br>
                <Form.Select onChange={(e) =>{setSearch(e.target.value)}} required  style={{fontWeight : 'bold', marginRight:'10px'}}>
                            <option value = ''  selected>Select User</option>
                        {Users.map((e,i) =>(
                            <option key={i} value={e.Name}>{e.Name}</option>
                        ))}
                    
                </Form.Select>
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
    
                <CCard  className={`mb-3 border-success`}>
                <CCardBody>
                    <CCardHeader>
                    <CCardTitle textColor={'warning'}>
                        <b>
                            Task :</b>{e.Title}
                            <br/>
                        <b>
                            Completed At :</b> {e.CompletedAt.substring(0, 10)}
                        
                    </CCardTitle>
                    </CCardHeader>
                   
                    <CCardText>
                        <b>
                            Completed By : </b> {e.UserName}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                            Date : </b> {e.Date.substring(0, 10)}
                        
                    </CCardText>
                    <CCardText>
                        <b>
                             Description :</b>{e.Description.substring(0, 100)}
                    
                    </CCardText>
                    <CCardText>
                        <b>
                            Remarks : </b> {e.Remark} 
                        
                    </CCardText>
                    <CButton ovariant="outline-primary" style={{marginRight:'20px'}} onClick={() => {MoreDetails(e)}}>More Details</CButton>
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

export default TaskListCompleted