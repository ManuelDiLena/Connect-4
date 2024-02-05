import { Link } from 'react-router-dom';
import './game.css';
import { Grid } from './Grid';
import LOGO from '../../assets/main-logo.png';
import PLAYER1 from '../../assets/player-1.png';
import PLAYER2 from '../../assets/player-2.png';
import { ReactComponent as BlackBoard } from '../../assets/board-black.svg';
import { ReactComponent as WhiteBoard } from '../../assets/board-white.svg';

const Game = () => {
  return (
    <div className='container game_container'>
      <div className='menu__container'>
        <Link className='game__button menu__button'>MENU</Link>
        <img src={LOGO} alt='logo' className='main__logo' />
        <button className='game__button restart__button'>RESTART</button>
      </div>

      <div className='game__container'>
        <article className='player__card player-1-card'>
          <img src={PLAYER1} alt="player1" />
          <h2>PLAYER 1</h2>
          <p>0</p>
        </article>

        <div className='game__board'>
          <WhiteBoard className='white-board' />
          <BlackBoard className='black-board' />
          <Grid />
        </div>

        <article className='player__card player-2-card'>
          <img src={PLAYER2} alt="player1" />
          <h2>PLAYER 2</h2>
          <p>0</p>
        </article>

        <div className='timer__container'>
          <div className='timer'>
            <h2>PLAYER 1 TURN</h2>
            <p>30s</p>
          </div>
        </div>
        
      </div>

      <div className='winner__color'></div>

    </div>
  )
}

export default Game;
