import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import Monkey from './pages/Monkey';
import Giraffe from './pages/Giraffe';
import Elephant from './pages/Elephant';
import ErrorPage from './pages/Error';

// I used the React-router-DOM 6 package to create routing to each animal's page
const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
  {
    path: '/',

    element: <RootLayout />,
    children: [
      { path: '/monkey', element: <Monkey /> },
      { path: '/giraffe', element: <Giraffe /> },
      { path: '/elephant', element: <Elephant /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
