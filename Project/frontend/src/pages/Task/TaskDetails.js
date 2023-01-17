import React from 'react'
import { useLocation } from 'react-router-dom'

function TaskDetails() {

    const location = useLocation();

    const {
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
    } =  location.state.props;

  return (
    <div>
        {UserName}
        {UserEPFNO}
        {UserEmail}
        {CustomerName}
        {CustomerEmail}
        {CustomerPhone}
        {CompanyName}
        {CompanyLocation}
        {CompanyID}
        {SubCompanyName}
        {SubCompanyLocation}
        {SubCompanyID}
        {Title}
        {Date}
        {STime}
        {ETime}
        {Description}</div>
  )
}

export default TaskDetails