import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Router from './routes';

ReactDOM.render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById('root')
);