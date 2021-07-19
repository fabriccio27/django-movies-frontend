import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./components/LoginPage"

import { Provider } from 'react-redux';
import store from "./store/configureStore"

import MovieDashboardPage from './components/MoviesDashboardPage';
import AppRouter from "./routers/AppRouter"

ReactDOM.render(
  <Provider store={store()}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
