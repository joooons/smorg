import { ReactNode } from 'react';
import './LogoBox.css';

interface Props {
  children: ReactNode;
}

const Logo = ({ children }: Props) => {
  return (
    <>
      <div className='logobox'>
        <div className='logobox-lid'>
          <div className='logobox-cover'></div>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default Logo;
