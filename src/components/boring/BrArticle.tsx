// import React from 'react';
import { ReactNode } from 'react';
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
      <div className='br-article'>
        <div>{image}</div>
        <div>{caption}</div>
        <div>{children}</div>
        <div>{description}</div>
        <div>{writer}</div>
      </div>
    </>
  );
};

export default BrArticle;
