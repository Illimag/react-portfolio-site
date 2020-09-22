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
import ScrollToTop from 'react-router-scroll-top'
import { LinkContainer } from 'react-router-bootstrap';

import styles from './navigation.module.css'
import './navigation.css'

const routes = [
  { path: 'react-portfolio-site/', name: 'Home', Component: Home },
  { path: 'react-portfolio-site/Contact', name: 'Contact', Component: Contact },
  { path: 'react-portfolio-site/uguru', name: 'Uguru', Component: Uguru },
  { path: 'react-portfolio-site/dasdasdigital', name: 'Dasdasdigital', Component: Dasdasdigital },
  { path: 'react-portfolio-site/sanchezcoffeeco', name: 'Sanchezcoffeeco', Component: Sanchezcoffeeco },
  { path: 'react-portfolio-site/apexvr', name: 'Apexvr', Component: Apexvr },
  { path: 'react-portfolio-site/stepsaver', name: 'Stepsaver', Component: Stepsaver },
]

    export const TestNav = () => (

    <>

    <Router>
      <>
      <Navbar className={styles.navbar} expand="lg" fixed="top" >

<LinkContainer to="/">
  <Navbar.Brand className={styles.logo}>
    Jaeminkim
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
    </Router>
    </>
   

   )

export default TestNav;