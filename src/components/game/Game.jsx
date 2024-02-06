import { Link } from 'react-router-dom';
import './game.css';
import LOGO from '../../assets/main-logo.png';
import PLAYER1 from '../../assets/player-1.png';
import PLAYER2 from '../../assets/player-2.png';
import { ReactComponent as BlackBoard } from '../../assets/board-black.svg';
import { ReactComponent as WhiteBoard } from '../../assets/board-white.svg';
import { Grid } from './Grid';
import { usePlay } from './usePlay';
import { Timer } from './Timer';
import { Winner } from './Winner';

const Game = () => {

  const { grid,
          setNewDisk,
          player,
          timerCounter,
          setTimerCounter,
          winner,
          player1Wins,
          player2Wins,
          setWhoWins,
          playAgain,
          wait } = usePlay();

  return (
    <div className='container game_container'>
      <div className='menu__container'>
        <Link 
          to='/' 
          className='game__button menu__button'
        >
          MENU
        </Link>
        <img src={LOGO} alt='logo' className='main__logo' />
        <button 
          className='game__button restart__button'
          onClick={() => playAgain(true)}
        >
          RESTART
        </button>
      </div>

      <div className='game__container'>
        <article className='player__card player-1-card'>
          <img src={PLAYER1} alt="player1" />
          <h2>PLAYER 1</h2>
          <p>{player1Wins}</p>
        </article>

        <div className='game__board'>
          <WhiteBoard className='white-board' />
          <BlackBoard className='black-board' />
          <Grid 
            grid={grid}
            setNewDisk={setNewDisk}
            winner={winner}
            wait={wait}
            player={player}
          />
        </div>

        <article className='player__card player-2-card'>
          <img src={PLAYER2} alt="player1" />
          <h2>PLAYER 2</h2>
          <p>{player2Wins}</p>
        </article>

        {
          !winner 
          &&
          <Timer 
            timerCounter={timerCounter}
            player={player}
            setTimerCounter={setTimerCounter}
            setWhoWins={setWhoWins}
          />
        }
        {
          winner && !wait
          &&
          <Winner 
            winner={winner}
            playAgain={playAgain}
          />
        }
      </div>

      <div 
        className={ (winner === 1) 
                    ? 'winner-color winner-red'
                    : ((winner === 2) ? 'winner-color winner-yellow' : 'winner-color') }
      ></div>

    </div>
  )
}

export default Game;
