import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Home } from '../home/home'
import { Contact } from '../contact/contact'
import { Uguru } from '../uguru/uguru'
import { Dasdasdigital } from '../dasdasdigital/dasdasdigital'
import { Sanchezcoffeeco } from '../sanchezcoffeeco/sanchezcoffeeco'
import { Apexvr } from '../apexvr/apexvr'
import { Stepsaver } from '../stepsaver/stepsaver'
import { Blog } from '../blog/blog'
import { Feed } from '../feed/feed'

import ScrollToTop from 'react-router-scroll-top'
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/githublogoback.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';

import logo from '../../assets/jklogo-01.png';

import styles from './navigation.module.css'
import './navigation.css'

const routes = [
  { path: '/', name: 'HOME', Component: Home },
  { path: '/uguru', name: '• UGURU INC.', Component: Uguru },
  { path: '/sanchezcoffeeco', name: '• SANCHEZ COFFEE CO.', Component: Sanchezcoffeeco },
  { path: '/apexvr', name: '• APEX VR', Component: Apexvr },
  { path: '/stepsaver', name: '• STEPSAVER', Component: Stepsaver },
  { path: '/dasdasdigital', name: '• DASDAS DIGITAL', Component: Dasdasdigital },
  { path: '/blog', name: 'BLOG', Component: Blog },
  { path: '/feed', name: 'FEED', Component: Feed },
  { path: '/dasdasdigital', name: '• DASDAS DIGITAL', Component: Dasdasdigital },
  { path: '/Contact', name: 'CONTACT', Component: Contact },
]

    export const TestNav = () => (

    <>
    <Router>
    <ScrollToTop>
      <>
      <Navbar className={styles.navbar} expand="lg" fixed="top" >

<LinkContainer to="/">

  <Navbar.Brand className={styles.logo}>
  <Image src={logo} fluid />
  </Navbar.Brand>

  </LinkContainer>


  <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarwrap} />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="ml-auto">
            {routes.map(route => (
              <Nav.Link
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
<a href="https://github.com/jaeminkim-com">
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
   

   )

export default TestNav;