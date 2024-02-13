// import React from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BrArticle = ({ children }: Props) => {
  return (
    <>
      <div className='br-article mb-3 pt-3'>
        <div className='br-title'>{children}</div>
      </div>
    </>
  );
};

export default BrArticle;
