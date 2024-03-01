import React, { useState, useEffect, useRef } from 'react';
import { useXarrow, Xwrapper } from 'react-xarrows';

// COMPONENTS
import NavBar from '../components/NavBar';

import Text from '../components/Text';
import Centered from '../components/Centered';
import Button from '../components/Button';

import TreeFullHeight from '../components/familytree/TreeFullHeight';
import TreeTextArea from '../components/familytree/TreeTextArea';
import TreeNodeComponent from '../components/familytree/TreeNodeComponent';
import TreeLineComponent from '../components/familytree/TreeLineComponent';

// CLASSES
import { TreeNode } from '../components/familytree/TreeNodeClass';

const Tree = () => {
  const initialText =
    'Abraham, Mona\n' +
    '\tHerb\n' +
    '\tHomer, Marge\n' +
    '\t\tBart, Jenda\n' +
    '\t\t\tSkippy (Picard)\n' +
    '\t\t\tJiff\n' +
    '\t\tLisa, Milhouse\n' +
    '\t\t\tZia\n' +
    '\t\tMaggie\n' +
    '\t\t\tMaggie Jr';

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
      fillTree(newText);
      setTextareaText(newText);
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const start = event.currentTarget.selectionStart;
      const firstHalf = textareaText.substring(0, start);
      const end = event.currentTarget.selectionEnd;
      const lastHalf = textareaText.substring(end);
      const lines = firstHalf.split('\n');
      const lastLine = lines[lines.length - 1];
      const tabs = lastLine.match(/\t/g);
      let insert = '\n';
      let count = 1;
      if (tabs) {
        tabs.forEach(() => {
          insert = insert + '\t';
          count++;
        });
      }
      const newText = firstHalf + insert + lastHalf;
      event.currentTarget.value = newText;
      event.currentTarget.selectionStart = start + count;
      event.currentTarget.selectionEnd = start + count;
      setTextareaText(newText);
    }
    if (event.code === 'Space') {
      console.log('space pressed');
      const start = event.currentTarget.selectionStart;
      const prevChar = textareaText[start - 1];
      if (prevChar === ' ') {
        event.preventDefault();
      }
    }
  };

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setTextareaText(target.value);
    fillTree(target.value);
  };

  function childTreeNode(words: string[], root: TreeNode): TreeNode {
    count.current++;
    let word = words.shift();

    if (!word) {
      return new TreeNode(99, 'end'); // This will never happen
    }

    let names = word.split(/[\,][\s]*/);

    let node = null;
    if (names.length > 1) {
      node = new TreeNode(count.current, names[0].substring(1), names[1]);
    } else {
      node = new TreeNode(count.current, word.substring(1));
    }

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
    const text = value
      // .replace(/[\<\>\#\@\$\"\;\:\!\%\^\*\?\.]/g, '')
      .replace(/[\<\>\#]/g, '')
      .replace(/ +/g, ' ')
      .replace(/ [\s\t]*\n/g, ' \n')
      .replace(/ [\s\t]*$/g, ' ');
    setTextareaText(text);

    const words = ('0' + text)
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
    // console.log(value);
    const words = arrayOfNames(value);
    let word = words.shift();
    // console.log(word, words);

    if (word) {
      let names = word.split(/[\,][\s]*/);

      let node = null;
      if (names.length > 1) {
        node = new TreeNode(count.current, names[0].substring(1), names[1]);
      } else {
        node = new TreeNode(count.current, word.substring(1));
      }

      // const root = new TreeNode(count.current, word.substring(1));

      let tier = Number(word[0]) + 1;
      node.children = [];
      while (words.length > 0 && Number(words[0][0]) === tier) {
        node.children.push(childTreeNode(words, node));
      }

      setPoint(node);
      updateXarrow();
      setPoint(node);
      // console.log(point);
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <div className='row'>
        <Centered>
          <Text color='navy' size='50' font='winter' tag='h1'>
            TREE
          </Text>
        </Centered>
      </div>
      <div className='row mx-5'>
        <div className='col-sm-3'>
          <TreeTextArea
            text={textareaText}
            keydownMethod={handleKeyDown}
            changeMethod={handleChange}
          ></TreeTextArea>
          <Centered>
            <Button value={textareaText} action={fillTree}>
              GENERATE
            </Button>
          </Centered>
        </div>
        <div className='col-sm-9'>
          <Xwrapper>
            <TreeFullHeight>
              <Centered>
                <React.Fragment key={'node-' + point.id}>
                  <TreeNodeComponent node={point}></TreeNodeComponent>
                </React.Fragment>
              </Centered>
            </TreeFullHeight>
            <React.Fragment key={'line-' + point.id}>
              <TreeLineComponent node={point}></TreeLineComponent>
            </React.Fragment>
          </Xwrapper>
        </div>
      </div>
    </>
  );
};

export default Tree;
