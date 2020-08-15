import React from 'react';

import './App.css';

import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'

import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const App = () => (
  <>
  
 <Navigation></Navigation>
 <ScrollUpButton></ScrollUpButton>
 <Footer></Footer>

  </>
);

export default App;
