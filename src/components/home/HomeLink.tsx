import { Link } from 'react-router-dom';

import Button from '../Button';

import './HomeLink.css';

interface Props {
  link: string;
  external?: boolean;
}

const HomeLink = ({ link, external = true }: Props) => {
  return (
    <>
      {!external && (
        <Link to={link} className='link'>
          <Button>OPEN PAGE</Button>
        </Link>
      )}
      {external && (
        <a
          className='home-link'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>OPEN IN NEW TAB</Button>
        </a>
      )}
    </>
  );
};
export default HomeLink;
