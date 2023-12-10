import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Flex from '../components/Flex';
import Centered from '../components/Centered';

import spaceLogo from '../../public/space.png';
import aboutLogo from '../../public/about.png';
import crashGoLogo from '../../public/crashGo.png';
import loveLogo from '../../public/love.png';
import mazeLogo from '../../public/maze.png';
import monsterLogo from '../../public/monster.png';
import treeLogo from '../../public/tree.png';
import smorgLogo from '../../public/smorg-b.png';

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
