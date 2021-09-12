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


import video from '../../assets/newhomepagevids/1.mp4';
import videomobile from '../../assets/newhomepagevids/1-1.mp4';



import Media from 'react-media';


export const Contact = () => (
  /* Start of JSX Fragment*/
  <>


























<Container fluid className={styles.mainfullscreen} >
 {/* left text right img */}

<div className={styles.spaceingwhite}></div>


<div id="test"></div>




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

<p className={styles.subtitlelargeblack}>Name:</p>
<p className={styles.descriptionblack}>Jae Min Kim</p>
<p className={styles.subtitlelargeblack}>Location:</p>
<p className={styles.descriptionblack}>Fremont, CA 94538</p>
<p className={styles.subtitlelargeblack}>Phone:</p>
<p className={styles.descriptionblack}>(510)-513-7376</p>
<p className={styles.subtitlelargeblack}>Email:</p>
<p className={styles.descriptionblack}>jaeminkim.com@gmail.com</p>
<p className={styles.subtitlelargeblack}>Summery:</p>
<div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>5+ years of UI/UX, Web, design experience as a Remote Contractor and In-House Experience, In Teams, Startups, Businesses And Corporations.</li>
      <li className={styles.listitemblack}>Designed User Interface and User Experience Designs for Clients across the United States and Canada.
</li>
<li className={styles.listitemblack}>Expert in Adobe Creative Suite, Design Thinking, Balsamiq, Cross-Browser, Interface Design, Sketching, User Interface, Mockups, Wireframes, Balsamiq, Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop.
</li>

<li className={styles.listitemblack}>Designed High Fidelity UI design mockups in Adobe Illustrator, XD and Figma for production applications.
</li>
<li className={styles.listitemblack}>Modern JavaScript Web Frameworks, React.JS and HTML/CSS.
</li>
<li className={styles.listitemblack}>Git, WordPress, </li>
<li className={styles.listitemblack}>Excellent communication and interpersonal skills. </li>
    </ul>
    </div>


<div className={styles.spaceingwhite}></div>

<Card>
  <Card.Header>Technical Skills:</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <p className={styles.subtitlelargeblack}>Design:</p>
<p className={styles.descriptionblack}>Adobe Creative Suite, Design Thinking, Balsamiq, Cross-Browser, Interface Design,
Sketching, User Interface, Mockups, Wireframes, Balsamiq, Figma, Adobe Xd, Adobe Illustrator, Adobe Photoshop, Style Guide, Branding, Visual Design, Interaction Design, User Research, Sitemaps, Storytelling, 
</p>

<p className={styles.subtitlelargeblack}>Prototyping:</p>
<p className={styles.descriptionblack}>HTML, CSS, Javascript, Bootstrap, React.Js, WordPress, Web App Development,
Proto.IO, Figma, Photoshop, Adobe XD, Sketch, Indesign, Miro, Invision, Indesig
</p>

<p className={styles.subtitlelargeblack}>Research:</p>
<p className={styles.descriptionblack}>UX Wireframes, UI Design, Prototyping, User Research, Visual Design, Interaction
Design, Web Design, Storyboarding, Card Sort, Problem-solving, Innovative, Communication, Leadership, Empathy, Collaboratively

</p>
    </blockquote>
  </Card.Body>
</Card>


</Container>
</Col>

</Row>

     }

   {matches.medium &&

 <Row className={styles.rowmedium}>

 <Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.subtitlelargeblack}>Client</p>
<p className={styles.descriptionblack}>Legacy Pictures</p>
<p className={styles.subtitlelargeblack}>Project Date:</p>
<p className={styles.descriptionblack}>July 2021 - August 2021</p>
<p className={styles.subtitlelargeblack}>Role:</p>
<p className={styles.descriptionblack}>UI/UX Designer</p>
<p className={styles.subtitlelargeblack}>Location:</p>
<p className={styles.descriptionblack}>Los Angeles, CA</p>
<p className={styles.subtitlelargeblack}>Summary:</p>
<p className={styles.descriptionblack}>Los Angeles Web Application Re-Design</p>

<div className={styles.spaceingwhite}></div>


<Card>
  <Card.Header>Introduction:</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.

{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
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


<Card>
  <Card.Header>Introduction:</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.

{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>

    
<p className={styles.subtitlelargeblack}>Client</p>
<p className={styles.descriptionlargeblack}>Legacy Pictures</p>
<p className={styles.subtitlelargeblack}>Project Date:</p>
<p className={styles.descriptionlargeblack}>July 2021 - August 2021</p>
<p className={styles.subtitlelargeblack}>Role:</p>
<p className={styles.descriptionlargeblack}>UI/UX Designer</p>
<p className={styles.subtitlelargeblack}>Location:</p>
<p className={styles.descriptionlargeblack}>Los Angeles, CA</p>
<p className={styles.subtitlelargeblack}>Summary:</p>
<p className={styles.descriptionlargeblack}>Los Angeles Web Application Re-Design</p>

  </Card.Body>

  
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