import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
// import './fontawesome';
// <link href="https://maxcdn.bootstrapcdn.com/font-awesome/5.6.3/css/font-awesome.min.css" rel="stylesheet" />


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


