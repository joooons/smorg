import { useState } from 'react';

import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import Text from '../components/Text';
import HomeLogo from '../components/home/HomeLogo';
import HomeLogoBox from '../components/home/HomeLogoBox';
import HomeModalControl from '../components/home/HomeModalControl';
import HomeModal from '../components/home/HomeModal';
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
import rakeLogo from '../../src/assets/images/rake.png';

interface modalObject {
  title: string;
  desc: string;
  link: string;
  external: boolean;
}

const Home = () => {
  const content = [
    {
      title: 'Not News Network',
      desc: 'Mockup news site with data from Contentful.',
      link: '/notnews',
      img: notnewsLogo,
      external: false,
    },
    {
      title: 'Family Tree',
      desc: 'Converts text from a <textarea> to a tree data structure.',
      link: '/tree',
      img: treeLogo,
      external: false,
    },
    {
      title: 'Rake',
      desc: 'Chrome extension for extracting text from open tab in browser. Currently unpublished. Opens external link to the GitHub page.',
      link: 'https://github.com/joooons/rake',
      img: rakeLogo,
      external: true,
    },
    {
      title: 'Imitation Go',
      desc: 'Experimental version of Go. Made with node, jQuery, and socket.io. Opens an external link. It may take a few minutes for the page to load.',
      link: 'https://imitation-go.onrender.com/',
      img: imitationgoLogo,
      external: true,
    },
    {
      title: 'Vocab Helper',
      desc: 'Vocab learning tool that I made while learning Hebrew. Made with jQuery and Bootstrap. Opens an external link.',
      link: 'https://hebrewpracticequiz.netlify.app/',
      img: vocabhelperLogo,
      external: true,
    },
    {
      title: 'Scatter!',
      desc: 'Scattergories! Friends can play together remotely. Made with jQuery and Firebase. Opens an external link.',
      link: 'https://theloaflings.web.app',
      img: scatterLogo,
      external: true,
    },
    {
      title: 'Random Proverb',
      desc: 'Displays randomly selected proverb every 5 minutes. Made with node and ESV API. Opens an external link. It may take a few minutes for the page to load.',
      link: 'https://proverbs.onrender.com/',
      img: proverbsLogo,
      external: true,
    },
    {
      title: 'Tetris',
      desc: 'My first personal project. Made with vanilla JavaScript. Opens an external link.',
      link: 'https://joooons.github.io/tetris',
      img: tetrisLogo,
      external: true,
    },
    {
      title: 'Portfolio',
      desc: 'Work in progress.',
      link: '/portfolio',
      img: portfolioLogo,
      external: false,
    },
    {
      title: 'Space',
      desc: 'Placeholder for a future idea. WIP.',
      link: '/space',
      img: spaceLogo,
      external: false,
    },
    {
      title: 'The Void',
      desc: 'Placeholder for future idea.',
      link: '/chickens',
      img: blankLogo,
      external: false,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const [modalData, setModalData] = useState({
    title: 'SAMPLE',
    desc: 'This is just a sample modal',
    link: '#',
    external: false,
  });
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const modifyModalData = (data: modalObject) => {
    setModalData(data);
  };
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
                  <HomeModalControl
                    fn1={modifyModalData}
                    fn2={openModal}
                    modalData={{
                      title: page.title,
                      desc: page.desc,
                      link: page.link,
                      external: page.external,
                    }}
                  >
                    <HomeLogoBox>
                      <HomeLogo image={page.img}></HomeLogo>
                    </HomeLogoBox>
                  </HomeModalControl>
                </Centered>
              </Col>
            );
          })}
        </Row>
        {showModal && <HomeModal fn={closeModal} data={modalData}></HomeModal>}
      </Container>
    </>
  );
};

export default Home;
