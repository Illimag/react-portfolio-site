import React from 'react';

import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Banner from '../../assets/img/dominos/banner-04.jpg';
import Img01 from '../../assets/img/dominos/1-01.jpg';
import Img02 from '../../assets/img/dominos/1-02.jpg';
import Img03 from '../../assets/img/dominos/1-03.jpg';
import Img04 from '../../assets/img/dominos/1-04.jpg';
import Img05 from '../../assets/img/dominos/1-05.jpg';
import Img06 from '../../assets/img/dominos/1-06.jpg';
import Img07 from '../../assets/img/dominos/1-07.jpg';
import Img08 from '../../assets/img/dominos/1-08.jpg';
import Img09 from '../../assets/img/dominos/1-09.jpg';

import styles from './pg4.module.css';
import './pg4.css';

import Vid1 from '../../assets/vids/videotest.mp4';

import Codepen from "react-codepen-embed";

export const Pg4 = () => (
    /* Start of JSX Fragment*/ 
    <>

<Container fluid>
    {/* img without text */}
    <Row>
    <Col sm>
    <Image src={Banner} fluid className="pg1Img" />
    </Col>
    </Row>
  </Container>



<Jumbotron fluid className={styles.test}>
    <Container className={styles.fonttest}>
      <h5>Case Study</h5>
      <h1>Domino's App Demo</h1>
      <p>
      Conceptual Design for Prototyping at CCA      </p>
      <h5>Project Date:</h5>
      <p>
      October 2019 - January 2020      </p>
      <h5>Role:</h5>
      <p>
      Interaction Design Student Prototyping class assignment for people with visual imparied spectrum.      </p>

    </Container>
  </Jumbotron>

    <Container fluid>
    
        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Interaction Design Prototype</h3>
      <p>The project was centered around inclusive design for Microsoft, mainly we were interested in creating UIs for people 
who were not the typical users, as so we thought about how to do that. I decided to focuse on people who has 
visual problems, either they had difficulties seeing or they were blinded.

The application that was to be designed to be more inclusive was the Dominos’s Pizza Application.</p>
    <Image src={Img01} fluid className="pg1Img" />
    </Col>
    </Row>

        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Samsung Voice Assistant</h3>
      <p>Additionally I created the prototype with AngularJS and HTML/CSS/JS. Now that the application was able to be coded, I 
decided to use a solution that would use code to implement of a solution for inclusive design. I created some custom code
with HTML and CSS that created an indivisible div, that would not be able to be seen in the visual interface.

The code would be activated using the Samsung Voice Assistant. When the voice assistant was activated, the user can 
activate the invisible div, will read out the instructions of various things on the app that would be able to able to
seen and read the elements.</p>
    <Image src={Img02} fluid className="pg1Img" />
    </Col>
    </Row>

           {/* text */}
           <Row className={styles.test1}>
    <Col sm className={styles.fonttest}>
      <h3>High-Fidelity UI Design</h3>
      <p>Series of various UI designs, Initially I designed some low level mockups that were
brought into the fold to be sued on the production application. It was a growing experience.
I worked on the onboarding of the mobile app. For this I designed it based on some sketches
and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
    </Col>
    </Row>



                 {/* left text right img */}
                 <Row>
        <Col sm>
        <h3>Personas of 
Limitation Spectrum</h3>
        <p>I decidede to create this prototype using the 
original designs, then for the indivudals whom 
had difficulties seeing I decided to increase the 
sizes of the elements, particuarly using more 
the screen to stretch the elements for more
visibility, although this would make the 
appearance of the application would not 
be as nice.</p>
        </Col>
        <Col sm>
        <Image src={Img03} fluid className="pg1Img" />
        </Col>
        </Row>


      {/* img without text */}
        <Row>
        <Col sm>
        <Image src={Img04} fluid className="pg1Img" />
        </Col>
        </Row>


    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img05} fluid className="pg1Img" />
        </Col>
        </Row>       



        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Design Process</h3>
      <p>Various steps to this application. We started with the sketches because the Microsoft Inclusive Designs had personas
that we were designing for. Mainly the Personas was for a person whom be blind or visually impaired, hard to see.
After the sketches were done, based on the original app. We tried to come up with various solutions that would be
able to solve the problems. After the designs were better designed, we did some testing, using user testing, we
tested the interface with users and we were able to see what users thought about the application, and we also
got a heat map to see where the user would be clicking on the interface.</p>
    <Image src={Img06} fluid className="pg1Img" />
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

       {/* text */}
       <Row className={styles.test2}>
    <Col sm className={styles.fonttest}>
      <h3>High-Fidelity UI Design</h3>
      <p>Series of various UI designs, Initially I designed some low level mockups that were
brought into the fold to be sued on the production application. It was a growing experience.
I worked on the onboarding of the mobile app. For this I designed it based on some sketches
and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
    </Col>
    </Row>



                {/* left text right img */}
                <Row>
        <Col sm>
        <h3>Implementation
of the Interface</h3>
        <p>I was not satisfied with the solution, I think
I needed something more than something
that would be just some static file. I wanted
an prototype that would be actually usable
and then I could implement an additional
solution using code.

So I created the HTML/CSS and JS prototype,
implementing with AngularJS. After I created
that prototype, I saw that using the andriod
device I could activate the voice assistant using
certain finger gestures.

I implemented the invisible CSS div that was 
able to be only be seen using the voice 
assistant.</p>
        </Col>
        <Col sm>
        <Image src={Img07} fluid className="pg1Img" />
        </Col>
        </Row>

    {/* codepen*/}
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

         {/* left img right text */}
         <Row>
    <Col sm>
    <Image src={Img08} fluid className="pg1Img" />
    </Col>
    <Col sm>
      <h3>Completion of the
Prototype</h3>
      <p>The prototype was created and I was able
to present it in class, and I think based
on the case files it could be a possible
solution for user.</p>
    </Col>
    </Row>


        {/* left img right text */}
        <Row>
    <Col sm>
    <Image src={Img09} fluid className="pg1Img" />
    </Col>
    <Col sm>
      <h3>Designing and
Implementing</h3>
      <p>Designing and implementing this prototype
gave me a sense of happiness, knowing
that I was designing something that would
help a Personas that needs more care
than others. Im happy to see people being
helped, and I think that after I was able to 
create this interface using code it really opened
up more possiblities for a solution that would
be possible for user.</p>
    </Col>
    </Row> 


    </Container>

    <Jumbotron fluid>
  <Container>
    <Row>
    <Col sm={6}>
    <h1>Sanchez Coffee Co.</h1>
    <Link to={'/pg3'}>
      <p > View Previous </p>
    </Link>
    </Col>
    <Col sm={6} className={styles.test3}>
    <h1>Stepsaver</h1>
    <Link to={'/pg5'}>
      <p > View Next </p>
    </Link>
    </Col>
    </Row>
  </Container>
</Jumbotron>

    </>
      /* End of JSX Fragment*/
)