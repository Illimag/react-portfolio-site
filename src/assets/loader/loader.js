import React from 'react';

import images from './assets.js';


class Loader extends React.Component {

    componentDidMount() {
        return images;
    }
  
    render() {
      console.log('Render lifecycle')
      return null;
    }
  }

export default Loader;