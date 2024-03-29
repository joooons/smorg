import './NavBar.css';
import smorgLogo from '../../src/assets/images/smorg-b.png';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-warning px-5 py-3'>
        <a className='navbar-brand' href='/'>
          <img
            src={smorgLogo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt=''
          />
          &nbsp;SMORG
        </a>
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
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/notnews'>
                News
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/tree'>
                Tree
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/space'>
                Space
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
