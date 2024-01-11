import './Logo.css';

interface Props {
  image: string;
}

const Logo = ({ image }: Props) => {
  return (
    <>
      <div
        className='logo'
        style={{
          height: '200px',
          width: '200px',
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center, center',
          backgroundSize: 'contain',
        }}
      ></div>
    </>
  );
};

export default Logo;
