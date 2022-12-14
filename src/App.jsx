import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import {
  SIGN_IN_LINK,
  SIGN_UP_LINK,
  VERIFY_EMAIL_LINK,
  CLIENT_DASHBOARD_LINK,
  CLIENT_PATIENTS_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_DEPARTMENTS_LINK,
  CLIENT_SCHEDULES_LINK,
  CLIENT_AVAILABLE_SCHEDULES_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_TRANSACTIONS_LINK,
} from './services/constants/links'
import Root from './routes/Root'
import Error from './routes/Error'
import Auth from './routes/Auth'
import ProtectedRoute from './routes/ProtectedRoute'
import Client from './routes/Client/Client'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<Error />} />
      <Route path={SIGN_IN_LINK} element={<Auth />} caseSensitive />
      <Route path={SIGN_UP_LINK} element={<Auth />} caseSensitive />
      <Route element={<ProtectedRoute />}>
        <Route errorElement={<Error />}>
          <Route path={CLIENT_DASHBOARD_LINK} element={<Client />} caseSensitive />
          <Route path={CLIENT_DOCTORS_LINK} element={<Client />} caseSensitive />
          <Route path={CLIENT_PATIENTS_LINK} element={<Client />} caseSensitive />
          <Route path={CLIENT_DEPARTMENTS_LINK} element={<Client />} caseSensitive />
          <Route path={CLIENT_SCHEDULES_LINK} element={<Client />} caseSensitive />
          <Route path={CLIENT_AVAILABLE_SCHEDULES_LINK} element={<Client />} caseSensitive />
          <Route path={CLIENT_APPOINTMENTS_LINK} element={<Client />} caseSensitive />
          <Route path={CLIENT_TRANSACTIONS_LINK} element={<Client />} caseSensitive />
          <Route path={VERIFY_EMAIL_LINK} element={<Client />} caseSensitive />
        </Route>
      </Route>
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
