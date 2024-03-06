import { Container } from 'react-bootstrap';

import Text from '../components/Text';
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Text color='navy' size='50' font='oswald' tag='h1'>
          ABOUT PAGE
        </Text>
        <div>not yet</div>
      </Container>
    </>
  );
};

export default About;
