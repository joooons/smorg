// npm packages
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

// notnews components
import BrArticle from '../components/notnews/BrArticle';
import BrNavBar from '../components/notnews/BrNavBar';
import BrCategory from '../components/notnews/BrCategory';
import BrFooter from '../components/notnews/BrFooter';
import '../components/notnews/NotNews.css';

// src/assets/images
import placeholderImage from '../../src/assets/images/placeholder.jpg';

interface Article {
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
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
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
            path: item.fields.path as string,
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
                    path={article.path}
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
                    path={article.path}
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
                    path={article.path}
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
                    path={article.path}
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
                    path={article.path}
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
      <BrFooter></BrFooter>
    </>
  );
}

export default NotNews;
