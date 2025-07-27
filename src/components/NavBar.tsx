import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdShoppingCart } from "react-icons/md";
import CartPreview from './CartPreview';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';

function NavComponent() {
  const navigate = useNavigate();
  const { role, isLoggedIn, resetAuth } = useAuth();
  const logout = () => {
    resetAuth();
    navigate('/login');
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white text-dark w-100 position-fixed top-0 start-0 z-3"
    >
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">Livora</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
            <Nav.Link href="/Checkout">Checkout</Nav.Link>
            <Nav.Link href="/Blogs">Blogs</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
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
          <Dropdown className='mx-3'>
            <Dropdown.Toggle variant='outline-dark' id="dropdown-basic">
              <MdShoppingCart />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{
              transform: "translateX(-150px)",
              marginTop: "10px",
            }}>
              <CartPreview />
            </Dropdown.Menu>
          </Dropdown>
          <Nav>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/MyProfile">My profile</NavDropdown.Item>
              <NavDropdown.Item href="#address">My Orders</NavDropdown.Item>
              {role=='ADMIN'&&(
                <NavDropdown.Item href="/AdminHome">Admin</NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              {isLoggedIn && (
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              )}
              {!isLoggedIn && (
                <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
              )}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavComponent;


