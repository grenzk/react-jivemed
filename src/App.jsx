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
import Auth from './routes/Auth'

import Admin from './components/Admin/Admin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Admin />} errorElement={<Error />} />
      <Route path={SIGN_IN_LINK} element={<Auth />} caseSensitive />
      <Route path={SIGN_UP_LINK} element={<Auth />} caseSensitive />
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
