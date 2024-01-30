import './Logo.css';

interface Props {
  image: string;
  size?: string;
}

const Logo = ({ image, size = '200' }: Props) => {
  return (
    <>
      <div
        className='logo py-5'
        style={{
          height: `${size}px`,
          width: `${size}px`,
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center, center',
          backgroundSize: 'contain',
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        TEST
      </div>
    </>
  );
};

export default Logo;
