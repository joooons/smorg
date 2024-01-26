// import React from 'react'

class TreePoint {
  id: number;
  name: string;
  spouse?: string;
  children?: TreePoint[] | null = null;

  constructor(
    id: number,
    name: string,
    spouse?: string,
    children?: TreePoint[] | null
  ) {
    this.id = id;
    this.name = name;
    this.spouse = spouse;
    this.children = children && null;
  }

  genericMethod(): void {
    const spouse = this.spouse ? this.spouse : 'nobody';
    console.log(`This is node #${this.id} and has ${this.name} and ${spouse}`);
  }
}

interface Props {
  children: string;
  value?: string;
  node: TreePoint | null;
  action?: (text: string, node: TreePoint | null) => void;
  followUp?: (text: string) => void;
}

const Button = ({ children, value, node, action, followUp }: Props) => {
  return (
    <>
      <button
        className='btn btn-primary'
        type='submit'
        onClick={() => {
          if (value) {
            if (action) action(value, node);
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
