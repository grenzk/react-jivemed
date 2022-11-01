import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Root from './routes/Root'
import Error from './routes/Error'
import Login from './routes/Login'
import { LOGIN_LINK } from './services/constants/links'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<Error />} />
      <Route path={LOGIN_LINK} element={<Login />} caseSensitive />
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
