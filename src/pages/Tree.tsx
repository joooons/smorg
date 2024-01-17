import Container from '../components/Container';
import Text from '../components/Text';
import TextArea from '../components/TextArea';
import NavBar from '../components/NavBar';
import Centered from '../components/Centered';
import Button from '../components/Button';

import { TreeNode } from '../components/familytree/TreeNodeInterface';

// interface TreeNode {
//   id: number;
//   name: string;
//   spouse?: string;
//   children?: TreeNode[];
// }

const treedata: TreeNode = {
  id: 1,
  name: 'Ehmahn',
  spouse: 'Ehwoomahn',
  children: [
    { id: 2, name: 'Ehbweh', children: [] },
    { id: 3, name: 'Ehgerah', children: [] },
  ],
};

const Tree = () => {
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
      </Container>
    </>
  );
};

export default Tree;
