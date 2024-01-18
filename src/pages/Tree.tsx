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
            { id: 8, name: 'Nina', children: [] },
            { id: 9, name: 'Olive', children: [] },
            { id: 10, name: 'Parcy', children: [] },
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
        <TextArea></TextArea>
        <Button>GENERATE</Button>
        <br></br>
        <TreeNodeComponent
          key={treedata.id}
          node={treedata}
        ></TreeNodeComponent>
      </Container>
    </>
  );
};

export default Tree;
