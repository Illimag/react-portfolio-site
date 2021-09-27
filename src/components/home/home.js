import React from 'react';
import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// LazyLoadImage } from 'react-lazy-load-image-component';

import { Card } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

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

import styles from '../css/style.module.css';
import '../css/style.css';

import logo from '../../assets/jmk_logo-02-01.png';


import { ProgressBar } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import Media from 'react-media';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import video from '../../assets/5359446.mp4';
import videomobile from '../../assets/5359446.mp4';

import vid1 from '../../assets/newhomepagevids/1.mp4'
import vid11 from '../../assets/newhomepagevids/1-1.mp4'
import vid2 from '../../assets/newhomepagevids/2.mp4'
import vid22 from '../../assets/newhomepagevids/2-1.mp4'
import vid3 from '../../assets/newhomepagevids/3.mp4'
import vid33 from '../../assets/newhomepagevids/3-1.mp4'
import vid4 from '../../assets/newhomepagevids/4.mp4'
import vid44 from '../../assets/newhomepagevids/4-1.mp4'
import vid5 from '../../assets/newhomepagevids/5.mp4'
import vid55 from '../../assets/newhomepagevids/5-1.mp4'
import vid6 from '../../assets/newhomepagevids/6.mp4'
import vid66 from '../../assets/newhomepagevids/6-1.mp4'

import desktopImg from '../../assets/img/uguru/trans/pic5.png';
import artimg from '../../assets/img/art/banner-06.jpg';
import uguruimg from '../../assets/img/uguru/1-02.jpg';
import sanchezimg from '../../assets/img/sanchezcoffeeco/1-08.jpg';
import apeximg from '../../assets/img/apexvr/p_apex_3_L-min.png';
import stepsaverimg from '../../assets/img/stepsaver/f_stepsaver_1.png';


export const Home = () => (


  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  <>





<Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
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
                <source src={video}/>
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

            <Col md={8} className={styles.removepadding}>
            <div id="test6"></div>

              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

              
<p className={styles.subtitlelargewhite}>JAEMINKIM.COM</p>

<p className={styles.whitetitle}>Welcome</p>
 
 <p className={styles.descriptionlargewhite}>Jae Min (John) Kim is an UI/UX Designer from the San Francisco Bay Area, and Silicon Valley.
</p>

<Row>
  <Col>
  <AnchorLink href='#test' className={styles.paddingleft}>     
<p className={styles.descriptionlargewhite}>View Portfolio >
</p>
</AnchorLink>

</Col>


<Col>
<LinkContainer to="/contact">
<p className={styles.descriptionlargewhite}>Contact >
</p>
</LinkContainer>
</Col>
</Row>

</div>
              </Jumbotron>


            </Col>

            
       
          </Row>
          
        </Container>



        <Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
                 
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid11}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid1}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid1}/>
              </video>
                }

            </>
          )}
        </Media>
        <Col md={8} className={styles.removepadding}>

        <div id="test"></div>
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>


              
<p className={styles.subtitlelargewhite}>LEGACY PICTURES</p>

<p className={styles.whitetitle}>LEGACY PICTURES</p>
 
 <p className={styles.descriptionlargewhite}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>


<Row>
  <Col>
  <LinkContainer to="/legacypictures">
<p className={styles.descriptionlargewhite}>Learn More >
</p>
</LinkContainer>
</Col>
<Col>
<AnchorLink href='#test1' className={styles.paddingleft}>    
<p className={styles.descriptionlargewhite}>View Next >
</p>
</AnchorLink>
</Col>
</Row>



</div>
              </Jumbotron>


             

            </Col>

            
       
          </Row>
          
        </Container>




        <Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
                 
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid22}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid2}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid2}/>
              </video>
                }

            </>
          )}
        </Media>
            <Col md={8} className={styles.removepadding}>
            <div id="test1"></div>

              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

              
<p className={styles.subtitlelargewhite}>ArtRendezVous</p>

<p className={styles.whitetitle}>ART Rendez-Vous</p>
 
 <p className={styles.descriptionlargewhite}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

<Row>
  <Col>
  <LinkContainer to="/artrendezvous">
<p className={styles.descriptionlargewhite}>Learn More >
</p>
</LinkContainer>
</Col>
<Col>
<AnchorLink href='#test2' className={styles.paddingleft}>    
<p className={styles.descriptionlargewhite}>View Next >
</p>
</AnchorLink>
</Col>
</Row>

</div>
              </Jumbotron>


             

            </Col>

            
       
          </Row>
          
        </Container>



        <Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
                 
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid33}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid3}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid3}/>
              </video>
                }

            </>
          )}
        </Media>
            <Col md={8} className={styles.removepadding}>
            <div id="test2"></div>

              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

              
<p className={styles.subtitlelargewhite}>Uguru, INC</p>

<p className={styles.whitetitle}>Uguru, INC.</p>
 
 <p className={styles.descriptionlargewhite}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

<Row>
  <Col>
  <LinkContainer to="/legacypictures">
<p className={styles.descriptionlargewhite}>Learn More >
</p>
</LinkContainer>
</Col>
<Col>
<AnchorLink href='#test3' className={styles.paddingleft}>    
<p className={styles.descriptionlargewhite}>View Next >
</p>
</AnchorLink>
</Col>
</Row>

</div>
              </Jumbotron>


             

            </Col>

            
       
          </Row>
          
        </Container>




        <Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
                 
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid44}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid4}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid4}/>
              </video>
                }

            </>
          )}
        </Media>
            <Col md={8} className={styles.removepadding}>
            <div id="test3"></div>

              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

              
<p className={styles.subtitlelargewhite}>Sanchez Coffee Co.</p>

<p className={styles.whitetitle}>Sanchez Coffee Co.</p>
 
 <p className={styles.descriptionlargewhite}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

<Row>
  <Col>
  <LinkContainer to="/legacypictures">
<p className={styles.descriptionlargewhite}>Learn More >
</p>
</LinkContainer>
</Col>
<Col>
<AnchorLink href='#test4' className={styles.paddingleft}>    
<p className={styles.descriptionlargewhite}>View Next >
</p>
</AnchorLink>
</Col>
</Row>

</div>
              </Jumbotron>


             

            </Col>

            
       
          </Row>
          
        </Container>



        <Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
                 
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid55}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid5}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid5}/>
              </video>
                }

            </>
          )}
        </Media>
            <Col md={8} className={styles.removepadding}>
            <div id="test4"></div>

              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

              
<p className={styles.subtitlelargewhite}>ApexVR</p>

<p className={styles.whitetitle}>ApexVr</p>
 
 <p className={styles.descriptionlargewhite}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

<Row>
  <Col>
  <LinkContainer to="/legacypictures">
<p className={styles.descriptionlargewhite}>Learn More >
</p>
</LinkContainer>
</Col>
<Col>
<AnchorLink href='#test5' className={styles.paddingleft}>    
<p className={styles.descriptionlargewhite}>View Next >
</p>
</AnchorLink>
</Col>
</Row>

</div>
              </Jumbotron>


             

            </Col>

            
       
          </Row>
          
        </Container>




        <Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
                 
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid66}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid6}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={vid6}/>
              </video>
                }

            </>
          )}
        </Media>
            <Col md={8} className={styles.removepadding}>
            <div id="test5"></div>

              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

              
<p className={styles.subtitlelargewhite}>Stepsaver</p>

<p className={styles.whitetitle}>Stepsaver</p>
 
 <p className={styles.descriptionlargewhite}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

<Row>
  <Col>
  <LinkContainer to="/legacypictures">
<p className={styles.descriptionlargewhite}>Learn More >
</p>
</LinkContainer>
</Col>
<Col>
<AnchorLink href='#test6' className={styles.paddingleft}>    
<p className={styles.descriptionlargewhite}>Back to Top >
</p>
</AnchorLink>
</Col>
</Row>
</div>
              </Jumbotron>


             

            </Col>

            
       
          </Row>
          
        </Container>


  </>
  /* End of JSX Fragment*/
)