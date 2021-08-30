import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import WebFont from 'webfontloader';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


import { store } from './store/index'
import {Provider} from 'react-redux'


WebFont.load({
    google: {
        families: [
            'Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900', 'sans-serif',
            'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800', 'sans-serif',
            'Yellowtail', 'cursive'
        ]
    }
});

ReactDOM.render(
    <> 
        <Provider store={store}>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
        </Provider>

    </>,
    document.getElementById('root')
);