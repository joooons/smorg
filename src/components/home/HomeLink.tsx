import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  link: string;
  external?: boolean;
}

const HomeLink = ({ children, link, external = false }: Props) => {
  return (
    <>
      {!external && (
        <Link to={link} className='link'>
          {children}
        </Link>
      )}
      {external && (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )}
    </>
  );
};

export default HomeLink;
