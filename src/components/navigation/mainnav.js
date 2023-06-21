import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Home } from '../home/home'

import { Contact } from '../contact/contact'
import { Uguru } from '../uguru/uguru'
import { Artrendezvous } from '../artrendezvous/artrendezvous'
import { Sanchezcoffeeco } from '../sanchezcoffeeco/sanchezcoffeeco'
import { Apexvr } from '../apexvr/apexvr'
import { Uxdesignsumo } from '../uxdesignsumo/uxdesignsumo'
import { Legacypictures } from '../legacypictures/legacypictures'
import { Stepsaver } from '../stepsaver/stepsaver'
import { Experience } from '../experience/experience'
import { Interface } from '../interface/interface'
import { About } from '../about/about'
//import { Blog } from '../blog/blog'
//import { Feed } from '../feed/feed'


import useWindowScrollPosition from "@rehooks/window-scroll-position";

import ScrollToTop from 'react-router-scroll-top'
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/githublogo.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';
import Dribbble from '../../assets/dribbble.png';

import logo from '../../assets/newhomepagevids/logo.gif';

import styles from './navigation.module.css'
import './navigation.css'



const routes = [
  { path: '/', name: 'HOME', Component: Home },
  { path: '/legacypictures', name: 'LEGACY PICTURES', Component: Legacypictures },
  { path: '/artrendezvous', name: 'ART•RENDEZ-VOUS', Component: Artrendezvous },
  { path: '/uguru', name: 'UGURU, INC.', Component: Uguru },
  { path: '/experience', name: 'EXPERIENCE', Component: Experience },
  { path: '/interface', name: 'INTERFACE', Component: Interface },
  { path: '/about', name: 'ABOUT', Component: About },
  { path: '/Contact', name: 'RESUME', Component: Contact },
]

function MainNav() {
  const [change, setChange] = useState(false);
  const changePosition = 300;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }



  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])






  return (
    <>
      <div></div>

      <Router>
        <ScrollToTop>
          <>
         
         
         
         
            <Navbar collapseOnSelect className={styles.navbar} expand="lg" sticky="fixed" >

            <LinkContainer to="/">
                <Navbar.Brand className={styles.logo}>
                <h5 className={styles.test1title}>JAEMINKIMDESIGNER.COM</h5>

                </Navbar.Brand>
              </LinkContainer>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarwrap} />
             
              <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarbackgroudcolor} >
             


             
                <Nav className="ml-auto">
                  {routes.map(route => (
                    <Nav.Link 
                    eventKey="1" as={Link}
                    
                    className={styles.navtextcss}
                      key={route.path}
                      as={NavLink}
                      to={route.path}
                      activeClassName="active"
                      exact
                    >
                      {route.name}
                    </Nav.Link>
                  ))}

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

                </Nav>
              </Navbar.Collapse>
            </Navbar>


            

            <Container className="container">
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                    >
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}

            </Container>
          </>
        </ScrollToTop>
      </Router>
    </>

  );
}


export default MainNav;