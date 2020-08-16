import React from 'react';

import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Banner from '../../assets/img/uguru/banner-01.jpg';
import Img01 from '../../assets/img/uguru/1-01.jpg';
import Img02 from '../../assets/img/uguru/1-02.jpg';
import Img03 from '../../assets/img/uguru/1-03.jpg';
import Img04 from '../../assets/img/uguru/1-04.jpg';
import Img05 from '../../assets/img/uguru/1-05.jpg';
import Img06 from '../../assets/img/uguru/1-06.jpg';
import Img07 from '../../assets/img/uguru/1-07.jpg';
import Img08 from '../../assets/img/uguru/1-08.jpg';
import Img09 from '../../assets/img/uguru/1-09.jpg';

import Vid1 from '../../assets/vids/videotest.mp4';

import styles from './pg1.module.css';
import './pg1.css';

export const Pg1 = () => (
    /* Start of JSX Fragment*/ 
    <>

<Container fluid>
    {/* img without text */}
    <Row>
    <Col sm fluid>
    <Image src={Banner} fluid className="pg1Img" />
    </Col>
    </Row>
  </Container>

  <Jumbotron fluid className={styles.test}>
    <Container className={styles.fonttest}>
      <h5>Case Study</h5>
      <h1>Uguru, INC</h1>
      <p>
      Mobile Application for College Students
      </p>
      <h5>Project Date:</h5>
      <p>
      October 2016 - January 2017
      </p>
      <h5>Role:</h5>
      <p>
      Graphic UI/UX Intern to creating High-Fidelity User Interfaces and Rapid prototypes
      </p>

    </Container>
  </Jumbotron>

    <Container fluid>

    {/* Video */}
        <Row fluid>
    <Col sm>
    <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
      <source src={Vid1} type="video/mp4" />
    </video>
      </Col>
      </Row>


        {/* img with text */}
        <Row>
    <Col sm>
      <h3>High-Fidelity UI Design</h3>
      <p>Series of various UI designs, Initially I designed some low level mockups that were
brought into the fold to be sued on the production application. It was a growing experience.
I worked on the onboarding of the mobile app. For this I designed it based on some sketches
and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
    <Image src={Img01} fluid className="pg1Img" />
    </Col>
    </Row>


        {/* left text right img */}
        <Row>
    <Col sm>
    <h3>Designs for
Production Application</h3>
      <p>Additionally I made designs for the websites, 
and various other parts of the interface. 
For example I made designs for the home page 
of the app, the statistics page, and other pages 
such as they would be used on the production 
application that would be deployed and used.</p>
    </Col>
    <Col sm>
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


        {/* left img right text */}
        <Row>
    <Col sm>
    <Image src={Img03} fluid className="pg1Img" />
    </Col>
    <Col sm>
      <h3>Graphic & UI/UX Design</h3>
      <p>I was the graphic & UI/UX Designer Intern at the 
company, and later there was a lead designer that 
came in to help with moving the designs forward faster.
This was a very great to learn from this individual 
and while working with the whole team it really 
showed me how a team would be able to create 
a production product.</p>
    </Col>
    </Row>

            {/* left text right img */}
            <Row>
    <Col sm>
    <h3>Interaction Design
of the Home Menu</h3>
      <p>Home Page of the User Interface in the
Mobile Application, I was able to create
the layout and seeing the different
parts of the interface that needed to
be created.</p>
    </Col>
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
    <h3>User Interface Problem Solving</h3>
      <p>I was using tools mainly from Adobe such as Illustrator and Photoshop. Additionally
I was using rapid prototyping software that was helping me with seeing how the
animiations of the User Interface would look. This really helped a lot when trying to
do the Onboarding screens.</p>
    <Image src={Img06} fluid className="pg1Img" />
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


        {/* img without text */}

    <Row>
    <Col sm >
    <Image src={Img07} fluid className="pg1Img" />
    </Col>
    </Row>

          {/* left img right text */}
          <Row>
    <Col sm>
    <Image src={Img08} fluid className="pg1Img" />
    </Col>
    <Col sm>
    <h3>Completion of Internship</h3>
      <p>Completed my internship creating 
the home page, onboarding screens, etc.
After my internship, this was my first taste of
being part of the tech industry, and it showed
me a little about what direction I needed to go to
be successful.</p>
    </Col>
    </Row>

                {/* left text right img */}
                <Row>
    <Col sm>
    <h3>Changing Major</h3>
      <p>I was unsure initally what to do 
and was attending Hongik 
University for Interaction Design.
After this experience I decided
to change majors to Interaction 
Design at California College of the
Arts (CCA).</p>
    </Col>
    <Col sm>
    <Image src={Img09} fluid className="pg1Img" />
    </Col>
    </Row>





    </Container>

    <Jumbotron fluid>
  <Container>
    <Row>
    <Col sm={6}>
    <h1>Home</h1>
    <Link to={'/home'}>
      <p > Go Home </p>
    </Link>
    </Col>
    <Col sm={6} className={styles.test3}>
    <h1>DasDasDigital</h1>
    <Link to={'/pg2'}>
      <p > View Next </p>
    </Link>
    </Col>
    </Row>
  </Container>
</Jumbotron>

    </>
      /* End of JSX Fragment*/
)
