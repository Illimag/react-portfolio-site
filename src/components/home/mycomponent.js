import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from '../../assets/img/home/1-01.jpg';
import Pg1Img from '../../assets/img/home/1-02.jpg';
import Pg2Img from '../../assets/img/home/1-03.jpg';
import Pg3Img from '../../assets/img/home/1-04.jpg';
import Pg4Img from '../../assets/img/home/1-05.jpg';
import Pg5Img from '../../assets/img/home/1-06.jpg';
import Pg6Img from '../../assets/img/home/1-07.jpg';

import './mycomponent.css';

export const Home = () => (
  /* Start of JSX Fragment*/ 
  <>

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
    <LinkContainer to="/pg1">
    <Image src={Pg1Img} fluid className="pg1Img" />
    </LinkContainer>
    </Col>
    <Col sm>
    <LinkContainer to="/pg2">
    <Image src={Pg2Img} fluid className="pg2Img" />
    </LinkContainer>
    </Col>
  </Row>
  <Row>
    <Col sm>
    <LinkContainer to="/pg3">
    <Image src={Pg3Img} fluid className="pg3Img" />
    </LinkContainer>
    </Col>
    <Col sm>
    <LinkContainer to="/pg4">
    <Image src={Pg4Img} fluid className="pg4Img" />
    </LinkContainer>
    </Col>
  </Row>
  <Row>
    <Col sm>
    <LinkContainer to="/pg5">
    <Image src={Pg5Img} fluid className="pg5Img" />
    </LinkContainer>
    </Col>
    <Col sm>
    <LinkContainer to="/pg6">
    <Image src={Pg6Img} fluid className="pg6Img" />
    </LinkContainer>
    </Col>
  </Row>
  </Container>

  </>
  /* End of JSX Fragment*/
)