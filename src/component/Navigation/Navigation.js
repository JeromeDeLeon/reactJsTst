import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import './Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Dating Service</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/CreateProfile/Create Profile">Create Profile</Nav.Link>
              <Nav.Link href="/ViewProfile">View Profile</Nav.Link>

             </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  );
};
export default withRouter(Navigation);