import ListGroup from './components/ListGroup';

function App() {
  const monsters = ['Yipper', 'Pupper', 'Borker', 'Woofer'];
  const beastType = 'Monsters';
  return (
    <div>
      <ListGroup items={monsters} heading={beastType} />
    </div>
  );
}

export default App;
