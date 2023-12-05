import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';

function App() {
  const [entry, setEntry] = useState('something');
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setEntry(target.value);
  };

  return (
    <>
      <Container>
        <Card
          title='Do you want to say something?'
          text='Go ahead and say it pal.'
          output={entry}
        >
          <Input myEntry={entry} myMethod={handleChange}></Input>
        </Card>
      </Container>
    </>
  );
}

export default App;
