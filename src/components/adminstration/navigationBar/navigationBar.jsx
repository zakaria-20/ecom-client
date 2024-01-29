import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function AdminNavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">JIT-Bootcamp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            {/* <Form inline>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    />
                </Col>
                <Col xs="auto" >
                    <Button type="submit">Search</Button>
                </Col>
                </Row>
            </Form> */}
            
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard/notifications">Notifications</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dashboard/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavigationBar;