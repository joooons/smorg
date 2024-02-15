import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';
import BrCategory from '../components/boring/BrCategory';
import BrFooter from '../components/boring/BrFooter';

import '../components/boring/Boring.css';

import grammysImage from '../../src/assets/images/grammys.jpg';
import gummybearsImage from '../../src/assets/images/gummybears.jpg';
import placeholderImage from '../../src/assets/images/placeholder.jpg';
import pillowfightImage from '../../src/assets/images/pillowfight.jpg';
import rugbyImage from '../../src/assets/images/rugby.jpg';
import toothdecayImage from '../../src/assets/images/toothdecay.jpg';

import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareReddit,
  FaSquarePinterest,
  FaSquareFacebook,
  FaSquareYoutube,
  FaSquareTumblr,
} from 'react-icons/fa6';

function Boring() {
  const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
  const contentfulSpace = import.meta.env.VITE_CONTENTFUL_SPACE;
  const contentfulEntry = import.meta.env.VITE_CONTENTFUL_ENTRY;

  const client = createClient({
    space: contentfulSpace,
    environment: 'master',
    accessToken: contentfulAccessToken,
  });

  client
    .getEntry(contentfulEntry)
    .then((entry) => {
      console.log(entry.fields.id, entry.fields.title);
    })
    .catch(console.error);

  return (
    <>
      <BrNavBar></BrNavBar>
      <Container>
        <Row>
          <Col sm='3' className='br-section'>
            <BrArticle
              image={grammysImage}
              caption='open source illustration'
              description='Swift makes history for winning all awards at the Grannys'
              writer='sarah sarahson'
            >
              Taylor Swift bankrupts every other artist
            </BrArticle>
            <BrArticle
              image={gummybearsImage}
              caption='open source illustration'
              description='Gummy bears attempt escape when no one is looking, researchers say'
              writer='sarah sarahson'
            >
              Casual consumption of snack unbearable
            </BrArticle>
          </Col>
          <Col sm='6' className='br-section'>
            <BrArticle
              image={pillowfightImage}
              caption='open source illustration'
              description='Two found dead at underground pillow fight scene'
              writer='sarah sarahson'
            >
              Killing Me Softly
            </BrArticle>
          </Col>
          <Col sm='3' className='br-section'>
            <BrArticle
              image={toothdecayImage}
              caption='open source illustration'
              description='Research suggests correlation between tooth decay and horror genre'
              writer='sarah sarahson'
            >
              Netflix causes cavities
            </BrArticle>
            <BrArticle
              image={rugbyImage}
              caption='open source illustration'
              description='Rugby player wins Most Median Player of the year for 3rd consecutive year'
              writer='sarah sarahson'
            >
              DeMarcus does it again
            </BrArticle>
          </Col>
        </Row>
        <Row>
          <Col sm='6'>
            <BrCategory>Breaking News</BrCategory>
            <BrArticle
              image={placeholderImage}
              caption='open source illustration'
              description='Research suggests correlation between tooth decay and horror genre'
              writer='sarah sarahson'
            >
              Netflix causes cavities
            </BrArticle>
            <BrArticle
              image={placeholderImage}
              caption='open source illustration'
              description='Rugby player wins Most Median Player of the year for 3rd consecutive year'
              writer='sarah sarahson'
            >
              DeMarcus does it again
            </BrArticle>
          </Col>
          <Col sm='6'>
            <BrCategory>Featured News</BrCategory>
            <BrArticle
              image={placeholderImage}
              caption='open source illustration'
              description='Research suggests correlation between tooth decay and horror genre'
              writer='sarah sarahson'
            >
              Netflix causes cavities
            </BrArticle>
            <BrArticle
              image={placeholderImage}
              caption='open source illustration'
              description='Rugby player wins Most Median Player of the year for 3rd consecutive year'
              writer='sarah sarahson'
            >
              DeMarcus does it again
            </BrArticle>
          </Col>
        </Row>
      </Container>
      <BrFooter>
        <Container>
          <div className='row pt-4 pb-5'>
            <div className='col-sm-2'>
              <div className='br-footer-item-heading'>About</div>
              <div>
                <Link to='/boring' className='br-link'>
                  BNN
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Careers
                </Link>
              </div>
            </div>

            <div className='col-sm-2'>
              <div className='br-footer-item-heading'>Contact</div>
              <div>
                <Link to='/boring' className='br-link'>
                  Customer Center
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Contact Us
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Press
                </Link>
              </div>
            </div>

            <div className='col-sm-7'>
              <div className='br-footer-item-heading'>Subscription</div>
              <div>
                <Link to='/boring' className='br-link'>
                  Manage Subscriptions
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Podcast
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Newsletter
                </Link>
              </div>
            </div>

            <div className='col-sm-1'>
              <div className='row br-footer-item-heading'>Follow</div>
              <div className='row'>
                <div className='col-sm-3'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareXTwitter />
                  </Link>
                </div>
                <div className='col-sm-3'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareInstagram />
                  </Link>
                </div>
                <div className='col-sm-3'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareFacebook />
                  </Link>
                </div>
                <div className='col-sm-3'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareYoutube />
                  </Link>
                </div>
                <div className='col-sm-3'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareTumblr />
                  </Link>
                </div>
                <div className='col-sm-3'>
                  <Link to='/boring' className='br-link'>
                    <FaSquarePinterest />
                  </Link>
                </div>
                <div className='col-sm-3'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareReddit />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='row br-footer-row pt-3 pb-5'>
            <div>
              <Link to='/boring' className='br-link br-footer-item'>
                Privacy Policy
              </Link>
              <Link to='/boring' className='br-link br-footer-item'>
                Do Not Sell Or Share My Personal Information
              </Link>
              <Link to='/boring' className='br-link br-footer-item'>
                Terms & Conditions
              </Link>
              <Link to='/boring' className='br-link br-footer-item'>
                Terms of Sale
              </Link>
              <Link to='/boring' className='br-link br-footer-item'>
                Site Map
              </Link>
            </div>
          </div>
        </Container>
      </BrFooter>
    </>
  );
}

export default Boring;
