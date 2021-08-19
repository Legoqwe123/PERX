import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




function startApp(dealers) {

  console.log(dealers);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


window.app = {
  startApp
}

