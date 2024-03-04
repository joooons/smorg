import './PFCard.css';

interface Props {
  title?: string;
  content?: string;
}

const PFCard = ({ title, content }: Props) => {
  return (
    <>
      <div className='pf-card'>
        {title}
        {content}
      </div>
    </>
  );
};

export default PFCard;
