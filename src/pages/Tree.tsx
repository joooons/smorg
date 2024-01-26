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

const Tree = () => {
  const [textareaText, setTextareaText] = useState('');

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
    console.log('textarea value = ', '\n', target.value);
    setTextareaText(target.value);
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
          methodOne={handleKeyDown}
          methodTwo={handleChange}
        ></TextArea>

        <Button>GENERATE</Button>
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
