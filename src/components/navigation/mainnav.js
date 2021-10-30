import React, { useState } from "react";
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

import logo from '../../assets/12751aab25f807388dbec0178150c69d_w200.webp';

import styles from './navigation.module.css'
import './navigation.css'

const routes = [
  { path: '/', name: 'HOME', Component: Home },
  { path: '/legacypictures', name: 'LEGACY PICTURES', Component: Legacypictures },
  { path: '/artrendezvous', name: 'ART•RENDEZ-VOUS', Component: Artrendezvous },
  { path: '/uguru', name: 'UGURU, INC.', Component: Uguru },
  { path: '/sanchezcoffeeco', name: 'SANCHEZCOFFEE', Component: Sanchezcoffeeco },
  { path: '/apexvr', name: 'APEXVR', Component: Apexvr },
  { path: '/stepsaver', name: 'STEPSAVER', Component: Stepsaver },
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

  return (
    <>

      <Router>
        <ScrollToTop>
          <>
         
          <Navbar collapseOnSelect className={styles.navbar} expand="lg" fixed="top" >
          <a href="/">
                <Navbar.Brand className={styles.logo}>
                <Image src={logo} fluid />
                <h5 className={styles.test1title}>HILLODESIGN</h5>

                </Navbar.Brand>
              </a>
              </Navbar>

            
          </>
        </ScrollToTop>
      </Router>
    </>

  );
}


export default MainNav;