import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Logo from '../components/Logo';

import spaceLogo from '../../public/space.png';
import aboutLogo from '../../public/about.png';

const Home = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>HOME PAGE</Text>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to='/space' target='_blank' rel='noopener noreferrer'>
              <Logo image={spaceLogo}></Logo>
            </Link>
          </li>
          <li>
            <Link to='/about' target='_blank' rel='noopener noreferrer'>
              <Logo image={aboutLogo}></Logo>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Home;
