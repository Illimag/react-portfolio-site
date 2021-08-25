import React from 'react';
import './App.css';
import Footer from './components/footer/footer'
import MainNav from './components/navigation/mainnav'
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Worker } from '@react-pdf-viewer/core';


const App = () => (
  <>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
    <MainNav></MainNav>
    <ScrollUpButton></ScrollUpButton>
    <Footer></Footer>
  </>
);

// debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER


export default App;
