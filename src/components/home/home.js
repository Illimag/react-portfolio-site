import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Badge from 'react-bootstrap/Badge';

import { LinkContainer } from 'react-router-bootstrap';


/*
import Vid01 from '../../assets/vids/compress_vid1.mp4';
*/
import Vid02 from '../../assets/vids/compress_vid2.mp4';
import Vid03 from '../../assets/vids/compress_vid3.mp4';
import Vid04 from '../../assets/vids/compress_vid4.mp4';
import Vid05 from '../../assets/vids/compress_vid5.mp4';
import Banner from '../../assets/vids/testback.mp4';
/*
import Vid06 from '../../assets/vids/compress_vid0.mp4';
*/

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

import styles from './hometest.module.css';
import './hometest.css';


export const Home = () => (
  /* Start of JSX Fragment*/ 
  <>


<Container fluid className={styles.containerfluid}>


<Jumbotron className={styles.jumbotron_color}>

</Jumbotron>



    <Row>
    <Col md={12} className={styles.removepaddingmain}>

    <Jumbotron className={styles.mainfloat}>
    <Jumbotron className={styles.mainfloatback}>

    <Jumbotron className={styles.textbox}>
    <h1 className={styles.largefont}>Hi</h1>
  <p className={styles.whitefont}>
    Thank you for taking the time out of your day to visit this website. 
    Please let me know if you are looking to chat. Have a nice day!
  </p>
  <LinkContainer to="/Contact">
  <p>
    <Button className={styles.mainbutton}>Contact Now</Button>
  </p>
  </LinkContainer>
  <LinkContainer to="/Contact">
  <p>
    <Button className={styles.mainbutton}>Scroll to view portfolio</Button>
  </p>
  </LinkContainer>
  </Jumbotron>
</Jumbotron>
</Jumbotron>

    <video className={styles.mainvideo} autoPlay preload="true" loop playsInline muted>
      <source src={Banner} type="video/mp4" />
    </video>    
</Col>
</Row>



    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    
   
      
      <h1 className={styles.white}>Uguru INC</h1>

      <h1 className={styles.white}>UI/UX & Graphic Design Intern</h1>

      <h1 className={styles.white}>INTERNSHIP AT FUNDED APP STARTUP IN DOWNTOWN SF</h1>

      <p className={styles.whitefont}>Uguru was a Mobile Application Startup funded by Bay Angels. 
      And they were looking to launch thier client side app for the use of college students looking 
      for tutoring services in a online marketplace.
</p>

    <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}



<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}
<Badge variant="primary" className={styles.Prototyping_badge}>Prototyping</Badge>{' '}

</div>


      <LinkContainer to="/uguru">
  <p>
    <Button className={styles.viewmore}>View Case Study</Button>
  </p>
  </LinkContainer>

</Jumbotron>

            <LinkContainer to="/uguru">
    <video className={styles.testvideo} autoPlay preload="true" loop playsInline muted>
      <source src={Vid02} type="video/mp4" />
    </video>    
    </LinkContainer>                

    </Col>

    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
   

      <h1 className={styles.white}>Sanchez Coffee CO</h1>
      <h1 className={styles.white}>Web Designer/Developer</h1>

<h1 className={styles.white}>REMOTE POSITION AT A LA E-COMMERCE COMPANY</h1>

<p className={styles.whitefont}>Custom branded coffee company located in Los Angelos, CA. 
They provided a good product via web platform. </p>

      <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}


<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}

<Badge variant="primary" className={styles.wordpress_badge}>WordPress</Badge>{' '}
<Badge variant="primary" className={styles.css_badge}>CSS</Badge>{' '}
<Badge variant="primary" className={styles.woocommerce_badge}>Woocommerce</Badge>{' '}

</div>
      <LinkContainer to="/sanchezcoffeeco">
  <p>
    <Button className={styles.viewmore}>View Case Study</Button>
  </p>
  </LinkContainer>



</Jumbotron>



    <LinkContainer to="/sanchezcoffeeco">
    <video className={styles.testvideo} autoPlay preload="true" loop playsInline muted>
      <source src={Vid05} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    

   
      <h1 className={styles.white}>Apex VR</h1>
      <h1 className={styles.white}>Web Designer</h1>

<h1 className={styles.white}>Contact to build a web app for VR concept from bay area local videography company</h1>

<p className={styles.whitefont}>Virtual Reality (VR) Website for Videography company located in San Leandro, 
User interface designer working with a developer, working together built a web app with Angular and aframe.</p>

      <div className={styles.badgelist}>

      <Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}

      
<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}

<Badge variant="primary" className={styles.vr_badge}>VR</Badge>{' '}
<Badge variant="primary" className={styles.angular_badge}>Angular.JS</Badge>{' '}
  
      </div>

      <LinkContainer to="/apexvr">
  <p>
    <Button className={styles.viewmore}>View Case Study</Button>
  </p>
  </LinkContainer>

</Jumbotron>



    <LinkContainer to="/apexvr">
    <video className={styles.testvideo} autoPlay preload="true" loop playsInline muted>
      <source src={Vid04} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
   
      <h1 className={styles.white}>Stepsaver</h1>
      <h1 className={styles.white}>User Interface Designer</h1>

<h1 className={styles.white}>Web Design remote contract with huston app startup</h1>

<p className={styles.whitefont}>Stepsaver is an valet company that tracks vehicles, 
using it’s priotory softwre it would be able to be used and people would pay for it.</p>
      <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}


<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}

<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}

</div>
      <LinkContainer to="/stepsaver">
  <p>
    <Button className={styles.viewmore}>View Case Study</Button>
  </p>
  </LinkContainer>

</Jumbotron>



    <LinkContainer to="/stepsaver">
    <video className={styles.testvideo} autoPlay preload="true" loop playsInline muted>
      <source src={Vid03} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
      
  

      <h1 className={styles.white}>Dasdasdigital</h1>
      <h1 className={styles.white}>UI/UX Designer & Web Developer</h1>

<h1 className={styles.white}>Designing Digital Agency startup's</h1>

<p className={styles.whitefont}>I was approached by the CEO of DasDasDigital, 
her dream was to start a agency that specailzes in digital marketing and website services. 
Her was looking for people to join her and create the agency.</p>
      <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}


<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}

<Badge variant="primary" className={styles.react_badge}>React.JS</Badge>{' '}

</div>
      <LinkContainer to="/dasdasdigital">
  <p>
    <Button className={styles.viewmore}>View Case Study</Button>
  </p>
  </LinkContainer>

</Jumbotron>



    <LinkContainer to="/dasdasdigital">
    <video className={styles.testvideo} autoPlay preload="true" loop playsInline muted>
      <source src={Vid02} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

  
    </Row>


</Container>









 {/*
  <Container fluid className={styles.containerfluid}>

  <Row>
    <Col className={styles.removepadding}>
      
    <LinkContainer to="/uguru">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid01} type="video/mp4" />
    </video>
    </LinkContainer>    
    </Col>
    </Row>
  
    <Row>
    <Col md={8} className={styles.removepadding}>
    <LinkContainer to="/apexvr">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid02} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>
    <Col md={4} className={styles.removepadding}>

    <LinkContainer to="/sanchezcoffeeco">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid03} type="video/mp4" />
    </video>    
    </LinkContainer>

    <LinkContainer to="/dasdasdigital">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid04} type="video/mp4" />
    </video>    
    </LinkContainer>    

    </Col>
    </Row>

    <Row>
    <Col md={6} className={styles.removepadding}>
    <LinkContainer to="/stepsaver">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid05} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>
    <Col md={6}>
    <Jumbotron>
  <h1>Hi</h1>
  <p>
    Thank you for taking the time out of your day to visit this website. 
    Please let me know if you are looking to chat. Have a nice day!
  </p>
  <LinkContainer to="/Contact">
  <p>
    <Button className={styles.mainbutton} variant="primary">Contact Now</Button>
  </p>
  </LinkContainer>
</Jumbotron>
    
    </Col>
    </Row>

    </Container>
*/}



  {/*
    <Row className={styles.row}>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg1">
    <Image src={Pg1Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg2">
    <Image src={Pg2Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
  </Row>
  <Row className={styles.row}>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg3">
    <Image src={Pg3Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg4">
    <Image src={Pg4Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
  </Row>
  <Row className={styles.row}>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg5">
    <Image src={Pg5Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg6">
    <Image src={Pg6Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
  </Row>
*/}







  </>
  /* End of JSX Fragment*/
)