import React from 'react';
import './App.css';
import Footer from './components/footer/footer'
import MainNav from './components/navigation/mainnav'
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";


const App = () => (
  <>
    <MainNav></MainNav>
    <ScrollUpButton></ScrollUpButton>
    <Footer></Footer>
  </>
);

// debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER


export default App;
