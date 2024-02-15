import { Col, Container, Row } from 'react-bootstrap';
import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';
import BrCategory from '../components/boring/BrCategory';

import '../components/boring/Boring.css';

import grammysImage from '../../src/assets/images/grammys.jpg';
import gummybearsImage from '../../src/assets/images/gummybears.jpg';
import placeholderImage from '../../src/assets/images/placeholder.jpg';
import pillowfightImage from '../../src/assets/images/pillowfight.jpg';
import rugbyImage from '../../src/assets/images/rugby.jpg';
import toothdecayImage from '../../src/assets/images/toothdecay.jpg';

function Boring() {
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
    </>
  );
}

export default Boring;
