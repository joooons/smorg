import { ReactNode } from 'react';
import Image from 'react-bootstrap/Image';

import './BrArticle.css';

interface Props {
  children: ReactNode;
  image?: string;
  caption?: string;
  description?: string;
  writer?: string;
}

const BrArticle = ({
  image,
  caption,
  children,
  description,
  writer,
}: Props) => {
  return (
    <>
      <div className='br-article mb-4'>
        <Image src={image} fluid></Image>
        <div className='br-caption'>{caption}</div>
        <div className='br-title'>{children}</div>
        <div className='br-description'>{description}</div>
        <div className='br-writer'>{writer}</div>
      </div>
    </>
  );
};

export default BrArticle;
