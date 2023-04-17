import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router';
import './App.css';
import { StoreProvider } from './store';

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={routes} />;
    </StoreProvider>
  );
}

export default App;
