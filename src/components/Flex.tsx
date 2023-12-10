import React from 'react';
import './Flex.css';

interface Props {
  children: React.ReactNode;
}

const Flex = ({ children }: Props) => {
  return (
    <>
      <div className='flex-container'>{children}</div>
    </>
  );
};

export default Flex;
