import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

import { Home } from './components/home/mycomponent'

import { Contact } from './components/contact/mycomponent'

import { Pg1 } from './components/pg1/mycomponent'

import { Pg2 } from './components/pg2/mycomponent'

import { Pg3 } from './components/pg3/mycomponent'

import { Pg4 } from './components/pg4/mycomponent'

import { Pg5 } from './components/pg5/mycomponent'

import { Pg6 } from './components/pg6/mycomponent'

const App = () => (
  <MemoryRouter>
    <Container>

        <Navbar fixed="top" bg="light" expand="lg">
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
              <Nav.Link>Pg1</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg2">
              <Nav.Link>Pg2</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg3">
              <Nav.Link>Pg3</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg4">
              <Nav.Link>Pg4</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg5">
              <Nav.Link>Pg5</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pg6">
              <Nav.Link>Pg6</Nav.Link>
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
  </MemoryRouter>

  
);

export default App;
