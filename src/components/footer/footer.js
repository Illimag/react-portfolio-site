import React from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Github from '../../assets/githublogo.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';
import Dribbble from '../../assets/dribbble.png';
import styles from './footer.module.css'
import ScrollToTop from 'react-router-scroll-top'

import { Home } from '../home/home'
import { Contact } from '../contact/contact'
import { Uguru } from '../uguru/uguru'
import { Artrendezvous } from '../artrendezvous/artrendezvous'
import { Legacypictures } from '../legacypictures/legacypictures'
import { Interface } from '../interface/interface'
import { Experience } from '../experience/experience'

const routes = [
  { path: '/', name: 'HOME', Component: Home },
  { path: '/legacypictures', name: 'LEGACY PICTURES', Component: Legacypictures },
  { path: '/artrendezvous', name: 'ART•RENDEZ-VOUS', Component: Artrendezvous },
  { path: '/uguru', name: 'UGURU, INC.', Component: Uguru },
  { path: '/experience', name: 'EXPERIENCE', Component: Experience },
  { path: '/interface', name: 'INTERFACE', Component: Interface },
  { path: '/Contact', name: 'RESUME', Component: Contact },
]

const Footer = () => (
/* Start of JSX Fragment*/
<>
<Router>
  <ScrollToTop>
    <>
    <Container className={styles.footerBackground}>

        <Container className={styles.navbar}>
          <Container className={styles.paddingtop}>
             

          <a href="https://johnkim8867.github.io/portfoliov1/2015-2016_industrialdesign_illustration_user_interface_internship/index.html">
      <p className={styles.descriptionunderline}>
      2015-2016 Industrial Design Illustration User Interface Internship
        </p>
                  </a>

                  <a href="https://johnkim8867.github.io/portfoliov1/2016-2017__UI_graphic_freelance/index.html">
      <p className={styles.descriptionunderline}>
      2016-2017 UI Graphic Freelance
        </p>
                  </a>

                  <a href="https://johnkim8867.github.io/portfoliov1/2017-2019_user_interface_freelance/index.html">
      <p className={styles.descriptionunderline}>
      2017-2019 User Interface Freelance
        </p>
                  </a>

                  <a href="https://johnkim8867.github.io/portfoliov1/2020-2021_cca/index.html">
      <p className={styles.descriptionunderline}>
      2020-2021 CCA Interaction Design
        </p>
                  </a>

                  <a href="https://johnkim8867.github.io/portfoliov1/2020-2022_user_interface_freelance/index.html">
      <p className={styles.descriptionunderline}>
      2020-2022 User Interface Freelance
        </p>
                  </a>




            <a href="https://johnkim8867.github.io/ebook">
      <p className={styles.descriptionunderline}>
      User Interface and User Experience Design Handbook
        </p>
                  </a>


                  <div className={styles.spaceingblack}></div>
            <Row className="justify-content-center">
              <Row className={styles.socialrow}>
                <Col xs={3} md={3} className={styles.centericon}>
                  <a href="https://www.linkedin.com/in/hillodesign">
                    <Image src={Linkedin} roundedCircle className={styles.icons} />
                  </a>
                </Col>
                <Col xs={3} md={3} className={styles.centericon}>
                  <a href="https://www.behance.net/jaeminkim2">
                    <Image src={Behance} roundedCircle className={styles.icons} />
                  </a>
                </Col>
                <Col xs={3} md={3} className={styles.centericon}>
                  <a href="https://dribbble.com/hillodesign">
                    <Image src={Dribbble} roundedCircle className={styles.icons} />
                  </a>
                </Col>
                <Col xs={3} md={3} className={styles.centericon}>
                  <a href="https://github.com/hillodesign">
                    <Image src={Github} roundedCircle className={styles.icons} />
                  </a>
                </Col>
              </Row>
            </Row>

      <div className={styles.spaceingblack}></div>
        <p className={styles.description}>
            John Kim 2022
        </p>

        <p className={styles.description}>
            San Francisco Bay Area & Silicon Valley
        </p>

        <div className={styles.spaceingblack}></div>
        </Container>
      </Container>
    </Container>
    </>
  </ScrollToTop>
</Router>
</>
/* End of JSX Fragment*/
);
export default Footer;