import NavBar from '../components/NavBar';

import SpSquare from '../components/space/SpSquare';
import SpRound from '../components/space/SpRound';

import '../../src/components/space/Space.css';

function Space() {
  return (
    <>
      <NavBar></NavBar>
      <SpSquare>
        <SpRound></SpRound>
      </SpSquare>
    </>
  );
}

export default Space;
