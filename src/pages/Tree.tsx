import { Link } from 'react-router-dom';
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
        <Link to='/home'>Go HOME dude.</Link>
        <TextArea></TextArea>
      </Container>
    </>
  );
};

export default Tree;
