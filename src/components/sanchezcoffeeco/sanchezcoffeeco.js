import React from 'react';

import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { ProgressBar } from 'react-bootstrap'

import Gist from 'react-gist';

import Vid1 from '../../assets/vids/smaartphone_coffee.mp4';
import styles from './sanchezcoffeeco.module.css';
import './sanchezcoffeeco.css';

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

export const Sanchezcoffeeco = () => {

  const dispatch = useDispatch()
  const getImageUrls = () => {
    return importAll(require.context('../../assets/img/sanchezcoffeeco', false, /\.(png|PNG|jpe?g|svg)$/))
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
                  <h1>Sanchez Coffee Co.</h1>
                  <p>
                    Los Angeles E-Commerce Company
                  </p>
                  <p>
                    October 2018 - January 2019
                  </p>
                  <p>
                    Web Designer/Developer creating Payment Platform with Wordpress CMS and CSS      </p>
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

        {/* img without text */}
        <Row>
          <Col sm>
            <Image src={images[0]} fluid className={styles.imgstyle} />
          </Col>
        </Row>

        {/* img without text */}
        <Row>
          <Col sm>
            <Image src={images[9]} fluid className={styles.centerimgstyle} />
          </Col>
        </Row>

        {/* img without text */}
        <Row>
          <Col sm>
            <Image src={images[11]} fluid className={styles.centerimgstyle} />
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
            <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
              <source src={Vid1} type="video/mp4" />
            </video>
          </Col>
        </Row>

        {/* left text right img */}
        <Row className={styles.test1}>
          <Col sm className={styles.fonttest}>
            <h3>WordPress E-commcere
              Platform</h3>
            <p>The people who worked for Sanchez
              Coffee Co. were an diverse group of people.
              Mainly the main part of the company we
              never meet in person. Although we knew
              there was a warehouse that shipped the
              product. Mainly we worked on the side of
              the company that was in charge of the
              design and development of the payment
              platform.

              After we built the inital platform with WordPress
              we put in the payment platform and the payment
              gateway, additionally we were in charge if the
              merchant account.</p>
          </Col>
          <Col sm>
            <Image src={images[2]} fluid className={styles.imgstyle} />
          </Col>
        </Row>

        {/* left img right text */}
        <Row className={styles.test1}>
          <Col sm>
            <Image src={images[3]} fluid className={styles.imgstyle} />
          </Col>
          <Col sm className={styles.fonttest}>
            <h3>Online Payment
              Infrastructure</h3>
            <p>Sanchez Coffee Co. were looking for sales
              online and they gave us the responsibility
              of controlling their entire payment
              infrasturcture online. We were working with
              payment companies such as PayPal, Stripe,
              and Merchant Accounts.

              Mainly I was designing the product and the
              website. Then I was developing the website
              with WordPress. I created the website using
              1and1 for hosting services. After the WordPress
              website was hosted, I implemented the various
              plugins that would be used to accept payments.</p>
          </Col>
        </Row>

        {/* left text right img */}
        <Row className={styles.test1}>
          <Col sm className={styles.fonttest}>
            <h3>Remote Team and
              Warehouse Team</h3>
            <p>I worked with a remote team, there was a
              warehouse where the product wasa being
              shipped and a team that shipped out the
              product. Then there was a partner who
              collaborated with our agent who relayed the
              instructions to the design and development
              team who was in charge of the payment
              infastrcture such as a payment gateway,
              payment processors, and merchant accoutns.

              As well as designs for the logo, product, website
              designs, and wordpress hosting and
              wordpress development. There were a few people
              but mainly I was incharge of the website design
              and development.</p>
          </Col>

          <Col sm>
            <Image src={images[4]} fluid className={styles.imgstyle} />
          </Col>

          <Gist id='2de89cf80d88c584ad53fdf4539d81d3' />
        </Row>

        {/* Video */}
        <Row>
          <Col sm>
            <video autoPlay preload="true" loop playsInline muted>
              <source src={Vid1} type="video/mp4" />
            </video>
          </Col>
        </Row>

        {/* img without text */}
        <Row>
          <Col sm>
            <Image src={images[5]} fluid className={styles.imgstyle} />
          </Col>
        </Row>

        {/* img without text */}
        <Row>
          <Col sm>
            <Image src={images[13]} fluid className={styles.centerimgstyle} />
          </Col>
        </Row>

        {/* img without text */}
        <Row>
          <Col sm>
            <Image src={images[12]} fluid className={styles.centerimgstyle} />
          </Col>
        </Row>


        {/* img without text */}
        <Row>
          <Col sm>
            <Image src={images[10]} fluid className={styles.centerimgstyle} />
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
            <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
              <source src={Vid1} type="video/mp4" />
            </video>
          </Col>
        </Row>

        {/* img with text */}
        <Row className={styles.test1}>
          <Col sm className={styles.fonttest}>
            <h3>Transaction Volumne</h3>
            <p>During this process the team wasent able to figure out how to work together and the trust
              was broken and the website became decreptid. We were able to process around 100K USD
              in transactions and a few thousand sales before the web platform was taken down.

              During this period my job was to maintain this flow of sales on the online platform.</p>
            <Image src={images[6]} fluid className={styles.imgstyle} />
          </Col>
        </Row>

        {/* img with text */}
        <Row className={styles.test1}>
          <Col sm className={styles.fonttest}>
            <h3>Learning Experience</h3>
            <p>I became better at working remotelt with teams, and understanding that I would have to be
              communicate more efficiently. Additionally because I designed the website and then implemented
              thse designs with CSS, I was able to use some coding in a production environment.

              Additionally being able to start the hosting of the website, the implementation of the Wordpress
              site, and then the maintence of the website was a responsibility.</p>
            <Image src={images[7]} fluid className={styles.imgstyle} />
          </Col>
        </Row>
      </Container>

      <Jumbotron fluid className={styles.bottomNav}>
      <Container>
        <Row className={styles.bottomNavColor}>
          <Col sm={6}>
            <h1>Uguru, INC</h1>
            <Link to={'/uguru'}>
              <h5> View Previous </h5>
            </Link>
          </Col>
          <Col sm={6}>
            <h1>Apex VR</h1>
            <Link to={'/apexvr'}>
              <h5> View Next </h5>
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