import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [entry, setEntry] = useState('');
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setEntry(target.value);
  };
  const [items, setItems] = useState([]);
  const addItem = (text: string) => {
    const arr = items;
    setItems([text, ...arr]);
  };

  return (
    <>
      <Container>
        <Card
          title='Write something then click on button.'
          text='This will add a new card.'
        >
          <Input myEntry={entry} myMethod={handleChange}></Input>
          <Button value={entry} action={addItem} followUp={setEntry}>
            BUTTON
          </Button>
        </Card>
        {items.map((item) => {
          return <Card title='' text={item}></Card>;
        })}
      </Container>
    </>
  );
}

export default App;
