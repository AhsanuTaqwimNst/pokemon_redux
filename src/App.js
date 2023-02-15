import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/List';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail/pokemon/:id' element={<Detail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
