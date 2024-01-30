import './Logo.css';

interface Props {
  children?: string;
  image: string;
  size?: string;
}

const Logo = ({ children, image, size = '200' }: Props) => {
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
          fontSize: 34,
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Logo;
