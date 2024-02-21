import Image from 'react-bootstrap/Image';

import './BrCard.css';
import { Link } from 'react-router-dom';

interface Card {
  type: string;
  path: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  writer: string;
}

interface Props {
  card?: Card;
}

const BrCard = ({ card }: Props) => {
  return (
    <>
      {card && (
        <div className='br-card mb-4'>
          <Image src={card.image} fluid></Image>
          <div className='br-caption'>{card.caption}</div>
          <Link to={`/notnewspage/${card.path}`} className='br-page-link'>
            <div className='br-title'>{card.title}</div>
          </Link>

          <div className='br-description'>{card.description}</div>
          <div className='br-writer'>{card.writer}</div>
        </div>
      )}
    </>
  );
};

export default BrCard;
