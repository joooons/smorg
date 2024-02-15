import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';
import BrCategory from '../components/boring/BrCategory';
import BrFooter from '../components/boring/BrFooter';

import '../components/boring/Boring.css';
import '../components/Link.css';

import grammysImage from '../../src/assets/images/grammys.jpg';
import gummybearsImage from '../../src/assets/images/gummybears.jpg';
import placeholderImage from '../../src/assets/images/placeholder.jpg';
import pillowfightImage from '../../src/assets/images/pillowfight.jpg';
import rugbyImage from '../../src/assets/images/rugby.jpg';
import toothdecayImage from '../../src/assets/images/toothdecay.jpg';

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
          <Row className='py-4'>
            <Col xs={2}>
              <div className='br-footer-item-heading'>About</div>
              <div>
                <Link to='/boring' className='link'>
                  BNN
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  Careers
                </Link>
              </div>
            </Col>
            <Col xs={2}>
              <div className='br-footer-item-heading'>Contact</div>
              <div>
                <Link to='/boring' className='link'>
                  Customer Center
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  Contact Us
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  Press
                </Link>
              </div>
            </Col>
            <Col xs={2}>
              <div className='br-footer-item-heading'>Subscription</div>
              <div>
                <Link to='/boring' className='link'>
                  Manage Subscriptions
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  Podcast
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  Newsletter
                </Link>
              </div>
            </Col>
            <Col xs={{ span: 2, offset: 4 }}>
              <div className='br-footer-item-heading'>Follow</div>
              <div>
                <Link to='/boring' className='link'>
                  X
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  Instagram
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  Facebook
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  YouTube
                </Link>
              </div>
              <div>
                <Link to='/boring' className='link'>
                  LinkedIn
                </Link>
              </div>
            </Col>
          </Row>
          <Row className='pb-5'>
            <Col xs={11}>
              <Link to='/boring' className='link br-footer-item'>
                Privacy Policy
              </Link>
              <Link to='/boring' className='link br-footer-item'>
                Do Not Sell Or Share My Personal Information
              </Link>
              <Link to='/boring' className='link br-footer-item'>
                Terms & Conditions
              </Link>
              <Link to='/boring' className='link br-footer-item'>
                Terms of Sale
              </Link>
              <Link to='/boring' className='link br-footer-item'>
                Site Map
              </Link>
            </Col>
            <Col xs={1}>BNN</Col>
          </Row>
        </Container>
      </BrFooter>
    </>
  );
}

export default Boring;
