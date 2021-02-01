import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Refs from './Refs';
import PropTyp from './TypeChecking/PropTyp';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Refs/> */}

    <PropTyp/>
  </React.StrictMode>,
  document.getElementById('root')
);

