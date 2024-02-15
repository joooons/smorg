import { Container } from 'react-bootstrap';

import Text from '../components/Text';
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Text color='navy' size='50' font='winter' tag='h1'>
          This page is ABOUT to be filled out, but not quite yet.
        </Text>
      </Container>
    </>
  );
};

export default About;
