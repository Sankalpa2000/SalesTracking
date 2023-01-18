import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners';
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SubCompanyList() {
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    const [SubCompany,setSubCompany] = useState();
    const [Company,setCompany] = useState([]);
    
    useEffect(() => {
        
        axios.get("http://localhost:8080/SubCompany/").then((res) =>{
            setSubCompany(res.data.SubCompany);
            //console.log(Users);
            
            // setTimeout(() => {
                setLoading(false);
                //   }, 1000);
                
            }).catch((e) =>{
                alert(e)
            })
            

        }, [SubCompany])

        const navigate = useNavigate();
        const updateDetails = (data) => {
            navigate('/EditSubCompany',{state : {data : data}})
        }

        const deleteUser = (e) => {
            if(window.confirm("Confirm Delete Sub Company ?") === true){
                const id = e._id;
                // console.log(id);
                axios.delete(`http://localhost:8080/SubCompany/Delete/${id}`).then((res)=>{
                    alert(res.data.state)
                    navigate(0)
                })
            }
        }
        useEffect(() => {
        
            axios.get("http://localhost:8080/Company/").then((res) =>{
                    setCompany(res.data.Company);
                    // console.log(Company)
                    
                }).catch((e) =>{
                    alert(e)
                })
                
    
            }, [Company])
        return (
        <>
    <Container style={{marginTop : '5%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1>Sub Companies :</h1>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <a href='/SubCompanyInsert'>
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
          <br></br>
        </div>
          <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:20,alignItems:'center'}}>
                    Search By Company :<br></br>
                <Form.Select onChange={(e) =>{setSearch(e.target.value)}} required  style={{fontWeight : 'bold', marginRight:'10px'}}>
                            <option value = ''  selected>Select Main Company</option>
                        {Company.map((e,i) =>(
                            <option key={i} value={e.Name}>{e.Name}</option>
                        ))}
                    
                </Form.Select>
            </div>
          {/* <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:20,alignItems:'center'}}>
                    Search By Location :<br></br>
                <Form.Select onChange={(e) =>{setSearch(e.target.value)}} required  style={{fontWeight : 'bold', marginRight:'10px'}}>
                            <option value = ''  selected>Select Company Location</option>
                        {Company.map((e,i) =>(
                            <option key={i} value={e.Location}>{e.Location}</option>
                        ))}
                    
                </Form.Select>
            </div> */}


        {loading ? (<div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',height : '100%',marginTop : '10%'}}><HashLoader color="#3637da" /> </div>) : (
            
            <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Location</th>
            <th>Main Company</th>
            {/* <th>Password</th> */}
            <th>Other</th>
            </tr>
        </thead>
        <tbody>
            {
                SubCompany.filter((element) => {
                    if(search === ""){
                        return element
                    }else if ((element.MainCompanyName.toLowerCase()).includes(search.toLowerCase())){
                        return element
                    }
                }).map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.SubName}</td>
                    <td>{e.SubLocation}</td>
                    <td>{e.MainCompanyName}</td>
                    <td>
                        <Button variant="primary" style={{marginRight:'20px'}} onClick={() => {updateDetails(e)}}>Edit</Button>     
                        <Button  variant="danger" onClick={() => deleteUser(e)}>Delete</Button>
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

export default SubCompanyList