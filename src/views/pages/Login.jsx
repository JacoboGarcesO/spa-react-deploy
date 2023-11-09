import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    const user = { nombre: 'Jacob', apellido: 'Garcés' }

    globalThis.localStorage.setItem('USER', JSON.stringify(user))
    navigate('/admin')
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Iniciar sesión</button>
    </>
  )
}
