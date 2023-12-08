import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';

const About = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>
          This page is ABOUT to be filled out, but not quite yet.
        </Text>
        <Text>
          <Link to='/home'>Go HOME dude.</Link>
        </Text>
      </Container>
    </>
  );
};

export default About;
