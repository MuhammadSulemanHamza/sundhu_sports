import React from 'react'
import { Search, Heart, Person, Cart3 } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="white" variant="light" className="shadow-sm">
        <Container >
          <Navbar.Brand className='w-50 d-flex justify-content-md-end' href="#home">
            <img src={logo} alt="" style={{ height: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 text-white' />
          <Navbar.Collapse id="responsive-navbar-nav" className='d-md-flex w-50 justify-content-md-end'>
            {/* <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
            <Nav>
              <Nav.Link className='d-flex align-items-center'>
                <Search size={18} color={"black"} />
                <span className="d-md-none mx-4 fw-600 text-primary">Search</span>
              </Nav.Link>
              <Nav.Link className='d-flex align-items-center'>
                <Person size={20} color={"black"}/>
                <span className="d-md-none mx-4 fw-600 text-primary">Account</span>
              </Nav.Link>
              <Nav.Link className='d-flex align-items-center' >
                <Heart size={20} color={"black"}/>
                <span className="d-md-none mx-4 fw-600 text-primary">Favorite</span>
              </Nav.Link>
              <Nav.Link className='d-flex align-items-center'>
                <Cart3 size={20} color={"black"}/>
                <span className="d-md-none mx-4 fw-600 text-primary">Cart</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header