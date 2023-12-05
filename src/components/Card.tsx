import { ReactNode } from 'react';
import './Card.css';

interface Props {
  children: ReactNode;
  title: string;
  text: string;
  output: string;
}

const Card = ({ children, title, text, output }: Props) => {
  return (
    <>
      <div className='card m-5 p-3'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{text}</p>
          {children}
          <p className='card-text'>{output}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
