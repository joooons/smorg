import React, { useState } from 'react';
import './TextArea.css';

const TextArea = () => {
  const [text, setText] = useState('');
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = event.currentTarget.selectionStart;
      const end = event.currentTarget.selectionEnd;
      const firstHalf = text.substring(0, event.currentTarget.selectionStart);
      const lastHalf = text.substring(event.currentTarget.selectionEnd);
      const newText = firstHalf + '     ' + lastHalf;
      console.log(start, end);
      console.log(firstHalf, lastHalf);
      setText(newText);
    }
  };
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setText(target.value);
  };
  return (
    <>
      <textarea
        rows={5}
        cols={100}
        onKeyDown={handleKeyDown}
        onChange={(event: React.ChangeEvent) => {
          handleChange(event as unknown as Event);
        }}
      >
        {text}
      </textarea>
    </>
  );
};

export default TextArea;
