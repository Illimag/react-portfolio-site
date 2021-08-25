import React from 'react';
import './App.css';
import Footer from './components/footer/footer'
import TestNav from './components/navigation/testnav'
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { store } from './store'
import { Provider } from 'react-redux';


const App = () => (

  <Provider store={store}>
    <TestNav></TestNav>
    <ScrollUpButton></ScrollUpButton>
    <Footer></Footer>
  </Provider>
);

// debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER


export default App;
