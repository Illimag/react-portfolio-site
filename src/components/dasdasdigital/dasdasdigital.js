import React from 'react';

import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { ProgressBar } from 'react-bootstrap'

import styles from './dasdasdigital.module.css';
import './dasdasdigital.css';
import Vid1 from '../../assets/vids/teamwork.mp4';
import Codepen from "react-codepen-embed";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProgress, getImages, getLoadingState } from '../../store/imgLoad/reducer'
import { loadImage } from '../../store/imgLoad/actions';

const importAll = (r) => {
  let images = [];
  let imageUrls = [];
  r.keys().map((item, index) => { images.push(r(item)); });

  images.map((image) => {
    imageUrls.push(image);
  })

  return imageUrls;
}

export const Dasdasdigital = () => {
  const dispatch = useDispatch()
  const getImageUrls = () => {
    return importAll(require.context('../../assets/img/dasdasdigital', false, /\.(png|PNG|jpe?g|svg)$/))
  }

  const currentLoadingState = useSelector(state => getLoadingState(state));
  const currentProgress = useSelector(state => getCurrentProgress(state));
  const images = useSelector(state => getImages(state));

  useEffect(() => {
    let urls = getImageUrls();
    dispatch(loadImage(urls))
  }, [])
  /* Start of JSX Fragment*/
  return <>
    <div style={{ display: currentLoadingState ? "block" : "none", height: "100vh", paddingTop: "30vh" }}>
      <ProgressBar animated now={currentProgress} />
      <h1>Loading images...</h1>
    </div>

    {images &&
      <div style={{ display: currentLoadingState ? "none" : "block" }}>
        <Container fluid className={styles.containerfluid}>
          {/* left text right img */}
          <Row className={styles.displaytest}>
            <Col sm className={styles.overlay}>
              <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
                <source src={Vid1} type="video/mp4" />
              </video>
            </Col>

            <Col sm className={styles.bannerstyles}></Col>
          </Row>

          {/* img with text */}
          <Row>
            <Col sm>
              <Container fluid className={styles.containerfluid}>
                <Jumbotron fluid className={styles.test}>
                  <Container className={styles.fonttest}>
                    <h1>DasDasDigital</h1>
                    <p>
                      Digital Agency Startup at Oakland, CA
                    </p>
                    <p>
                      October 2018 - January 2019
                    </p>
                    <p>
                      Web Developer for MVP built with React.JS and Bootstrap
                    </p>
                  </Container>
                </Jumbotron>
              </Container>

              <Image src={images[0]} fluid className={styles.imgstyle} />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          {/* img without text */}
          <Row>
            <Col sm>
              <Image src={images[8]} fluid className={styles.imgstyle} />
            </Col>
          </Row>
        </Container>

        <Container fluid>

          {/* img with text */}
          <Row className={styles.test1}>
            <Col sm className={styles.fonttest}>
              <h3>High-Fidelity UI Design</h3>
              <p>Series of various UI designs, Initially I designed some low level mockups that were
                brought into the fold to be sued on the production application. It was a growing experience.
                I worked on the onboarding of the mobile app. For this I designed it based on some sketches
                and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
              <Image src={images[0]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

          {/* img without text */}
          <Row>
            <Col sm>
              <Image src={images[1]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

          {/* text */}
          <Row className={styles.test1}>
            <Col sm className={styles.fonttest}>
              <h3>High-Fidelity UI Design</h3>
              <p>Series of various UI designs, Initially I designed some low level mockups that were
                brought into the fold to be sued on the production application. It was a growing experience.
                I worked on the onboarding of the mobile app. For this I designed it based on some sketches
                and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
            </Col>
          </Row>


          {/* img without text */}
          <Row>
            <Col sm>
              <Image src={images[2]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

          {/* left text right img */}
          <Row className={styles.test1}>
            <Col sm className={styles.fonttest}>
              <h3>Development of
                the MVP</h3>
              <p>After the designs were completed
                they were sent over to me, and I started
                with the development of the MVP.</p>
            </Col>
            <Col sm>
              <Image src={images[3]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

          {/* codepen*/}
          <Row>
            <Col sm>
              <Codepen
                hash="WNrqqqe"
                user="jaemnkm"
                defaultTab="result"
                preview={false}
                height={600}
              />
            </Col>
          </Row>

          {/* Video */}
          <Row>
            <Col sm>
              <video autoPlay preload="true" loop playsInline muted>
                <source src={Vid1} type="video/mp4" />
              </video>
            </Col>
          </Row>

          {/* img with text */}
          <Row className={styles.test1}>
            <Col sm className={styles.fonttest}>
              <h3>Remote Team</h3>
              <p>The CEO was a software developer located in Oakland, there was a designer, a social media
                specialist who did the research for the personas, as well as a admin type of person who was
                in charge of maintain admin stuff.</p>
              <Image src={images[4]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

          {/* text */}
          <Row className={styles.test2}>
            <Col sm className={styles.fonttest}>
              <h3>High-Fidelity UI Design</h3>
              <p>Series of various UI designs, Initially I designed some low level mockups that were
                brought into the fold to be sued on the production application. It was a growing experience.
                I worked on the onboarding of the mobile app. For this I designed it based on some sketches
                and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
            </Col>
          </Row>

          {/* img without text */}
          <Row>
            <Col sm>
              <Image src={images[5]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

          {/* img with text */}
          <Row className={styles.test1}>
            <Col sm className={styles.fonttest}>
              <h3>Developing the Web Interface</h3>
              <p>The designer designed it based on Bootstrap 4 UI Components so developing the site was quite easy.
                I created each page and created the fodler system. Then I implemented each page, using code. After
                the project was over I went back and I redesigned the home page and other pages, as well as
                putting the code base onto a React.JS folder system.</p>
              <Image src={images[6]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

          {/* left text right img */}
          <Row className={styles.test1}>
            <Col sm className={styles.fonttest}>
              <h3>Completion of
                the MVP</h3>
              <p>The CEO didn’t move any farther
                with the project and it fell through it
                and didn’t go anywhere. We can say
                that the project was closed because of
                lack of interest, or lack of effort, or
                people decided as a group that we were
                going to come apart, maybe we didn’t
                have enough funding.</p>
            </Col>
            <Col sm>
              <Image src={images[7]} fluid className={styles.imgstyle} />
            </Col>
          </Row>

        </Container>

        <Jumbotron fluid className={styles.bottomNav}>
          <Container>
            <Row className={styles.bottomNavColor}>
              <Col sm={6}>
                <h1>Stepsaver</h1>
                <Link to={'/stepsaver'}>
                  <h5> View Previous </h5>
                </Link>
              </Col>
              <Col sm={6} >
                <h1>Questions or just want to say hi?</h1>
                <Link to={'/contact'}>
                  <h5> Contact Now </h5>
                </Link>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    }
  </>
  /* End of JSX Fragment*/
}