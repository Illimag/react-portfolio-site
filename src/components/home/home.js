import React from 'react';

import { Link } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';


import Img00 from '../../assets/img/dasdasdigital/banner-02.jpg';
import Banner from '../../assets/img/nikerate/banner-06.jpg';
import Img01 from '../../assets/img/legacypictures/graphite-s6.png';
import Img02 from '../../assets/img/legacypictures/legacyfilms.png';
import Img03 from '../../assets/img/legacypictures/cardsort.jpg';
import Img04 from '../../assets/img/legacypictures/test.png';
import Img05 from '../../assets/img/legacypictures/test1.png';
import Img06 from '../../assets/img/legacypictures/test2.png';
import Img07 from '../../assets/img/legacypictures/video-production-concept-operator-working-with-a-c-2JS9M5Q.jpg';
import Img08 from '../../assets/img/legacypictures/los-angeles-california-P5YD66H.jpg';
import Img09 from '../../assets/img/legacypictures/bubble-mindmap-template.png';
import Img10 from '../../assets/img/legacypictures/mind-mapping-diagram-8391.png';
import Img11 from '../../assets/img/legacypictures/male-videographer-editor-using-pc-computer-editing-R7QYFZS.jpg';
import Img12 from '../../assets/img/legacypictures/copy.png';
import Img13 from '../../assets/img/legacypictures/1.PNG';
import Img14 from '../../assets/img/legacypictures/2.PNG';
import Img15 from '../../assets/img/legacypictures/4.PNG';
import Img16 from '../../assets/img/legacypictures/comedy-funny-movie-movie-evening-together-at-home--YS7NQEP.jpg';
import Img17 from '../../assets/img/legacypictures/5.PNG';
import Img18 from '../../assets/img/legacypictures/3.PNG';
import Img19 from '../../assets/img/legacypictures/hsl_3.jpg';
import Img20 from '../../assets/img/legacypictures/hsl-biz_3.jpg';
import Img21 from '../../assets/img/legacypictures/hsl-biz_4.jpg';
import Img22 from '../../assets/img/legacypictures/Capture.PNG';
import Img23 from '../../assets/img/legacypictures/film-industry-7ZLFY7L.jpg';
import Img24 from '../../assets/img/legacypictures/ttt-01.png';



import styles from '../css/style.module.css';
import '../css/style.css';

 
import ImgA from '../../assets/img/uguru/testpics-02.png';
import ImgB from '../../assets/img/uguru/testpics-03.png';
import ImgC from '../../assets/img/uguru/testpics-03.png';

import ImgTablet from '../../assets/img/uguru/testpics-01.png';

import testimg from '../../assets/img/uguru/testpics-05.png';
import desktopImg from '../../assets/img/legacypictures/Mobile-Mockup.png';
import Twodesktop from '../../assets/img/uguru/testpics-06.png';
import duo from '../../assets/img/uguru/testpics-08.png';
import personas from '../../assets/img/legacypictures/personas.png';

//import testtest from '../../assets/img/uguru/ttt-01.png';

import Vid1 from '../../assets/home_page_vids/compress_vid0.mp4';
import Vid2 from '../../assets/vids/compressed_vid/vid2.m4v';

import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';

import UserScenario from '../../assets/img/legacypictures/Website-User-scenario-workflow.png';


import video from '../../assets/san-francisco-sunset-9Q2MYSB.mov';
import videomobile from '../../assets/san-francisco-sunset-9Q2MYSB.mov';

import icon1 from '../../assets/icon-01.png';
import icon2 from '../../assets/icon-02.png';
import icon3 from '../../assets/icon-03.png';


import Media from 'react-media';

import download from '../../assets/download.svg'

import homepage from '../../assets/homepage.png'
import homepage1 from '../../assets/homepage1.png'
import homepage2 from '../../assets/homepage2.png'
import homepage3 from '../../assets/homepage3.jpg'

export const Home = () => (
  /* Start of JSX Fragment*/
  <>



























<Container className={styles.test}>
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Hi,</h1>
                <h5 className={styles.test1title}>UI/UX Designer from the San Francisco Bay Area, and Silicon Valley.</h5>
        

                <LinkContainer to="/legacypictures">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Looking for Case Study?</Button>
                </h1>
              </LinkContainer>

              <LinkContainer to="/contact">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">Contact Now</Button>
                </h1>
              </LinkContainer>

              </div>
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={videomobile}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={video}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={video}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </Container>










 
        <Container fluid className={styles.mainfullscreen}>
 {/* left text right img */}

<div className={styles.spaceingwhite}></div>







           <Media queries={{
small: "(max-width: 599px)",
medium: "(min-width: 600px) and (max-width: 1199px)",
large: "(min-width: 1200px)"
}}>
{matches => (
 <>

   {matches.small &&

 <Row className={styles.rowsmall}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>


<div className={styles.spaceingwhite}></div>


<p className={styles.subtitlelargeblack}>01/ Services</p>
<div className={styles.spaceingwhite}></div>


<CardGroup>
  <Card>
    <Card.Img variant="top" src={icon1} />
    <Card.Body>
      <Card.Title>User Experience and User Interface Design</Card.Title>
      <Card.Text>
      As a UI/UX Designer for the past 5 years, have indepth knowledge of User Interface and User Experience methodologies.

      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={icon2} />
    <Card.Body>
      <Card.Title>Mobile Responsive Web App Design</Card.Title>
      <Card.Text>
      Knowledge of iOS, Android apps, as well as modern SPA Web Apps.

      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={icon3} />
    <Card.Body>
      <Card.Title>E-Commerce, Corporate, Company Sites </Card.Title>
      <Card.Text>
      Experience working with industries such as E-Commerce, Corporate, and Company Sites.


      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>





<div className={styles.spaceingwhite}></div>

<p className={styles.subtitlelargeblack}>02/ Principles</p>
<div className={styles.spaceingwhite}></div>


<Row xs={1} md={2} className="g-4">

    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Design First</Card.Title>
          <Card.Text>
            Leading with design to create the best experience for the user.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Champion for the User</Card.Title>
          <Card.Text>
Advocate for the user, being the person to think about the user and to always look out for the user
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>







<div className={styles.spaceingwhite}></div>

<p className={styles.subtitlelargeblack}>03/ Clients Say</p>
<div className={styles.spaceingwhite}></div>






<Card>
  <Card.Header>Co-CEO</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “John (Jae Min) Kim is a resourceful worker and a self-starter. He has a passion for his design and cod
ing. He is great to work with and very knowledgeable about UX design, coding and graphic 
design. I recommend his work ethics in being a team player who always loves to help others
 around him as well as his skill set and independence. He is a great addition to any company t
hat hires him.”{' '}
      </p>
      <footer className="blockquote-footer">
      Jessica Y.
      </footer>
    </blockquote>
  </Card.Body>
</Card>

<Card>
  <Card.Header>Tech Worker</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “Jaemin ‘John’  Kim helped me and my team create a virtual reality website from the groun
d up and it was a pleasure working with him every step of the way. His skill developing the s
ite from scratch and enthusiasm to explore new techniques to make a totally original websit
e is one of the many reasons he is a great choice to add to any team”{' '}
      </p>
      <footer className="blockquote-footer">
      Franz E. Polar Productions
      </footer>
    </blockquote>
  </Card.Body>
</Card>

<Card>
  <Card.Header>Artist</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “To whom it may concern: My name is Michael T. I am an artist out of Key West Florida. I h
ave a website that was created in part and certainly edited and maint
ained in different degrees with the astute and professional services of John (Jae Min) Kim. His knowled
ge and advice has been and still is of the utmost value to myself with respect to the present
 ordering and maintenance of my site. I would recommend him to any needing such services. 
He has conducted himself both honestly and professionally.{' '}
      </p>
      <footer className="blockquote-footer">
      Sincerely”
Michael T.
      </footer>
    </blockquote>
  </Card.Body>
</Card>



<div className={styles.spaceingwhite}></div>



<Card>
  <Card.Header as="h5">Interested in a Chat?</Card.Header>
  <Card.Body>
    <Card.Title>Contact Directly to get started!</Card.Title>
    <Card.Text>
Click on the button below to Contact Now
    </Card.Text>
  </Card.Body>
  <LinkContainer to="/contact">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">Contact Now</Button>
                </h1>
              </LinkContainer>

</Card>

</Container>
</Col>

</Row>

     }

   {matches.medium &&

 <Row className={styles.rowmedium}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>


<div className={styles.spaceingwhite}></div>


<p className={styles.subtitlelargeblack}>01/ Services</p>
<div className={styles.spaceingwhite}></div>


<CardGroup>
  <Card>
    <Card.Img variant="top" src={icon1} />
    <Card.Body>
      <Card.Title>User Experience and User Interface Design</Card.Title>
      <Card.Text>
      As a UI/UX Designer for the past 5 years, have indepth knowledge of User Interface and User Experience methodologies.

      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={icon2} />
    <Card.Body>
      <Card.Title>Mobile Responsive Web App Design</Card.Title>
      <Card.Text>
      Knowledge of iOS, Android apps, as well as modern SPA Web Apps.

      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={icon3} />
    <Card.Body>
      <Card.Title>E-Commerce, Corporate, Company Sites </Card.Title>
      <Card.Text>
      Experience working with industries such as E-Commerce, Corporate, and Company Sites.


      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>





<div className={styles.spaceingwhite}></div>

<p className={styles.subtitlelargeblack}>02/ Principles</p>
<div className={styles.spaceingwhite}></div>


<Row xs={1} md={2} className="g-4">

    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Design First</Card.Title>
          <Card.Text>
            Leading with design to create the best experience for the user.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Champion for the User</Card.Title>
          <Card.Text>
Advocate for the user, being the person to think about the user and to always look out for the user
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>







<div className={styles.spaceingwhite}></div>

<p className={styles.subtitlelargeblack}>03/ Clients Say</p>
<div className={styles.spaceingwhite}></div>






<Card>
  <Card.Header>Co-CEO</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “John (Jae Min) Kim is a resourceful worker and a self-starter. He has a passion for his design and cod
ing. He is great to work with and very knowledgeable about UX design, coding and graphic 
design. I recommend his work ethics in being a team player who always loves to help others
 around him as well as his skill set and independence. He is a great addition to any company t
hat hires him.”{' '}
      </p>
      <footer className="blockquote-footer">
      Jessica Y.
      </footer>
    </blockquote>
  </Card.Body>
</Card>

<Card>
  <Card.Header>Tech Worker</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “Jaemin ‘John’  Kim helped me and my team create a virtual reality website from the groun
d up and it was a pleasure working with him every step of the way. His skill developing the s
ite from scratch and enthusiasm to explore new techniques to make a totally original websit
e is one of the many reasons he is a great choice to add to any team”{' '}
      </p>
      <footer className="blockquote-footer">
      Franz E. Polar Productions
      </footer>
    </blockquote>
  </Card.Body>
</Card>

<Card>
  <Card.Header>Artist</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “To whom it may concern: My name is Michael T. I am an artist out of Key West Florida. I h
ave a website that was created in part and certainly edited and maint
ained in different degrees with the astute and professional services of John (Jae Min) Kim. His knowled
ge and advice has been and still is of the utmost value to myself with respect to the present
 ordering and maintenance of my site. I would recommend him to any needing such services. 
He has conducted himself both honestly and professionally.{' '}
      </p>
      <footer className="blockquote-footer">
      Sincerely”
Michael T.
      </footer>
    </blockquote>
  </Card.Body>
</Card>



<div className={styles.spaceingwhite}></div>



<Card>
  <Card.Header as="h5">Interested in a Chat?</Card.Header>
  <Card.Body>
    <Card.Title>Contact Directly to get started!</Card.Title>
    <Card.Text>
Click on the button below to Contact Now
    </Card.Text>
  </Card.Body>
  <LinkContainer to="/contact">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">Contact Now</Button>
                </h1>
              </LinkContainer>

</Card>

</Container>
</Col>


</Row>
     }

   {matches.large &&
 <Row className={styles.rowlarge}>

 <Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>


<div className={styles.spaceingwhite}></div>


<p className={styles.subtitlelargeblack}>01/ Services</p>
<div className={styles.spaceingwhite}></div>


<CardGroup>
  <Card className={styles.cardbackground}>
    <Card.Img variant="top" src={icon1} />
    <Card.Body >
      <Card.Title><p className={styles.subtitlelargeblack}>User Experience and User Interface Design</p></Card.Title>
      <Card.Text>
      <p className={styles.descriptionblack}>As a UI/UX Designer, have indepth knowledge of User Interface and User Experience methodologies.</p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={icon2} />
    <Card.Body>
      <Card.Title>Mobile Responsive Web App Design and Prototyping</Card.Title>
      <Card.Text>
      Knowledge of iOS, Android apps, as well as modern SPA Web Apps.

      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={icon3} />
    <Card.Body>
      <Card.Title>E-Commerce, Tech, Company Sites </Card.Title>
      <Card.Text>
      Experience working with industries such as E-Commerce, Tech, and Company Sites.


      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>





<div className={styles.spaceingwhite}></div>

<p className={styles.subtitlelargeblack}>02/ Principles</p>
<div className={styles.spaceingwhite}></div>


<Row xs={1} md={2} className="g-4">

    <Col>
      <Card>
        <Card.Body>
        <Image src={homepage} fluid className={styles.imgstyle} />
          <Card.Title>Design First</Card.Title>
          <Card.Text>
            Leading with design to create the best experience for the user.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
        <Image src={homepage1} fluid className={styles.imgstyle} />
          <Card.Title>Champion for the User</Card.Title>
          <Card.Text>
Advocate for the user, being the person to think about the user and to always look out for the user
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
        <Image src={homepage2} fluid className={styles.imgstyle} />
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
        <Image src={homepage3} fluid className={styles.imgstyle} />
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>







<div className={styles.spaceingwhite}></div>

<p className={styles.subtitlelargeblack}>03/ Clients Say</p>
<div className={styles.spaceingwhite}></div>



<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={download}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Franz E. Polar Productions</h5>
      “Jaemin ‘John’  Kim helped me and my team create a virtual reality website from the groun
d up and it was a pleasure working with him every step of the way. His skill developing the s
ite from scratch and enthusiasm to explore new techniques to make a totally original websit
e is one of the many reasons he is a great choice to add to any team”
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={download}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Sincerely” Michael T.</h5>
      <p>“To whom it may concern: My name is Michael T. I am an artist out of Key West Florida. I h
ave a website that was created in part and certainly edited and maint
ained in different degrees with the astute and professional services of John (Jae Min) Kim. His knowled
ge and advice has been and still is of the utmost value to myself with respect to the present
 ordering and maintenance of my site. I would recommend him to any needing such services. 
He has conducted himself both honestly and professionally."</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={download}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Jessica Y.</h5>
      <p>“John (Jae Min) Kim is a resourceful worker and a self-starter. He has a passion for his design and cod
ing. He is great to work with and very knowledgeable about UX design, coding and graphic 
design. I recommend his work ethics in being a team player who always loves to help others
 around him as well as his skill set and independence. He is a great addition to any company t
hat hires him.”</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





























<div className={styles.spaceingwhite}></div>




<Card>
<video autoPlay preload="true" loop playsInline muted >
                <source src={video}/>
              </video>
    <Card.Body>
      <Card.Text>
      Looking for Portfolio of User Interface and User Experience Case Studies?
      </Card.Text>
      <LinkContainer to="/legacypictures">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">View Portfolio</Button>
                </h1>
              </LinkContainer>

    </Card.Body>
  </Card>
  <br />






  <div className={styles.spaceingwhite}></div>







<Card>
  <Card.Header as="h5">Interested in a Chat?</Card.Header>
  <Card.Body>
    <Card.Title>Contact Directly to get started!</Card.Title>
    <Card.Text>
Click on the button below to Contact Now
    </Card.Text>
  </Card.Body>
  <LinkContainer to="/contact">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">Contact Now</Button>
                </h1>
              </LinkContainer>

</Card>


</Container>
</Col>



</Row>
     }

 </>
)}
</Media>





















</Container>







  </>
  /* End of JSX Fragment*/
)