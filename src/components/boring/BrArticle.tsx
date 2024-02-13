import { ReactNode } from 'react';
import Image from 'react-bootstrap/Image';

import './BrArticle.css';

interface Props {
  children: ReactNode;
  title: string;
  image?: string;
  caption?: string;
  description?: string;
  writer?: string;
}

const BrArticle = ({
  title,
  // image,
  caption,
  children,
  description,
  writer,
}: Props) => {
  // const imageUrl = '../../src/assets/' + image;
  return (
    <>
      <div className='br-article mb-3 pt-3'>
        {/* <Image src={imageUrl} fluid></Image> */}
        {children}
        <div className='br-caption'>{caption}</div>
        <div className='br-title'>{title}</div>
        <div className='br-description'>{description}</div>
        <div className='br-writer'>{writer}</div>
      </div>
    </>
  );
};

export default BrArticle;
