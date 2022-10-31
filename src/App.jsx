import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Root from './routes/Root'
import Error from './routes/Error'
import Login from './routes/Login'
import { LOG_IN_LINK } from './services/constants/links'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<Error />} />
      <Route path={LOG_IN_LINK} element={<Login />} />
    </>
  )
)

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
