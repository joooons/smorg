// npm packages
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';

// notnews components
import BrArticle from '../components/notnews/BrArticle';
import BrNavBar from '../components/notnews/BrNavBar';
import BrFooter from '../components/notnews/BrFooter';
import '../components/notnews/NotNews.css';

// src/assets/images
import placeholderImage from '../../src/assets/images/placeholder.jpg';

interface Article {
  type: string;
  path: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  writer: string;
  content: any;
}

const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const contentfulSpace = import.meta.env.VITE_CONTENTFUL_SPACE;

const client = createClient({
  space: contentfulSpace,
  environment: 'master',
  accessToken: contentfulAccessToken,
});

function NotNews() {
  const { entryid, path } = useParams();

  const [articles, setArticles] = useState<Article[]>();

  // console.log(entryid);

  useEffect(() => {
    client
      .getEntry(entryid as string)
      .then((item) => {
        let arr: Article[] = [];
        // entry.items.forEach((item) => {
        let imageURL: string = placeholderImage;
        if (item.fields.image) {
          let imageObject = item.fields.image as {
            fields: { file: { url: string } };
          };
          if (imageObject.fields) {
            imageURL = imageObject.fields.file.url as string;
          }
        }

        let paragraphs: string[] = [];
        if (item.fields.content) {
          let content = item.fields.content as any;
          content.content.forEach((obj: any) => {
            let text = obj.content[0].value;
            paragraphs.push(text);
          });
        }

        const article: Article = {
          type: item.fields.type as string,
          path: item.fields.path as string,
          title: item.fields.title as string,
          description: item.fields.description as string,
          image: imageURL,
          caption: item.fields.caption as string,
          writer: item.fields.writer as string,
          content: paragraphs as string[],
        };
        arr.push(article);
        // });
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
          <Col xs={{ span: 12 }} md={{ offset: 2, span: 8 }} className='px-3'>
            {articles?.map((article) => {
              if (article.path === path) {
                const date: Date = new Date();
                return (
                  <BrArticle
                    key={
                      date.toDateString().substring(4, 11).replace(/\s/g, '-') +
                      article.path
                    }
                    article={article}
                  ></BrArticle>
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
