import useRouterElments from './useRouterElments'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElemnts = useRouterElments()
  return (
    <div>
      {routeElemnts}
      <ToastContainer />
    </div>
  )
}

export default App
