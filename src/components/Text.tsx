import { ReactNode } from 'react';
import './Text.css';

interface Props {
  children: ReactNode;
  size?: string;
  color?: string;
  font?: 'lovely' | 'winter' | 'oswald';
  tag?: 'div' | 'h1' | 'p';
}

const Text = ({
  children,
  color = 'black',
  font,
  size = '25',
  tag = 'div',
}: Props) => {
  return (
    <>
      {tag === 'div' && (
        <div
          className={'text ' + font}
          style={{ color: color, fontSize: size + 'px' }}
        >
          {children}
        </div>
      )}
      {tag === 'h1' && (
        <h1
          className={'text ' + font}
          style={{ color: color, fontSize: size + 'px' }}
        >
          {children}
        </h1>
      )}
      {tag === 'p' && (
        <p
          className={'text ' + font}
          style={{ color: color, fontSize: size + 'px' }}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default Text;
