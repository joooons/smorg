import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import Text from '../components/Text';
import HomeLogo from '../components/home/HomeLogo';
import HomeLogoBox from '../components/home/HomeLogoBox';
import Centered from '../components/Centered';
import '../components/Link.css';

import spaceLogo from '../../src/assets/images/space.png';
import notnewsLogo from '../../src/assets/images/notnews.png';
import treeLogo from '../../src/assets/images/tree.png';
import portfolioLogo from '../../src/assets/images/portfolio.png';
import smorgLogo from '../../src/assets/images/smorg-b.png';
import blankLogo from '../../src/assets/images/blank.png';
import tetrisLogo from '../../src/assets/images/tetris.png';
import scatterLogo from '../../src/assets/images/scatter.png';
import imitationgoLogo from '../../src/assets/images/imitationgo2.png';
import vocabhelperLogo from '../../src/assets/images/vocabhelper.png';
import proverbsLogo from '../../src/assets/images/proverbs.png';

const Home = () => {
  const content = [
    { link: '/notnews', img: notnewsLogo },
    { link: '/tree', img: treeLogo },
    { link: '/portfolio', img: portfolioLogo },
    {
      link: 'https://joooons.github.io/tetris',
      img: tetrisLogo,
    },
    { link: 'https://theloaflings.web.app', img: scatterLogo },
    {
      link: 'https://imitation-go.onrender.com/',
      img: imitationgoLogo,
    },
    {
      link: 'https://hebrewpracticequiz.netlify.app/',
      img: vocabhelperLogo,
    },
    {
      link: 'https://proverbs.onrender.com/',
      img: proverbsLogo,
    },
    { link: '/space', img: spaceLogo },
    { link: '/chickens', img: blankLogo },
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
              <Col key={index} sm={6} md={4} xl={3} xxl={2} className='my-3'>
                <Centered>
                  <Link to={page['link']} className='link'>
                    <HomeLogoBox>
                      <HomeLogo
                        image={page['img']}
                        external={page['external']}
                      ></HomeLogo>
                    </HomeLogoBox>
                  </Link>
                </Centered>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
