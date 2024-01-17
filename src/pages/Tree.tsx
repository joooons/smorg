import Container from '../components/Container';
import Text from '../components/Text';
import TextArea from '../components/TextArea';
import NavBar from '../components/NavBar';

const Tree = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Text color='navy' size='50' font='winter' tag='h1'>
          TREE
        </Text>
        <TextArea></TextArea>
      </Container>
    </>
  );
};

export default Tree;
