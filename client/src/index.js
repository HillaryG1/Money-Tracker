import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';

import { store } from './store/store'; // Import Redux store
import { Provider } from 'react-redux'; // Import Provider component from react-redux

// Render the App component wrapped in the Provider component, passing the Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Mounting point in the HTML document
);
