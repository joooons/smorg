import { useState } from 'react';

function ListGroup() {
  const category = 'Numbers';
  const monsters = ['Yipper', 'Pupper', 'Borker', 'Woofer'];
  const [monsterIndex, setMonsterIndex] = useState(-1);
  return (
    <>
      <h1 className='list-group-title'>List of {category}</h1>
      <ul className='list-group'>
        {monsters.length === 0 && <p>Nothing to see</p>}
        {monsters.map((monster, index) => (
          <li
            key={index}
            className={
              index === monsterIndex
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => setMonsterIndex(index)}
          >
            {monster}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
