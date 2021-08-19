import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './assests/style/index.sass'




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

