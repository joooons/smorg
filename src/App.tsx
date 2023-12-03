import ListGroup from './components/ListGroup';

function App() {
  const monsters = ['Yipper', 'Pupper', 'Borker', 'Woofer'];
  const beastType = 'Monsters';
  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={monsters}
        heading={beastType}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
