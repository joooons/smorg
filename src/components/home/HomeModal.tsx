import './HomeModal.css';

interface modalObject {
  title?: string;
  desc?: string;
  link: string;
}

interface Props {
  data: modalObject;
  fn: () => void;
}

const HomeModal = ({ data, fn }: Props) => {
  return (
    <div className='home-popup' onClick={fn}>
      <div className='home-popup-content'>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <div>{data.link}</div>
      </div>
    </div>
  );
};

export default HomeModal;
