import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function CalenderData() {
    // const baseData = [{
    
    //     "TaskID": 4,
    //     "OwnerID": 2,
    //     "Title": "Bowling tournament",
    //     "Description": "",
    //     "StartTimezone": null,
    //     "Start": "2023-01-09T21:00:00.000Z",
    //     "End": "2023-01-10T00:00:00.000Z",
    //     "EndTimezone": null,
    //     "RecurrenceRule": null,
    //     "RecurrenceID": null,
    //     "RecurrenceException": null,
    //     "isAllDay": true
    //   }];
    const [data,setData] = useState();
        useEffect(() =>{
            // e.preventdefault();
        axios.get("http://localhost:8080/Task/").then((res) =>{
                setData(res.data.TaskModel)
                console.log(data);
            }).catch((e) =>{
                alert(e)
            })

        },[data])
        return(
            <>
        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Name</th>
            </tr>
        </thead>
        <tbody>
             {
                data.map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.Title}</td>
                    <td>{e.OwnerID}</td>
                   
                   
                </tr> 
             ))}  
    
        </tbody>
        </Table>         
            </>
        )
    }
    export default CalenderData