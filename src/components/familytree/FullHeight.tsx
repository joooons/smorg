import { ReactNode } from 'react';
import './FullHeight.css';

interface Props {
  children?: ReactNode;
}

const FullHeight = ({ children }: Props) => {
  return (
    <>
      <div className='fullheight'>{children}</div>
    </>
  );
};

export default FullHeight;
