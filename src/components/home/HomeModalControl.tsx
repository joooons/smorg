import { ReactNode } from 'react';

interface modalObject {
  title: string;
  desc: string;
  link: string;
  external: boolean;
}

interface Props {
  children: ReactNode;
  fn1: (text: modalObject) => void;
  fn2: () => void;
  modalData: modalObject;
}

const HomeModalControl = ({ children, fn1, fn2, modalData }: Props) => {
  return (
    <>
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
