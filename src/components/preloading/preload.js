import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Preload = (props) => {
  return <>
    <div style={{ height: "100vh", paddingTop: "30vh" }}>
      <ProgressBar animated now={props.currentProgress} />
      <h1>Loading images...</h1>
    </div>
  </>;
}

export default Preload;
