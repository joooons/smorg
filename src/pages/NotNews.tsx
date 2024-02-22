// npm packages
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { createClient } from 'contentful';

// notnews components
import BrCard from '../components/notnews/BrCard';
import BrNavBar from '../components/notnews/BrNavBar';
import BrCategory from '../components/notnews/BrCategory';
import BrFooter from '../components/notnews/BrFooter';
import '../components/notnews/NotNews.css';

// src/assets/images
import placeholderImage from '../../src/assets/images/placeholder.jpg';

interface Card {
  id: string;
  type: string;
  path: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  writer: string;
}

const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const contentfulSpace = import.meta.env.VITE_CONTENTFUL_SPACE;

const client = createClient({
  space: contentfulSpace,
  environment: 'master',
  accessToken: contentfulAccessToken,
});

function NotNews() {
  const [cards, setCards] = useState<Card[]>();

  const dateKey: string = new Date()
    .toDateString()
    .substring(4, 11)
    .replace(/\s/g, '-');

  useEffect(() => {
    client
      .getEntries()
      .then((entry) => {
        let arr: Card[] = [];
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
          const card: Card = {
            id: item.sys.id as string,
            type: item.fields.type as string,
            path: item.fields.path as string,
            title: item.fields.title as string,
            description: item.fields.description as string,
            image: imageURL,
            caption: item.fields.caption as string,
            writer: item.fields.writer as string,
          };
          arr.push(card);
        });
        console.log('all articles loaded from contentful');
        setCards(arr);
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
            {cards?.map((card) => {
              if (card.type === 'featured-left') {
                return <BrCard key={dateKey + card.path} card={card}></BrCard>;
              }
            })}
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className='br-section px-3'
          >
            {/* {cards?.map((card) => {
              if (card.type === 'cover') {
                return (
                  <BrCard
                    key={card.id + '-cover'}
                    image={card.image}
                    path={card.path}
                    caption={card.caption}
                    description={card.description}
                    writer={card.writer}
                  >
                    {card.title}
                  </BrCard>
                );
              }
            })} */}
          </Col>
          <Col
            xs={{ span: 12, order: 3 }}
            md={{ span: 3, order: 3 }}
            className='br-section px-3'
          >
            {/* {cards?.map((card) => {
              if (card.type === 'featured-right') {
                return (
                  <BrCard
                    key={card.id + '-featured-right'}
                    image={card.image}
                    path={card.path}
                    caption={card.caption}
                    description={card.description}
                    writer={card.writer}
                  >
                    {card.title}
                  </BrCard>
                );
              }
            })} */}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <BrCategory>Recommended</BrCategory>
            {/* {cards?.map((card) => {
              if (card.type === 'recommended') {
                return (
                  <BrCard
                    key={card.id + '-recommended'}
                    image={card.image}
                    path={card.path}
                    caption={card.caption}
                    description={card.description}
                    writer={card.writer}
                  >
                    {card.title}
                  </BrCard>
                );
              }
            })} */}
          </Col>

          <Col xs={12} md={6}>
            <BrCategory>Popular</BrCategory>
            {/* {cards?.map((card) => {
              if (card.type === 'popular') {
                return (
                  <BrCard
                    key={card.id + '-popular'}
                    image={card.image}
                    path={card.path}
                    caption={card.caption}
                    description={card.description}
                    writer={card.writer}
                  >
                    {card.title}
                  </BrCard>
                );
              }
            })} */}
          </Col>
        </Row>
        <Row className='py-4'></Row>
      </Container>
      <BrFooter></BrFooter>
    </>
  );
}

export default NotNews;
