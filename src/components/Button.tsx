// import React from 'react'
interface Props {
  children: string;
  value?: string;
  action?: (text: string) => void;
  followUp?: (text: string) => void;
}

const Button = ({ children, value, action, followUp }: Props) => {
  return (
    <>
      <button
        className='btn btn-primary'
        type='submit'
        onClick={() => {
          if (value) {
            if (action) action(value);
          }
          if (followUp) followUp('');
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
