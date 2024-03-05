import { ReactNode } from 'react';

interface modalObject {
  title: string;
  desc: string;
  link: string;
}

interface Props {
  children: ReactNode;
  // link?: string;
  // external?: boolean;
  fn1: (text: modalObject) => void;
  fn2: () => void;
  modalData: modalObject;
}

const HomeModalControl = ({
  children,
  // link,
  // external = false,
  fn1,
  fn2,
  modalData,
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
          fn1(modalData);
          fn2();
        }}
      >
        {children}
      </div>
    </>
  );
};

export default HomeModalControl;
