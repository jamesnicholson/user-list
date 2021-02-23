import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { GlobalContextProvider } from './context'
ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
    <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);