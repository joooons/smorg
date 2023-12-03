import { useState } from 'react';

interface Props {
  items: strings[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [monsterIndex, setMonsterIndex] = useState(-1);
  return (
    <>
      <h1 className='list-group-title'>List of {heading}</h1>
      <ul className='list-group'>
        {items.length === 0 && <p>Nothing to see</p>}
        {items.map((monster, index) => (
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
