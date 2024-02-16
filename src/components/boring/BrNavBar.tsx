import { Container, Nav, Navbar } from 'react-bootstrap';
import './BrNavBar.css';

const BrNavBar = () => {
  return (
    <>
      <Navbar className='br-navbar'>
        <Container>
          <Nav navbarScroll>
            <a href='#' className='br-nav-brand'>
              <b>BNN</b>
            </a>
            <a href='#' className='br-nav-link'>
              Home
            </a>
            <a href='#' className='br-nav-link'>
              News
            </a>
            <a href='#' className='br-nav-link'>
              Business
            </a>
            <a href='#' className='br-nav-link'>
              Entertainment
            </a>
            <a href='#' className='br-nav-link'>
              Sports
            </a>
            <a href='#' className='br-nav-link'>
              Travel
            </a>
            <a href='/home' className='br-nav-link'>
              Smorg
            </a>
          </Nav>
          <Navbar.Collapse className='justify-content-end mx-2'>
            <Nav.Link href='#'>SignIn</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BrNavBar;
