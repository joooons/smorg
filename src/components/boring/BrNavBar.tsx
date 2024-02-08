import { Container } from 'react-bootstrap';
import './BrNavBar.css';

const BrNavBar = () => {
  return (
    <>
      <nav className='br-navbar navbar navbar-expand-lg navbar-light px-5 py-3'>
        <Container>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/boring'>
                  U.S.
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/boring'>
                  World
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/boring'>
                  Finance
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/boring'>
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default BrNavBar;
