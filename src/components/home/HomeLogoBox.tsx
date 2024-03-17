import { ReactNode } from 'react';
import { gsap } from 'gsap';

import './HomeLogoBox.css';

interface Props {
  children: ReactNode;
}

const HomeLogoBox = ({ children }: Props) => {
  const moveUp = (ev: React.MouseEvent<HTMLElement>) => {
    ev.stopPropagation;
    const target = ev.target as HTMLElement;
    const grandparent = target.parentNode?.parentNode;
    grandparent && gsap.to(grandparent, { y: -2, duration: 0.2 });
  };

  const moveDn = (ev: React.MouseEvent<HTMLElement>) => {
    ev.stopPropagation;
    const target = ev.target as HTMLElement;
    const grandparent = target.parentNode?.parentNode;
    grandparent && gsap.to(grandparent, { y: 2, duration: 0.2 });
  };

  return (
    <>
      <div className='hm-logobox'>
        <div className='hm-logobox-lid'>
          <div
            className='hm-logobox-cover'
            onMouseEnter={moveUp}
            onMouseLeave={moveDn}
          ></div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default HomeLogoBox;
