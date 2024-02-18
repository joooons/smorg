import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BrArticle = ({ children }: Props) => {
  return (
    <>
      <div className='mb-2 pt-4'>
        <div className='br-title'>{children}</div>
      </div>
    </>
  );
};

export default BrArticle;
