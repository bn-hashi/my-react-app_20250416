import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Timer from './components/Timer';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);
