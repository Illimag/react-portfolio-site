import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/githublogoback.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';
import Dribbble from '../../assets/dribbble.png';

import styles from './footer.module.css'

const Footer = () => (
/* Start of JSX Fragment*/
<>
{/* This is where the Footer is */}



<Jumbotron fluid className={styles.footerBackground}>
  <Container>
<p className={styles.centertext}>UI/UX Designer local to the San Francisco Bay Area and Silicon Valley.</p>

  </Container>


  <Container>
  <Row className={styles.socialrow}>

    <Col xs={4} md={4} className={styles.centericon}>
    <a href="https://www.linkedin.com/in/jaeminkim-com">
      <Image src={Linkedin} roundedCircle className={styles.icons}/>
    </a>
    </Col>
    <Col xs={4} md={4} className={styles.centericon}>
    <a href="https://www.behance.net/jaeminkim2">
      <Image src={Behance} roundedCircle className={styles.icons}/>
    </a>
    </Col>
    <Col xs={4} md={4} className={styles.centericon}>
    <a href="https://dribbble.com/jaeminkim-com">
      <Image src={Dribbble} roundedCircle className={styles.icons} />
    </a>
    </Col>
    <Col xs={4} md={4} className={styles.centericon}>
    <a href="https://github.com/jaeminkim-com">
      <Image src={Github} roundedCircle className={styles.icons} />
    </a>
    </Col>
  </Row>



    <p className={styles.centertext}>
      All Rights Reserved*
    </p>
    <p className={styles.centertext}>
    2021
    </p>

    <p className={styles.centertext}><a href="https://github.com/jaeminkim-com/user_interface_and_user_experience_design_handbook">User Interface and User Experience Design Handbook</a>

    </p>
</Container>
</Jumbotron>



</>
/* End of JSX Fragment*/
);

export default Footer;