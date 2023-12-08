import { ReactNode } from 'react';
import './Text.css';

interface Props {
  children: ReactNode;
  color?: string;
  tag?: 'div' | 'h1' | 'p';
}

const Text = ({ children, color = 'black', tag = 'div' }: Props) => {
  return (
    <>
      {tag === 'div' && (
        <div className='text' style={{ color: color }}>
          {children}
        </div>
      )}
      {tag === 'h1' && (
        <h1 className='text' style={{ color: color }}>
          {children}
        </h1>
      )}
      {tag === 'p' && (
        <p className='text' style={{ color: color }}>
          {children}
        </p>
      )}
    </>
  );
};

export default Text;
