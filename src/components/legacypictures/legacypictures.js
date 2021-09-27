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


import icon1 from '../../assets/icon-01.png';
import icon2 from '../../assets/icon-02.png';
import icon3 from '../../assets/icon-03.png';

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
import Img12 from '../../assets/img/legacypictures/legacyfilms.png';
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

import Img25 from '../../assets/img/legacypictures/1-01.jpg';
import Img26 from '../../assets/img/legacypictures/1-02.jpg';
import Img27 from '../../assets/img/legacypictures/1-05.jpg';
import Img28 from '../../assets/img/legacypictures/Untitled-1-01.png';

import AnchorLink from 'react-anchor-link-smooth-scroll'


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


import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';

import UserScenario from '../../assets/img/legacypictures/Website-User-scenario-workflow.png';


import video from '../../assets/vids/compressed_vid/vid7.mp4';
import videomobile from '../../assets/vids/compressed_vid/vid7.mp4';

import scrolldown from '../../assets/scrolldown-01.png';


import Media from 'react-media';


import vid1 from '../../assets/newhomepagevids/1.mp4'
import vid11 from '../../assets/newhomepagevids/1-1.mp4'

export const Legacypictures = () => (
  /* Start of JSX Fragment*/
  <>










<Container className={styles.test2}>
          <Row className="justify-content-md-center">
               <Jumbotron className={styles.testfloatback}>
              </Jumbotron>
            <Col md={8} className={styles.removepadding}>

              
            <Jumbotron className={styles.mainfloatback}>
            <div className={styles.maincontentwrapper}>

              
<p className={styles.subtitlelargewhite}>Legacy Pictures</p>

<p className={styles.whitetitle}>How to redesign a web app</p>
 

<CardGroup>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>DATE</p>
  <p className={styles.descriptionwhite}>July 2021 - Present</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>ROLE</p>
  <p className={styles.descriptionwhite}>UI/UX Designer</p>

  
</Card>
<Card className={styles.cardborder}>
    
  <p className={styles.subtitlelargewhite}>LOCATION</p>
  <p className={styles.descriptionwhite}>Los Angeles, CA</p>
  
</Card>
</CardGroup>


<Row>
  <Col>
  <AnchorLink href='#test' className={styles.paddingleft}>     

<p className={styles.descriptionlargewhite}>View Case Study >
</p>
</AnchorLink>

</Col>
</Row>

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



























        <Container fluid className={styles.test1}>
        <div id="test"></div>

<div className={styles.spaceingwhite}></div>
<Row className="justify-content-md-center">
<Col xs lg="7">



<CardGroup className={styles.backgroundgrey}>
      <Card className={styles.backgroundgrey}>

            <p className={styles.subtitlelargeblack}>Use Case Scenarios.</p>
    
            <p className={styles.subtitlelargeblack}>Various stakeholders of the company.</p>
    
      </Card>

      <Card className={styles.backgroundgrey}>
      <Image src={Img28} fluid />
      </Card>
      </CardGroup>




</Col>
</Row>
</Container>





<Container fluid className={styles.test1}>

<div className={styles.spaceingwhite}></div>
<Row className="justify-content-md-center">
<Col xs lg="7">

<CardGroup>
      <Card className={styles.backgroundgrey}>
        <Card.Body>
          <Card.Title>    
            <p className={styles.subtitlelargeblack}>Use Case Scenarios.</p>
          </Card.Title>
          <Card.Title>    
            <p className={styles.subtitlelargeblack}>Various stakeholders of the company.</p>
          </Card.Title>
          <Image src={Img28} fluid />

        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>
          <p className={styles.subtitlelargeblack}>Stakeholders for the website</p>
          </Card.Title>
          <Card.Text>
          <p className={styles.descriptionlargeblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.</p>
    <p className={styles.descriptionlargeblack}>This is related to various stakeholders of the company, on how to design the application. </p>
              
    <div className={styles.paddingleft}>
    <ul className={styles.listlargeblack}>
      <li className={styles.listitemlargeblack}>Users of the website</li>
      <li className={styles.listitemlargeblack}>Executives</li>
      <li className={styles.listitemlargeblack}>Creative Managers who are looking to hire Legacy Pictures</li>
    </ul>
    </div>
              </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>

    </Col>
</Row>
<div className={styles.spaceingwhite}></div>

<CardGroup>
<Card className={styles.cardborder}>
    
<Image src={Img06} fluid/>


  
</Card>
<Card className={styles.cardborder}>
    
<Image src={Img05} fluid />


  
</Card>
<Card className={styles.cardborder}>
    
<Image src={Img04} fluid />

  
</Card>
</CardGroup>


<CardGroup>
<Card className={styles.cardborder}>
    
<Image src={Img06} fluid/>


  
</Card>
<Card className={styles.cardborder}>
    
<Image src={Img05} fluid />


  
</Card>

</CardGroup>

<Row className="justify-content-md-center">
<Col xs lg="6">





      <Card className={styles.cardborder}>
            <p className={styles.subtitlelargeblack}>Introduction</p>
 
            <p className={styles.descriptionlargeblack}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>
      </Card>
 






</Col>
</Row>



<CardGroup>
<Card className={styles.cardborder}>
    
<Image src={Img15} fluid/>


  
</Card>
<Card className={styles.cardborder}>
    
<Image src={Img17} fluid />

  
</Card>
</CardGroup>


<Row className="justify-content-md-center">
<Col xs lg="6">





      <Card className={styles.cardborder}>
            <p className={styles.subtitlelargeblack}>Introduction</p>
 
            <p className={styles.descriptionlargeblack}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>
      </Card>
 






</Col>
</Row>

<Image src={Img26} fluid className={styles.imgstyle} />


<Image src={Img25} fluid className={styles.imgstyle} />



<Row className="justify-content-md-center">
<Col xs lg="6">





      <Card className={styles.cardborder}>
      <p className={styles.subtitlelargeblack}>Completion of the deliverables  </p>
      <p className={styles.descriptionlargeblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>

      </Card>
 






</Col>
</Row>

      <Image src={Img19} fluid  className={styles.imgfinal} />

      <Image src={Img20} fluid  className={styles.imgfinal} />
      
      <Image src={Img21} fluid  className={styles.imgfinal}/>

 



<Row className="justify-content-md-center">
<Col xs lg="6">





      <Card className={styles.cardborder}>

      <p className={styles.subtitlelargeblack}>Results:</p>
    <p className={styles.descriptionlargeblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
     
      </Card>
 






</Col>
</Row>









<Row className="justify-content-md-center">
<Col xs lg="6">







<CardGroup>
<Card className={styles.cardborder}>
    

<p className={styles.subtitlelargeblack}>Art RendexVous</p>
<div className={styles.spaceingwhite}></div>

  <p className={styles.descriptionlargeblack}>Mobile App Redesign for Art Community iOS App</p>
  <div className={styles.spaceingwhite}></div>

  <LinkContainer to="/artrendezvous">
                <p>
                  <Button className={styles.mainbutton} variant="primary">View Next</Button>
                </p>
              </LinkContainer>



  
</Card>
<Card className={styles.cardborder}>
    
<p className={styles.subtitlelargeblack}>Go to Portfolio:</p>
<div className={styles.spaceingwhite}></div>

  <p className={styles.descriptionlargeblack}>Go Back to Portfolio</p>
  <div className={styles.spaceingwhite}></div>

  <LinkContainer to="/portfolio">
                <p>
                  <Button className={styles.mainbutton} variant="secondary">View More Pieces</Button>
                </p>
              </LinkContainer>


  
</Card>
</CardGroup>




</Col>
</Row>











</Container>




  </>
  /* End of JSX Fragment*/
)