import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from '../screen/Login';
import Signup from '../screen/Signup';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Signup />,
  },
  {
    path: '/confirmar-email',
    element: <div> Confirmar email </div>,
  },
  {
    path: '/home',
    element: <div> Home </div>,
  },
]);

// const Routes: React.FC = () => {
//   return <></>;
// };

// export default Routes;
