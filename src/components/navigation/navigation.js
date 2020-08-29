import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




import { LinkContainer } from 'react-router-bootstrap';

import { Home } from '../home/homevid'

import { Contact } from '../contact/contact'

import { Pg1 } from '../pg1/pg1'

import { Pg2 } from '../pg2/pg2'

import { Pg3 } from '../pg3/pg3'

import { Pg4 } from '../pg4/pg4'

import { Pg5 } from '../pg5/pg5'

import { Pg6 } from '../pg6/pg6'

import ScrollToTop from 'react-router-scroll-top'

import styles from './navigation.module.css'
import './navigation.css'


const Navigation = () => (

  <>
  {/* This is where the React Router Routes Pages */}
  <MemoryRouter>

  <ScrollToTop>
    <Container className={styles.navbarbackground}>
        <Navbar className={styles.navbar} expand="xl" sticky="top">
          <Navbar.Brand className={styles.logo} to="/">Jaeminkim.com</Navbar.Brand>
  
          {/*
          <Image src={diamond} fluid className={styles.diamond} />
          */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarwrap} />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto">

            <LinkContainer to="/">
              <Nav.Link className={styles.white}>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Contact">
              <Nav.Link className={styles.white}>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/pg1">
              <Nav.Link className={styles.white}>• Uguru, INC</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg2">
              <Nav.Link className={styles.white}>• DasDasDigital</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg3">
              <Nav.Link className={styles.white}>• Sanchez Coffee Co.</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg4">
              <Nav.Link className={styles.white}>• Domino's App Demo</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg5">
              <Nav.Link className={styles.white}>• Stepsaver</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg6">
              <Nav.Link className={styles.white}>• Nike Rate</Nav.Link>
            </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/pg1">
              <Pg1 />
            </Route>
            <Route path="/pg2">
              <Pg2 />
            </Route>
            <Route path="/pg3">
              <Pg3 />
            </Route>
            <Route path="/pg4">
              <Pg4 />
            </Route>
            <Route path="/pg5">
              <Pg5 />
            </Route>
            <Route path="/pg6">
              <Pg6 />
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
