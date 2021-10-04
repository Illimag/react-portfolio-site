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

  useEffect(() => {
    let urls = getImageUrls();
    dispatch(loadImage(urls))
  }, [])

  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  return <>


  <div style={{ display: currentLoadingState ? "block" : "none" , height: "100vh", paddingTop: "10vh" }}>
  


              
<Jumbotron className={styles.homepageloading}>


  <p className={styles.whitetitlehome}>Welcome to Hillodesign!</p>
      <ProgressBar now={currentProgress}/>
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

              
<p className={styles.subtitlelargewhite}>Hillodesign</p>

<p className={styles.whitetitlehome}>SF Bay Area & Silicon Valley UI/UX Designer</p>
 
 <p className={styles.descriptionlargewhite}><span className={styles.green}>Available</span> for Remote, In-House, Contract, Freelance, Part-Time, Full-Time
</p>

<Row>
  <Col xs={12} md={3} className={styles.removepadding}>
  <AnchorLink href="/test">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Portfolio Now</Button>
</p>
</AnchorLink>

</Col>


<Col xs={12} md={3} className={styles.removepadding}>
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










        <Container className={styles.test2}>
        <div id="test"></div>
  
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


    
  <Jumbotron className={styles.mainfloatback}>
  <div className={styles.maincontentwrapper}>

         
<p className={styles.subtitlelargewhite}>Legacy Pictures</p>

<p className={styles.whitetitle}>How To Redesign A Web App</p>
 

<CardGroup>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Client</p>
  <p className={styles.descriptionwhite}>Legacy Pictures</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Role</p>
  <p className={styles.descriptionwhite}>UI/UX Designer</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Location</p>
  <p className={styles.descriptionwhite}>Los Angeles, CA</p>
  
</Card>
</CardGroup>


<Row>
<Col xs={12} md={3} className={styles.removepadding}>
<LinkContainer to="/legacypictures">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Case Study</Button>
</p>
</LinkContainer>

</Col>


<Col xs={12} md={3} className={styles.removepadding}>
<AnchorLink href="/test1">
<p className={styles.clickabletext}>
<Button className={styles.secondarybutton}>View Next</Button>
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
<div id="test1"></div>
  
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


    
  <Jumbotron className={styles.mainfloatback}>
  <div className={styles.maincontentwrapper}>

    
  <p className={styles.subtitlelargewhite}>Artrendezvous</p>

<p className={styles.whitetitle}>Art Community Mobile App</p>
 
<CardGroup>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Client</p>
  <p className={styles.descriptionwhite}>ART•RENDEZ-VOUS</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Role</p>
  <p className={styles.descriptionwhite}>UI/UX Designer</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Location</p>
  <p className={styles.descriptionwhite}>Los Angeles, CA</p>
  
</Card>
</CardGroup>


<Row>
<Col xs={12} md={3} className={styles.removepadding}>
<LinkContainer to="/artrendezvous">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Case Study</Button>
</p>
</LinkContainer>

</Col>


<Col xs={12} md={3} className={styles.removepadding}>
<AnchorLink href="/test2">
<p className={styles.clickabletext}>
<Button className={styles.secondarybutton}>View Next</Button>
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
<div id="test2"></div>
  
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


    
  <Jumbotron className={styles.mainfloatback}>
  <div className={styles.maincontentwrapper}>

    
  <p className={styles.subtitlelargewhite}>Uguru, INC</p>

<p className={styles.whitetitle}>SF SOMA Mobile App Startup</p>

<CardGroup>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Client</p>
  <p className={styles.descriptionwhite}>Uguru, INC.</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Role</p>
  <p className={styles.descriptionwhite}>UI/UX Designer</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Location</p>
  <p className={styles.descriptionwhite}>Los Angeles, CA</p>
  
</Card>
</CardGroup>


<Row>
<Col xs={12} md={3} className={styles.removepadding}>
<LinkContainer to="/uguru">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Case Study</Button>
</p>
</LinkContainer>

</Col>


<Col xs={12} md={3} className={styles.removepadding}>
<AnchorLink href="/test3">
<p className={styles.clickabletext}>
<Button className={styles.secondarybutton}>View Next</Button>
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
<div id="test3"></div>
  
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


    
  <Jumbotron className={styles.mainfloatback}>
  <div className={styles.maincontentwrapper}>

    
  <p className={styles.subtitlelargewhite}>Sanchez Coffee Co.</p>

<p className={styles.whitetitle}>Ecommerce Coffee Web App</p>


<CardGroup>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Client</p>
  <p className={styles.descriptionwhite}>Sanchez Coffee Co.</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Role</p>
  <p className={styles.descriptionwhite}>UI/UX Designer</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Location</p>
  <p className={styles.descriptionwhite}>Los Angeles, CA</p>
  
</Card>
</CardGroup>


<Row>
<Col xs={12} md={3} className={styles.removepadding}>
<LinkContainer to="/sanchezcoffeeco">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Case Study</Button>
</p>
</LinkContainer>

</Col>


<Col xs={12} md={3} className={styles.removepadding}>
<AnchorLink href="/test4">
<p className={styles.clickabletext}>
<Button className={styles.secondarybutton}>View Next</Button>
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
<div id="test4"></div>
  
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


    
  <Jumbotron className={styles.mainfloatback}>
  <div className={styles.maincontentwrapper}>

    
  <p className={styles.subtitlelargewhite}>ApexVR</p>

<p className={styles.whitetitle}>VR Videography Web App</p>

<CardGroup>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Client</p>
  <p className={styles.descriptionwhite}>ApexVR</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Role</p>
  <p className={styles.descriptionwhite}>UI/UX Designer</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Location</p>
  <p className={styles.descriptionwhite}>Los Angeles, CA</p>
  
</Card>
</CardGroup>


<Row>
<Col xs={12} md={3} className={styles.removepadding}>
<LinkContainer to="/apexvr">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Case Study</Button>
</p>
</LinkContainer>

</Col>


<Col xs={12} md={3} className={styles.removepadding}>
<AnchorLink href="/test5">
<p className={styles.clickabletext}>
<Button className={styles.secondarybutton}>View Next</Button>
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
<div id="test5"></div>
  
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


    
  <Jumbotron className={styles.mainfloatback}>
  <div className={styles.maincontentwrapper}>

    
  <p className={styles.subtitlelargewhite}>Stepsaver</p>

<p className={styles.whitetitle}>Houston Valet Tech Startup </p>
 

<CardGroup>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Client</p>
  <p className={styles.descriptionwhite}>Stepsaver</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Role</p>
  <p className={styles.descriptionwhite}>UI/UX Designer</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>Location</p>
  <p className={styles.descriptionwhite}>Los Angeles, CA</p>
  
</Card>
</CardGroup>

<Row>
<Col xs={12} md={3} className={styles.removepadding}>
<LinkContainer to="/stepsaver">
<p className={styles.clickabletext}>
<Button className={styles.mainbutton}>View Case Study</Button>
</p>
</LinkContainer>

</Col>


<Col xs={12} md={3} className={styles.removepadding}>
<AnchorLink href="/test">
<p className={styles.clickabletext}>
<Button className={styles.secondarybutton}>Back to Top</Button>
</p>
</AnchorLink>
</Col>
</Row>

</div>
    </Jumbotron>


  </Col>

  

</Row>

</Container>




</div>
              }

  </>
  /* End of JSX Fragment*/
              }