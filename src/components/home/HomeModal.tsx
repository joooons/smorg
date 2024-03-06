import HomeLink from './HomeLink';

import './HomeModal.css';

interface modalObject {
  title?: string;
  desc?: string[];
  link: string;
  external: boolean;
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
        {data.desc &&
          data.desc?.map((line) => {
            return <div>{line}</div>;
          })}
        <br></br>
        <HomeLink link={data.link} external={data.external}></HomeLink>
      </div>
    </div>
  );
};

export default HomeModal;
