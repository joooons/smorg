import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

import NavBar from '../components/NavBar';
import CalcPlus from '../components/calc/CalcPlus';
import CalcCard from '../components/calc/CalcCard';

// Ideas
// click + to add
// choose op
// grid dash
// fixed, output, backward update
// nested card
// drag drop
// pages
// dropdown memory in local storage

const numeros = [
  'ONE',
  'DOS',
  'TRES',
  'CUATRO',
  'CINCO',
  'SEIS',
  'SIETE',
  'OCHO',
];

const Calc = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className='p-5'>
          <Row>
            {numeros.map((numero, index) => {
              return (
                <Col key={index} sm={2} className='my-2'>
                  <CalcCard>{numero}</CalcCard>
                </Col>
              );
            })}
            <Col key={0} sm={2} className='my-2'>
              <CalcPlus></CalcPlus>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Calc;
