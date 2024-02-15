import { ReactNode } from 'react';
import './HomeLogoBox.css';

interface Props {
  children: ReactNode;
}

const HomeLogoBox = ({ children }: Props) => {
  return (
    <>
      <div className='hm-logobox'>
        <div className='hm-logobox-lid'>
          <div className='hm-logobox-cover'></div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default HomeLogoBox;
