import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleArticlePage from './pages/SingleArticlePage';
import CreateArticlePage from './pages/CreateArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import App from './App';
import Error from './components/Error';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/article/:id',
        element: <SingleArticlePage />
      },
      {
        path: '/article/create',
        element: <CreateArticlePage />
      },
      {
        path: '/article/edit/:id',
        element: <EditArticlePage />
      },
    ],
  }
]);

export default appRouter;
