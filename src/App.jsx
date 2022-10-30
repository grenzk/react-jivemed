import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Root from './routes/Root';
import Error from './routes/Error';
import Login from './routes/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<Error />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
