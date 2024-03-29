import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import PFCard from '../components/portfolio/PFCard';

import '../components/portfolio/Port.css';

const content = [{ title: 'Status', content: 'not ready yet' }];
const Port = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        {content.map((item) => {
          return (
            <>
              <PFCard title={item.title} content={item.content}></PFCard>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Port;
