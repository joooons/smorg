import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';
import BrCategory from '../components/boring/BrCategory';
import BrFooter from '../components/boring/BrFooter';

import '../components/boring/Boring.css';

// import placeholderImage from '../../src/assets/images/placeholder.jpg';
import grammysImage from '../../src/assets/images/boring-grammys.jpg';
import gummybearsImage from '../../src/assets/images/boring-gummybears.jpg';
import pillowfightImage from '../../src/assets/images/boring-pillowfight.jpg';
import rugbyImage from '../../src/assets/images/boring-rugby.jpg';
import toothdecayImage from '../../src/assets/images/boring-toothdecay.jpg';
import dateImage from '../../src/assets/images/boring-date.jpg';
import goingGoodImage from '../../src/assets/images/boring-going-good.jpg';
import submarineImage from '../../src/assets/images/boring-submarine.jpg';
import twitterImage from '../../src/assets/images/boring-twitter.jpg';

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
          <Col sm='6' className='br-section px-3'>
            <BrArticle
              image={pillowfightImage}
              caption='open source illustration'
              description='Two found dead at underground pillow fight scene'
              writer='sarah sarahson'
            >
              Killing Me Softly
            </BrArticle>
          </Col>
          <Col sm='3' className='br-section px-3'>
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
            <BrCategory>Recommended</BrCategory>
            <BrArticle
              image={dateImage}
              caption='open source illustration'
              description='Rate yourself from 1 to 10 and then multiply by 0.6 to get the magic number'
              writer='sarah sarahson'
            >
              How to get the date you deserve
            </BrArticle>
            <BrArticle
              image={submarineImage}
              caption='open source illustration'
              description='Tech company promises upgrade to underwater travel with flight technology'
              writer='sarah sarahson'
            >
              Flying submarines inch closer to reality
            </BrArticle>
          </Col>
          <Col sm='6'>
            <BrCategory>Popular</BrCategory>
            <BrArticle
              image={goingGoodImage}
              caption='open source illustration'
              description='Spiritual sequel to Breaking Bad offers uplifting tale of a demure chemistry teacher'
              writer='sarah sarahson'
            >
              The widespread appeal of Going Good
            </BrArticle>
            <BrArticle
              image={twitterImage}
              caption='open source illustration'
              description='Internet collectively scratches head as X (formerly Twitter) to be rebranded as Y in 2026'
              writer='sarah sarahson'
            >
              Musk announces next evolution of X, Y
            </BrArticle>
          </Col>
        </Row>
        <Row className='py-4'></Row>
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
