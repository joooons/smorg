import Container from '../components/Container';
import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';

function Boring() {
  return (
    <>
      <BrNavBar></BrNavBar>
      <Container>
        <div className='row'>
          <div className='col-sm-4'>
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='She makes history for winning ALL awards at the Grannys'
              writer='sarah sarahson'
            >
              Taylor Swift bankrupts every other artist
            </BrArticle>
          </div>
          <div className='col-sm-4'>
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='Two found dead at underground pillow fight scene'
              writer='sarah sarahson'
            >
              Killing Me Softly
            </BrArticle>
          </div>
          <div className='col-sm-4'>
            <BrArticle
              image='placeholder.jpg'
              caption='open source illustration'
              description='Research suggests correlation between tooth decay and horror genre'
              writer='sarah sarahson'
            >
              Netflix causes cavities
            </BrArticle>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Boring;
