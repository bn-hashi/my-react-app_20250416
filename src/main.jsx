import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NumberList from './components/NumberList';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NumberList />
  </React.StrictMode>
);
