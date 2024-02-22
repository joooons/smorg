import NavBar from '../components/NavBar';

import SpSquare from '../components/space/SpSquare';
// import SpRound from '../components/space/SpRound';

import '../../src/components/space/Space.css';

function Space() {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
        }}
      >
        <NavBar></NavBar>
        <SpSquare>{/* <SpRound></SpRound> */}</SpSquare>
      </div>
    </>
  );
}

export default Space;
