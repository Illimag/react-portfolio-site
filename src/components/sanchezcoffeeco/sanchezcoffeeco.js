import React from 'react';

import { Link } from 'react-router-dom'
//import { Slide } from "react-awesome-reveal";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

//import { LinkContainer } from 'react-router-bootstrap';
//import Button from 'react-bootstrap/Button';
import Gist from 'react-gist';

import Img00 from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Img01 from '../../assets/img/sanchezcoffeeco/1-01.jpg';
import Img02 from '../../assets/img/sanchezcoffeeco/1-02.jpg';
import Img03 from '../../assets/img/sanchezcoffeeco/1-03.jpg';
import Img04 from '../../assets/img/sanchezcoffeeco/1-04.jpg';
import Img05 from '../../assets/img/sanchezcoffeeco/1-05.jpg';
import Img06 from '../../assets/img/sanchezcoffeeco/1-06.jpg';
import Img07 from '../../assets/img/sanchezcoffeeco/1-07.jpg';
import Img08 from '../../assets/img/sanchezcoffeeco/1-08.jpg';

import customer_location from '../../assets/img/sanchezcoffeeco/customer_location.PNG';
import topcustromerbysalers from '../../assets/img/sanchezcoffeeco/topcustromerbysalers.PNG';
import volumne from '../../assets/img/sanchezcoffeeco/volumne.PNG';
import transaction from '../../assets/img/sanchezcoffeeco/transaction.PNG';
import ordersize from '../../assets/img/sanchezcoffeeco/ordersize.PNG';


import Vid1 from '../../assets/home_page_vids/vid3.mp4';

//import Banner from '../../assets/vids/compress_vid5.mp4';

import styles from './sanchezcoffeeco.module.css';
import './sanchezcoffeeco.css';

export const Sanchezcoffeeco = () => (
  /* Start of JSX Fragment*/
  <>
<Container fluid className={styles.topfillercontainer}></Container>
    <Container fluid className={styles.containerfluid}>

      {/* left text right img */}
      <Row>
   
        <Col sm className={styles.overlay}>
          <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
            <source src={Vid1} type="video/mp4" />
          </video>
        </Col>
      </Row>




      {/* img with text */}
      <Row className={styles.toprow}>
        <Col sm>

          <Container fluid className={styles.containerfluid}>
            <Jumbotron fluid className={styles.test}>
              <Container className={styles.fonttest}>
                <div className={styles.spaceing}></div>
                <p className={styles.title}>Sanchez Coffee Co.</p>
                <p className={styles.description}>
                  San Francisco Mobile Application Startup
                </p>

                <p className={styles.title}>Project Date:</p>
                <p className={styles.description}>
                October 2016 - January 2017
                </p>

                <p className={styles.title}>Role:</p>
                <p className={styles.description}>Graphic UI/UX Designer Intern</p>

                <p className={styles.title}>Location:</p>
                <p className={styles.description}>San Francisco Bay Area</p>

                <p className={styles.title}>Summary</p>
                <p className={styles.description}>
                Uguru was a Mobile Application Startup funded by Bay Angels. And they were looking to launch thier client side app for the use of college students looking for tutoring services in a online marketplace.
                </p>
              </Container>
            </Jumbotron>
          </Container>


        </Col>
      </Row>

            {/* img with text */}
            <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>High-Fidelity UI Design</p>
          <p className={styles.description}>Series of various UI designs, Initially I designed some low level mockups that were
            brought into the fold to be sued on the production application. It was a growing experience.
            I worked on the onboarding of the mobile app. For this I designed it based on some sketches
            and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
          
        </Col>
      </Row>


    </Container>

    <Container fluid>
      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={Img00} fluid className={styles.imgstyle} />
        </Col>
      </Row>
    </Container>

    <Container fluid>

      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={Img01} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={customer_location} fluid className={styles.centerimgstyle} />
        </Col>
      </Row>

      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={topcustromerbysalers} fluid className={styles.centerimgstyle} />
        </Col>
      </Row>

      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={Img02} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>High-Fidelity UI Design</p>
          <p className={styles.description}>Series of various UI designs, Initially I designed some low level mockups that were
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
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>WordPress E-commcere
            Platform</p>
          <p className={styles.description}>The people who worked for Sanchez
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
          <Image src={Img03} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* left img right text */}
      <Row className={styles.test}>
        <Col sm>
          <Image src={Img04} fluid className={styles.imgstyle} />
        </Col>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Online Payment
            Infrastructure</p>
          <p className={styles.description}>Sanchez Coffee Co. were looking for sales
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
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Remote Team and
            Warehouse Team</p>
          <p className={styles.description}>I worked with a remote team, there was a
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
          <Image src={Img05} fluid className={styles.imgstyle} />
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
          <Image src={Img06} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={volumne} fluid className={styles.centerimgstyle} />
        </Col>
      </Row>

      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={transaction} fluid className={styles.centerimgstyle} />
        </Col>
      </Row>


      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={ordersize} fluid className={styles.centerimgstyle} />
        </Col>
      </Row>

      {/* text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>High-Fidelity UI Design</p>
          <p className={styles.description}>Series of various UI designs, Initially I designed some low level mockups that were
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
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Transaction Volumne</p>
          <p className={styles.description}>During this process the team wasent able to figure out how to work together and the trust
            was broken and the website became decreptid. We were able to process around 100K USD
            in transactions and a few thousand sales before the web platform was taken down.

            During this period my job was to maintain this flow of sales on the online platform.</p>
          <Image src={Img07} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* img with text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Learning Experience</p>
          <p className={styles.description}>I became better at working remotelt with teams, and understanding that I would have to be
            communicate more efficiently. Additionally because I designed the website and then implemented
            thse designs with CSS, I was able to use some coding in a production environment.

            Additionally being able to start the hosting of the website, the implementation of the Wordpress
            site, and then the maintence of the website was a responsibility.</p>
          <Image src={Img08} fluid className={styles.imgstyle} />
        </Col>
      </Row>
    </Container>

    <Jumbotron fluid className={styles.bottomNav}>
      <Container>
        <Row className={styles.bottomNavColor}>
          <Col sm={6}>
          <p className={styles.title}>Art Rendez Vous</p>
            <p className={styles.description}>New York City Art Community iOS App Redesign</p>
            <Link to={'/artrendezvous'}>
              <p className={styles.description}> View Previous </p>
            </Link>
          </Col>
          <Col sm={6}>
            <p className={styles.title}>Apex VR</p>
            <p className={styles.description}>San Leandro Videography Company Virtual Reality Web Application</p>
            <Link to={'/apexvr'}>
              <p className={styles.description}> View Next </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  </>
  /* End of JSX Fragment*/
)