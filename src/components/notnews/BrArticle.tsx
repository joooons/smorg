import Image from 'react-bootstrap/Image';

import './BrArticle.css';
import { Link } from 'react-router-dom';

interface Article {
  type: string;
  path: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  writer: string;
}

interface Props {
  article: Article;
}

const BrArticle = ({ article }: Props) => {
  return (
    <>
      {article && (
        <div className='br-article mb-4'>
          <Image src={article.image} fluid></Image>
          <div className='br-article-caption'>{article.caption}</div>
          <Link
            to={`/notnewspage/${article.path}`}
            className='br-article-page-link'
          >
            <div className='br-article-title'>{article.title}</div>
          </Link>

          <div className='br-article-description'>{article.description}</div>
          <div className='br-article-writer'>{article.writer}</div>
        </div>
      )}
    </>
  );
};

export default BrArticle;
