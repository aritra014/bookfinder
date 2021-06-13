import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom"


ReactDOM.render(
 <BrowserRouter basename={window.location.pathname || ''}>
  <Route exact path="/" component={App} />
</BrowserRouter>,
  document.getElementById('root')
);


