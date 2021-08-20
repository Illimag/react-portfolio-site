import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// LazyLoadImage } from 'react-lazy-load-image-component';


//import { Slide } from "react-awesome-reveal";
//import Typing from 'react-typing-animation';

import Badge from 'react-bootstrap/Badge';

import { LinkContainer } from 'react-router-bootstrap';
/*
import Img01 from '../../assets/img/uguru/ttt-01.png';
import Sanchezcoffeeimg from '../../assets/img/san.png';
import Apexvrimg from '../../assets/img/apexvr-01.png';
import Stepsaverimg from '../../assets/img/ddd-01.png';
import DasDasimg from '../../assets/img/dasdasdgg-01.png';
*/

/*
import Vid01 from '../../assets/vids/compress_vid1.mp4';
*/
import Vid02 from '../../assets/vids/compress_vid6.mp4';
import Vid03 from '../../assets/vids/compress_vid0.mp4';
import Vid04 from '../../assets/vids/compress_vid1.mp4';
import Vid05 from '../../assets/vids/compress_vid2.mp4';
import Vid06 from '../../assets/vids/compress_vid5.mp4';
import Vid07 from '../../assets/vids/compress_vid4.mp4';

/*
import Uguru_Img from '../../assets/img/uguru/banner-01.jpg';
import Sanchezcoffeeco_Img from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Apexvr_Img from '../../assets/img/dominos/1-01.jpg';
import Stepsaver_Img from '../../assets/img/stepsaver/banner-05.jpg';
import DasDas_Img from '../../assets/img/dasdasdigital/banner-02.jpg';
*/

/*
import Vid06 from '../../assets/vids/compress_vid0.mp4';
*/

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/*
import Image from 'react-bootstrap/Image';
import Pg1Img from '../../assets/img/home/1-02.jpg';
*/
/*
import Pg2Img from '../../assets/img/home/1-03.jpg';
import Pg3Img from '../../assets/img/home/1-04.jpg';
import Pg4Img from '../../assets/img/home/1-05.jpg';
import Pg5Img from '../../assets/img/home/1-06.jpg';
import Pg6Img from '../../assets/img/home/1-07.jpg';
*/

import styles from './hometest.module.css';
import './hometest.css';


export const Home = () => (

  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  <>
    <Container fluid className={styles.containerfluid}>

      {/*
<Container fluid className={styles.containerfluid}>
    <Jumbotron fluid className={styles.test}>

    <Container className={styles.fonttest}>


    <h5 className={styles.welcometitle}>Welcome</h5>

    <h5 className={styles.welcomesubtitle}>@UI/UX Designer @San Francisco Bay Area @Silicon Valley, California</h5>

    <div className={styles.badgelist}>

<Badge variant="primary" className={styles.first_badge}>UI/UX</Badge>{' '}
<Badge variant="primary" className={styles.second_badge}>App</Badge>{' '}
<Badge variant="primary" className={styles.third_badge}>Prototyping</Badge>{' '}
<Badge variant="primary" className={styles.first_badge}>Web</Badge>{' '}
<Badge variant="primary" className={styles.second_badge}>E-Commerce</Badge>{' '}
<Badge variant="primary" className={styles.third_badge}>WordPress</Badge>{' '}
<Badge variant="primary" className={styles.fourth_badge}>PayPal</Badge>{' '}
<Badge variant="primary" className={styles.fifth_badge}>HTML/CSS</Badge>{' '}
<Badge variant="primary" className={styles.second_badge}>VR</Badge>{' '}
<Badge variant="primary" className={styles.third_badge}>Aframe</Badge>{' '}
<Badge variant="primary" className={styles.fourth_badge}>Angular.JS</Badge>{' '}
<Badge variant="primary" className={styles.third_badge}>React.JS</Badge>{' '}
<Badge variant="primary" className={styles.fourth_badge}>Bootstrap</Badge>{' '}


</div>


</Container>
</Jumbotron>
</Container>
*/}
      <Container className={styles.test}>
        <Row>
          <Col md={12} className={styles.removepadding}>

            <Jumbotron className={styles.welcome}>
              <h5>Welcome</h5>
              <p>
                John (Jae Min) Kim is a local UI/UX Designer from the San Francisco Bay Area, and Silicon Valley. <br></br>
              </p>

              <p>
                <span className={styles.available}>Available</span> for Full-Time, Part-Time, Contract and Freelance. Have a nice day!
              </p>

              <LinkContainer to="/Contact">
                <p>
                  <Button className={styles.mainbutton} variant="primary">Contact Now</Button>
                </p>
              </LinkContainer>
            </Jumbotron>

          </Col>
        </Row>

        <LinkContainer to="/uguru">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
                <div className={styles.maincontentwrapper}>

                  <h1 className={styles.whitetitle}>UGURU INC.</h1>
                  <h5 className={styles.white}>UI/UX & Graphic Designer Internship at Mobile Application Startup in Downtown San Francisco</h5>

                  <div className={styles.badgelist}>
                    <Badge variant="primary" className={styles.first_badge}>UI/UX</Badge>{' '}
                    <Badge variant="primary" className={styles.second_badge}>App</Badge>{' '}
                    <Badge variant="primary" className={styles.third_badge}>Prototyping</Badge>{' '}
                    <Badge variant="primary" className={styles.fourth_badge}>Illustrator</Badge>{' '}
                  </div>
                </div>
              </Jumbotron>

              <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={Vid02} type="video/mp4" />
              </video>
            </Col>

          </Row>
        </LinkContainer>

        <LinkContainer to="/sanchezcoffeeco">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.float}>
                <h1 className={styles.whitetitle}>SANCHEZ COFFEE CO.</h1>
                <h5 className={styles.white}>Remote Contract Web Designer and Developer at Coffee Supplier in Los Angeles</h5>

                <div className={styles.badgelist}>
                  <Badge variant="primary" className={styles.first_badge}>Web</Badge>{' '}
                  <Badge variant="primary" className={styles.second_badge}>E-Commerce</Badge>{' '}
                  <Badge variant="primary" className={styles.third_badge}>WordPress</Badge>{' '}
                  <Badge variant="primary" className={styles.fourth_badge}>PayPal</Badge>{' '}
                  <Badge variant="primary" className={styles.fifth_badge}>HTML/CSS</Badge>{' '}
                </div>

              </Jumbotron>

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={Vid04} type="video/mp4" />
              </video>

            </Col>
          </Row>
        </LinkContainer>

        <LinkContainer to="/apexvr">
          <Row>
            <Col md={12} className={styles.removepadding}>

              <Jumbotron className={styles.float}>
                <h1 className={styles.whitetitle}>APEX VR</h1>
                <h5 className={styles.white}>Contact UI Designer for Virtual Reality Web App for Local Bay Area Videography Company</h5>

                <div className={styles.badgelist}>
                  <Badge variant="primary" className={styles.first_badge}>UI</Badge>{' '}
                  <Badge variant="primary" className={styles.second_badge}>VR</Badge>{' '}
                  <Badge variant="primary" className={styles.third_badge}>Aframe</Badge>{' '}
                  <Badge variant="primary" className={styles.fourth_badge}>Angular.JS</Badge>{' '}
                  <Badge variant="primary" className={styles.fifth_badge}>HTML/CSS</Badge>{' '}
                </div>

              </Jumbotron>

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={Vid05} type="video/mp4" />
              </video>

            </Col>

          </Row>
        </LinkContainer>


        <LinkContainer to="/stepsaver">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.float}>

                <h1 className={styles.whitetitle}>STEPSAVER</h1>
                <h5 className={styles.white}>Remote Contract UI Designer for Valet Software Startup in Houston, TX</h5>

                <div className={styles.badgelist}>
                  <Badge variant="primary" className={styles.first_badge}>UI</Badge>{' '}
                  <Badge variant="primary" className={styles.second_badge}>App</Badge>{' '}
                  <Badge variant="primary" className={styles.third_badge}>Web</Badge>{' '}
                  <Badge variant="primary" className={styles.fourth_badge}>Illustrator</Badge>{' '}
                </div>

              </Jumbotron>

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={Vid06} type="video/mp4" />
              </video>

            </Col>
          </Row>
        </LinkContainer>

        <LinkContainer to="/dasdasdigital">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
                <h1 className={styles.whitetitle}>DASDAS DIGITAL</h1>
                <h5 className={styles.white}>UI/UX Designer for Remote Digital Agency Startup in Oakland, CA</h5>

                <div className={styles.badgelist}>
                  <Badge variant="primary" className={styles.first_badge}>UI</Badge>{' '}
                  <Badge variant="primary" className={styles.second_badge}>Web</Badge>{' '}
                  <Badge variant="primary" className={styles.third_badge}>React.JS</Badge>{' '}
                  <Badge variant="primary" className={styles.fourth_badge}>Bootstrap</Badge>{' '}
                  <Badge variant="primary" className={styles.fifth_badge}>HTML/CSS</Badge>{' '}
                </div>
              </Jumbotron>

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={Vid03} type="video/mp4" />
              </video>

            </Col>
          </Row>
        </LinkContainer>

        <LinkContainer to="/dominos">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
                <h1 className={styles.whitetitle}>Dominos</h1>
                <h5 className={styles.white}>UI/UX Designer for Remote Digital Agency Startup in Oakland, CA</h5>

                <div className={styles.badgelist}>
                  <Badge variant="primary" className={styles.first_badge}>UI</Badge>{' '}
                  <Badge variant="primary" className={styles.second_badge}>Web</Badge>{' '}
                  <Badge variant="primary" className={styles.third_badge}>React.JS</Badge>{' '}
                  <Badge variant="primary" className={styles.fourth_badge}>Bootstrap</Badge>{' '}
                  <Badge variant="primary" className={styles.fifth_badge}>HTML/CSS</Badge>{' '}
                </div>

              </Jumbotron>

              <video autoPlay preload="true" loop playsInline muted className={styles.testvideo}>
                <source src={Vid07} type="video/mp4" />
              </video>
            </Col>
          </Row>
        </LinkContainer>
      </Container>
    </Container>









    {/*
  <Container fluid className={styles.containerfluid}>

  <Row>
    <Col className={styles.removepadding}>

    <LinkContainer to="/uguru">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid01} type="video/mp4" />
    </video>
    </LinkContainer>
    </Col>
    </Row>

    <Row>
    <Col md={8} className={styles.removepadding}>
    <LinkContainer to="/apexvr">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid02} type="video/mp4" />
    </video>
    </LinkContainer>
    </Col>
    <Col md={4} className={styles.removepadding}>

    <LinkContainer to="/sanchezcoffeeco">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid03} type="video/mp4" />
    </video>
    </LinkContainer>

    <LinkContainer to="/dasdasdigital">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid04} type="video/mp4" />
    </video>
    </LinkContainer>

    </Col>
    </Row>

    <Row>
    <Col md={6} className={styles.removepadding}>
    <LinkContainer to="/stepsaver">
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid05} type="video/mp4" />
    </video>
    </LinkContainer>
    </Col>
    <Col md={6}>
    <Jumbotron>
  <h1>Hi</h1>
  <p>
    Thank you for taking the time out of your day to visit this website.
    Please let me know if you are looking to chat. Have a nice day!
  </p>
  <LinkContainer to="/Contact">
  <p>
    <Button className={styles.mainbutton} variant="primary">Contact Now</Button>
  </p>
  </LinkContainer>
</Jumbotron>

    </Col>
    </Row>

    </Container>
*/}



    {/*
    <Row className={styles.row}>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg1">
    <Image src={Pg1Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg2">
    <Image src={Pg2Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
  </Row>
  <Row className={styles.row}>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg3">
    <Image src={Pg3Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg4">
    <Image src={Pg4Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
  </Row>
  <Row className={styles.row}>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg5">
    <Image src={Pg5Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
    <Col sm className={styles.colsm}>
    <LinkContainer to="/pg6">
    <Image src={Pg6Img} fluid className={styles.pg1Img} />
    </LinkContainer>
    </Col>
  </Row>
*/}







  </>
  /* End of JSX Fragment*/
)