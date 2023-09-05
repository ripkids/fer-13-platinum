import { Navigate } from 'react-router';

import Base from '../pages/Base';
import LandingPage from '../pages/Landing';
import SearchCarPage from '../pages/SearchCar';
import ResultCarPage from '../pages/ResultCar';

const routes = [
    {
        path: '',
        element: <Navigate to="/landing" />
    },
    {
        path: '/landing',
        element: <Base />,
        children: [
            {
                path: '',
                element: <LandingPage />
            }
        ]
    },
    {
        path: '/search-car',
        element: <Base />,
        children: [
            {
                path: '',
                element: <SearchCarPage />
            }
        ]
    },
    {
        path: '/result-car',
        element: <ResultCarPage />
    }
]

export { routes };