import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './CalcInput.css';

interface Props {
  children: string;
  sign?: string;
}

const CalcInput = ({ children, sign }: Props) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          gap: '5px',
        }}
      >
        <div
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1rem',
          }}
        >
          {sign}
        </div>

        <InputGroup size='sm' className='mb-3'>
          <Form.Control
            aria-label='Small'
            aria-describedby='inputGroup-sizing-sm'
          />
          <InputGroup.Text id='inputGroup-sizing-sm'>
            {children}
          </InputGroup.Text>
        </InputGroup>
      </div>
    </>
  );
};

export default CalcInput;
