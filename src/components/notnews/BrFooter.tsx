import { ReactNode } from 'react';

import './BrFooter.css';

interface Props {
  children: ReactNode;
}

const BrFooter = ({ children }: Props) => {
  return (
    <>
      <div className='br-footer py-4'>{children}</div>
    </>
  );
};

export default BrFooter;
