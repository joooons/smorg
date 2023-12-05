import { ReactNode } from 'react';
import './Card.css';

interface Props {
  children?: ReactNode;
  title: string;
  text: string;
}

const Card = ({ children, title, text }: Props) => {
  return (
    <>
      <div className='card m-3 p-1'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{text}</p>
          <p className='card-text'></p>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
