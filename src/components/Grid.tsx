import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Grid = ({ children }: Props) => {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '10px',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Grid;
