import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';

const NoPage = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>Uh, are you lost?</Text>
        <Text>
          <Link to='/home'>Go HOME dude.</Link>
        </Text>
      </Container>
    </>
  );
};

export default NoPage;
