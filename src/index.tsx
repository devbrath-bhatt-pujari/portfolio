import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The 'as HTMLElement' part is the TypeScript fix. 
// It ensures React knows where to render the app.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// We keep this as is, but ensure reportWebVitals.ts (or .js) 
// is exported correctly.
reportWebVitals();