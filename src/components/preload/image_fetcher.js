import React from 'react';
import './preload.css';
import LoadingProgress from 'react-js-loading-progress-bar';

const { useState, useEffect, useRef } = React;

const urls = [
  '/assets/img/uguru/ttt-01.png',
  '/assets/img/san.png',
  '/assets/img/apexvr-01.png'
];

function Test() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      setLoading(false);
    }
  }
  return <React.Fragment>
    <div style={{ display: loading ? "block" : "none" }}>
      Loading images,
    </div>
    <div style={{ display: loading ? "none" : "block" }}>
      {urls.map(url =>
        <img
          key={url}
          src={"" + url}
          onLoad={imageLoaded} />)}
    </div>
  </React.Fragment>;
}

export const PreLoad = () => (
  <>
    <Test />
    <LoadingProgress
      active={true}
      total={10}
      current={1}
      showCompact
    />

    <div id="preload">

    </div>

  </>
)

export default PreLoad;
