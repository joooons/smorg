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
  const content = [
    { link: '/space', img: spaceLogo },
    { link: '/tree', img: treeLogo },
    { link: '/about', img: aboutLogo },
    { link: '/boring', img: boringLogo },
    { link: '/chickens', img: blankLogo, txt: 'COMING SOON' },
    { link: '/chickens', img: blankLogo, txt: 'COMING SOON' },
    { link: '/chickens', img: blankLogo, txt: 'COMING SOON' },
  ];
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
          {content.map((page, index) => {
            return (
              <>
                <Col key={index} sm={6} md={4} xl={3} xxl={2} className='my-3'>
                  <Centered>
                    <Link to={page['link']} className='link'>
                      <HomeLogoBox>
                        <HomeLogo image={page['img']}>{page['txt']}</HomeLogo>
                      </HomeLogoBox>
                    </Link>
                  </Centered>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
