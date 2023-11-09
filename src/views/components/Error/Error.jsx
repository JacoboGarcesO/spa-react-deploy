import { Link } from 'react-router-dom'
import './Error.css'

export const Error = ({ errorText }) => {
  return (
    <main className='errors'>
      <section className='errors__container'>
        <h1>¡Oooops!</h1>
        <h2>Ha ocurrido un error</h2>
        <p>{errorText}</p>
        <Link className='errors__link' to='/'>Ir al inicio</Link>
      </section>
    </main>
  )
}
