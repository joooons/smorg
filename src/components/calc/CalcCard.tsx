import CalcInput from './CalcInput';

import './CalcCard.css';

interface Props {
  children: string;
}

const CalcCard = ({ children }: Props) => {
  return (
    <>
      <div className='cc-card main'>
        <h3>{children}</h3>
        <div>
          <CalcInput>#</CalcInput>
          <CalcInput sign='+'>#</CalcInput>
          <CalcInput>=</CalcInput>
        </div>
      </div>
    </>
  );
};

export default CalcCard;
