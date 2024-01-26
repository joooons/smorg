import { useState } from 'react';

import Container from '../components/Container';
import Text from '../components/Text';
import TextArea from '../components/TextArea';
import NavBar from '../components/NavBar';
import Centered from '../components/Centered';
import Button from '../components/Button';
import TreeNodeComponent from '../components/familytree/TreeNodeComponent';

import { TreeNode } from '../components/familytree/TreeNodeInterface';

// interface TreeNode {
//   id: number;
//   name: string;
//   spouse?: string;
//   children?: TreeNode[];
// }

// This contains dummy tree data
const treedata: TreeNode = {
  id: 1,
  name: 'Andrew',
  spouse: 'Barbara',
  children: [
    {
      id: 2,
      name: 'Chris',
      spouse: 'Debbie',
      children: [
        { id: 3, name: 'Eddie', children: [] },
        { id: 4, name: 'Francis', children: [] },
        { id: 5, name: 'Gregory', children: [] },
      ],
    },
    { id: 6, name: 'Hannah', children: [] },
    {
      id: 7,
      name: 'Iverson',
      spouse: 'Jenny',
      children: [
        { id: 8, name: 'Kelly', children: [] },
        { id: 9, name: 'Lenny', children: [] },
        {
          id: 10,
          name: 'Molly',
          children: [
            { id: 11, name: 'Nina', children: [] },
            { id: 12, name: 'Olive', children: [] },
            { id: 13, name: 'Parcy', children: [] },
            { id: 14, name: 'Quill', children: [] },
            { id: 15, name: 'Ronan', children: [] },
            { id: 16, name: 'Sandy', children: [] },
            { id: 17, name: 'Teresa', children: [] },
            { id: 18, name: 'Ubi', children: [] },
            { id: 19, name: 'Victor', children: [] },
            { id: 20, name: 'Weston', children: [] },
            { id: 21, name: 'Xavier', children: [] },
            { id: 22, name: 'Yosef', spouse: 'Zemo', children: [] },
          ],
        },
      ],
    },
  ],
};

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

const Tree = () => {
  const [textareaText, setTextareaText] = useState('');

  const [point, setPoint] = useState<TreePoint | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = event.currentTarget.selectionStart;
      const end = event.currentTarget.selectionEnd;
      const firstHalf = textareaText.substring(0, start);
      const lastHalf = textareaText.substring(end);
      const newText = firstHalf + '\t' + lastHalf;
      event.currentTarget.value = newText;
      setTextareaText(newText);
    }
  };

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setTextareaText(target.value);
  };

  // Keep this for now
  // const parseText = (value: string) => {
  //   let newStr = value.replace(/\t/g, '--TAB--');
  //   console.log(newStr);
  // };

  const parseText = (value: string, node: TreePoint | null) => {
    let words = value
      .replace(/ +/g, ' ')
      .replace(/[\n\t]+/g, '---')
      .split('---');
    console.log('----------------');
    console.log(words);
    console.log(words[0]);

    console.log(point);
    setPoint(new TreePoint(0, words[0]));
    console.log(point);
  };

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Centered>
          <Text color='navy' size='50' font='winter' tag='h1'>
            TREE
          </Text>
        </Centered>

        <TextArea
          text={textareaText}
          keydownMethod={handleKeyDown}
          changeMethod={handleChange}
        ></TextArea>

        <Button value={textareaText} node={null} action={parseText}>
          GENERATE
        </Button>

        <Centered>
          <TreeNodeComponent
            key={treedata.id}
            node={treedata}
          ></TreeNodeComponent>
        </Centered>
      </Container>
    </>
  );
};

export default Tree;
