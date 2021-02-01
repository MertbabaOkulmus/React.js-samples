import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApi from './TodoApi'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoApi/>
  </React.StrictMode>,
  document.getElementById('root')
);


