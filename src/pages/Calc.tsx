import { Container } from 'react-bootstrap';

import NavBar from '../components/NavBar';
import CalcPlus from '../components/calc/CalcPlus';

// Ideas
// click + to add
// choose op
// grid dash
// fixed, output, backward update
// nested card
// drag drop
// pages
// dropdown memory in local storage

const NoPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <CalcPlus></CalcPlus>
      </Container>
    </>
  );
};

export default NoPage;
