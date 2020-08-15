import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Dribbble from '../../assets/dribbble.png';

const Footer = () => (
/* Start of JSX Fragment*/
<>
{/* This is where the Footer is */}

<Jumbotron fluid>
  <Container>
    <p>
      Jaeminkim.com
    </p>
    <p>
    2020
    </p>

    <Container>
  <Row>
    <Col xs={4} md={4}>
    <a href="https://www.google.com/">
      <Image src={Github} roundedCircle />
    </a>
    </Col>
    <Col xs={4} md={4}>
    <a href="https://www.google.com/">
      <Image src={Linkedin} roundedCircle />
    </a>
    </Col>
    <Col xs={4} md={4}>
    <a href="https://www.google.com/">
      <Image src={Dribbble} roundedCircle />
    </a>
    </Col>
  </Row>
</Container>




<h5>Made with <span><p>&hearts; &hearts; &hearts; &hearts; &hearts;</p> in San Francisco Bay Area/Silicon Valley.</span></h5>

  </Container>
</Jumbotron>

</>
/* End of JSX Fragment*/
);

export default Footer;