import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import Banner from '../../assets/img/african-man-holding-a-white-sneaker-PTQSAWM.jpg';
import Pg1Img from '../../assets/img/african-man-holding-a-white-sneaker-PTQSAWM.jpg';
import Pg2Img from '../../assets/img/aerial-view-of-san-francisco-skyline-with-city-lig-T7T2SBP.jpg';
import Pg3Img from '../../assets/img/businesswoman-planning-with-adhesive-notes-on-glas-JX7K3ZV.jpg';
import Pg4Img from '../../assets/img/black-man-sitting-in-a-cafe-and-drinking-a-coffee-2S4RKJM.jpg';
import Pg5Img from '../../assets/img/aerial-view-of-san-francisco-skyline-at-sunset-M4SQCV8.jpg';
import Pg6Img from '../../assets/img/aerial-view-of-san-francisco-skyline-with-city-lig-T7T2SBP.jpg';

import './mycomponent.css';

export const Home = () => (
  /* Start of JSX Fragment*/ 
  <>

<Card>
  <Card.Body>Home</Card.Body>
</Card>

<Container fluid>
    <Carousel>
      <Carousel.Item>
      <Image src={Banner} fluid className="pg1Img" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Banner} fluid className="pg1Img" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Banner} fluid className="pg1Img" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>

  <Container fluid>


    <Row>
    <Col sm>
    <Image src={Pg1Img} fluid className="pg1Img" />
    </Col>
    <Col sm>
    <Image src={Pg2Img} fluid className="pg2Img" />
    </Col>
  </Row>
  <Row>
    <Col sm>
    <Image src={Pg3Img} fluid className="pg3Img" />
    </Col>
    <Col sm>
    <Image src={Pg4Img} fluid className="pg4Img" />
    </Col>
  </Row>
  <Row>
    <Col sm>
    <Image src={Pg5Img} fluid className="pg5Img" />
    </Col>
    <Col sm>
    <Image src={Pg6Img} fluid className="pg6Img" />
    </Col>
  </Row>
  </Container>

  </>
  /* End of JSX Fragment*/
)