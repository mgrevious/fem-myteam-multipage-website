import { createHashRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
import ErrorPage from './error.tsx';
import Home from './routes/home/index.tsx';
import About from './routes/about/index.tsx';
import Contact from './routes/contact/index.tsx';

import './index.css';

export default function App() {
  return createHashRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);
}
