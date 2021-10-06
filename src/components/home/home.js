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

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProgress, getImages, getLoadingState} from '../../store/imgLoad/reducer'
import { loadImage } from '../../store/imgLoad/actions';

import Media from 'react-media';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import video from '../../assets/l.mp4';
import videomobile from '../../assets/ll.mp4';

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

  const now = Math.round(currentProgress);
  console.log(now)

  useEffect(() => {
    let urls = getImageUrls();
    dispatch(loadImage(urls))
  }, [])

  
  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  return <>


  <div style={{ display: currentLoadingState ? "block" : "none" , height: "100vh", paddingTop: "10vh" }}>
  


              
<Jumbotron className={styles.homepageloading}>


  <p className={styles.whitetitle}>Welcome to Hillodesign!</p>
      <ProgressBar animated now={currentProgress} label={` Completed ${now}%`}/>
      <p className={styles.descriptionlargewhite}>Please wait while the website loads an awesome digital web experience just for you!</p>
      

    </Jumbotron>




    </div>
    {images &&
    <div style={{ display: currentLoadingState ? "none" : "block" }}>




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

            <Col md={8} className={styles.removepadding}>


              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

   

<p className={styles.whitetitlehome}>UI/UX Designer</p>
<p className={styles.subtitlelargewhitehome}>San Francisco Bay Area & Silicon Valley</p>
 
 <p className={styles.descriptionlargewhite}><span className={styles.green}>Available</span> for Remote, In-House, Contract, Freelance, Part-Time, Full-Time
</p>

<Row>
  <Col xs={12} md={4} className={styles.removepadding}>
  <AnchorLink href="/test">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Portfolio Now</Button>
</p>
</AnchorLink>

</Col>

<div className={styles.divider}/>

<Col xs={12} md={4} className={styles.removepadding}>
<LinkContainer to="/contact">
<p className={styles.clickabletext}>
<Button className={styles.secondarybutton}>Looking for Resume?</Button>
</p>
</LinkContainer>
</Col>
</Row>

</div>
              </Jumbotron>


            </Col>

            
       
          </Row>
          
        </Container>






        <LinkContainer to="/legacypictures" className={styles.clickablecontainer}>
        <Container className={styles.test2}>
        
        <div id="test"></div>
  
<Row className="justify-content-md-center">
     <Jumbotron className={styles.testfloatbackpieces}>
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
      <source src={images[2]}/>
    </video>
      }

    {matches.medium &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[3]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[3]}/>
    </video>
      }

  </>
)}
</Media>

  <Col md={8} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

<p className={styles.whitetitle}>Legacy Pictures</p>
<p className={styles.subtitlelargewhitehome}>How To Redesign A Web App in 2021 as a designer</p>
 
 
<Col md={6} className={styles.removepadding}>

<div className={styles.badgelist}>
<Badge variant="primary" className={styles.UX_badge}>ADOBE XD</Badge>{' '}
<Badge variant="primary" className={styles.UX_badge}>ADOBE Photoshop</Badge>{' '}
<Badge variant="primary" className={styles.UX_badge}>ADOBE Creative Suite</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>FIGMA</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER EXPERIENCE</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER INTERFACE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>RESPONSIVE DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USER TESTING</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USABILITY</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>Los Angeles</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>Prototyping</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>Personas</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>Mind Mapping</Badge>{' '}
                </div>

  </Col>

  <LinkContainer to="/legacypictures">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>
</div>



    </Jumbotron>


  </Col>

  

</Row>

</Container>
</LinkContainer>



<LinkContainer to="/artrendezvous" className={styles.clickablecontainer}>
<Container className={styles.test2}>
<div id="test1"></div>
  
<Row className="justify-content-md-center">
     <Jumbotron className={styles.testfloatbackpieces}>
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
      <source src={images[4]}/>
    </video>
      }

    {matches.medium &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[5]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[5]}/>
    </video>
      }

  </>
)}
</Media>

  <Col md={8} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

<p className={styles.whitetitle}>Artrendezvous</p>
<p className={styles.subtitlelargewhitehome}>Art Community Mobile App Startup</p>


<Col md={6} className={styles.removepadding}>

<div className={styles.badgelist}>
<Badge variant="primary" className={styles.UX_badge}>ADOBE XD</Badge>{' '}
<Badge variant="primary" className={styles.UX_badge}>ADOBE Photoshop</Badge>{' '}
<Badge variant="primary" className={styles.UX_badge}>ADOBE Creative Suite</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>FIGMA</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER EXPERIENCE</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER INTERFACE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>RESPONSIVE DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USER TESTING</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USABILITY</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>New York City</Badge>{' '}
                </div>

  </Col>
  <LinkContainer to="/artrendezvous">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>

</div>
    </Jumbotron>


  </Col>

  

</Row>

</Container>
</LinkContainer>


<LinkContainer to="/uguru" className={styles.clickablecontainer}>
<Container className={styles.test2}>
<div id="test2"></div>
  
<Row className="justify-content-md-center">
     <Jumbotron className={styles.testfloatbackpieces}>
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
      <source src={images[6]}/>
    </video>
      }

    {matches.medium &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[7]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[7]}/>
    </video>
      }

  </>
)}
</Media>

  <Col md={8} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

<p className={styles.whitetitle}>Uguru, INC</p>
<p className={styles.subtitlelargewhitehome}>San Francisco SOMA Mobile App Startup</p>


<Col md={6} className={styles.removepadding}>

<div className={styles.badgelist}>
                <Badge variant="primary" className={styles.UX_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER EXPERIENCE</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER INTERFACE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>RESPONSIVE DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USER TESTING</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USABILITY</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>San Francisco</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>Startup</Badge>{' '}
                </div>

  </Col>
  <LinkContainer to="/uguru">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>
</div>
    </Jumbotron>


  </Col>

  

</Row>

</Container>
</LinkContainer>

<LinkContainer to="/sanchezcoffeeco" className={styles.clickablecontainer}>
<Container className={styles.test2}>
<div id="test3"></div>
  
<Row className="justify-content-md-center">
     <Jumbotron className={styles.testfloatbackpieces}>
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
      <source src={images[8]}/>
    </video>
      }

    {matches.medium &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[9]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[9]}/>
    </video>
      }

  </>
)}
</Media>

  <Col md={8} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

<p className={styles.whitetitle}>Sanchez Coffee Co.</p>
<p className={styles.subtitlelargewhitehome}>Ecommerce Web App Payment Platform</p>


<Col md={6} className={styles.removepadding}>


<div className={styles.badgelist}>
                <Badge variant="primary" className={styles.UX_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>FIGMA</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER EXPERIENCE</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER INTERFACE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>E-COMMERCE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WORDPRESS</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>PAYPAL MANAGER</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>HTML</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>CSS</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>STRIPE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>SQUARE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>RESPONSIVE DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>PAYMENT GATEWAY</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>PAYMENT PROCESSOR</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USER TESTING</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USABILITY</Badge>{' '}
                </div>

  </Col>

  <LinkContainer to="/sanchezcoffeeco">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>
</div>
    </Jumbotron>


  </Col>

  

</Row>

</Container>
</LinkContainer>

<LinkContainer to="/apexvr" className={styles.clickablecontainer}>
<Container className={styles.test2}>
<div id="test4"></div>
  
<Row className="justify-content-md-center">
     <Jumbotron className={styles.testfloatbackpieces}>
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
      <source src={images[10]}/>
    </video>
      }

    {matches.medium &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[11]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[11]}/>
    </video>
      }

  </>
)}
</Media>

  <Col md={8} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

<p className={styles.whitetitle}>ApexVR</p>
<p className={styles.subtitlelargewhitehome}>Virtual Reality Videography Company Web App</p>


<Col md={6} className={styles.removepadding}>

<div className={styles.badgelist}>
<Badge variant="primary" className={styles.UX_badge}>Videography</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>FIGMA</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER EXPERIENCE</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER INTERFACE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>HTML</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>CSS</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>RESPONSIVE DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USER TESTING</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USABILITY</Badge>{' '}
                </div>

  </Col>
  <LinkContainer to="/apexvr">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>
</div>
    </Jumbotron>


  </Col>

  

</Row>

</Container>
</LinkContainer>

<LinkContainer to="/stepsaver" className={styles.clickablecontainer}>
<Container className={styles.test2}>
<div id="test5"></div>
  
<Row className="justify-content-md-center">
     <Jumbotron className={styles.testfloatbackpieces}>
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
      <source src={images[12]}/>
    </video>
      }

    {matches.medium &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[13]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[13]}/>
    </video>
      }

  </>
)}
</Media>

  <Col md={8} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

<p className={styles.whitetitle}>Stepsaver</p>
<p className={styles.subtitlelargewhitehome}>Houston Valet Tech Mobie Web App Startup</p>
 

<Col md={6} className={styles.removepadding}>

<div className={styles.badgelist}>
                <Badge variant="primary" className={styles.UX_badge}>ADOBE ILLUSTRATOR</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER EXPERIENCE</Badge>{' '}
                <Badge variant="primary" className={styles.UX_badge}>USER INTERFACE</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>WEB DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>RESPONSIVE DESIGN</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USER TESTING</Badge>{' '}
                  <Badge variant="primary" className={styles.UX_badge}>USABILITY</Badge>{' '}
                </div>

  </Col>
  <LinkContainer to="/stepsaver">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>

</div>
    </Jumbotron>


  </Col>

  

</Row>

</Container>
</LinkContainer>



</div>
              }

  </>
  /* End of JSX Fragment*/
              }