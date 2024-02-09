import { Container, Nav, Navbar } from 'react-bootstrap';
import './BrNavBar.css';

const BrNavBar = () => {
  return (
    <>
      <Navbar className='br-navbar'>
        <Container>
          <Nav navbarScroll>
            <Navbar.Brand href='#home' className='mx-2'>
              <b>BNN</b>
            </Navbar.Brand>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>News</Nav.Link>
            <Nav.Link href='#'>Business</Nav.Link>
            <Nav.Link href='#'>Entertainment</Nav.Link>
            <Nav.Link href='#'>Sport</Nav.Link>
            <Nav.Link href='#'>Travel</Nav.Link>
            <Nav.Link href='/home'>Smorg</Nav.Link>
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
