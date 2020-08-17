import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './assets/loader/loader'

import WebFont from 'webfontloader';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

WebFont.load({
    google: {
      families: [
          'Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900', 'sans-serif',
          'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800', 'sans-serif'
        ]
    }
});

ReactDOM.render(
      <React.StrictMode>
    <Loader />
    <App />, 
    </React.StrictMode>,
    document.getElementById('root')
);