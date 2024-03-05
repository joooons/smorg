import './HomeLogo.css';

interface Props {
  children?: string;
  image: string;
  size?: string;
}

const HomeLogo = ({ children, image, size = '200' }: Props) => {
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

export default HomeLogo;
