import { Navigate, createHashRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Services } from '../pages/Services'
import { Login } from '../pages/Login'
import { Layout } from '../components/Layout/Layout'
import { ErrorPage } from '../pages/ErrorPage'
import { Admin } from '../pages/Admin'

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(globalThis.localStorage.getItem('USER'))

  if (!user) {
    return <Navigate to='/' replace />
  }

  return children
}

export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'services',
        Component: Services
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'admin',
        element: <ProtectedRoute><Admin /></ProtectedRoute>
      }
    ],
    ErrorBoundary: ErrorPage
  }
])
