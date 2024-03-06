import { Container, Nav, Navbar } from 'react-bootstrap';

import notnewsLogo from '../../assets/images/notnewslogo.png';

import './BrNavBar.css';

const BrNavBar = () => {
  return (
    <>
      <Navbar expand='md' className='br-navbar'>
        <Container fluid='lg' className='px-3'>
          <Navbar.Brand href='/notnews'>
            <img src={notnewsLogo} alt='' height='30' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/' className='br-nav-link'>
                Home
              </Nav.Link>
              <Nav.Link href='/notnews' className='br-nav-link'>
                News
              </Nav.Link>
              <Nav.Link href='/tree' className='br-nav-link'>
                Tree
              </Nav.Link>
              <Nav.Link href='/space' className='br-nav-link'>
                Space
              </Nav.Link>
              <Nav.Link href='/about' className='br-nav-link'>
                About
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
