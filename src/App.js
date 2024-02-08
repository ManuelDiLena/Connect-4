import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Game from './components/game/Game';
import Rules from './components/rules/Rules';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/game' element={<Game/>} />
          <Route path='/rules' element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
