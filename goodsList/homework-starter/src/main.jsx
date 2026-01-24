import React from 'react';
import ReactDOM from 'react-dom/client';

import { List } from './pages/List';
import { LogIn } from './pages/LogIn';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List />
    {/* <LogIn /> */}
  </React.StrictMode>
);
