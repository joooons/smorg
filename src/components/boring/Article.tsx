// import React from 'react';
import { ReactNode } from 'react';
import './Article.css';

interface Props {
  children: ReactNode;
}

const Article = ({ children }: Props) => {
  return (
    <>
      <div className='boring-article'>{children}</div>
    </>
  );
};

export default Article;
