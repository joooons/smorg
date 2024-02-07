import React, { useState, useEffect, useRef } from 'react';
import { useXarrow, Xwrapper } from 'react-xarrows';

// COMPONENTS
import Container from '../components/Container';
import Text from '../components/Text';
import TextArea from '../components/TextArea';
import NavBar from '../components/NavBar';
import Centered from '../components/Centered';
import Button from '../components/Button';
import TreeNodeComponent from '../components/familytree/TreeNodeComponent';
import TreeLineComponent from '../components/familytree/TreeLineComponent';

// CLASS and INTERFACE
import { TreeNode } from '../components/familytree/TreeNodeClass';

const Tree = () => {
  const initialText =
    'Mom and Dad\n\tOlder Brother and ' +
    'his wife\n\t\tNephew\n\t\tNiece\n\tMe\n\tYounger Sister';

  const [textareaText, setTextareaText] = useState(initialText);
  useEffect(() => {
    fillTree(textareaText);
  }, []);

  const count = useRef(0);

  const updateXarrow = useXarrow();

  const [point, setPoint] = useState<TreeNode>(
    new TreeNode(0, 'Click GENERATE', undefined, [])
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = event.currentTarget.selectionStart;
      const end = event.currentTarget.selectionEnd;
      const firstHalf = textareaText.substring(0, start);
      const lastHalf = textareaText.substring(end);
      const newText = firstHalf + '\t' + lastHalf;
      event.currentTarget.value = newText;
      event.currentTarget.selectionStart = start + 1;
      event.currentTarget.selectionEnd = start + 1;
      setTextareaText(newText);
    }
  };

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setTextareaText(target.value);
  };

  function childTreeNode(words: string[], root: TreeNode): TreeNode {
    count.current++;
    let word = words.shift();

    if (!word) {
      return new TreeNode(99, 'end'); // This will never happen
    }

    let node = new TreeNode(count.current, word.substring(1));
    node.children = [];

    if (words.length > 0) {
      let tier = Number(word[0]) + 1;
      while (words.length > 0 && Number(words[0][0]) === tier) {
        node.children.push(childTreeNode(words, root));
      }
    }
    return node;
  }

  function arrayOfNames(value: string): string[] {
    let words = ('0' + value)
      .replace(/ +/g, ' ')
      .replace(/\n/g, '<<>>')
      .replace(/\t/g, '#')
      .split('<<>>');

    for (let i = 0; i < words.length; i++) {
      const level = words[i].match(/#/g);
      if (level) {
        words[i] = words[i].replace(/#+/, level.length.toString());
      }
    }
    return words;
  }

  async function fillTree(value: string) {
    count.current = 1; // reset the count
    console.log('--------------- start ----------------');
    console.log(value);
    const words = arrayOfNames(value);
    let word = words.shift();
    console.log(word, words);

    if (word) {
      const root = new TreeNode(count.current, word.substring(1));

      let tier = Number(word[0]) + 1;
      root.children = [];
      while (words.length > 0 && Number(words[0][0]) === tier) {
        root.children.push(childTreeNode(words, root));
      }

      await setPoint(root);
      await updateXarrow();
      await setPoint(root);
      console.log(point);
    }
  }

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
        <Xwrapper>
          <Centered>
            <React.Fragment key={'node-' + point.id}>
              <TreeNodeComponent node={point}></TreeNodeComponent>
            </React.Fragment>
          </Centered>
          <React.Fragment key={'line-' + point.id}>
            <TreeLineComponent node={point}></TreeLineComponent>
          </React.Fragment>
        </Xwrapper>
      </Container>
    </>
  );
};

export default Tree;
