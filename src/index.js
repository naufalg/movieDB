import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { AppProvider } from 'context/AppContext';

ReactDOM.render(
  <AppProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AppProvider>,
  document.getElementById('root')
);

reportWebVitals();
