import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Pg3Img from '../../assets/img/african-man-holding-a-white-sneaker-PTQSAWM.jpg';


export const Pg3 = () => (
    /* Start of JSX Fragment*/ 
    <>

    <Card>
      <Card.Body>pg3</Card.Body>
    </Card>

    <Container fluid>
    <Row>
    <Col sm>
    <Image src={Pg3Img} fluid className="pg3Img" />
    </Col>
    </Row>

    <Row>
    <Col sm>
      <h1>test</h1>
      <h3>test</h3>
    <Image src={Pg3Img} fluid className="pg3Img" />
    </Col>
    </Row>

    <Row>
    <Col sm>
      <h1>test</h1>
      <h3>test</h3>
    </Col>
    <Col sm>
    <Image src={Pg3Img} fluid className="pg3Img" />
    </Col>
    </Row>
    <Row>
    <Col sm>
    <Image src={Pg3Img} fluid className="pg3Img" />
    </Col>
    <Col sm>
      <h1>test</h1>
      <h3>test</h3>
    </Col>
    </Row>
    </Container>

    </>
      /* End of JSX Fragment*/
)