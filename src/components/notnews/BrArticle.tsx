import { ReactNode } from 'react';
import Image from 'react-bootstrap/Image';

import './BrArticle.css';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  image?: string;
  path: string;
  caption?: string;
  description?: string;
  writer?: string;
}

const BrArticle = ({
  image,
  caption,
  path,
  children,
  description,
  writer,
}: Props) => {
  return (
    <>
      <div className='br-article mb-4'>
        <Image src={image} fluid></Image>
        <div className='br-caption'>{caption}</div>
        <Link to={`/notnewspage/${path}`} className='br-page-link'>
          <div className='br-title'>{children}</div>
        </Link>

        <div className='br-description'>{description}</div>
        <div className='br-writer'>{writer}</div>
      </div>
    </>
  );
};

export default BrArticle;
