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



    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    <h1 className={styles.white}>Uguru INC</h1>
      <div className={styles.badgelist}>

      <Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}

      

<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}
<Badge variant="primary" className={styles.Prototyping_badge}>Prototyping</Badge>{' '}
  
      </div>
   

</Jumbotron>

            <LinkContainer to="/uguru">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid02} type="video/mp4" />
    </video>    
    </LinkContainer>                

    </Col>

    <Col md={4} className={styles.removepadding}>
 

    </Col>
    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    <h1 className={styles.white}>Sanchez Coffee CO</h1>
      <div className={styles.badgelist}>

      <Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}

      
<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}

<Badge variant="primary" className={styles.wordpress_badge}>WordPress</Badge>{' '}
<Badge variant="primary" className={styles.css_badge}>CSS</Badge>{' '}
<Badge variant="primary" className={styles.woocommerce_badge}>Woocommerce</Badge>{' '}
  
      </div>
   



</Jumbotron>



    <LinkContainer to="/uguru">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid05} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

    <Col md={4} className={styles.removepadding}>
 

    </Col>
    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    <h1 className={styles.white}>Apex VR</h1>
      <div className={styles.badgelist}>

      <Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}

      
<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}

<Badge variant="primary" className={styles.vr_badge}>VR</Badge>{' '}
<Badge variant="primary" className={styles.angular_badge}>Angular.JS</Badge>{' '}
  
      </div>
   


</Jumbotron>



    <LinkContainer to="/uguru">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid04} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

    <Col md={4} className={styles.removepadding}>
 

    </Col>
    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
    <h1 className={styles.white}>Stepsaver</h1>
      <div className={styles.badgelist}>

      <Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}

      
<Badge variant="primary" className={styles.Mobile_badge}>Mobile App</Badge>{' '}

<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}
  
      </div>
   
 

</Jumbotron>



    <LinkContainer to="/uguru">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid03} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

    <Col md={4} className={styles.removepadding}>
 

    </Col>
    </Row>

    <Row>
    <Col md={12} className={styles.removepadding}>



    <Jumbotron className={styles.float}>
      
  <h1 className={styles.white}>Dasdasdigital</h1>
      <div className={styles.badgelist}>

      <Badge variant="primary" className={styles.UI_badge}>UI/UX</Badge>{' '}

      
<Badge variant="primary" className={styles.web_badge}>Web</Badge>{' '}

<Badge variant="primary" className={styles.react_badge}>React.JS</Badge>{' '}
  
      </div>
   

</Jumbotron>



    <LinkContainer to="/uguru">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid02} type="video/mp4" />
    </video>    
    </LinkContainer>    
    </Col>

  
    </Row>

    



</Container>





<Jumbotron className={styles.jumbotron_color}>
  <h1>Hi</h1>
  <p>
    Thank you for taking the time out of your day to visit this website. 
    Please let me know if you are looking to chat. Have a nice day!
  </p>
  <LinkContainer to="/Contact">
  <p>
    <Button className={styles.mainbutton}>Contact Now</Button>
  </p>
  </LinkContainer>
</Jumbotron>












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