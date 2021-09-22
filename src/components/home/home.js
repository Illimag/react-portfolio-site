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


import { ProgressBar } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import Media from 'react-media';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import video from '../../assets/newhomepagevids/2.mp4';
import videomobile from '../../assets/newhomepagevids/2-1.mp4';

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

export const Home = () => {


  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  return <>






<Container className={styles.test}>
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Welcome!</h1>
                <h5 className={styles.test1title}>Jae Min (John) Kim is an UI/UX Designer from the San Francisco Bay Area, and Silicon Valley.</h5>
    
                <div className={styles.spaceingwhite}></div>

                <AnchorLink href='#test5' className={styles.paddingleft}>                

                        <h1 className={styles.mainbutton}>
                     View Portfolio
                        </h1>

                        </AnchorLink>

                        <div className={styles.spaceingwhite}></div>


              <LinkContainer to="/contact">
              <h1 className={styles.mainbutton}>
                     Contact
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



     
      <Container className={styles.test}>
      <div id="test5"></div>
        <div className={styles.spaceing}></div>

        <LinkContainer to="/legacypictures">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
              <h1 className={styles.whitetitle}>Legacy Pictures</h1>
                <h5 className={styles.test1title}>International videography web application user experience and redesign.</h5>
               
                <div className={styles.spaceingwhite}></div>


                <LinkContainer to="/legacypictures">
                <h1 className={styles.mainbutton}>
                  Learn More
                </h1>
              </LinkContainer>

              <div className={styles.spaceingwhite}></div>


              <AnchorLink href='#test' className={styles.paddingleft}>                

              <h1 className={styles.mainbutton}>
               Next
              </h1>

              </AnchorLink>
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
                <source src={vid11}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid1}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid1}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test"></div>
        <LinkContainer to="/artrendezvous">
          <Row>
            <Col md={12} className={styles.removepadding}>

              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Art Rendez-Vous</h1>
                <h5 className={styles.test1title}>New York City art gallery and museum social media iOS mobile</h5>
                <div className={styles.spaceingwhite}></div>


<LinkContainer to="/artrendezvous">
<h1 className={styles.mainbutton}>
  Learn More
</h1>
</LinkContainer>

<div className={styles.spaceingwhite}></div>


<AnchorLink href='#test1' className={styles.paddingleft}>                

<h1 className={styles.mainbutton}>
Next
</h1>

</AnchorLink>

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
                <source src={vid22}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid2}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid2}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>

          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test1"></div>

        <LinkContainer to="/uguru">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Uguru, INC.</h1>
                  <h5 className={styles.test1title}>UI/UX & graphic designer internship at mobile application</h5>
                  <div className={styles.spaceingwhite}></div>


<LinkContainer to="/uguru">
<h1 className={styles.mainbutton}>
  Learn More
</h1>
</LinkContainer>

<div className={styles.spaceingwhite}></div>


<AnchorLink href='#test2' className={styles.paddingleft}>                

<h1 className={styles.mainbutton}>
Next
</h1>

</AnchorLink>
            
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
                <source src={vid33}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid3}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid3}/>
              </video>
                }

            </>
          )}
        </Media>



            </Col>

          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test2"></div>

        <LinkContainer to="/sanchezcoffeeco">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

              <h1 className={styles.whitetitle}>Sanchez Coffee</h1>
                <h5 className={styles.test1title}>Los Angeles coffee distribution company web payment platform.</h5>
                <div className={styles.spaceingwhite}></div>


<LinkContainer to="/sanchezcoffeeco">
<h1 className={styles.mainbutton}>
  Learn More
</h1>
</LinkContainer>

<div className={styles.spaceingwhite}></div>


<AnchorLink href='#test3' className={styles.paddingleft}>                

<h1 className={styles.mainbutton}>
Next
</h1>

</AnchorLink>
              
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
                <source src={vid44}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid4}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid4}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test3"></div>

        <LinkContainer to="/apexvr">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Apex VR</h1>
                <h5 className={styles.test1title}>San Leandro videography company virtual reality web application design.</h5>
                <div className={styles.spaceingwhite}></div>


<LinkContainer to="/apexvr">
<h1 className={styles.mainbutton}>
  Learn More
</h1>
</LinkContainer>

<div className={styles.spaceingwhite}></div>


<AnchorLink href='#test4' className={styles.paddingleft}>                

<h1 className={styles.mainbutton}>
Next
</h1>

</AnchorLink>
             
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
                <source src={vid55}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid5}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid5}/>
              </video>
                }

            </>
          )}
        </Media>


            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test4"></div>

        <LinkContainer to="/stepsaver">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
  
                <h1 className={styles.whitetitle}>Stepsaver</h1>
                <h5 className={styles.test1title}>User experience designer community website design.</h5>
                <div className={styles.spaceingwhite}></div>


<LinkContainer to="/stepsaver">
<h1 className={styles.mainbutton}>
  Learn More
</h1>
</LinkContainer>

<div className={styles.spaceingwhite}></div>


<AnchorLink href='#test5' className={styles.paddingleft}>                

<h1 className={styles.mainbutton}>
Next
</h1>

</AnchorLink>

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
                <source src={vid66}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid6}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={vid6}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>
      </Container>




  </>
  /* End of JSX Fragment*/
}