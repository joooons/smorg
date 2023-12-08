import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Grid from '../components/Grid';
import Centered from '../components/Centered';

import spaceLogo from '../../public/space.png';
import aboutLogo from '../../public/about.png';

const Home = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>HOME PAGE</Text>
        <Grid>
          <Centered>
            <Link to='/space'>
              <Logo image={spaceLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about' target='_blank' rel='noopener noreferrer'>
              <Logo image={aboutLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about' target='_blank' rel='noopener noreferrer'>
              <Logo image={aboutLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about' target='_blank' rel='noopener noreferrer'>
              <Logo image={aboutLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about' target='_blank' rel='noopener noreferrer'>
              <Logo image={aboutLogo}></Logo>
            </Link>
          </Centered>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
