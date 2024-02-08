import Container from '../components/Container';
import Article from '../components/boring/Article';

function Boring() {
  return (
    <>
      <Container>
        <div className='row'>
          <div className='col-sm-4'>
            <Article>Taylor Swift something</Article>
          </div>
          <div className='col-sm-4'>
            <Article>Someone died</Article>
          </div>
          <div className='col-sm-4'>
            <Article>Netflix causes cancer</Article>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Boring;
