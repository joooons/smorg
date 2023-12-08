import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';

const Home = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>This is the Home Page</Text>
        <Text>
          <Link to='/space'>Wanna try this thing out?</Link>
        </Text>
      </Container>
    </>
  );
};

export default Home;
