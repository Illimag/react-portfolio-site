import React from 'react';

import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Banner from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Img01 from '../../assets/img/sanchezcoffeeco/1-01.jpg';
import Img02 from '../../assets/img/sanchezcoffeeco/1-02.jpg';
import Img03 from '../../assets/img/sanchezcoffeeco/1-03.jpg';
import Img04 from '../../assets/img/sanchezcoffeeco/1-04.jpg';
import Img05 from '../../assets/img/sanchezcoffeeco/1-05.jpg';
import Img06 from '../../assets/img/sanchezcoffeeco/1-06.jpg';
import Img07 from '../../assets/img/sanchezcoffeeco/1-07.jpg';
import Img08 from '../../assets/img/sanchezcoffeeco/1-08.jpg';

import Vid1 from '../../assets/vids/compress_vid6.mp4';

import styles from './pg3.module.css';
import './pg3.css';

export const Pg3 = () => (
    /* Start of JSX Fragment*/ 
    <>

<Container fluid>
    {/* img without text */}
    <Row>
    <Col sm>
    <Image src={Banner} fluid className="pg1Img" />
    </Col>
    </Row>
  </Container>


<Jumbotron fluid className={styles.test}>
    <Container className={styles.fonttest}>
      <h5>Case Study</h5>
      <h1>Sanchez Coffee Co.</h1>
      <p>
      Los Angeles E-Commerce Company
      </p>
      <h5>Project Date:</h5>
      <p>
      October 2018 - January 2019
      </p>
      <h5>Role:</h5>
      <p>
      Web Designer/Developer creating Payment Platform with Wordpress CMS and CSS      </p>

    </Container>
  </Jumbotron>

    <Container fluid>

    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img01} fluid className="pg1Img" />
        </Col>
        </Row>


    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img02} fluid className="pg1Img" />
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




                {/* left text right img */}
                <Row>
        <Col sm>
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
        <Image src={Img03} fluid className="pg1Img" />
        </Col>
        </Row>

        {/* left img right text */}
        <Row>
    <Col sm>
    <Image src={Img04} fluid className="pg1Img" />
    </Col>
    <Col sm>
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
                <Row>
        <Col sm>
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
        <Image src={Img05} fluid className="pg1Img" />
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

    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img06} fluid className="pg1Img" />
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



        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Transaction Volumne</h3>
      <p>During this process the team wasent able to figure out how to work together and the trust
was broken and the website became decreptid. We were able to process around 100K USD
in transactions and a few thousand sales before the web platform was taken down.

During this period my job was to maintain this flow of sales on the online platform.</p>
    <Image src={Img07} fluid className="pg1Img" />
    </Col>
    </Row>

        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Learning Experience</h3>
      <p>I became better at working remotelt with teams, and understanding that I would have to be
communicate more efficiently. Additionally because I designed the website and then implemented
thse designs with CSS, I was able to use some coding in a production environment.

Additionally being able to start the hosting of the website, the implementation of the Wordpress
site, and then the maintence of the website was a responsibility.</p>
    <Image src={Img08} fluid className="pg1Img" />
    </Col>
    </Row>

    </Container>


    <Jumbotron fluid className={styles.bottomNav}>
  <Container>
    <Row>
    <Col sm={6}>
    <h1>DasDasDigital</h1>
    <Link to={'/pg2'}>
      <p > View Previous </p>
    </Link>
    </Col>
    <Col sm={6}>
    <h1>Domino's App Demo</h1>
    <Link to={'/pg4'}>
      <p > View Next </p>
    </Link>
    </Col>
    </Row>
  </Container>
</Jumbotron>

    </>
      /* End of JSX Fragment*/
)