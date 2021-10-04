import React from 'react';

import { Container } from 'react-bootstrap'


import Jumbotron from 'react-bootstrap/Jumbotron';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/githublogo.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';
import Dribbble from '../../assets/dribbble.png';

import styles from './footer.module.css'

import Button from 'react-bootstrap/Button';







const Footer = () => (
/* Start of JSX Fragment*/
<>
{/* This is where the Footer is */}



<Jumbotron fluid className={styles.footerBackground}>
  <Container>





    <Row className={styles.socialrow}>
    <Col xs={10} md={6}>
    <a className={styles.description} href="/">Home</a>
    </Col>

    <Col xs={10} md={6}>
    <a className={styles.description} href="legacypictures">Legacy Pictures</a>
    </Col>
    <Col xs={10} md={6}>
    <a className={styles.description} href="artrendezvous">Artrendezvous</a>
    </Col>
    <Col xs={10} md={6}>
    <a className={styles.description} href="uguru">Uguru, INC</a>
    </Col>
    <Col xs={10} md={6}>
    <a className={styles.description} href="sanchezcoffeeco">Sanchez Coffee Co.</a>
    </Col>
    <Col xs={10} md={6}>
    <a className={styles.description} href="apexvr">ApexVR</a>
    </Col>

    <Col xs={10} md={6}>
    <a className={styles.description} href="stepsaver">Stepsaver</a>
    </Col>

    <Col xs={10} md={6}>
    <a className={styles.description} href="Contact">Resume</a>
    </Col>

    </Row>




    <div className={styles.spaceingblack}></div>
<div className={styles.spaceingblack}></div>





    <Row className={styles.socialrow}>

<Col xs={3} md={3} className={styles.centericon}>
<a href="https://www.linkedin.com/in/hillodesign">
  <Image src={Linkedin} roundedCircle className={styles.icons}/>
</a>
</Col>
<Col xs={3} md={3} className={styles.centericon}>
<a href="https://www.behance.net/jaeminkim2">
  <Image src={Behance} roundedCircle className={styles.icons}/>
</a>
</Col>
<Col xs={3} md={3} className={styles.centericon}>
<a href="https://dribbble.com/hillodesign">
  <Image src={Dribbble} roundedCircle className={styles.icons} />
</a>
</Col>
<Col xs={3} md={3} className={styles.centericon}>
<a href="https://github.com/hillodesign">
  <Image src={Github} roundedCircle className={styles.icons} />
</a>
</Col>
</Row>




<div className={styles.spaceingblack}></div>







<p className={styles.description}>
      Hillodesign All Rights Reserved 2021
    </p>



</Container>
</Jumbotron>



















</>
/* End of JSX Fragment*/
);

export default Footer;