import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import JSXExample from './components/JSXExample';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JSXExample />
  </React.StrictMode>
);
