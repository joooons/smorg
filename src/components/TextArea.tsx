import React, { useState } from 'react';
import './TextArea.css';

const TextArea = () => {
  const [text, setText] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = event.currentTarget.selectionStart;
      const end = event.currentTarget.selectionEnd;
      const firstHalf = text.substring(0, start);
      const lastHalf = text.substring(end);
      const newText = firstHalf + '\t' + lastHalf;
      event.currentTarget.value = newText;
      setText(newText);
    }
  };
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log('textarea value = ', '\n', target.value);
    setText(target.value);
  };
  return (
    <>
      <textarea
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
