import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import Text from '../components/Text';
import HomeLogo from '../components/home/HomeLogo';
import HomeLogoBox from '../components/home/HomeLogoBox';
import HomeLink from '../components/home/HomeLink';
import Centered from '../components/Centered';
import '../components/Link.css';

import spaceLogo from '../../src/assets/images/space.png';
import notnewsLogo from '../../src/assets/images/notnews.png';
import treeLogo from '../../src/assets/images/tree.png';
import portfolioLogo from '../../src/assets/images/portfolio.png';
import blankLogo from '../../src/assets/images/blank.png';
import tetrisLogo from '../../src/assets/images/tetris.png';
import scatterLogo from '../../src/assets/images/scatter.png';
import imitationgoLogo from '../../src/assets/images/imitationgo.png';
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
      external: true,
    },
    {
      link: 'https://proverbs.onrender.com/',
      img: proverbsLogo,
    },
    { link: '/space', img: spaceLogo },
    { link: '/chickens', img: blankLogo, external: false },
  ];
  return (
    <>
      <Container>
        <Row className='mt-1'>
          <Col sm={12}>
            <Centered>
              <Text size='100' font='oswald' tag='h1'>
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
                  <HomeLink link={page.link} external={page.external}>
                    <HomeLogoBox>
                      <HomeLogo image={page.img}></HomeLogo>
                    </HomeLogoBox>
                  </HomeLink>
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
