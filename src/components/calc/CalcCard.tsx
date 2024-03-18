import './CalcCard.css';

interface Props {
  children: string;
}

const CalcCard = ({ children }: Props) => {
  return (
    <>
      <div className='cc-card main'>{children}</div>
    </>
  );
};

export default CalcCard;
