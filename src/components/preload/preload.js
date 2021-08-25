import React, { useState, useRef } from "react";
import './preload.css';
import LoadingProgress from 'react-js-loading-progress-bar';


const Img1 = require('../../assets/img/uguru/ttt-01.png');
const Img2 = require('../../assets/img/san.png');
const Img3 = require('../../assets/img/apexvr-01.png');
const Img4 = require('../../assets/img/ddd-01.png');
const Img5 = require('../../assets/img/dasdasdgg-01.png');
const Vid0 = require('../../assets/vids/students_working.mp4');

const urls = [
  Img1, Img2, Img3, Img4, Img5, Vid0
];

function PreLoad() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    console.log(counter.current)
    console.log(urls.length)
    if (counter.current >= urls.length) {
      setLoading(false);
    }
  }

  return (
    <>
      <LoadingProgress
        active={true}
        total={10}
        current={counter.current}
      />

      <div style={{ display: loading ? "block" : "none" }}>
        Loading images,
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        {urls.map(url =>
          <img
            key={url}
            src={url}
            onLoad={imageLoaded} />)}
      </div>

      <div id="preload">

      </div>

    </>
  )
}
export default PreLoad;
