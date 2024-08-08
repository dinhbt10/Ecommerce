import { useRoutes } from 'react-router-dom'
import ProductList from './pages/productList'
import Login from './pages/login'
import Register from './pages/register'
import RegisterLayout from './layouts/RegisterLayout'
export default function useRouterElments() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElement
}
