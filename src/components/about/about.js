
import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Img34 from '../../assets/sssds-01.png';
import Img35 from '../../assets/mockuptest-02.png';
import Img36 from '../../assets/uguru-09.jpg';
import Img38 from '../../assets/uguruimg1.jpg';
import Img39 from '../../assets/uguruimg2.jpg';
import Img40 from '../../assets/uguruimg3.png';
import Img41 from '../../assets/uguruimg4.png';

import pro from '../../assets/jmk_logo-01.png';


import styles from '../css/style.module.css';
import '../css/style.css';
import PreloadUguruBackgroundImageTest from '../../assets/img/uguru/backtest-01-min.jpg';
import PreloadUguruBackgroundImageTestMobile from '../../assets/img/uguru/backtest-06-min.jpg';
import PreloadUguruBackgroundImageTest1 from '../../assets/img/uguru/backtest-02-min.jpg';
import PreloadUguruBackgroundImageTestMobile1 from '../../assets/img/uguru/backtest-07-min.jpg';
import PreloadUguruBackgroundImageTest2 from '../../assets/img/uguru/backtest-03-min.jpg';
import PreloadUguruBackgroundImageTestMobile2 from '../../assets/img/uguru/backtest-08-min.jpg';
import PreloadUguruBackgroundImageTest3 from '../../assets/img/uguru/backtest-04-min.jpg';
import PreloadUguruBackgroundImageTestMobile3 from '../../assets/img/uguru/backtest-09-min.jpg';
import PreloadUguruBackgroundImageTest4 from '../../assets/img/uguru/backtest-05-min.jpg';
import PreloadUguruBackgroundImageTestMobile4 from '../../assets/img/uguru/backtest-10-min.jpg';
import PreloadUguruBackgroundImageTest5 from '../../assets/img/uguru/1-05.jpg';
import PreloadUguruBackgroundImageTestMobile5 from '../../assets/img/uguru/1-05.jpg';

import Media from 'react-media';

import video from '../../assets/vids/compressed_vid/vid5.mp4';
import video1 from '../../assets/sfvid.mp4';


export const About = () => (
  /* Start of JSX Fragment*/
  <>

<div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>




      <Container fluid className={styles.test2}>
  
  <div className={styles.backoverlay}></div>
      <div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
      <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
        <Fade>
        <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Professional Profile</span></p>
          </Slide>
        <p className={styles.subtitlesmallwhitecenter}>Jae Min Kim</p>
        <p className={styles.subtitlesmallwhitecenter}><span className={styles.grey}></span> San Francisco Bay Area <span className={styles.grey}>Silicon Valley</span></p>
    
          <div className={styles.spaceing}></div>
          <div className={styles.spaceing}></div>
        </Fade>           
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={8} md={6} lg={2}>
      <Fade>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
          }}>
          {matches => (
          <>
          {matches.small &&
            <Image src={pro} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={pro} fluid className={styles.centerimage}/>
          }
                {matches.large &&
                
                <Image src={pro} fluid className={styles.centerimage}/>

                  }

              </>
            )}
          </Media>
              </Fade>  



              </Col>
  </Row>


<div className={styles.spaceing}></div>



  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Warm Regards,</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>My name is Jae Min Kim, my friends also call me John</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Thank you for visiting this portfolio website. This portfolio website is built with React.JS and Boostrap and is hosted with Github Pages, I hope to share my design style and to showcase an online repository of past design works. If you have additional questions feel free to reach out to me. Thank you.</p>
          </Slide>
          </Col>
  </Row>

  <div className={styles.spaceing}></div>


</Container>
















  </>
  /* End of JSX Fragment*/
)