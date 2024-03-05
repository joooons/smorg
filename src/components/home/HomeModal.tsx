import { ReactNode } from 'react';
import './HomeModal.css';

interface Props {
  children: ReactNode;
  action: () => void;
}

const HomeModal = ({ children, action }: Props) => {
  return (
    <div className='home-popup' onClick={action}>
      <div
        className='home-popup-content'
        onClick={() => {
          alert('hi');
        }}
      >
        <h2>{children}</h2>
      </div>
    </div>
  );
};

export default HomeModal;
