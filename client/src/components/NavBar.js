import React from 'react';
import { Navbar, Nav, Container, Image ,Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Img from '../assets/chaima moalla1.jpg'
import logo from '../assets/output-onlinepngtools.png'
import { ImSearch } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";


function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" className="custom-navbar">
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex search-bar">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary" className="search-button">
          <ImSearch />
          </Button>
        </Form>
        <Nav className="ms-auto navbar-icons">
          <Nav.Link href="#notifications">
          <IoNotifications color='white' />
          </Nav.Link>
          <Nav.Link href="#add-post">
          <FaPlus color='white' />
          </Nav.Link>
          <Nav.Link href="Profile" className="profile-circle">
            {/* <img src='{Img}' alt="Profile" className="icon" /> */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;
