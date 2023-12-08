import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Grid from '../components/Grid';

import spaceLogo from '../../public/space.png';
import aboutLogo from '../../public/about.png';

const Home = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>HOME PAGE</Text>
        <Grid>
          <Link to='/space'>
            <Logo image={spaceLogo}></Logo>
          </Link>
          <Link to='/about' target='_blank' rel='noopener noreferrer'>
            <Logo image={aboutLogo}></Logo>
          </Link>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
