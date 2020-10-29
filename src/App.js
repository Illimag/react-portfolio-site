import React from 'react';

import './App.css';

import Footer from './components/footer/footer'
import TestNav from './components/navigation/testnav'
import PreLoad from './components/preload/preload'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const App = () => (
  <>
 <TestNav></TestNav>
 <ScrollUpButton></ScrollUpButton>
<Footer></Footer>
  </>
);

// debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER


export default App;
