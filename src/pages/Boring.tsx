import Container from '../components/Container';
import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';

import '../components/boring/Boring.css';

function Boring() {
  return (
    <>
      <BrNavBar></BrNavBar>
      <Container>
        <div className='row'>
          <section
            className='col-sm-3'
            // style={{ borderRight: '1px solid gray' }}
          >
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
          </section>
          <section
            className='col-sm-6'
            // style={{ borderRight: '1px solid gray' }}
          >
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='Two found dead at underground pillow fight scene'
              writer='sarah sarahson'
            >
              Killing Me Softly
            </BrArticle>
          </section>
          <section className='col-sm-3'>
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
          </section>
        </div>
      </Container>
    </>
  );
}

export default Boring;
