import { useRouteError } from 'react-router-dom'
import { Error } from '../components/Error/Error'

export const ErrorPage = () => {
  const { statusText } = useRouteError()
  return (
    <Error errorText={statusText} />
  )
}
