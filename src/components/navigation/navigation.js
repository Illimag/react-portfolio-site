import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap';

import { Home } from '../home/homevid'

import { Contact } from '../contact/contact'

import { Uguru } from '../uguru/uguru'

import { Dasdasdigital } from '../dasdasdigital/dasdasdigital'

import { Sanchezcoffeeco } from '../sanchezcoffeeco/sanchezcoffeeco'

import { Apexvr } from '../apexvr/apexvr'

import { Stepsaver } from '../stepsaver/stepsaver'

import { Nikerate } from '../nikerate/nikerate'

import ScrollToTop from 'react-router-scroll-top'

import styles from './navigation.module.css'
import './navigation.css'

const Navigation = () => (

  <>
  {/* This is where the React Router Routes Pages */}
  <MemoryRouter>

  <ScrollToTop>
    <Container className={styles.navbarbackground}>
        <Navbar className={styles.navbar} expand="lg" sticky="top">
          <Navbar.Brand className={styles.logo} to="/">JAEMINKIM.COM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarwrap} />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto">

            <LinkContainer to="/">
              <Nav.Link className={styles.white}>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Contact">
              <Nav.Link className={styles.white}>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/uguru">
              <Nav.Link className={styles.white}>• Uguru, INC</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/apexvr">
              <Nav.Link className={styles.white}>• Apex VR</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sanchezcoffeeco">
              <Nav.Link className={styles.white}>• Sanchez Coffee Co.</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dasdasdigital">
              <Nav.Link className={styles.white}>• Dasdasdigital</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stepsaver">
              <Nav.Link className={styles.white}>• Stepsaver</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nikerate">
              <Nav.Link className={styles.white}>• Nike Rate</Nav.Link>
            </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/uguru">
              <Uguru />
            </Route>
            <Route path="/apexvr">
              <Apexvr />
            </Route>
            <Route path="/sanchezcoffeeco">
              <Sanchezcoffeeco />
            </Route>
            <Route path="/dasdasdigital">
              <Dasdasdigital />
            </Route>
            <Route path="/stepsaver">
              <Stepsaver />
            </Route>
            <Route path="/nikerate">
              <Nikerate />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/"> 
              <Home />
            </Route>
          </Switch>

    </Container>
    </ScrollToTop>

  </MemoryRouter>
  </>
);

export default Navigation;