import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { NavigationProgress } from '@mantine/nprogress'
import { SIGN_IN_LINK, SIGN_UP_LINK } from './services/constants/links'
import Root from './routes/Root'
import Error from './routes/Error'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<Error />} />
      <Route path={SIGN_IN_LINK} element={<SignIn />} caseSensitive />
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
