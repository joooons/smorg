import { Container, Nav, Navbar } from 'react-bootstrap';
import './BrNavBar.css';

const BrNavBar = () => {
  return (
    <>
      <Navbar expand='md' className='br-navbar'>
        <Container fluid='md' className='px-3'>
          <Navbar.Brand href='#'>BNN</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#' className='br-nav-link'>
                Home
              </Nav.Link>
              <Nav.Link href='#' className='br-nav-link'>
                News
              </Nav.Link>
              <Nav.Link href='#' className='br-nav-link'>
                Business
              </Nav.Link>
              <Nav.Link href='#' className='br-nav-link'>
                Finance
              </Nav.Link>
              <Nav.Link href='#' className='br-nav-link'>
                Travel
              </Nav.Link>
              <Nav.Link href='#' className='br-nav-link'>
                Sports
              </Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Collapse className='justify-content-end'>
                <Nav.Link href='#' className='br-nav-link'>
                  Sign In
                </Nav.Link>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BrNavBar;
