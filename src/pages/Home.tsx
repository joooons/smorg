import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';

const Home = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>This is the Home Page</Text>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link
              to='/space'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              SPACE
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Home;
