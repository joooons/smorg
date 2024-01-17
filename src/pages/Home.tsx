import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Logo from '../components/Logo';
import LogoBox from '../components/LogoBox';
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
        <div className='row'>
          <div className='col-sm-12 mt-3'>
            <Centered>
              <Logo size='120' image={smorgLogo}></Logo>
            </Centered>
          </div>
          <div className='col-sm-12 mt-3'>
            <Centered>
              <Text size='100' font='winter' tag='h1'>
                SMORG
              </Text>
            </Centered>
          </div>
          <div className='col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3'>
            <Centered>
              <Link to='/space'>
                <LogoBox>
                  <Logo image={spaceLogo}></Logo>
                </LogoBox>
              </Link>
            </Centered>
          </div>
          <div className='col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3'>
            <Centered>
              <Link to='/about'>
                <LogoBox>
                  <Logo image={aboutLogo}></Logo>
                </LogoBox>
              </Link>
            </Centered>
          </div>
          <div className='col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3'>
            <Centered>
              <Link to='/about'>
                <LogoBox>
                  <Logo image={crashGoLogo}></Logo>
                </LogoBox>
              </Link>
            </Centered>
          </div>
          <div className='col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3'>
            <Centered>
              <Link to='/about'>
                <LogoBox>
                  <Logo image={loveLogo}></Logo>
                </LogoBox>
              </Link>
            </Centered>
          </div>
          <div className='col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3'>
            <Centered>
              <Link to='/about'>
                <LogoBox>
                  <Logo image={mazeLogo}></Logo>
                </LogoBox>
              </Link>
            </Centered>
          </div>
          <div className='col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3'>
            <Centered>
              <Link to='/about'>
                <LogoBox>
                  <Logo image={monsterLogo}></Logo>
                </LogoBox>
              </Link>
            </Centered>
          </div>
          <div className='col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3'>
            <Centered>
              <Link to='/tree'>
                <LogoBox>
                  <Logo image={treeLogo}></Logo>
                </LogoBox>
              </Link>
            </Centered>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
