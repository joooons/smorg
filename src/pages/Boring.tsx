// npm packages
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

// icons
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareReddit,
  FaSquarePinterest,
  FaSquareFacebook,
  FaSquareYoutube,
  FaSquareTumblr,
} from 'react-icons/fa6';

// boring components
import BrArticle from '../components/boring/BrArticle';
import BrNavBar from '../components/boring/BrNavBar';
import BrCategory from '../components/boring/BrCategory';
import BrFooter from '../components/boring/BrFooter';
import '../components/boring/Boring.css';

// src/assets/images
import placeholderImage from '../../src/assets/images/placeholder.jpg';
// import grammysImage from '../../src/assets/images/boring-grammys.jpg';
// import gummybearsImage from '../../src/assets/images/boring-gummybears.jpg';
// import pillowfightImage from '../../src/assets/images/boring-pillowfight.jpg';
// import rugbyImage from '../../src/assets/images/boring-rugby.jpg';
// import toothdecayImage from '../../src/assets/images/boring-toothdecay.jpg';
// import dateImage from '../../src/assets/images/boring-date.jpg';
// import goingGoodImage from '../../src/assets/images/boring-going-good.jpg';
// import submarineImage from '../../src/assets/images/boring-submarine.jpg';
// import twitterImage from '../../src/assets/images/boring-twitter.jpg';

interface Article {
  id: string;
  type: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  writer: string;
}

const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const contentfulSpace = import.meta.env.VITE_CONTENTFUL_SPACE;
// const contentfulEntry = import.meta.env.VITE_CONTENTFUL_ENTRY;

const client = createClient({
  space: contentfulSpace,
  environment: 'master',
  accessToken: contentfulAccessToken,
});

function Boring() {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    console.log('----- useEffect triggered -----');
    client
      .getEntries()
      .then((entry) => {
        let arr: Article[] = [];
        entry.items.forEach((item) => {
          let imageURL: string = placeholderImage;
          if (item.fields.image) {
            let imageObject = item.fields.image as {
              fields: { file: { url: string } };
            };
            if (imageObject.fields) {
              imageURL = imageObject.fields.file.url as string;
            }
          }
          const article: Article = {
            id: item.fields.id as string,
            type: item.fields.type as string,
            title: item.fields.title as string,
            description: item.fields.description as string,
            image: imageURL,
            caption: item.fields.caption as string,
            writer: item.fields.writer as string,
          };
          arr.push(article);
        });
        console.log('content loaded from contentful');
        setArticles(arr);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <BrNavBar></BrNavBar>
      <Container fluid='lg'>
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 3, order: 1 }}
            className='br-section'
          >
            {articles?.map((article) => {
              if (article.type === 'featured-left') {
                return (
                  <BrArticle
                    key={article.id + '-featured-left'}
                    image={article.image}
                    caption={article.caption}
                    description={article.description}
                    writer={article.writer}
                  >
                    {article.title}
                  </BrArticle>
                );
              }
            })}
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className='br-section px-3'
          >
            {articles?.map((article) => {
              if (article.type === 'cover') {
                return (
                  <BrArticle
                    key={article.id + '-cover'}
                    image={article.image}
                    caption={article.caption}
                    description={article.description}
                    writer={article.writer}
                  >
                    {article.title}
                  </BrArticle>
                );
              }
            })}
          </Col>
          <Col
            xs={{ span: 12, order: 3 }}
            md={{ span: 3, order: 3 }}
            className='br-section px-3'
          >
            {articles?.map((article) => {
              if (article.type === 'featured-right') {
                return (
                  <BrArticle
                    key={article.id + '-featured-right'}
                    image={article.image}
                    caption={article.caption}
                    description={article.description}
                    writer={article.writer}
                  >
                    {article.title}
                  </BrArticle>
                );
              }
            })}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <BrCategory>Recommended</BrCategory>
            {articles?.map((article) => {
              if (article.type === 'recommended') {
                return (
                  <BrArticle
                    key={article.id + '-recommended'}
                    image={article.image}
                    caption={article.caption}
                    description={article.description}
                    writer={article.writer}
                  >
                    {article.title}
                  </BrArticle>
                );
              }
            })}
          </Col>

          <Col xs={12} md={6}>
            <BrCategory>Popular</BrCategory>
            {articles?.map((article) => {
              if (article.type === 'popular') {
                return (
                  <BrArticle
                    key={article.id + '-popular'}
                    image={article.image}
                    caption={article.caption}
                    description={article.description}
                    writer={article.writer}
                  >
                    {article.title}
                  </BrArticle>
                );
              }
            })}
          </Col>
        </Row>
        <Row className='py-4'></Row>
      </Container>
      <BrFooter>
        <Container fluid='lg'>
          <div className='row pt-4 '>
            <div className='col-md-6 col-lg-2 mb-4'>
              <div className='br-footer-item-heading'>About</div>
              <div>
                <Link to='/boring' className='br-link'>
                  BNN
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Careers
                </Link>
              </div>
            </div>

            <div className='col-md-6 col-lg-2 mb-4'>
              <div className='br-footer-item-heading'>Contact</div>
              <div>
                <Link to='/boring' className='br-link'>
                  Customer Center
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Contact Us
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Press
                </Link>
              </div>
            </div>

            <div className='col-md-6 col-lg-7 mb-4'>
              <div className='br-footer-item-heading'>Subscription</div>
              <div>
                <Link to='/boring' className='br-link'>
                  Manage Subscriptions
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Podcast
                </Link>
              </div>
              <div>
                <Link to='/boring' className='br-link'>
                  Newsletter
                </Link>
              </div>
            </div>

            <div className='col-sm-2 col-md-2 col-lg-1 mb-4'>
              <div className='br-footer-item-heading'>Follow</div>
              <div className='row'>
                <div className='col-1'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareXTwitter />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareInstagram />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareFacebook />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareYoutube />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareTumblr />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/boring' className='br-link'>
                    <FaSquarePinterest />
                  </Link>
                </div>
                <div className='col-1'>
                  <Link to='/boring' className='br-link'>
                    <FaSquareReddit />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='row pt-3 pb-5 '>
            <div className='row'>
              <div className='col-12'>
                <div className='br-footer-row pt-4'>
                  <Link to='/boring' className='br-link br-footer-item'>
                    Privacy Policy
                  </Link>
                  <Link to='/boring' className='br-link br-footer-item'>
                    Do Not Sell Or Share My Personal Information
                  </Link>
                  <Link to='/boring' className='br-link br-footer-item'>
                    Terms & Conditions
                  </Link>
                  <Link to='/boring' className='br-link br-footer-item'>
                    Terms of Sale
                  </Link>
                  <Link to='/boring' className='br-link br-footer-item'>
                    Site Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </BrFooter>
    </>
  );
}

export default Boring;
