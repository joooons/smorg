import './BrFooter.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareReddit,
  FaSquarePinterest,
  FaSquareFacebook,
  FaSquareYoutube,
  FaSquareTumblr,
} from 'react-icons/fa6';

const BrFooter = () => {
  return (
    <>
      <div className='br-footer py-4'>
        <Container fluid='lg'>
          <div className='row pt-4 '>
            <div className='col-md-6 col-lg-2 mb-4'>
              <div className='br-footer-item-heading'>About</div>
              <div>
                <Link to='/notnews' className='br-link'>
                  BNN
                </Link>
              </div>
              <div>
                <Link to='/notnews' className='br-link'>
                  Careers
                </Link>
              </div>
            </div>

            <div className='col-md-6 col-lg-2 mb-4'>
              <div className='br-footer-item-heading'>Contact</div>
              <div>
                <Link to='/notnews' className='br-link'>
                  Customer Center
                </Link>
              </div>
              <div>
                <Link to='/notnews' className='br-link'>
                  Contact Us
                </Link>
              </div>
              <div>
                <Link to='/notnews' className='br-link'>
                  Press
                </Link>
              </div>
            </div>

            <div className='col-md-6 col-lg-7 mb-4'>
              <div className='br-footer-item-heading'>Subscription</div>
              <div>
                <Link to='/notnews' className='br-link'>
                  Manage Subscriptions
                </Link>
              </div>
              <div>
                <Link to='/notnews' className='br-link'>
                  Podcast
                </Link>
              </div>
              <div>
                <Link to='/notnews' className='br-link'>
                  Newsletter
                </Link>
              </div>
            </div>

            <div className='col-sm-2 col-md-2 col-lg-1 mb-4'>
              <div className='br-footer-item-heading'>Follow</div>
              <div className='row'>
                <div className='col-1'>
                  <Link to='/notnews' className='br-link'>
                    <FaSquareXTwitter />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/notnews' className='br-link'>
                    <FaSquareInstagram />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/notnews' className='br-link'>
                    <FaSquareFacebook />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/notnews' className='br-link'>
                    <FaSquareYoutube />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/notnews' className='br-link'>
                    <FaSquareTumblr />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/notnews' className='br-link'>
                    <FaSquarePinterest />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/notnews' className='br-link'>
                    <FaSquareReddit />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='row pt-3 pb-5 '>
            <div className='row'>
              <div className='col-12'>
                <div className='br-footer-row pt-3'>
                  <Link to='/notnews' className='br-link br-footer-item'>
                    Privacy Policy
                  </Link>
                  <Link to='/notnews' className='br-link br-footer-item'>
                    Do Not Sell Or Share My Personal Information
                  </Link>
                  <Link to='/notnews' className='br-link br-footer-item'>
                    Terms & Conditions
                  </Link>
                  <Link to='/notnews' className='br-link br-footer-item'>
                    Terms of Sale
                  </Link>
                  <Link to='/notnews' className='br-link br-footer-item'>
                    Site Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BrFooter;
