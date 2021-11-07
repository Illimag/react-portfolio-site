import React from 'react';

import { Link } from 'react-router-dom'

import { fadeIn } from 'react-animations'

import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

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
import Img29 from '../../assets/HP Prodesk Mockup.png';
import Img30 from '../../assets/hero-gradient.png';

import Img31 from '../../assets/MacBook Pro Mockup (Dark & Light).png';
import Img32 from '../../assets/MacBook Pro Mockup.png';
import Img33 from '../../assets/XDR Mockup.png';
import Img34 from '../../assets/smarttvtest1.png';
import Img35 from '../../assets/businesswoman-planning-with-adhesive-notes-on-glas-JX7K3ZV.jpg';

import Img36 from '../../assets/testimg-01-min.png';
import Img37 from '../../assets/testimg-02-min.png';
import Img38 from '../../assets/testimg-03.png';

import Img39 from '../../assets/testtest-01.png';

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


import video from '../../assets/newhomepagevids/1.mp4'
import videomobile from '../../assets/newhomepagevids/1-1.mp4'

import scrolldown from '../../assets/scrolldown-01.png';

import PreloadLegacy from '../../assets/smarttvtest1.png';
import PreloadLegacy1 from '../../assets/img/legacypictures/legacypicturesbackground-01.jpg';
import PreloadLegacy11 from '../../assets/img/legacypictures/legacypicturesbackground-02.jpg';


import BackgroundTest from '../../assets/img/legacypictures/portfoliopiecebackground-06.jpg';
import BackgroundTest1 from '../../assets/img/legacypictures/portfoliopiecebackground-07.jpg';
import BackgroundTest2 from '../../assets/img/legacypictures/portfoliopiecebackground-08.jpg';
import BackgroundTest3 from '../../assets/img/legacypictures/portfoliopiecebackground-09.jpg';
import BackgroundTest4 from '../../assets/img/legacypictures/portfoliopiecebackground-10.jpg';

import BackgroundTestMobile from '../../assets/img/legacypictures/portfoliopiecebackground-01.jpg';
import BackgroundTestMobile1 from '../../assets/img/legacypictures/portfoliopiecebackground-02.jpg';
import BackgroundTestMobile2 from '../../assets/img/legacypictures/portfoliopiecebackground-03.jpg';
import BackgroundTestMobile3 from '../../assets/img/legacypictures/portfoliopiecebackground-04.jpg';
import BackgroundTestMobile4 from '../../assets/img/legacypictures/portfoliopiecebackground-05.jpg';





import Media from 'react-media';




import vid1 from '../../assets/newhomepagevids/1.mp4'
import vid11 from '../../assets/newhomepagevids/1-1.mp4'

export const Legacypictures = () => (
  /* Start of JSX Fragment*/
  <>









<Container fluid className={styles.test}>
<div id="test"></div>
<Fade triggerOnce>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={PreloadLegacy11} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadLegacy11} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadLegacy1} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        </Fade>  
        <Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>
<div className={styles.spaceing}></div>
<div className={styles.spaceing}></div>
<div className={styles.spaceing}></div>
<div className={styles.spaceing}></div>


<Fade>
<p className={styles.subtitlesmallwhitecenter}>Legacy Pictures</p>
            <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}></span> Los Angeles <span className={styles.grey}> Company</span></p>

                        <div className={styles.spaceing}></div>
</Fade>           


            </Col>
</Row>



<Row className={styles.justifycontentcenter}>
<Col xs={12} md={7}>

<Slide direction="up">
            
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={PreloadLegacy} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={PreloadLegacy} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={PreloadLegacy} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>


            </Slide>

            <div className={styles.spaceing}></div>
         

            </Col>
</Row>



<div className={styles.spaceing}></div>



<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>






<CardGroup className={styles.backgroundgadient}>
      <Card className={styles.backgroundtransparent}>

      <Slide direction="up">
            <p className={styles.subtitlelargewhiteleft}>Design task</p>
            </Slide>

            <div className={styles.spaceing}></div>

            <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Offer my services as an UI/UX Designer, and am excited to get a contract started with the company.
        </p>
        </Slide>

      </Card>

      <Card className={styles.backgroundtransparent}>
      <Fade>
      <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img31} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img31} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img31} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
    
      </Fade>
      </Card>
      </CardGroup>




</Col>
</Row>

<div className={styles.spaceing}></div>




<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>

<CardGroup className={styles.backgroundgadient}>
      <Card className={styles.backgroundtransparent}>
        <Card.Body>
        <Fade>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img32} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img32} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img32} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
          </Fade>
        </Card.Body>
      </Card>

      <Card className={styles.backgroundtransparent}>
        <Card.Body>
        <Slide direction="up">
          <p className={styles.subtitlelargewhitecenter}>Users</p>
          </Slide>
          <div className={styles.spaceing}></div>
          <Card.Text>
          <Slide direction="up">
             <p className={styles.descriptionlargewhitebold}>Users of the Legacy Pictures website would be looking for a representention of themselves on the internet, which could be a website that showcases information regarding the company.</p>
             </Slide>
              </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>

    </Col>
</Row>
<div className={styles.spaceing}></div>



</Container>

































<Container fluid className={styles.test}>
        <div id="test"></div>
        <Fade triggerOnce>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={BackgroundTestMobile3} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={BackgroundTestMobile3} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={BackgroundTest3} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        </Fade>  
<div className={styles.spaceing}></div>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>



<Fade>
            <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>User Interface Designs</span> with Adobe XD</p>
            </Fade>

                        <div className={styles.spaceing}></div>
            <div className={styles.spaceing}></div>

            </Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={12} md={6}>

<Slide direction="up">
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img17} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img17} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img17} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
</Slide>

            </Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>
            <div className={styles.spaceing}></div>

            <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website. Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>
            </Slide>
           
            <div className={styles.spaceing}></div>



</Col>
</Row>

<div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>



<Fade>
            <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Created designs based on what</span> the redesigns of the website needed.</p>
            </Fade>


                        <div className={styles.spaceing}></div>
            <div className={styles.spaceing}></div>

            </Col>
</Row>

<Row className={styles.justifycontentcenter}>
<Col xs={12} md={6}>

<Slide direction="up">
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img17} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img17} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img17} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
            </Slide>
            </Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>

            <div className={styles.spaceing}></div>


            <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements.</p>
            </Slide>

            <div className={styles.spaceing}></div>



</Col>
</Row>




</Container>










<Container fluid className={styles.test}>

<Fade triggerOnce>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={BackgroundTestMobile4} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={BackgroundTestMobile4} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={BackgroundTest4} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        </Fade>  
        <div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>



<Fade>
            <p className={styles.subtitlelargeblackcenter}><span className={styles.grey}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.</span></p>
</Fade>

                        <div className={styles.spaceing}></div>
            <div className={styles.spaceing}></div>


            </Col>
</Row>




<Row className={styles.justifycontentcenter}>
<Col xs={12} md={9}>


<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img35} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img35} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img35} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
            </Fade>
            </Col>
</Row>






<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>
<div className={styles.spaceing}></div>



<Fade>
            <p className={styles.subtitlelargeblackcenter}><span className={styles.grey}>Redesigns of the UI were created and sent as deliverables. </span></p>
</Fade>

                        <div className={styles.spaceing}></div>
            <div className={styles.spaceing}></div>


            </Col>
</Row>




<Row className={styles.justifycontentcenter}>
<Col xs={12} md={4}>

<Slide direction="up">
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img36} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img36} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img36} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
</Slide>

            </Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The deliverables were Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
            </Slide>
            <div className={styles.spaceing}></div>


</Col>
</Row>





</Container>






































<Container fluid className={styles.test}>
        <div id="test"></div>



        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={BackgroundTestMobile2} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={BackgroundTestMobile2} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={BackgroundTest2} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>


<div className={styles.spaceing}></div>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>



<Fade>
            <p className={styles.subtitlelargewhitecenter}>Starting the User Interface designs on Adobe XD were started.</p>
  </Fade>     

  <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>
            </Slide>



            </Col>
</Row>





<Row className={styles.justifycontentcenter}>
<Col xs={12} md={9}>



<Slide direction="up">
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img38} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img38} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img38} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
            </Slide>

            </Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>

            <div className={styles.spaceing}></div>
            <div className={styles.spaceing}></div>


            <Fade>
            <p className={styles.subtitlelargewhitecenter}>Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
            </Fade>     
            <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface. The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>
            </Slide>


            <div className={styles.spaceing}></div>
            <div className={styles.spaceing}></div>

</Col>
</Row>


</Container>









<Container fluid className={styles.test}>


  
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={BackgroundTestMobile1} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={BackgroundTestMobile1} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={BackgroundTest1} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>

<Row className={styles.justifycontentcenter}>
<Col xs={10} md={12}>

<CardGroup>
      <Card className={styles.backgroundtransparent}>
        <Card.Body>
        <Slide direction="left">
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img39} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img39} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img39} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
          </Slide>
        </Card.Body>
      </Card>

      <Card className={styles.backgroundtransparent}>
        <Card.Body>
        <Fade>
          <p className={styles.subtitlelargewhitecenter}>A brighter idea</p>
          </Fade>   
          <div className={styles.spaceing}></div>
          <Card.Text>
          <Slide direction="up">
             <p className={styles.descriptionlargewhitebold}>There was a survey, that gained insight on various team member's thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions. Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>
              </Slide>
              </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>

    </Col>
</Row>

<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>



<Fade>
            <p className={styles.subtitlelargewhitecenter}>Contract was signed between myself and Legacy Pictures</p>
            </Fade>


            
            <div className={styles.spaceing}></div>


            </Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={12} md={6}>



<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small &&
              <div>
               
                    <Image src={Img37} fluid className={styles.centerimage}/>
                 </div>
                }

              {matches.medium &&
            <div>
                    <Image src={Img37} fluid className={styles.centerimage}/>
                    </div>
                }

              {matches.large &&
               
               <div>
                <Image src={Img37} fluid className={styles.centerimage}/>
                </div>
            
                }
            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>



<Fade>
           

<p className={styles.descriptionlargewhitebold}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface. The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>


            </Fade>


            
            <div className={styles.spaceing}></div>


            </Col>
</Row>


</Container>









<Container fluid className={styles.test2}>
<Row className={styles.justifycontentcenter}>
<Col xs lg="8">







<CardGroup>
<Card className={styles.cardborder}>
    
<div className={styles.spaceing}></div>
<p className={styles.descriptionlargewhitebold}>Art RendexVous</p>

  <p className={styles.descriptionlargewhite}>Mobile App Redesign</p>


  <LinkContainer to="/artrendezvous">
                <p>
                  <Button className={styles.mainbutton} variant="primary">View Next</Button>
                </p>
              </LinkContainer>



  
</Card>

<div className={styles.divider}/>

<Card className={styles.cardborder}>
<div className={styles.spaceing}></div>
<p className={styles.descriptionlargewhitebold}>Go to Portfolio:</p>

  <p className={styles.descriptionlargewhite}>Go Back to Portfolio</p>


  <LinkContainer to="/">
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