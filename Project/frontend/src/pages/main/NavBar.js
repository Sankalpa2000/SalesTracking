import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" class=''>
    <Container fluid>
    <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Register">Register</Nav.Link>
          
          <Nav.Link href="/UserList">Users</Nav.Link>
          <Nav.Link href="/CustomerList">Customer</Nav.Link>
          <Nav.Link href="/Customer">Customer Reg</Nav.Link>
          <Nav.Link href="/Company">Company</Nav.Link>
          <Nav.Link href="/Planner">Visit Palnner</Nav.Link>
          <Nav.Link href="/Register">Reports</Nav.Link>
          <Nav.Link href="/AddTask">Add Task</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <Nav.Link style={{marginRight:'10px'}} href='/Login'> Login </Nav.Link>
    </Container>
  </Navbar>
  )
}
