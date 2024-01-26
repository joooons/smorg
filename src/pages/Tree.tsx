import { useState } from 'react';

// COMPONENTS
import Container from '../components/Container';
import Text from '../components/Text';
import TextArea from '../components/TextArea';
import NavBar from '../components/NavBar';
import Centered from '../components/Centered';
import Button from '../components/Button';
import TreeNodeComponent from '../components/familytree/TreeNodeComponent';

// CLASS and INTERFACE
import { TreeNode } from '../components/familytree/TreeNodeInterface';
import { TreePoint } from '../components/familytree/TreePointClass';

// interface TreeNode {
//   id: number;
//   name: string;
//   spouse?: string;
//   children?: TreeNode[];
// }

// This contains dummy tree data. Remove this when no longer needed
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

  function childTreePoint(words: string[], root: TreePoint): TreePoint {
    count++;
    let word = words.shift();
    if (!word) {
      return new TreePoint(99, 'never');
    }
    let node = new TreePoint(count, word);
    if (words.length > 0) {
      node.children = [childTreePoint(words, root)];
    }
    return node;
  }

  let count = 0;

  const fillTree = (value: string) => {
    count = 0;
    let words = value
      .replace(/ +/g, ' ')
      .replace(/\n/g, '---')
      .replace(/\t/g, '<TAB>---')
      .split('---');
    console.log(words);
    let word = words.shift();

    count++;
    if (!word) {
      console.log('this will never happen');
      return;
    }

    // console.log('count is ', count, word);
    console.log('--------------- start ----------------');

    const root = new TreePoint(count, word);
    if (words.length > 0) {
      root.children = [childTreePoint(words, root)];
    }

    setPoint(root);
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

        <Button value={textareaText} action={fillTree}>
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
