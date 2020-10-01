import React from 'react';
import './preload.css';
import LoadingProgress from 'react-js-loading-progress-bar';

const {useState, useEffect, useRef} = React;

const Img1 = require('../../assets/img/uguru/ttt-01.png');
const Img2 = require('../../assets/img/san.png');
const Img3 = require('../../assets/img/apexvr-01.png');
const Img4 = require('../../assets/img/ddd-01.png');
const Img5 = require('../../assets/img/dasdasdgg-01.png');
const Vid0 = require('../../assets/vids/students_working.mp4');

const urls = [
    Img1,Img2,Img3,Img4,Img5,Vid0
];

function Test() {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
      counter.current += 1;

      console.log(counter)

      if (counter.current >= urls.length) {
        setLoading(false);
      }
    }

    
    return <React.Fragment>

            <LoadingProgress
                        active={true}
                        total={urls.length}
                        current={counter}
                    />

      <div style={{display: loading ? "block" : "none"}}>
         Loading images,
      </div>
      <div style={{display: loading ? "none" : "block"}}>
        {urls.map(url => 
          <img 
            key={url}
            src={url}
            onLoad={imageLoaded}/>)}
      </div>
    </React.Fragment>;
}

export const PreLoad = () => (
    <>




        <Test/>
        <div id="preload">

        </div>

    </>
    )

    export default PreLoad;
