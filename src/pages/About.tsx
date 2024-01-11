import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';

const About = () => {
  return (
    <>
      <Container>
        <Text color='navy' size='50' font='winter' tag='h1'>
          This page is ABOUT to be filled out, but not quite yet.
        </Text>
        <Link to='/home'>Go HOME dude.</Link>
      </Container>
    </>
  );
};

export default About;
