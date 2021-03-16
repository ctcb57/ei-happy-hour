import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceworker from './serviceWorker';
import HttpsRedirect from 'react-https-redirect';

import "./services/axiosService";

import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit.js";
import "./css/style.css";


ReactDOM.render(
  <HttpsRedirect>
    <App />
  </HttpsRedirect>,
  document.getElementById('root')
);

serviceworker.unregister();
