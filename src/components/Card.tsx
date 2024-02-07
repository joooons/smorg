import { ReactNode } from 'react';
import './Card.css';

interface Props {
  children?: ReactNode;
  title?: string;
  text?: string;
}

const Card = ({ children, title, text }: Props) => {
  return (
    <>
      <div className='card m-3 p-1'>
        <div className='card-body'>
          {title && <h5 className='card-title'>{title}</h5>}
          {text && <p className='card-text'>{text}</p>}
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
