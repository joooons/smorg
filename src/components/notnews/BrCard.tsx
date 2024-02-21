import Image from 'react-bootstrap/Image';

import './BrCard.css';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  image?: string;
  path: string;
  caption?: string;
  description?: string;
  writer?: string;
}

const BrCard = ({
  title,
  image,
  caption,
  path,
  description,
  writer,
}: Props) => {
  return (
    <>
      <div className='br-card mb-4'>
        <Image src={image} fluid></Image>
        <div className='br-caption'>{caption}</div>
        <Link to={`/notnewspage/${path}`} className='br-page-link'>
          <div className='br-title'>{title}</div>
        </Link>

        <div className='br-description'>{description}</div>
        <div className='br-writer'>{writer}</div>
      </div>
    </>
  );
};

export default BrCard;
