import { useState, useEffect } from 'react';

// COMPONENTS
import Container from '../components/Container';
import Text from '../components/Text';
import TextArea from '../components/TextArea';
import NavBar from '../components/NavBar';
import Centered from '../components/Centered';
import Button from '../components/Button';
import TreeNodeComponent from '../components/familytree/TreeNodeComponent';

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
    count++;
    let word = words.shift();

    if (!word) {
      return new TreeNode(99, 'end'); // This will never happen
    }

    let node = new TreeNode(count, word.substring(1));
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

  let count = 0;

  const fillTree = (value: string) => {
    count = 0; // reset the count
    console.log('--------------- start ----------------');
    console.log(value);
    const words = arrayOfNames(value);
    let word = words.shift();
    console.log(word, words);

    count++;
    if (word) {
      const root = new TreeNode(count, word.substring(1));

      let tier = Number(word[0]) + 1;
      root.children = [];
      while (words.length > 0 && Number(words[0][0]) === tier) {
        root.children.push(childTreeNode(words, root));
      }

      setPoint(root);
      console.log(point);
    }
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
            node={point}
            // color1='yellow'
            // color2='black'
          ></TreeNodeComponent>
        </Centered>
      </Container>
    </>
  );
};

export default Tree;
