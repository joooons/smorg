import Container from '../components/Container';
import BrArticle from '../components/boring/BrArticle';

function Boring() {
  return (
    <>
      <Container>
        <div className='row'>
          <div className='col-sm-4'>
            <BrArticle>Taylor Swift something</BrArticle>
          </div>
          <div className='col-sm-4'>
            <BrArticle>Someone died</BrArticle>
          </div>
          <div className='col-sm-4'>
            <BrArticle>Netflix causes cancer</BrArticle>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Boring;
