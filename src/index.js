import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './shared/Menu/menu';
import { Home } from './Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Menu></Menu>
   <Home></Home>
  </React.StrictMode>
);