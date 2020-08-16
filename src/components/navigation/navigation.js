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

const Navigation = () => (

  <>
  {/* This is where the React Router Routes Pages */}
  <MemoryRouter>

  <ScrollToTop>

    <Container>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand to="/">JAEMINKIM.COM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/pg1">
              <Nav.Link>Uguru, INC</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg2">
              <Nav.Link>DasDasDigital</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg3">
              <Nav.Link>Sanchez Coffee Co.</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg4">
              <Nav.Link>Domino's App Demo</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg5">
              <Nav.Link>Stepsaver</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg6">
              <Nav.Link>Nike Rate</Nav.Link>
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
