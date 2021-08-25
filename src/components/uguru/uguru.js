
import React from 'react';

import { Link } from 'react-router-dom'
//import { Slide } from "react-awesome-reveal";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
//import Badge from 'react-bootstrap/Badge';

//import { LinkContainer } from 'react-router-bootstrap';
//import Button from 'react-bootstrap/Button';

//import Banner from '../../assets/img/uguru/banner-01.jpg';
import Img01 from '../../assets/img/uguru/teste.png';
import Img02 from '../../assets/img/uguru/1-02.jpg';
import Img03 from '../../assets/img/uguru/1-03.jpg';
import Img04 from '../../assets/img/uguru/1-04.jpg';
//import Img05 from '../../assets/img/uguru/1-05.jpg';
import Img06 from '../../assets/img/uguru/1-06.jpg';
import Img07 from '../../assets/img/uguru/1-07.jpg';
import Img08 from '../../assets/img/uguru/1-08.png';
import Img09 from '../../assets/img/uguru/1-09.png';

//import testtest from '../../assets/img/uguru/ttt-01.png';

import Vid1 from '../../assets/vids/student_walking.mp4';
import Vid2 from '../../assets/vids/students_sitting.mp4';

//import BannerVid from '../../assets/vids/san-francisco-USMT8JR.mp4';


import styles from './uguru.module.css';
import './uguru.css';

export const Uguru = () => (
  /* Start of JSX Fragment*/
  <>
    <Container fluid>

      {/* left text right img */}
      <Row className={styles.displaytest}>
        <Col sm className={styles.overlay}>
          <div className={styles.paddingTop}>

            <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
              <source src={Vid1} type="video/mp4" />
            </video>

          </div>
        </Col>


        <Col sm className={styles.bannerstyles}></Col>
      </Row>

      {/* img with text */}
      <Row>
        <Col sm>
          <Container fluid className={styles.containerfluid}>
            <Jumbotron fluid className={styles.test}>
              <Container className={styles.fonttest}>
                <h1>Uguru, INC</h1>
                <h5>
                  Mobile Application for College Students
                </h5>
                <p>
                  October 2016 - January 2017<br></br>
                  Graphic UI/UX Intern<br></br>
                  To creating High-Fidelity User Interfaces and Rapid prototypes
                </p>
              </Container>
            </Jumbotron>
          </Container>
          <Image src={Img01} fluid className={styles.imgstyle} />
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

        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FerBvITvMjzPHKSfRKmy1G4%2FIn-and-Out-Customer-Journey-Map%3Fnode-id%3D0%253A39" allowFullScreen ></iframe>
        <Col sm>
          <Image src={Img02} fluid className={styles.imgstyle} />
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
          <Image src={Img03} fluid className={styles.imgstyle} />
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
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FerBvITvMjzPHKSfRKmy1G4%2FIn-and-Out-Customer-Journey-Map%3Fnode-id%3D0%253A39" allowFullScreen></iframe>
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
          <Image src={Img04} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FerBvITvMjzPHKSfRKmy1G4%2FIn-and-Out-Customer-Journey-Map%3Fnode-id%3D0%253A39" allowFullScreen></iframe>

      {/* img with text */}
      <Row>
        <Col sm>
          <h3>User Interface Problem Solving</h3>
          <p>I was using tools mainly from Adobe such as Illustrator and Photoshop. Additionally
            I was using rapid prototyping software that was helping me with seeing how the
            animiations of the User Interface would look. This really helped a lot when trying to
            do the Onboarding screens.</p>
          <Image src={Img06} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FerBvITvMjzPHKSfRKmy1G4%2FIn-and-Out-Customer-Journey-Map%3Fnode-id%3D0%253A39" allowFullScreen></iframe>

      {/* img without text */}
      <Row>
        <Col sm>
          <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
            <source src={Vid2} type="video/mp4" />
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

      {/* img without text */}

      <Row>
        <Col sm >
          <Image src={Img07} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* left img right text */}
      <Row>
        <Col sm>
          <Image src={Img08} fluid className={styles.imgstyle} />
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
          <Image src={Img09} fluid className={styles.imgstyle} />

        </Col>
      </Row>
    </Container>

    <Jumbotron fluid className={styles.bottomNav}>
      <Container>
        <Row className={styles.bottomNavColor}>
          <Col sm={6}>
            <h1>Home</h1>
            <Link to={'/home'}>
              <h5> Go Home </h5>
            </Link>
          </Col>
          <Col sm={6}>
            <h1>SanchezCoffee CO</h1>
            <Link to={'/sanchezcoffeeco'}>
              <h5> View Next </h5>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </>
  /* End of JSX Fragment*/
)