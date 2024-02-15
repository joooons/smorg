import { ReactNode } from 'react';
import './TreeFullHeight.css';

interface Props {
  children?: ReactNode;
}

const TreeFullHeight = ({ children }: Props) => {
  return (
    <>
      <div className='tr-fullheight'>{children}</div>
    </>
  );
};

export default TreeFullHeight;
