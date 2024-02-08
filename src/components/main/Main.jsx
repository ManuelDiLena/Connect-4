import { Link } from 'react-router-dom';
import './main.css';
import LOGO from '../../assets/main-logo.png';
import CPUICON from '../../assets/cpu-icon.png';
import PLAYERICON from '../../assets/player-icon.png';

const Main = () => {
  return (
    <div className='main__container buttons__container'>
      <div className='main__content'>
        <img src={LOGO} className='main__logo' alt='logo' />
        <Link to={'/game'} className='main__button button-pink'>
          PLAY vs CPU
          <img src={CPUICON} className='button__icon cpu-icon' alt='cpu icon' />
        </Link>
        <Link to={'/game'} className='main__button button-yellow'>
          PLAY vs PLAYER
          <img src={PLAYERICON} className='button__icon player-icon' alt='player icon' />
        </Link>
        <Link to={'/rules'} className='main__button button-light'>
          GAME RULES
        </Link>
      </div>
    </div>
  )
}

export default Main;