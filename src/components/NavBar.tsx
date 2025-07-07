import { Button, Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdShoppingCart } from "react-icons/md";

function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100">
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">Livora</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
          </Nav>

          <InputGroup className="w-25 me-3">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <Button variant='outline-dark'>
              Search
            </Button>
          </InputGroup>

          <Button variant='outline-dark' className='me-3'>
            <MdShoppingCart />
          </Button>

          <Nav>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">My profile</NavDropdown.Item>
              <NavDropdown.Item href="#address">My address</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
