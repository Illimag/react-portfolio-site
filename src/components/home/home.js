import React from 'react';
import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// LazyLoadImage } from 'react-lazy-load-image-component';



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

/*
import Vid01 from '../../assets/vids/compress_vid1.mp4';
*/
import Vid02 from '../../assets/vids/compress_vid6.mp4';
import Vid03 from '../../assets/vids/compress_vid0.mp4';
import Vid04 from '../../assets/vids/compress_vid1.mp4';
import Vid05 from '../../assets/vids/compress_vid2.mp4';
import Vid06 from '../../assets/vids/compress_vid5.mp4';
import Vid07 from '../../assets/vids/compress_vid4.mp4';

/*
import Uguru_Img from '../../assets/img/uguru/banner-01.jpg';
import Sanchezcoffeeco_Img from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Apexvr_Img from '../../assets/img/dominos/1-01.jpg';
import Stepsaver_Img from '../../assets/img/stepsaver/banner-05.jpg';
import DasDas_Img from '../../assets/img/dasdasdigital/banner-02.jpg';
*/

/*
import Vid06 from '../../assets/vids/compress_vid0.mp4';
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
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProgress, getImages, getLoadingState} from '../../store/imgLoad/reducer'
import { loadImage } from '../../store/imgLoad/actions';

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
    return importAll(require.context('../../assets/home_page_vids', false, /\.(png|jpe?g|svg|mp4|m4v)$/))
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
              <Navbar.Brand className={styles.logo}>
                  <Image src={logo} fluid />
                </Navbar.Brand>
      
      <h1>Loading Videos... Please Wait</h1>
      <ProgressBar animated now={currentProgress} />
      <h1>Please wait for an Amazing Digital Home Page Experience</h1>

      <h1></h1>
    
    </div>
    {images &&
    <div style={{ display: currentLoadingState ? "none" : "block" }}>




    <Container fluid className={styles.containerfluid}>

     
      <Container className={styles.test}>
        <Row>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.welcome}>
              <h5 className={styles.titletext}>UI/UX Designer located in the San Francisco Bay Area, and Silicon Valley</h5>
              <p className={styles.descriptionmain}>
                
                <span className={styles.available}> Available</span> for In-House, Remote, Full-Time, Part-Time, Contract and Freelance. Have a nice day!
              </p>
              

              <LinkContainer to="/Contact">
                <p>
                  <Button className={styles.mainbutton} variant="primary">Contact Now</Button>
                </p>
              </LinkContainer>
            </Jumbotron>

          </Col>
        </Row>

        <LinkContainer to="/uguru">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
                <div className={styles.maincontentwrapper}>

                  <h1 className={styles.whitetitle}>Uguru INC.</h1>
                  <p className={styles.white}>UI/UX & Graphic Designer Internship at Mobile Application Startup in Downtown San Francisco</p>

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

              <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[0]} type="video/mp4" />
              </video>
            </Col>

          </Row>
        </LinkContainer>

        <LinkContainer to="/legacypictures">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.float}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Legacy Pictures</h1>
                <h5 className={styles.white}>International Videography Web Application User Experience and Redesign</h5>

                <div className={styles.badgelist}>
                <Badge variant="primary" className={styles.first_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                <Badge variant="primary" className={styles.first_badge}>FIGMA</Badge>{' '}
                <Badge variant="primary" className={styles.first_badge}>USER EXPERIENCE</Badge>{' '}
                <Badge variant="primary" className={styles.first_badge}>USER INTERFACE</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>WEB</Badge>{' '}
                  <Badge variant="primary" className={styles.second_badge}>E-COMMERCE</Badge>{' '}
                  <Badge variant="primary" className={styles.third_badge}>WORDPRESS</Badge>{' '}
                  <Badge variant="primary" className={styles.fourth_badge}>PAYPAL MANAGER</Badge>{' '}
                  <Badge variant="primary" className={styles.fifth_badge}>HTML</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>CSS</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>STRIPE</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>SQUARE</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>WEB DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>RESPONSIVE DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>PAYMENT GATEWAY</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>PAYMENT PROCESSOR</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>USER TESTING</Badge>{' '}
                  <Badge variant="primary" className={styles.first_badge}>USABILITY</Badge>{' '}
                </div>
              </div>
              </Jumbotron>

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={images[1]} type="video/mp4" />
              </video>

            </Col>
          </Row>
        </LinkContainer>

        <LinkContainer to="/artrendezvous">
          <Row>
            <Col md={12} className={styles.removepadding}>

              <Jumbotron className={styles.float}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Art Rendez-Vous</h1>
                <h5 className={styles.white}>New York City Art Gallery and Museum Social Media iOS Mobile Application User Experience and Redesign</h5>

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

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={images[2]} type="video/mp4" />
              </video>

            </Col>

          </Row>
        </LinkContainer>


        <LinkContainer to="/sanchezcoffeeco">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.float}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Sanchez Coffee CO.</h1>
                <h5 className={styles.white}>Los Angeles Coffee Distribution Company Web Payment Platform</h5>

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

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={images[3]} type="video/mp4" />
              </video>

            </Col>
          </Row>
        </LinkContainer>

        <LinkContainer to="/apexvr">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
  
                <h1 className={styles.whitetitle}>Apex VR</h1>
                <h5 className={styles.white}>San Leandro Videography Company Virtual Reality Web Application Design</h5>

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

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={images[4]} type="video/mp4" />
              </video>

            </Col>
          </Row>
        </LinkContainer>

        <LinkContainer to="/uxdesignsumo">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
  
                <h1 className={styles.whitetitle}>UX Design Sumo</h1>
                <h5 className={styles.white}>User Experience Designer Community Website Design</h5>

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

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={images[5]} type="video/mp4" />
              </video>
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