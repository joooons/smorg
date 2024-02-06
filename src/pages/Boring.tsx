import { useState } from 'react';

import Card from '../components/Card';
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button';
import Text from '../components/Text';

function Boring() {
  const [entry, setEntry] = useState('');
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setEntry(target.value);
  };
  const [items, setItems] = useState(['']);
  const addItem = (text: string) => {
    setItems([...items, text]);
  };

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Card title='Something boring' text='Maybe informative'>
          <Input myEntry={entry} myMethod={handleChange}></Input>
          <Button value={entry} action={addItem} followUp={setEntry}>
            BUTTON
          </Button>
        </Card>
        <Text>For something else</Text>
        {items.map((item, index) => {
          if (item) return <Card key={index} title='' text={item}></Card>;
        })}
      </Container>
    </>
  );
}

export default Boring;
