import './Logo.css';

interface Props {
  image: string;
  size: string;
}

const Logo = ({ image, size = '200' }: Props) => {
  return (
    <>
      <div
        className='logo'
        style={{
          height: `${size}px`,
          width: `${size}px`,
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center, center',
          backgroundSize: 'contain',
        }}
      ></div>
    </>
  );
};

export default Logo;
