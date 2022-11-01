import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { NavigationProgress } from '@mantine/nprogress'
import { LOGIN_LINK, SIGN_UP_LINK } from './services/constants/links'
import Root from './routes/Root'
import Error from './routes/Error'
import Login from './routes/Login'
import SignUp from './routes/SignUp'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<Error />} />
      <Route path={LOGIN_LINK} element={<Login />} caseSensitive />
      <Route path={SIGN_UP_LINK} element={<SignUp />} caseSensitive />
    </>
  )
)

const App = () => {
  return (
    <div className="App">
      <NavigationProgress />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
