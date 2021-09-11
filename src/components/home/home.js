import React from 'react';
import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// LazyLoadImage } from 'react-lazy-load-image-component';

import { Card } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'


//import { Slide } from "react-awesome-reveal";
//import Typing from 'react-typing-animation';

import Badge from 'react-bootstrap/Badge';

import { LinkContainer } from 'react-router-bootstrap';
/*
import Img01 from '../../assets/img/uguru/ttt-01.png';
import Sanchezcoffeeimg from '../../assets/img/san.png';
import Apexvrimg from '../../assets/img/apexvr-01.png';
import Stepsaverimg from '../../assets/img/ddd-01.png';
import DasDasimg from '../../assets/img/dasdasdgg-01.png';
*/
import Img01 from '../../assets/img/uguru/ttt-01.png';
import Video from '../../assets/img/home/5.mp4';
import Videomobile from '../../assets/img/home/5-1.mp4';

/*
import Vid01 from '../../assets/vids/compress_vid1.mp4';
*/

/*
import Uguru_Img from '../../assets/img/uguru/banner-01.jpg';
import Sanchezcoffeeco_Img from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Apexvr_Img from '../../assets/img/dominos/1-01.jpg';
import Stepsaver_Img from '../../assets/img/stepsaver/banner-05.jpg';
import DasDas_Img from '../../assets/img/dasdasdigital/banner-02.jpg';
*/

import Image from 'react-bootstrap/Image';
import { Navbar, Nav } from 'react-bootstrap'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/*
import Image from 'react-bootstrap/Image';
import Pg1Img from '../../assets/img/home/1-02.jpg';
*/
/*
import Pg2Img from '../../assets/img/home/1-03.jpg';
import Pg3Img from '../../assets/img/home/1-04.jpg';
import Pg4Img from '../../assets/img/home/1-05.jpg';
import Pg5Img from '../../assets/img/home/1-06.jpg';
import Pg6Img from '../../assets/img/home/1-07.jpg';
*/

import styles from './home.module.css';
import './home.css';

import logo from '../../assets/jmk_logo-02-01.png';


import Media from 'react-media';


export const Home = () => {

  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  return <>




    <Container fluid className={styles.containerfluid}>

     
      <Container className={styles.test}>
      
        <Row>
          <Col md={12} className={styles.removepadding}>

          <Jumbotron className={styles.mainfloatback}>
                <div className={styles.maincontentwrapper}>
                {/*
                  <div class="testcontainer">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <span class="text">Scroll to View Portfolio</span>
                  </div>
                */}
              <h1 className={styles.whitetitle}>JMK</h1>

              <h5 className={styles.white}>Jae Min (John) Kim is an UI/UX Designer from the San Francisco Bay Area, and Silicon Valley.</h5>
              <h5 className={styles.white}><span className={styles.available}> Available</span> for In-House, Remote, Full-Time, Part-Time, Contract and Freelance. Have a nice day!</h5>
            

              <LinkContainer to="/Portfolio">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">View Portfolio</Button>
                </h1>
              </LinkContainer>

                </div>

                
              </Jumbotron>


          <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={Videomobile}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={Video}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={Video}/>
              </video>
                }

            </>
          )}
        </Media>

          </Col>
        </Row>






      </Container>







      
    </Container>


    <Container fluid>
      
    <Row className={styles.testrow}>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.testtest}>
              <h5 className={styles.titletextdark}>01/ Services</h5>
              
              <p className={styles.secondtitledark}>
                Web Apps & Corporate Sites
              </p>
              
              <p className={styles.descriptionmaindark}>
              This is where problem solving meets visual impact. I’ll unite products and users, design and experiences.
              </p>

              <p className={styles.secondtitledark}>
              Mobile App Design
              </p>
              
              <p className={styles.descriptionmaindark}>
              Using iOS, Android and an expert vision, I’ll take your application to the next level.
              </p>

              <p className={styles.secondtitledark}>
              Front End Development
              </p>
              
              <p className={styles.descriptionmaindark}>
              I’ll help you to bridge the gap between design and development.
              </p>
 
            </Jumbotron>

          </Col>
        </Row>

        <Row>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.welcome}>
              <h5 className={styles.titletext}>02/ Principles</h5>
              <p className={styles.secondtitle}>
              UX is the sum of all things.
              </p>
              
              <p className={styles.descriptionmain}>
              There’s no style over substance here. I bring together form and the function to create something that looks good and performs brilliantly. Simple.              </p>
              

            </Jumbotron>

          </Col>
        </Row>
        

        <Row>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.welcome}>
              <h5 className={styles.titletext}>03/ Client Comments</h5>
              <p className={styles.descriptionmain}>
                Design, Development, 
              </p>
              

            </Jumbotron>

          </Col>
        </Row>
    </Container>

  </>
  /* End of JSX Fragment*/
}