import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from '../screen/Login';
import Signup from '../screen/Signup';

export const RouteNames = {
  LOGIN: '/',
  SIGNUP: '/cadastro',
  CONFIRM_EMAIL: '/confirmar-cadastro',
  HOME: '/home',
};

export const routes = createBrowserRouter([
  {
    path: RouteNames.LOGIN,
    element: <Login />,
  },
  {
    path: RouteNames.SIGNUP,
    element: <Signup />,
  },
  {
    path: RouteNames.CONFIRM_EMAIL,
    element: <div> Confirmar email </div>,
  },
  {
    path: RouteNames.HOME,
    element: <div> Home </div>,
  },
]);

// const Routes: React.FC = () => {
//   return <></>;
// };

// export default Routes;
