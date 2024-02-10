import { Col, Container, Row } from 'react-bootstrap';
import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';

import '../components/boring/Boring.css';

function Boring() {
  return (
    <>
      <BrNavBar></BrNavBar>
      <Container>
        <Row>
          <Col sm='3' className='br-section'>
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='Swift makes history for winning all awards at the Grannys'
              writer='sarah sarahson'
            >
              Taylor Swift bankrupts every other artist
            </BrArticle>
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='Gummy bears attempt escape when no one is looking, researchers say'
              writer='sarah sarahson'
            >
              Casual consumption of snack unbearable
            </BrArticle>
          </Col>
          <Col sm='6' className='br-section'>
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='Two found dead at underground pillow fight scene'
              writer='sarah sarahson'
            >
              Killing Me Softly
            </BrArticle>
          </Col>
          <Col sm='3' className='br-section'>
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='Research suggests correlation between tooth decay and horror genre'
              writer='sarah sarahson'
            >
              Netflix causes cavities
            </BrArticle>
            <BrArticle
              image='placeholder.jpg'
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
