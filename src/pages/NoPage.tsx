import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Text from '../components/Text';
import ChickensImage from '../../src/assets/images/chickens.png';

const NoPage = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>Nothing but us chickens.</Text>
        <img
          src={ChickensImage}
          width='200'
          height='200'
          className='d-inline-block align-top'
          alt=''
        />
        <Text>
          <Link to='/home'>Go HOME dude.</Link>
        </Text>
      </Container>
    </>
  );
};

export default NoPage;
