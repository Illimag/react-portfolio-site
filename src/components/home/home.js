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

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProgress, getImages, getLoadingState} from '../../store/imgLoad/reducer'
import { loadImage } from '../../store/imgLoad/actions';

import Media from 'react-media';

const importAll = (r) => {
  let images = [];
  let imageUrls = [];
  r.keys().map((item, index) => { images.push(r(item)); });

  images.map((image) => {
    imageUrls.push(image);
  })

  return imageUrls;
}



export const Home = () => {

  const dispatch = useDispatch();
  const getImageUrls = () => {
    return importAll(require.context('../../assets/newhomepagevids', false, /\.(png|jpe?g|svg|mp4|m4v)$/))
  }

  const currentLoadingState = useSelector(state => getLoadingState(state));
  const currentProgress = useSelector(state => getCurrentProgress(state));
  const images = useSelector(state => getImages(state));

  console.log("ImageList: ", images)

  useEffect(() => {
    let urls = getImageUrls();
    dispatch(loadImage(urls))
  }, [])

  console.log("Loading State: ", currentLoadingState)




  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  return <>
  <div style={{ display: currentLoadingState ? "block" : "none" , height: "100vh", paddingTop: "10vh" }}>
  
  <h1>Welcome to Jaeminkim.com</h1>

      
        
      <ProgressBar animated now={currentProgress} />
      <h1>Loading an Amazing Digital Experience just for you...</h1>
    
    </div>
    {images &&
    <div style={{ display: currentLoadingState ? "none" : "block" }}>




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
              <h1 className={styles.whitetitle}>Hi,</h1>

              <h5 className={styles.white}>Jae Min (John) Kim is an UI/UX Designer from the San Francisco Bay Area, and Silicon Valley.</h5>
              <h5 className={styles.white}><span className={styles.available}> Available</span> for In-House, Remote, Full-Time, Part-Time, Contract and Freelance. Have a nice day!</h5>
            

              <LinkContainer to="/Contact">
                <p>
                  <Button className={styles.mainbutton} variant="primary">Contact Now</Button>
                </p>
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
                <source src={images[12]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[13]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[13]}/>
              </video>
                }

            </>
          )}
        </Media>

          </Col>
        </Row>
        <div className={styles.spaceing}></div>

        <LinkContainer to="/legacypictures">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Legacy Pictures</h1>
                <h5 className={styles.white}>International videography web application user experience and redesign.</h5>

                <h5 className={styles.white}>#UserExperience #Adobe #Illustrator #Figma #UserExperience #Adobe #Illustrator #Figma #UserExperience #Adobe #Illustrator #Figma</h5>

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
                <source src={images[0]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[1]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[1]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>

        <LinkContainer to="/artrendezvous">
          <Row>
            <Col md={12} className={styles.removepadding}>

              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Art Rendez-Vous</h1>
                <h5 className={styles.white}>New York City art gallery and museum social media iOS mobile application user experience and redesign.</h5>

                <div className={styles.badgelist}>
                    <Badge variant="primary" className={styles.first_badge}>USER EXPERIENCE</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>USER INTERFACE</Badge>{' '}
                    <Badge variant="primary" className={styles.second_badge}>MOBILE APPLICATION</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>iOS</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>ANDROID</Badge>{' '}
                    <Badge variant="primary" className={styles.third_badge}>PROTOTYPING</Badge>{' '}
                    <Badge variant="primary" className={styles.fourth_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SAN FRANCISCO BAY AREA</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SILICON VALLEY</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>GRAPHIC DESIGN</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>WEB DESIGN</Badge>{' '}

                </div>
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
                <source src={images[4]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[5]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[5]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>

          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>

        <LinkContainer to="/uguru">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
                <div className={styles.maincontentwrapper}>

                  <h1 className={styles.whitetitle}>Uguru INC.</h1>
                  <p className={styles.white}>UI/UX & graphic designer internship at mobile application startup in downtown San Francisco.</p>

                  <div className={styles.badgelist}>
                    <Badge variant="primary" className={styles.first_badge}>USER EXPERIENCE</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>USER INTERFACE</Badge>{' '}
                    <Badge variant="primary" className={styles.second_badge}>MOBILE APPLICATION</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>iOS</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>ANDROID</Badge>{' '}
                    <Badge variant="primary" className={styles.third_badge}>PROTOTYPING</Badge>{' '}
                    <Badge variant="primary" className={styles.fourth_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SAN FRANCISCO BAY AREA</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SILICON VALLEY</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>GRAPHIC DESIGN</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>WEB DESIGN</Badge>{' '}
                  </div>
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
                <source src={images[2]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[3]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[3]}/>
              </video>
                }

            </>
          )}
        </Media>



            </Col>

          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>

        <LinkContainer to="/sanchezcoffeeco">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Sanchez Coffee CO.</h1>
                <h5 className={styles.white}>Los Angeles coffee distribution company web payment platform.</h5>

                <div className={styles.badgelist}>
                <Badge variant="primary" className={styles.first_badge}>USER EXPERIENCE</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>USER INTERFACE</Badge>{' '}
                    <Badge variant="primary" className={styles.second_badge}>MOBILE APPLICATION</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>iOS</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>ANDROID</Badge>{' '}
                    <Badge variant="primary" className={styles.third_badge}>PROTOTYPING</Badge>{' '}
                    <Badge variant="primary" className={styles.fourth_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SAN FRANCISCO BAY AREA</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SILICON VALLEY</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>GRAPHIC DESIGN</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>WEB DESIGN</Badge>{' '}                </div>
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
                <source src={images[6]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[7]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[7]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>

        <LinkContainer to="/apexvr">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
  
                <h1 className={styles.whitetitle}>Apex VR</h1>
                <h5 className={styles.white}>San Leandro videography company virtual reality web application design.</h5>

                <div className={styles.badgelist}>
                <Badge variant="primary" className={styles.first_badge}>USER EXPERIENCE</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>USER INTERFACE</Badge>{' '}
                    <Badge variant="primary" className={styles.second_badge}>MOBILE APPLICATION</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>iOS</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>ANDROID</Badge>{' '}
                    <Badge variant="primary" className={styles.third_badge}>PROTOTYPING</Badge>{' '}
                    <Badge variant="primary" className={styles.fourth_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SAN FRANCISCO BAY AREA</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SILICON VALLEY</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>GRAPHIC DESIGN</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>WEB DESIGN</Badge>{' '}                </div>
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
                <source src={images[8]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[9]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[9]}/>
              </video>
                }

            </>
          )}
        </Media>


            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>

        <LinkContainer to="/uxdesignsumo">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
  
                <h1 className={styles.whitetitle}>UX Design Sumo</h1>
                <h5 className={styles.white}>User experience designer community website design.</h5>

                <div className={styles.badgelist}>
                <Badge variant="primary" className={styles.first_badge}>USER EXPERIENCE</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>USER INTERFACE</Badge>{' '}
                    <Badge variant="primary" className={styles.second_badge}>MOBILE APPLICATION</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>iOS</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>ANDROID</Badge>{' '}
                    <Badge variant="primary" className={styles.third_badge}>PROTOTYPING</Badge>{' '}
                    <Badge variant="primary" className={styles.fourth_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SAN FRANCISCO BAY AREA</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>SILICON VALLEY</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>GRAPHIC DESIGN</Badge>{' '}
                    <Badge variant="primary" className={styles.first_badge}>WEB DESIGN</Badge>{' '}                </div>
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
                <source src={images[10]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[11]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[11]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>
      </Container>
    </Container>



    </div>
    }

  </>
  /* End of JSX Fragment*/
}