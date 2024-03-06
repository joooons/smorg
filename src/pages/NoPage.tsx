import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Text from '../components/Text';
import ChickenImage from '../../src/assets/images/chicken.jpg';

const NoPage = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>Nothing to see here</Text>
        <div style={{ padding: '50px' }}>
          <img
            src={ChickenImage}
            width='200'
            height='200'
            className='d-inline-block align-top'
            alt=''
          />
        </div>

        <Text>
          <Link to='/home'>Go HOME</Link>
        </Text>
      </Container>
    </>
  );
};

export default NoPage;
