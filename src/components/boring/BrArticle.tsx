// import React from 'react';
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
  const imageUrl = '../../src/assets/' + image;
  return (
    <>
      <div className='br-article'>
        <Image src={imageUrl} fluid></Image>
        <div>{caption}</div>
        <div>{children}</div>
        <div>{description}</div>
        <div>{writer}</div>
      </div>
    </>
  );
};

export default BrArticle;
