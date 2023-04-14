import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// import { Container } from './styles';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <div> Hello World </div>,
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
