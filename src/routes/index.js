import { Navigate } from 'react-router';

import Base from '../pages/Base';
import LandingPage from '../pages/Landing';
import LoginPage from '../pages/Login';

const routes = [
  {
    path: '',
    element: <Navigate to="/landing" />
  },
  {
    path: 'landing',
    element: <Base />,
    children: [
      {
        path: '',
        element: <LandingPage />
      }
    ]
  },
  {
    path: 'login',
    element: <Base />,
    children: [
      {
        path: '',
        element: <LoginPage />
      }
    ]
  }
];

export { routes };