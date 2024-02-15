import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import Text from '../components/Text';
import HomeLogo from '../components/home/HomeLogo';
import HomeLogoBox from '../components/home/HomeLogoBox';
import Centered from '../components/Centered';
import '../components/Link.css';

import spaceLogo from '../../src/assets/space.png';
import aboutLogo from '../../src/assets/about.png';
import boringLogo from '../../src/assets/B.png';
// import crashGoLogo from '../../src/assets/crashGo.png';
// import loveLogo from '../../src/assets/love.png';
// import mazeLogo from '../../src/assets/maze.png';
// import monsterLogo from '../../src/assets/monster.png';
import treeLogo from '../../src/assets/tree.png';
import smorgLogo from '../../src/assets/smorg-b.png';
import blankLogo from '../../src/assets/blank.png';

const Home = () => {
  return (
    <>
      <Container>
        <Row className='mt-1'>
          <Col sm={12}>
            <Centered>
              <HomeLogo size='110' image={smorgLogo}></HomeLogo>
            </Centered>
          </Col>
          <Col sm={12}>
            <Centered>
              <Text size='100' font='winter' tag='h1'>
                SMORG
              </Text>
            </Centered>
          </Col>
        </Row>

        <Row>
          <Col sm={6} md={4} xl={3} xxl={2} className='my-3'>
            <Centered>
              <Link to='/space' className='link'>
                <HomeLogoBox>
                  <HomeLogo image={spaceLogo}></HomeLogo>
                </HomeLogoBox>
              </Link>
            </Centered>
          </Col>

          <Col sm={6} md={4} xl={3} xxl={2} className='my-3'>
            <Centered>
              <Link to='/tree' className='link'>
                <HomeLogoBox>
                  <HomeLogo image={treeLogo}></HomeLogo>
                </HomeLogoBox>
              </Link>
            </Centered>
          </Col>

          <Col sm={6} md={4} xl={3} xxl={2} className='my-3'>
            <Centered>
              <Link to='/about' className='link'>
                <HomeLogoBox>
                  <HomeLogo image={aboutLogo}></HomeLogo>
                </HomeLogoBox>
              </Link>
            </Centered>
          </Col>

          <Col sm={6} md={4} xl={3} xxl={2} className='my-3'>
            <Centered>
              <Link to='/boring' className='link'>
                <HomeLogoBox>
                  <HomeLogo image={boringLogo}></HomeLogo>
                </HomeLogoBox>
              </Link>
            </Centered>
          </Col>

          <Col sm={6} md={4} xl={3} xxl={2} className='my-3'>
            <Centered>
              <Link to='/chickens' className='link'>
                <HomeLogoBox>
                  <HomeLogo image={blankLogo}>COMING SOON</HomeLogo>
                </HomeLogoBox>
              </Link>
            </Centered>
          </Col>

          <Col sm={6} md={4} xl={3} xxl={2} className='my-3'>
            <Centered>
              <Link to='/chickens' className='link'>
                <HomeLogoBox>
                  <HomeLogo image={blankLogo}>COMING SOON</HomeLogo>
                </HomeLogoBox>
              </Link>
            </Centered>
          </Col>

          <Col sm={6} md={4} xl={3} xxl={2} className='my-3'>
            <Centered>
              <Link to='/chickens' className='link'>
                <HomeLogoBox>
                  <HomeLogo image={blankLogo}>COMING SOON</HomeLogo>
                </HomeLogoBox>
              </Link>
            </Centered>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
