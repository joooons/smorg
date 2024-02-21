import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotNews from './pages/NotNews';
import About from './pages/About';
import Space from './pages/Space';
import Tree from './pages/Tree';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/notnews' element={<NotNews />} />
          <Route path='/about' element={<About />} />
          <Route path='/space' element={<Space />} />
          <Route path='/tree' element={<Tree />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
