import React from 'react';
import './preload.css';

const cardOne = require("../../assets/img/uguru/ttt-01.png");
const cardTwo = require("../../assets/img/san.png");
const cardThree = require("../../assets/img/apexvr-01.png");
const cardFour = require("../../assets/img/ddd-01.png");
const cardFive = require("../../assets/img/dasdasdgg-01.png");


export const PreLoad = () => (
    <>

        <div id="preload">
            <img src={cardOne} />
            <img src={cardTwo} />
            <img src={cardThree} />
            <img src={cardFour} />
            <img src={cardFive} />
        </div>

    </>
    )

    export default PreLoad;
