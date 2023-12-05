import { ReactNode } from 'react';
import './Container.css';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <>
      <div className='container-sm p-3'>{children}</div>;
    </>
  );
};

export default Container;
