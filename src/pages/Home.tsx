import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';

import spaceLogo from '../../public/space.png';
import aboutLogo from '../../public/about.png';

const Home = () => {
  return (
    <>
      <Container>
        <Text tag='h1'>This is the Home Page</Text>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to='/space' target='_blank' rel='noopener noreferrer'>
              <div
                style={{
                  height: '200px',
                  width: '200px',
                  borderRadius: '20px',
                  borderStyle: 'solid',
                  borderColor: 'gray',
                  borderWidth: '3px',
                  backgroundImage: `url(${spaceLogo})`,
                  backgroundPosition: 'center, center',
                  backgroundSize: 'contain',
                }}
              ></div>
            </Link>
          </li>
          <li>
            <Link to='/about' target='_blank' rel='noopener noreferrer'>
              <div
                style={{
                  height: '200px',
                  width: '200px',
                  borderRadius: '20px',
                  borderStyle: 'solid',
                  borderColor: 'gray',
                  borderWidth: '3px',
                  backgroundImage: `url(${aboutLogo})`,
                  backgroundPosition: 'center, center',
                  backgroundSize: 'contain',
                }}
              ></div>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Home;
