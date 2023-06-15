import './Header.css';
import  logo  from '../../images/Logo.svg'

export const Header = () => {
  return(
    <header className='header'>
      <a href='*' className='header__logo-link'>
        <img src={logo} alt='Логотип' className='header__logo'/>
      </a>
      <ul className='header__list'>
        <li className='header__item'>
          <a href='#description' className='header__link'>
            Описание
          </a> 
        </li>
        <li className='header__item'>
          <a href='#specifications' className='header__link'>
            Характеристики
          </a> 
        </li>
        <li className='header__item'>
          <a href='#cost' className='header__link'>
            стоимость 
          </a> 
        </li>
      </ul>
    </header>
  )
}