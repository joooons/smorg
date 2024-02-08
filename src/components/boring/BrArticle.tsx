// import React from 'react';
import { ReactNode } from 'react';
import './BrArticle.css';

interface Props {
  children: ReactNode;
}

const BrArticle = ({ children }: Props) => {
  return (
    <>
      <div className='br-article'>{children}</div>
    </>
  );
};

export default BrArticle;
