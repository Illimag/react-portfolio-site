import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


import styles from './contact.module.css';
import './contact.css';

import profile from '../../assets/profile.jpg';
import Vid1 from '../../assets/vids/compress_sf.mp4';

// import App from '../pdf_viewer/pdf_viewer.js';
import { PDFViewer } from 'react-view-pdf';

export const Contact = () => (
  
  
  /* Start of JSX Fragment*/
  <>
    <Container fluid>
      {/* Video */}
      <Row>
        <Col sm>
          <video autoPlay preload="true" loop playsInline muted>
            <source src={Vid1} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </Container>

    <Container fluid className={styles.test}>
      <Row>
        <Col xs={6} md={4}>
          <Image src={profile} roundedCircle />
        </Col>
      </Row>
    </Container>

    <Container fluid className={styles.test}>
      {/* img with text */}
      <Row>
        <Col sm>
          <h3>John (Jae Min) Kim</h3>
          <h3>San Francisco Bay Area, Silicon Valley</h3>
          <h3>Email: jaeminkim.com@gmail.com</h3>
          <h3>Phone: (510)-513-7376</h3>
          <br></br>
          <h3>Many Thanks.</h3>


         

        <PDFViewer url="../../assets/resume/resume.pdf" />


          <p>
      AP Art at Mission San Jose High School, background in Fine Art. Academic background began as an Industrial (Product) Design major at Hongik University in Seoul, South Korea, from Industrial Design > De Anza College (Cupertino, CA) Graphic Design > California College of the Arts (San Francisco, CA and Oakland, CA) Industrial Design > California College of the Arts (San Francisco, CA and Oakland, CA) Interaction Design / minor in Computational Practices > Southern New Hamshire University (Remote) Graphic & Web. Winter 2021 Presidents List for SNHU (https://meritpages.com/Jae-Min-Kim/6415480), Pell Grant, CAL Grant B, Clorox Scholor, CCA Scholor, Federal Work Study.
          </p>

          <p>
            Immersed into the UI/UX Design field as an intern at a startup in downtown San Francisco (SOMA), at the Spear Tower.
          </p>

          <p>
            While working as a remote independent contractor since 2010s, worked with clients across the continental United States, Hawaii, Canada, etc.
          </p>

          <p>
            In-house experience at various startup, small businesses, and corporations, Design Associated Minted, LLC , department of 500, team size 80~, Clorox Building.
          </p>

          <p>
            With encouragement from co-developer teams, peer pressure, etc, self-taught web coder, web development, front-end development, full-stack development, additionally minor in computational practices at California College of the Arts (CCA), while an Interaction Design major, JavaScript, HTML, CSS, Jquery, wordpress, bootstrap. Favorite Front-end JavaScript Framework = React.JS.
          </p>


        </Col>
      </Row>

    </Container>



  </>
  /* End of JSX Fragment*/
)



