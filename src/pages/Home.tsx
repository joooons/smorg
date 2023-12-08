import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>This is the Home Page</Text>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to='/space' target='_blank' rel='noopener noreferrer'>
              <Button>SPACE</Button>
            </Link>
          </li>
          <li>
            <Link to='/about' target='_blank' rel='noopener noreferrer'>
              <Button>ABOUT</Button>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Home;
