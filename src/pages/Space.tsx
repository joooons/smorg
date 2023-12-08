import { useState } from 'react';

import Card from '../components/Card';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button';
import Text from '../components/Text';

function Space() {
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
        <Text>This is just a simple text</Text>
        {items.map((item, index) => {
          if (item) return <Card key={index} title='' text={item}></Card>;
        })}
      </Container>
    </>
  );
}

export default Space;
