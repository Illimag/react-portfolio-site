import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';


import { Slide } from "react-awesome-reveal";


import Badge from 'react-bootstrap/Badge';

import { LinkContainer } from 'react-router-bootstrap';


/*
import Vid01 from '../../assets/vids/compress_vid1.mp4';
*/
import Vid02 from '../../assets/vids/asian_girl.mp4';
import Vid03 from '../../assets/vids/two_pros.mp4';
import Vid04 from '../../assets/vids/compress_vid4.mp4';
import Vid05 from '../../assets/vids/compress_vid5.mp4';

import Uguru_Img from '../../assets/img/uguru/banner-01.jpg';
import Sanchezcoffeeco_Img from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Apexvr_Img from '../../assets/img/dominos/1-01.jpg';
import Stepsaver_Img from '../../assets/img/stepsaver/banner-05.jpg';
import DasDas_Img from '../../assets/img/dasdasdigital/banner-02.jpg';


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



<Container className={styles.test}>



<Slide direction="up" triggerOnce>
<LinkContainer to="/uguru">
    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.mainfloatback}>
      <div className={styles.textbox}>
    <Slide direction="up" duration="1500">
      <h1 className={styles.whitetitle}>Uguru INC</h1>
      <h1 className={styles.whitesubtitle}>UI/UX & Graphic Design Internshio at funded startup in downtown San Francisco</h1>

  

  </Slide>
  <Slide direction="up" duration="1000" delay="10">
  <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}
<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}
<Badge variant="primary" className={styles.Prototyping_badge}>Prototyping</Badge>{' '}

</div>
</Slide>
</div>
</Jumbotron>

<video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={Vid02} type="video/mp4" />
    </video>

    
               

    </Col>

    </Row>
    </LinkContainer>     
    </Slide>

    <Slide direction="up" triggerOnce duration="1000">
    <LinkContainer to="/sanchezcoffeeco">
    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    <div className={styles.textbox}>
    <Slide direction="up" duration="1500">

      <h1 className={styles.whitetitle}>Sanchez Coffee CO</h1>
      <h1 className={styles.whitesubtitle}>Web Designer/Developer, remote position at a LA E-commerce Company</h1>




  </Slide>
  <Slide direction="up" duration="1500" delay="10">
  <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}
<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}
<Badge variant="primary" className={styles.Prototyping_badge}>Prototyping</Badge>{' '}

</div>
</Slide>
</div>
</Jumbotron>


<Image src={Sanchezcoffeeco_Img} fluid className={styles.homepageimg} />

    </Col>

    </Row>
    </LinkContainer>
    </Slide>

    <Slide direction="up" triggerOnce duration="1500">
    <LinkContainer to="/apexvr">
    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    <div className={styles.textbox}>
    <Slide direction="up" duration="1500">

   
      <h1 className={styles.whitetitle}>Apex VR</h1>
      <h1 className={styles.whitesubtitle}>Web Designer, contract to build a web app for VR concept from bay area local videography company</h1>

  </Slide>
  <Slide direction="up" duration="1500" delay="10">
  <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}
<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}
<Badge variant="primary" className={styles.Prototyping_badge}>Prototyping</Badge>{' '}

</div>
</Slide>
</div>
</Jumbotron>


<Image src={Apexvr_Img} fluid className={styles.homepageimg} />
 
    </Col>

    </Row>
    </LinkContainer>
    </Slide>


    <Slide direction="up" triggerOnce duration="1500">
    <LinkContainer to="/stepsaver">
    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    <div className={styles.textbox}>
    <Slide direction="up" duration="1500">
      <h1 className={styles.whitetitle}>Stepsaver</h1>
      <h1 className={styles.whitesubtitle}>User Interface Designer, remote contract with huston app startup</h1>

  </Slide>
  <Slide direction="up" duration="1500" delay="10">
  <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}
<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}
<Badge variant="primary" className={styles.Prototyping_badge}>Prototyping</Badge>{' '}

</div>
</Slide>
</div>
</Jumbotron>


<Image src={Stepsaver_Img} fluid className={styles.homepageimg} />
 
    </Col>

    </Row>
    </LinkContainer>
    </Slide>

    <Slide direction="up" triggerOnce duration="1500" triggerOnce>
    <LinkContainer to="/dasdasdigital">
    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.mainfloatback}>
    <div className={styles.textbox}>
    <Slide direction="up" duration="1500">
  

      <h1 className={styles.whitetitle}>Dasdasdigital</h1>
      <h1 className={styles.whitesubtitle}>UI/UX Designer & Web Developer, Designing Digital Agency Startup</h1>


  </Slide>
  <Slide direction="up" duration="1500" delay="10">
  <div className={styles.badgelist}>

<Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}
<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}
<Badge variant="primary" className={styles.Prototyping_badge}>Prototyping</Badge>{' '}

</div>
</Slide>
</div>
</Jumbotron>

<video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
      <source src={Vid03} type="video/mp4" />
    </video>
 
    </Col>

  
    </Row>
    </LinkContainer>
    </Slide>

    </Container>

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