import './Logo.css';

interface Props {
  image: string;
}

const Logo = ({ image }: Props) => {
  return (
    <>
      <div
        style={{
          height: '200px',
          width: '200px',
          borderRadius: '20px',
          borderStyle: 'solid',
          borderColor: 'gray',
          borderWidth: '3px',
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center, center',
          backgroundSize: 'contain',
        }}
      ></div>
    </>
  );
};

export default Logo;
