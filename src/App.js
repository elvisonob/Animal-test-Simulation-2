import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Monkey from './pages/Monkey';

const router = createBrowserRouter([{ path: '/monkey', element: <Monkey /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
