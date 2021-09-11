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






  </>
  /* End of JSX Fragment*/
)



