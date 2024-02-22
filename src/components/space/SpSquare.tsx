import { ReactNode, useState } from 'react';
import './SpSquare.css';

interface Props {
  children?: ReactNode;
}

const SpSquare = ({ children }: Props) => {
  const [pos, setPos] = useState<number[]>([0, 0]);
  const mousemove = (event: React.MouseEvent<HTMLDivElement>) => {
    const elem = document.getElementById('sp-square');
    const rect = elem?.getBoundingClientRect();
    const dim = [elem?.offsetWidth, elem?.offsetHeight];
    const boxPos = [rect?.left, rect?.top];
    const pos = [
      boxPos[0] ? event.clientX - boxPos[0] : event.clientX,
      boxPos[1] ? event.clientY - boxPos[1] : event.clientY,
    ];

    console.log(pos, '   dim: ', dim);
    setPos(pos);
  };
  return (
    <>
      <div className='sp-centered'>
        <div className='sp-square' id='sp-square' onMouseMove={mousemove}>
          {children}
          <div
            style={{
              position: 'absolute',
              left: `${pos[0] - 20}px`,
              top: `${pos[1] - 20}px`,
              height: '40px',
              width: '40px',
              borderRadius: '100%',
              backgroundColor: 'rgba(255,255,200, 0.5)',
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SpSquare;
