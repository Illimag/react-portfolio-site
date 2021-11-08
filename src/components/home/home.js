import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";


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

import logo from '../../assets/newhomepagevids/logo.gif';

import { ProgressBar } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProgress, getImages, getLoadingState} from '../../store/imgLoad/reducer'
import { loadImage } from '../../store/imgLoad/actions';

import Media from 'react-media';

import AnchorLink from 'react-anchor-link-smooth-scroll'                           

import video from '../../assets/l.mp4';
import videomobile from '../../assets/ll.mp4';

import desktopImg from '../../assets/img/uguru/trans/pic5.png';
import artimg from '../../assets/img/art/banner-06.jpg';
import uguruimg from '../../assets/img/uguru/1-02.jpg';
import sanchezimg from '../../assets/img/sanchezcoffeeco/1-08.jpg';
import apeximg from '../../assets/img/apexvr/p_apex_3_L-min.png';
import stepsaverimg from '../../assets/img/stepsaver/f_stepsaver_1.png';

import Img34 from '../../assets/smarttvtest1.png';
import Img35 from '../../assets/handheld.png';
import Img36 from '../../assets/sanchezcotest.png';

import PreloadLegacy from '../../assets/smarttvtest1.png';
import PreloadLegacy1 from '../../assets/img/legacypictures/legacypicturesbackground-01.jpg';
import PreloadLegacy11 from '../../assets/img/legacypictures/legacypicturesbackground-02.jpg';


import PreloadArt from '../../assets/businessman-working-on-start-up-project-with-team--KG6C3DN.jpg';
import PreloadArt1 from '../../assets/handheld.png';
import PreloadArt11 from '../../assets/artrendezpicturemobile.jpg';

import PreloadUguru from '../../assets/sfview-01.jpg';
import PreloadUguru1 from '../../assets/sfview-02.jpg';

import PreloadSanchez from '../../assets/businessman-working-on-start-up-project-with-team--KG6C3DN.jpg';
import PreloadApexVR from '../../assets/smarttvtest0.png';


import PreloadUguruBackgroundImageTest from '../../assets/img/uguru/backtest-01-min.jpg';
import PreloadUguruBackgroundImageTestMobile from '../../assets/img/uguru/backtest-06-min.jpg';


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

  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;


const getImageUrls = () => {

      if (isMobile) {
        return importAll(require.context('../../assets/newhomepagevidsmobile', false, /\.(png|jpe?g|svg|mp4|m4v|gif)$/))

    } else {
        return importAll(require.context('../../assets/newhomepageviddesktop', false, /\.(png|jpe?g|svg|mp4|m4v|gif)$/))

    }


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


  <div style={{ display: currentLoadingState ? "block" : "none" , height: "100vh", paddingTop: "6vh" }}>
  

  <ProgressBar animated now={currentProgress} label={` Loading ${now}%`}/>
      

  

              
<Jumbotron className={styles.homepageloading}>

<Row className="justify-content-center">
<a href="/">
                <Navbar.Brand className={styles.logo}>


                
                <div className={styles.spaceing}></div>

                <Row className="justify-content-center">
                <Fade>
                <h1 className={styles.test1title}>Welcome</h1>
                </Fade>
             
                </Row>

                </Navbar.Brand>
              </a>
``
  <div className={styles.spaceing}></div>
</Row>





    </Jumbotron>

    



    </div>
    {images &&
    <div style={{ display: currentLoadingState ? "none" : "block" }}>





<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
                    <Image src={logo} fluid className={styles.displaynone}/>
                    <Image src={PreloadLegacy} fluid className={styles.displaynone}/>
                    <Image src={PreloadLegacy11} fluid className={styles.displaynone}/>

                    <Image src={PreloadArt1} fluid className={styles.displaynone}/>
                    <Image src={PreloadArt11} fluid className={styles.displaynone}/>
                 
                    <Image src={PreloadUguru1} fluid className={styles.displaynone}/>

                    <Image src={PreloadUguruBackgroundImageTestMobile} fluid className={styles.displaynone}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={logo} fluid className={styles.displaynone}/>
                    <Image src={PreloadLegacy} fluid className={styles.displaynone}/>
                    <Image src={PreloadLegacy11} fluid className={styles.displaynone}/>

                    <Image src={PreloadArt1} fluid className={styles.displaynone}/>
                    <Image src={PreloadArt} fluid className={styles.displaynone}/>
                    
                    <Image src={PreloadUguru1} fluid className={styles.displaynone}/>

                    <Image src={PreloadUguruBackgroundImageTestMobile} fluid className={styles.displaynone}/>

                    </div>
                }

              {matches.large &&
               
               <div>
                    <Image src={logo} fluid className={styles.displaynone}/>
                <Image src={PreloadLegacy} fluid className={styles.displaynone}/>
                <Image src={PreloadLegacy1} fluid className={styles.displaynone}/>

                <Image src={PreloadArt1} fluid className={styles.displaynone}/>
                <Image src={PreloadArt} fluid className={styles.displaynone}/>

                <Image src={PreloadUguru} fluid className={styles.displaynone}/>


                <Image src={PreloadUguruBackgroundImageTest} fluid className={styles.displaynone}/>

                </div>
            
                }
            </>
          )}
        </Media>





<Container className={styles.test2}>

  
          <Row className="justify-content-md-center">

          <Jumbotron className={styles.testfloatback}>
              </Jumbotron>

          <Fade>
        


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
                <source src={images[0]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[0]}/>
              </video>
                }

            </>
          )}
        </Media>
        </Fade>  


            <Col md={6} className={styles.removepadding}>


              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

            <Fade>
            <p className={styles.whitetitle}>Hillodesign </p>
            </Fade>

            <Slide direction="up">
<p className={styles.descriptionlargewhitebold}>UI/UX Designer from the San Francisco Bay Area & Silicon Valley.
</p>
</Slide>



<Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.green}> Available</span> for Remote, In-House, Contract, Freelance, Part-Time, Full-Time.</p>
</Slide>
<Row>

  
  <Col xs={12} md={5} className={styles.removepadding}>
  <AnchorLink href="/test">
<p className={styles.clickabletext}>
<Slide direction="up">
<Button className={styles.mainbutton}>View Portfolio Now</Button>
</Slide>

</p>
</AnchorLink>

</Col>

<div className={styles.divider}/>

<Col xs={12} md={5} className={styles.removepadding}>
<LinkContainer to="/contact">
<p className={styles.clickabletext}>
<Slide direction="up">
<Button className={styles.secondarybutton}>Looking for Resume?</Button>
</Slide>
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

<Fade>



    <Media queries={{
small: "(max-width: 599px)",
medium: "(min-width: 600px) and (max-width: 1199px)",
large: "(min-width: 1200px)"
}}>
{matches => (
  <>

    {matches.small &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[1]}/>
    </video>
      }

    {matches.medium &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[1]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[1]}/>
    </video>
      }

  </>
)}
</Media>
</Fade>

  <Col md={6} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>


  <Fade>
<p className={styles.whitetitle}>Legacy Pictures</p>
</Fade>

<Slide direction="up">
<p className={styles.descriptionlargewhitebold}>How To Redesign A Web App in 2021</p>
</Slide>


<Slide direction="up">
  <LinkContainer to="/legacypictures">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>
</Slide>

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

<Fade>
  


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
      <source src={images[2]}/>
    </video>
      }

    {matches.large &&
      <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={images[2]}/>
    </video>
      }

  </>
)}
</Media>
</Fade>

  <Col md={6} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

  <Fade>
<p className={styles.whitetitle}>Artrendezvous</p>
</Fade>

<Slide direction="up">
<p className={styles.descriptionlargewhitebold}>Art Community Mobile App Startup</p>
</Slide>

<Slide direction="up">
  <LinkContainer to="/artrendezvous">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>
</Slide>

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
<Fade>
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
      <source src={images[3]}/>
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
</Fade>

  <Col md={6} className={styles.removepadding}>


    
  <Jumbotron className={styles.mainfloatbackpieces}>
  <div className={styles.maincontentwrapperpiece}>

  <Fade>
<p className={styles.whitetitle}>Uguru, INC.</p>
      </Fade>

      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}>San Francisco SOMA Mobile App Startup</p>
</Slide>


<Slide direction="up">
  <LinkContainer to="/uguru">
<p className={styles.clickabletext}>Learn More >
</p>
</LinkContainer>
</Slide>

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