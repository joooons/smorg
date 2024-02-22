import { ReactNode, useState } from 'react';
import './SpSquare.css';

interface Props {
  children?: ReactNode;
}

const SpSquare = ({ children }: Props) => {
  const [spots, setSpots] = useState<any>([]);

  const [pos, setPos] = useState<number[]>([0, 0]);

  const mousemove = (event: React.MouseEvent<HTMLDivElement>) => {
    const elem = document.getElementById('sp-square');
    const rect = elem?.getBoundingClientRect();
    // const dim = [elem?.offsetWidth, elem?.offsetHeight];
    const boxPos = [rect?.left, rect?.top];
    const pos = [
      boxPos[0] ? event.clientX - boxPos[0] : event.clientX,
      boxPos[1] ? event.clientY - boxPos[1] : event.clientY,
    ];
    // console.log(pos, '   dim: ', dim);
    setPos(pos);
  };

  const mouseclick = (event: React.MouseEvent<HTMLDivElement>) => {
    const elem = document.getElementById('sp-square');
    const rect = elem?.getBoundingClientRect();
    const boxPos = [rect?.left, rect?.top];
    const pos: number[] = [
      boxPos[0] ? event.clientX - boxPos[0] : event.clientX,
      boxPos[1] ? event.clientY - boxPos[1] : event.clientY,
    ];
    let spotsList = [...spots];
    spotsList.push([pos[0], pos[1]]);
    if (spotsList.length === 30) {
      spotsList.shift();
    }
    setSpots(spotsList);
  };
  return (
    <>
      <div className='sp-centered'>
        <div
          className='sp-square'
          id='sp-square'
          onMouseMove={mousemove}
          onMouseDown={mouseclick}
        >
          {children}
          {spots.map((spot: number[]) => {
            return (
              <div
                style={{
                  position: 'absolute',
                  left: `${spot[0] - 20}px`,
                  top: `${spot[1] - 20}px`,
                  height: '40px',
                  width: '40px',
                  borderRadius: '100%',
                  boxShadow: '0px 0px 50px rgba(255,255,200, 0.5)',
                  backgroundColor: 'rgba(255,255,200, 0.05)',
                }}
              ></div>
            );
          })}
          <div
            style={{
              position: 'absolute',
              left: `${pos[0] - 5}px`,
              top: `${pos[1] - 5}px`,
              height: '10px',
              width: '10px',
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
