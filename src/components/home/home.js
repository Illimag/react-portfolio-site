import React from 'react';

import { Link } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';


import Img00 from '../../assets/img/dasdasdigital/banner-02.jpg';
import Banner from '../../assets/img/nikerate/banner-06.jpg';
import Img01 from '../../assets/img/legacypictures/graphite-s6.png';
import Img02 from '../../assets/img/legacypictures/legacyfilms.png';
import Img03 from '../../assets/img/legacypictures/cardsort.jpg';
import Img04 from '../../assets/img/legacypictures/test.png';
import Img05 from '../../assets/img/legacypictures/test1.png';
import Img06 from '../../assets/img/legacypictures/test2.png';
import Img07 from '../../assets/img/legacypictures/video-production-concept-operator-working-with-a-c-2JS9M5Q.jpg';
import Img08 from '../../assets/img/legacypictures/los-angeles-california-P5YD66H.jpg';
import Img09 from '../../assets/img/legacypictures/bubble-mindmap-template.png';
import Img10 from '../../assets/img/legacypictures/mind-mapping-diagram-8391.png';
import Img11 from '../../assets/img/legacypictures/male-videographer-editor-using-pc-computer-editing-R7QYFZS.jpg';
import Img12 from '../../assets/img/legacypictures/copy.png';
import Img13 from '../../assets/img/legacypictures/1.PNG';
import Img14 from '../../assets/img/legacypictures/2.PNG';
import Img15 from '../../assets/img/legacypictures/4.PNG';
import Img16 from '../../assets/img/legacypictures/comedy-funny-movie-movie-evening-together-at-home--YS7NQEP.jpg';
import Img17 from '../../assets/img/legacypictures/5.PNG';
import Img18 from '../../assets/img/legacypictures/3.PNG';
import Img19 from '../../assets/img/legacypictures/hsl_3.jpg';
import Img20 from '../../assets/img/legacypictures/hsl-biz_3.jpg';
import Img21 from '../../assets/img/legacypictures/hsl-biz_4.jpg';
import Img22 from '../../assets/img/legacypictures/Capture.PNG';
import Img23 from '../../assets/img/legacypictures/film-industry-7ZLFY7L.jpg';
import Img24 from '../../assets/img/legacypictures/ttt-01.png';



import styles from '../css/style.module.css';
import '../css/style.css';

 
import ImgA from '../../assets/img/uguru/testpics-02.png';
import ImgB from '../../assets/img/uguru/testpics-03.png';
import ImgC from '../../assets/img/uguru/testpics-03.png';

import ImgTablet from '../../assets/img/uguru/testpics-01.png';

import testimg from '../../assets/img/uguru/testpics-05.png';
import desktopImg from '../../assets/img/legacypictures/Mobile-Mockup.png';
import Twodesktop from '../../assets/img/uguru/testpics-06.png';
import duo from '../../assets/img/uguru/testpics-08.png';
import personas from '../../assets/img/legacypictures/personas.png';

//import testtest from '../../assets/img/uguru/ttt-01.png';

import Vid1 from '../../assets/home_page_vids/compress_vid0.mp4';
import Vid2 from '../../assets/vids/compressed_vid/vid2.m4v';

import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';

import UserScenario from '../../assets/img/legacypictures/Website-User-scenario-workflow.png';


import video from '../../assets/san-francisco-sunset-9Q2MYSB.mov';
import videomobile from '../../assets/san-francisco-sunset-9Q2MYSB.mov';

import icon1 from '../../assets/icon-01.png';
import icon2 from '../../assets/icon-02.png';
import icon3 from '../../assets/icon-03.png';


import Media from 'react-media';

import download from '../../assets/download.svg'

import homepage from '../../assets/homepage.png'
import homepage1 from '../../assets/homepage1.png'
import homepage2 from '../../assets/homepage2.png'
import homepage3 from '../../assets/homepage3.jpg'

export const Home = () => (
  /* Start of JSX Fragment*/
  <>



























<Container className={styles.test}>
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Welcome!</h1>
                <h5 className={styles.test1title}>Jae Min (John) Kim is an UI/UX Designer from the San Francisco Bay Area, and Silicon Valley.</h5>
    

              <LinkContainer to="/legacypictures">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Looking for Case Study?</Button>
                </h1>
              </LinkContainer>

              <LinkContainer to="/contact">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">Contact Now!</Button>
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
                <source src={videomobile}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={video}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={video}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </Container>














  </>
  /* End of JSX Fragment*/
)