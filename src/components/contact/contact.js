import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { Jumbotron } from 'react-bootstrap';

import styles from './contact.module.css';
import './contact.css';

import profile from '../../assets/profile.jpg';
import Vid1 from '../../assets/vids/compress_sf.mp4';

export const Contact = () => (
  
  
  /* Start of JSX Fragment*/
  <>


<Container fluid className={styles.test}>
      {/* img with text */}
      <Row>
        <Col sm>
          <p className={styles.title}>John (Jae Min) Kim</p>
          <p className={styles.title}>San Francisco Bay Area, Silicon Valley</p>
          <p className={styles.title}>Email: jaeminkim.com@gmail.com</p>
          <p className={styles.title}>Phone: (510)-513-7376</p>
          <br></br>
          <p className={styles.title}>Many Thanks.</p>
         
        </Col>
      </Row>

    </Container>


    <Container fluid>
      
    <Row className={styles.testrow}>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.testtest}>
              <h5 className={styles.titletextdark}>01/ Services</h5>
              
              <p className={styles.secondtitledark}>
                Web Apps & Corporate Sites
              </p>
              
              <p className={styles.descriptionmaindark}>
              This is where problem solving meets visual impact. I’ll unite products and users, design and experiences.
              </p>

              <p className={styles.secondtitledark}>
              Mobile App Design
              </p>
              
              <p className={styles.descriptionmaindark}>
              Using iOS, Android and an expert vision, I’ll take your application to the next level.
              </p>

              <p className={styles.secondtitledark}>
              Front End Development
              </p>
              
              <p className={styles.descriptionmaindark}>
              I’ll help you to bridge the gap between design and development.
              </p>
 
            </Jumbotron>

          </Col>
        </Row>

        <Row>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.welcome}>
              <h5 className={styles.titletext}>02/ Principles</h5>
              <p className={styles.secondtitle}>
              UX is the sum of all things.
              </p>
              
              <p className={styles.descriptionmain}>
              There’s no style over substance here. I bring together form and the function to create something that looks good and performs brilliantly. Simple.              </p>
              

            </Jumbotron>

          </Col>
        </Row>
        

        <Row>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.welcome}>
              <h5 className={styles.titletext}>03/ Client Comments</h5>
              <p className={styles.descriptionmain}>
                Design, Development, 
              </p>
              

            </Jumbotron>

          </Col>
        </Row>
    </Container>




  </>
  /* End of JSX Fragment*/
)



