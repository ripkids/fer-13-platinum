import { Navigate } from 'react-router';

import Base from '../pages/Base';
import LandingPage from '../pages/Landing';

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
  }
];

export { routes };