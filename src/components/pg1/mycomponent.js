import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Pg1Img from '../../assets/img/african-man-holding-a-white-sneaker-PTQSAWM.jpg';
import Vid0 from '../../assets/vids/a51-black.mp4';
import Vid1 from '../../assets/vids/videotest.mp4';

import Codepen from "react-codepen-embed";

export const Pg1 = () => (
    /* Start of JSX Fragment*/ 
    <>

    <Card>
      <Card.Body>pg1</Card.Body>
    </Card>

    <Container fluid>
    <Row>
    <Col sm>
    <Image src={Pg1Img} fluid className="pg1Img" />
    </Col>
    </Row>


    <Row>
    <Col sm>
      <h1>test</h1>
      <h3>test</h3>
    <Image src={Pg1Img} fluid className="pg1Img" />
    </Col>
    </Row>

    <Row>
        <Col sm>
        <Codepen
        hash="WNrqqqe"
        user="jaemnkm"
        defaultTab="result"
        preview="false"
      />
        </Col>
      </Row>

    <Row>
    <Col sm>
      <h1>test</h1>
      <h3>test</h3>
    </Col>
    <Col sm>
    <Image src={Pg1Img} fluid className="pg1Img" />
    </Col>
    </Row>

    <Row>
    <Col sm>
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid1} type="video/mp4" />
    </video>
      </Col>
      </Row>



    <Row>
    <Col sm>
    <Image src={Pg1Img} fluid className="pg1Img" />
    </Col>
    <Col sm>
      <h1>test</h1>
      <h3>test</h3>
    </Col>
    </Row>


      
    <Row>
    <Col sm>
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid0} type="video/mp4" />
    </video>
    </Col>
    </Row>


    </Container>

    </>
      /* End of JSX Fragment*/
)
