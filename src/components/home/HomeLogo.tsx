import './HomeLogo.css';

interface Props {
  children?: string;
  image: string;
  size?: string;
  external?: boolean;
}

const HomeLogo = ({ children, image, size = '200', external }: Props) => {
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
        {external && (
          <div className='home-badge-wrapper'>
            <div className='home-badge'>EXTERNAL</div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeLogo;
