import { Link } from 'react-router-dom';

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
          <div className='home-link'>GO!</div>
        </Link>
      )}
      {external && (
        <a
          className='home-link'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          GO!
        </a>
      )}
    </>
  );
};
export default HomeLink;
