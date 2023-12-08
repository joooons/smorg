import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Centered = ({ children }: Props) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Centered;
