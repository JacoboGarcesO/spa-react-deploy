import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <h1>SPA</h1>

      <nav>
        <ul className='header__menu'>
          <li className='header__link'><Link to='/'>Inicio</Link></li>
          <li className='header__link'><Link to='/services'>Servicios</Link></li>
          <li className='header__link header__link--button'><Link to='/login'>Iniciar sesión</Link></li>
        </ul>
      </nav>
    </header>
  )
}
