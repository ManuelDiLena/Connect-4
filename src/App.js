import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Game from './components/game/Game';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/game' element={<Game/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
