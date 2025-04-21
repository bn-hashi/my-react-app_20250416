import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ToggleMessage from './components/ToggleMessage';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleMessage />
  </React.StrictMode>
);
