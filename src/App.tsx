import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotNews from './pages/NotNews';
import NotNewsPage from './pages/NotNewsPage';
import About from './pages/About';
import Space from './pages/Space';
import Calc from './pages/Calc';
import Tree from './pages/Tree';
import NoPage from './pages/NoPage';
import Port from './pages/Port';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/notnews' element={<NotNews />} />
          <Route path='/notnewspage/:entryid/:path' element={<NotNewsPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Port />} />
          <Route path='/space' element={<Space />} />
          <Route path='/calc' element={<Calc />} />
          <Route path='/tree' element={<Tree />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
