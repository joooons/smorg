import Container from '../components/Container';
import Text from '../components/Text';
import TextArea from '../components/TextArea';
import NavBar from '../components/NavBar';
import Centered from '../components/Centered';
import Button from '../components/Button';
import TreeNodeComponent from '../components/familytree/TreeNodeComponent';

import { TreeNode } from '../components/familytree/TreeNodeInterface';

import Xarrow from 'react-xarrows';

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
  // const [textareaText, setTextareaText] = useState('');

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Centered>
          <Text color='navy' size='50' font='winter' tag='h1'>
            TREE
          </Text>
        </Centered>
        <div id='thing1' style={{ backgroundColor: 'pink', width: '100px' }}>
          ONE
        </div>
        <div>???</div>
        <div>???</div>
        <div>???</div>
        <div>???</div>
        <div id='thing2' style={{ backgroundColor: 'pink', width: '300px' }}>
          TWO
        </div>
        <Xarrow start='thing1' end='thing2' headSize={0} path='grid' />
        <TextArea></TextArea>
        <Button>GENERATE</Button>
        <Centered>
          <TreeNodeComponent
            // treeId='tree-1'
            key={treedata.id}
            node={treedata}
          ></TreeNodeComponent>
        </Centered>
      </Container>
    </>
  );
};

export default Tree;
