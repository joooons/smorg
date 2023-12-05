import { useState } from 'react';
import Input from './Input';

const Card = () => {
  const [username, setUsername] = useState('CLICK');
  const updateName = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setUsername(target.value);
  };

  return (
    <>
      <div className='card m-5 p-3'>
        <div className='card-body'>
          <h5 className='card-title'>Do you have a name?</h5>
          <p className='card-text'>Enter it here!</p>
          <Input username={username} updateName={updateName}></Input>
          <p className='card-text'>{username}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
