// import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  // link?: string;
  // external?: boolean;
  fn1: (text: string) => void;
  fn2: () => void;
  modalText: string;
}

const HomeLink = ({
  children,
  // link,
  // external = false,
  fn1,
  fn2,
  modalText,
}: Props) => {
  return (
    <>
      {/* {!external && (
        <Link to={link} className='link'>
          {children}
        </Link>
      )}
      {external && (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )} */}
      <div
        onClick={() => {
          console.log('it work');
          fn1(modalText);
          fn2();
        }}
      >
        {children}
      </div>
    </>
  );
};

export default HomeLink;
