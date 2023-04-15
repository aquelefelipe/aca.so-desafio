import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from '../screen/Login';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <div> Cadastro </div>,
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
