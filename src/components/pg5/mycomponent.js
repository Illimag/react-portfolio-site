import React from 'react';

import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Img01 from '../../assets/img/stepsaver/1-01.jpg';
import Img02 from '../../assets/img/stepsaver/1-02.jpg';
import Img03 from '../../assets/img/stepsaver/1-03.jpg';
import Img04 from '../../assets/img/stepsaver/1-04.jpg';
import Img05 from '../../assets/img/stepsaver/1-05.jpg';
import Img06 from '../../assets/img/stepsaver/1-06.jpg';
import Img07 from '../../assets/img/stepsaver/1-07.jpg';
import Img08 from '../../assets/img/stepsaver/1-08.jpg';
import Img09 from '../../assets/img/stepsaver/1-09.jpg';

import Vid1 from '../../assets/vids/videotest.mp4';

export const Pg5 = () => (
    /* Start of JSX Fragment*/ 
    <>

<Jumbotron fluid>
    <Container>
      <h5>Case Study</h5>
      <h1>Stepsaver</h1>
      <p>
      Houston Valet Company User Interface Designs
      </p>
      <h5>Project Date:</h5>
      <p>
      October 2017 - January 2018      </p>
      <h5>Role:</h5>
      <p>
      User Interface Designer for a valet company that tracks vehicles, using it’s priotory software it would be able to be used.      </p>

    </Container>
  </Jumbotron>

    <Container fluid>

        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Web and Mobile Application</h3>
      <p>Stepsaver is a startup in Houstin Texas, that had a web application and a mobile
application that would be able to be used for valets. CEO of Stepsaver was looking for a designer 
who could do some redesigns for the web application and websits.</p>
    <Image src={Img01} fluid className="pg1Img" />
    </Col>
    </Row>


        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Redesign of the Applications</h3>
      <p>The project was first a redesign of the web application as well as the mobile application.
There were only a web application and based on the web application. I created the mobile 
application designs. There were some designs that neeeded to be done.</p>
    <Image src={Img02} fluid className="pg1Img" />
    </Col>
    </Row>

    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img03} fluid className="pg1Img" />
        </Col>
        </Row>

  
          {/* left img right text */}
          <Row>
    <Col sm>
    <Image src={Img04} fluid className="pg1Img" />
    </Col>
    <Col sm>
      <h1>Technical Requirements</h1>
      <h3>There were alot of technical requirements
of the application. There wasent much to work
with. So it was free form, but there were a 
couple of functionality that needed to be
designed.</h3>
    </Col>
    </Row>

    {/* Video */}
    <Row>
    <Col sm>
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid1} type="video/mp4" />
    </video>
      </Col>
      </Row>

                {/* left text right img */}
                <Row>
        <Col sm>
        <h3>Navigation of the App</h3>
        <p>The personas and what kind of people 
would use the app. They were looking for 
an easy time to navigate through the app.

The user journey is that they need to go to
the web app and being able to go from here.
Then using the mobile app would be able to do
this.</p>
        </Col>
        <Col sm>
        <Image src={Img05} fluid className="pg1Img" />
        </Col>
        </Row>


    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img06} fluid className="pg1Img" />
        </Col>
        </Row>

          {/* img with text */}
          <Row>
    <Col sm>
      <h3>Designs from the original web app</h3>
      <p>Starting with the web app, I took the designs from the original web app. The flow the web app.
Then I created a very basic list of functionality that needed to be designed for. Mainly I also created the
list of pages, that needed to be considered as a redesign. I created the map of functionality that the web app.
I started creating the UI components. I tried to keep it as lose to the original designs as possible. </p>
    <Image src={Img07} fluid className="pg1Img" />
    </Col>
    </Row>


    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img08} fluid className="pg1Img" />
        </Col>
        </Row>


          {/* img with text */}
          <Row>
    <Col sm>
      <h3>Completion of Designs</h3>
      <p>Designs was completed and the CEO found it satisfactory and he paid the amount that we discussed.
Actually first I sent over the web app, then I renegotiated for the mobile app. Then I completed the mobile app.
I was happy to complete the project and that CEO was happy enough with the designs that he paid as we discussed.
This was a happy, I don’t know if they had enough funding to continue but overall I was able to spend more time
on the designs and take it to the next level..</p>
    <Image src={Img09} fluid className="pg1Img" />
    </Col>
    </Row>

    </Container>

    <Jumbotron fluid>
  <Container>
    <Row>
    <Col sm={6}>
    <h1>Domino's App Demo</h1>
    <Link to={'/pg4'}>
      <p > View Previous </p>
    </Link>
    </Col>
    <Col sm={6}>
    <h1>Nike Rate</h1>
    <Link to={'/pg6'}>
      <p > View Next </p>
    </Link>
    </Col>
    </Row>
  </Container>
</Jumbotron>

    </>
      /* End of JSX Fragment*/
)