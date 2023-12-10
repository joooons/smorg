import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Flex from '../components/Flex';
import Centered from '../components/Centered';

import spaceLogo from '../../src/assets/space.png';
import aboutLogo from '../../src/assets/about.png';
import crashGoLogo from '../../src/assets/crashGo.png';
import loveLogo from '../../src/assets/love.png';
import mazeLogo from '../../src/assets/maze.png';
import monsterLogo from '../../src/assets/monster.png';
import treeLogo from '../../src/assets/tree.png';
import smorgLogo from '../../src/assets/smorg-b.png';

const Home = () => {
  return (
    <>
      <Container>
        <Centered>
          <Text tag='h1'>HOME PAGE</Text>
        </Centered>
        <Flex>
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
            <Link to='/about'>
              <Logo image={crashGoLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about'>
              <Logo image={loveLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about'>
              <Logo image={mazeLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about'>
              <Logo image={monsterLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about'>
              <Logo image={smorgLogo}></Logo>
            </Link>
          </Centered>
          <Centered>
            <Link to='/about'>
              <Logo image={treeLogo}></Logo>
            </Link>
          </Centered>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
