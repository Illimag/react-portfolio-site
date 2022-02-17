import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Img34 from '../../assets/sssds-01.png';
import Img35 from '../../assets/mockuptest-02.png';
import Img36 from '../../assets/uguru-09.jpg';
import Img38 from '../../assets/uguruimg1.jpg';
import Img39 from '../../assets/uguruimg2.jpg';
import Img40 from '../../assets/uguruimg3.png';
import Img41 from '../../assets/uguruimg4.png';
import styles from '../css/style.module.css';
import '../css/style.css';
import PreloadUguruBackgroundImageTest from '../../assets/img/uguru/backtest-01-min.jpg';
import PreloadUguruBackgroundImageTestMobile from '../../assets/img/uguru/backtest-06-min.jpg';
import PreloadUguruBackgroundImageTest1 from '../../assets/img/uguru/backtest-02-min.jpg';
import PreloadUguruBackgroundImageTestMobile1 from '../../assets/img/uguru/backtest-07-min.jpg';
import PreloadUguruBackgroundImageTest2 from '../../assets/img/uguru/backtest-03-min.jpg';
import PreloadUguruBackgroundImageTestMobile2 from '../../assets/img/uguru/backtest-08-min.jpg';
import PreloadUguruBackgroundImageTest3 from '../../assets/img/uguru/backtest-04-min.jpg';
import PreloadUguruBackgroundImageTestMobile3 from '../../assets/img/uguru/backtest-09-min.jpg';
import PreloadUguruBackgroundImageTest4 from '../../assets/img/uguru/backtest-05-min.jpg';
import PreloadUguruBackgroundImageTestMobile4 from '../../assets/img/uguru/backtest-10-min.jpg';
import PreloadUguruBackgroundImageTest5 from '../../assets/img/uguru/1-05.jpg';
import PreloadUguruBackgroundImageTestMobile5 from '../../assets/img/uguru/1-05.jpg';

import Media from 'react-media';

import video from '../../assets/vids/compressed_vid/vid5.mp4';
import video1 from '../../assets/sfvid.mp4';

export const Uguru = () => (
  /* Start of JSX Fragment*/
<>

  <Container fluid className={styles.test2}>
  <Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
    }}>
    {matches => (
    <>
    {matches.small &&
      <div>
        <Image src={PreloadUguruBackgroundImageTestMobile} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.medium &&
      <div>
        <Image src={PreloadUguruBackgroundImageTestMobile} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.large &&
      <div>
        <Image src={PreloadUguruBackgroundImageTest} fluid className={styles.testgradientbackground}/>
      </div>
    }
    </>
    )}
  </Media>
  <div className={styles.backoverlay}></div>
      <div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
      <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
        <Fade>
        <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>CASE STUDY</span></p>
          </Slide>
        <p className={styles.subtitlesmallwhitecenter}>Uguru, INC</p>
        <p className={styles.subtitlesmallwhitecenter}><span className={styles.grey}></span> San Francisco <span className={styles.grey}>Mobile Application Startup</span></p>
    
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Project Date: <span className={styles.grey}>October 2016 - January 2017</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Role: <span className={styles.grey}>Graphic UI/UX Intern</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Location: <span className={styles.grey}>San Francisco Bay Area</span></p>
          </Slide>
          <div className={styles.spaceing}></div>
          <div className={styles.spaceing}></div>
        </Fade>           
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={10}>
      <Fade>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
          }}>
          {matches => (
          <>
          {matches.small &&
            <Image src={Img34} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={Img34} fluid className={styles.centerimage}/>
          }
                {matches.large &&
                
                <Image src={Img34} fluid className={styles.centerimage}/>

                  }

              </>
            )}
          </Media>
              </Fade>  



              </Col>
  </Row>


<div className={styles.spaceing}></div>



  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>INTRODUCTION</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Uguru, INC</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>A mobile application startup in downtown San Francisco, CA (SOMA), they were looking to launch their app for college students looking for tutoring services in an online marketplace.</p>
          </Slide>
          </Col>
  </Row>

  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Mobile Application Startup in SOMA</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The product was a mobile application for college students looking to peer tutor each other in subjects that they were majoring in. The core team comprised of:</p>
          </Slide>

        <div className={styles.spaceing}></div>
            <Slide direction="up">
              <ul className={styles.unorderlist}>
                <li>Lead Developer (CEO)</li>
                <li>Project Manager</li>
                <li>Data Scientist Intern</li>
                <li>Software Engineer Intern</li>
                <li>Graphic and UI/UX Designer Intern</li>
              </ul>
            </Slide>
            <div className={styles.spaceing}></div>
            <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Eventually a Lead Designer was contracted for the User Interface designs. The startup was located in the Spear Tower, SOMA, which is downtown San Francisco right across from the SF Ferry Building. </p>
          </Slide>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={10}>
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
              <video autoPlay preload="true" loop playsInline muted className={styles.centerimage}>
                <source src={video}/>
              </video>
            </div>
          }
          {matches.medium &&
            <div>
              <video autoPlay preload="true" loop playsInline muted className={styles.centerimage}>
                <source src={video}/>
              </video>
            </div>
          }
          {matches.large &&
            <div>
              <video autoPlay preload="true" loop playsInline muted className={styles.centerimage}>
                <source src={video}/>
              </video>
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
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>First-Time Experience Working in the Design Industry</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>At the time, was looking for any job to make money and was searching Craigslist in the jobs and gigs section. In particular the Foods and Hospitalities section to find a part time job at a restaurant. There was an ad there which looked interesting, and it was the internship at the startup. After the initial interview was able to get the internship and started work at Uguru, INC. It was a first-time experience working with UI/UX and without this internship would have no way of knowing what it was like working at an App startup in Downtown San Francisco, CA.</p>
          </Slide>


    </Col>
  </Row>
  <div className={styles.spaceing}></div>

</Container>















<Container fluid className={styles.test2}>
  
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={PreloadUguruBackgroundImageTestMobile1} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile1} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest1} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>


        <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Designing User Interface Screens</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The first screens were mainly for the CEO, the CEO was the Lead Developer, who was building a Hybrid Mobile Application with Iconic. Iconic builds Hybrid Mobile Applications that can be used to build Apps to both iOS and Andriod Applications.</p>
          </Slide>


    </Col>
  </Row>
<div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Understanding the User Base</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The userbase was college students, who were looking to help people as well as receive help for college. This is particularly useful for people that have majors in a particular subject but might need help with another topic. The main demographic was the local UC Berkeley Area, because actually the CEO was a student at UC Berkeley.</p>
          </Slide>


    </Col>
  </Row>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={10}>
<Fade>
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
                    <Image src={Img36} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img36} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img36} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
        </Fade>
      </Card.Body>
    </Card>
    </CardGroup>
    </Fade>
  </Col>
</Row>


<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Challenge:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Tasks as a Graphic & UI/UX Designer Intern</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The CEO needed a Graphic Designer who could transition into a User Interface/User Experience Designer. He needed someone who could create High-Fidelity User Interface Mockups and create the Rapid Prototypes. As well as needing someone who could do various other office related tasks.</p>
          </Slide>
          </Col>
  </Row>

  <div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Starting Work as a UI/UX Designer</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The projects were a series of various User Interface designs. Initially designed Low Fidelity Mockups that were to be used for the interface. Was really happy to get started on the work but was not really sure how to start. Luckly enough was able to become better with time and grow as a designer. There were a few designs that were started with for example, on the onboarding of the Mobile iOS Application. This was designed based on sketches and then created Higher Fidelity versions of them.</p>
          </Slide>


    </Col>
  </Row>
<div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img38} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img38} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img38} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>

<div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Rapid Prototyping with Proto.IO</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>After the CEO gave permission to start the Rapid Prototyping of the Static Mockups, Proto.io was used to create the interactive versions of the designs. Mainly the onboarding screens were Rapid Prototyped with animations. Additionally, the designs of the website, and various other parts of the interface were prototyped. For example, the designs for the home page of the app, the statistics page, and other pages such as they would be used on the production application that would be deployed.</p>
          </Slide>


    </Col>
  </Row>
<div className={styles.spaceing}></div>



<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Ideation of the Personas </p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Initially most of the designs were based on this fictional Guru persona, whom was someone who would be able to tutor students. The main point of this application is to create a social media community, this community could be at a state school, or at a University at California. Then were able to create a demographic of users based off what we know about the student population. Some of it was assumptions, but regardless we were able to create various User Journeys, and User Flows.</p>
          </Slide>


    </Col>
  </Row>
<div className={styles.spaceing}></div>


</Container>




<Container fluid className={styles.test2}>
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
                    <Image src={PreloadUguruBackgroundImageTestMobile2} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile2} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest2} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        <div className={styles.backoverlay}></div>

        <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Solution:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>User Interface Screen Assets and Deliverables</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Created High Fidelity Mockups for the Mobile Application and the Rapid Prototypes using Static Image Files and Animations. The lead designer helped with moving the designs forward and the application designs began becoming completed with comprehensive User Flows. This was great to learn from this individual and while working with the whole team it really eye opening on how a team would be able to develop product for production.</p>
          </Slide>
         
          </Col>
  </Row>

  <div className={styles.spaceing}></div>



<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img39} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img39} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img39} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>



<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Creating the MVP</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Over time, learned various things to make the designs better and tried to make a real difference in how the application would look and feel. For example, the Home page of the User Interface in the Mobile Application, was able to create the layout and the different parts of the interface that needed to be created. We needed to do research, such as what types of people would be using the interface, we were really focused on creating the MVP. But other than that, we really didn't know how this was going to happen. After the interface became better, started creating a Higher Fidelity interface.</p>
          </Slide>
          </Col>
  </Row>
  
<div className={styles.spaceing}></div>
</Container>





<Container fluid className={styles.test2}>
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
                    <Image src={PreloadUguruBackgroundImageTestMobile3} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTest3} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest3} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        <div className={styles.backoverlay}></div>

<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Adobe Creative Suite UI/UX Design Toolkit</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Mainly using tools from Adobe Creative Suite such as Adobe Illustrator and Adobe Photoshop. This was before Adobe XD. Additionally, for Rapid Prototyping software used Proto.io for the animations of the User Interface. This really helped a lot when trying to do the Onboarding screens. Additionally, for the Home page interface after getting the sketch from the CEO and knowing what the layout needed to be was able to start creating the visual look of the application based on the style guide.</p>
          </Slide>
          </Col>
  </Row>

  <div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Before Adobe XD and Figma</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>When we started to do the design process, it was mainly to do Low Fidelity Prototyping, such as Balsamiqs, but started mainly on Adobe Illustrator. Adobe Illustrator, which was used because Adobe XD, as well as Figma were both released after 2016. So, for Designers who did UI/UX Design at SOMA in Downtown San Francisco, we used Adobe Illustrator, which was preferred to use for UI/UX Design than Adobe Photoshop, because Adobe Illustrator uses vectors rather than pixels. So, we designed the User Interfaces on Adobe Illustrator because this was before Adobe XD and Figma. Also, it took a few years for Adobe XD to build itself up to the functionalities that are available currently for Adobe XD and similar software applications.</p>
          </Slide>
          </Col>
  </Row>
  <div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img40} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img40} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img40} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>
</Container>








<Container fluid className={styles.test2}>
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
                    <Image src={PreloadUguruBackgroundImageTestMobile4} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile4} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest4} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>

<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Results:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>The Designer Journey</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>After the internship was completed, continued the journey as a Designer. From this experience, when returning to California College of the Arts changed majors from Industrial Design to Interaction Design to focus on the User Interface and User Experience Design.</p>
          </Slide>
          </Col>
  </Row>






  <div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Learning to Code</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The CEO was encouraging to do the code of the interface but at the time was unsure about what that would actually require so didn’t really know how to do that. Later after the internship was over, learned HTML/CSS/JS and the web frameworks that would have been required to do what he expected.</p>
          </Slide>
          </Col>
  </Row>
  <div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img41} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img41} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img41} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>



</Container>














<Container fluid className={styles.test2}>
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
                    <Image src={PreloadUguruBackgroundImageTestMobile5} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile5} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest5} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>

        <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>


<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Completion of Internship</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The internship was the first step into the tech industry, and started the journey of becoming a User Interface and User Experience Designer. After high school was really unsure what to do, but chose to go into Industrial Design, then transferred to California College of the Arts (CCA) in San Francisco as an Industrial Design major. This was because of a lack of any real experience in the field and didn't know what was more relevant for Designers around the San Francisco Bay Area. With the internship learned what was more relevant for the industry as well being able to make the change from Industrial Design to Interaction Design. As well as learning the important skill of working as a team.</p>
          </Slide>
          </Col>
  </Row>

  <div className={styles.spaceing}></div>

  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={10}>
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
              <video autoPlay preload="true" loop playsInline muted className={styles.centerimage}>
                <source src={video1}/>
              </video>
            </div>
          }
          {matches.medium &&
            <div>
              <video autoPlay preload="true" loop playsInline muted className={styles.centerimage}>
                <source src={video1}/>
              </video>
            </div>
          }
          {matches.large &&
            <div>
              <video autoPlay preload="true" loop playsInline muted className={styles.centerimage}>
                <source src={video1}/>
              </video>
            </div>
          }
          </>
          )}
        </Media>
      </Fade>
    </Col>
  </Row>



<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Reflection:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Learning About the San Francisco Bay Area Tech Industry</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>At the internship at Uguru, INC, it was a challenging task since did not have the right skillset to be effective at my allotted tasks. Luckly was working alongside a very talented designer and learned by doing. With a background in graphics helped with slowly developing skillsets for User Interface Design as well as an understanding of User Experience. This internship was really the push in the right direction in the journey as an UI/UX Designer as well as getting a foot into the tech industry. </p>
          </Slide>
          </Col>
  </Row>
  <div className={styles.spaceing}></div>

</Container>
















<Container fluid className={styles.test2}>
<Row className="justify-content-md-center">
<Col xs lg="8">







<CardGroup>

<Card className={styles.cardborder}>
<div className={styles.spaceing}></div>
<p className={styles.descriptionlargewhitebold}>Artrendezvous</p>

  <p className={styles.descriptionlargewhite}>Mobile App Redesign</p>


  <LinkContainer to="/artrendezvous">
                <p>
                  <Button className={styles.mainbutton} variant="secondary">View Previous</Button>
                </p>
              </LinkContainer>


  
</Card>

<div className={styles.divider}/>

<Card className={styles.cardborder}>
    
<div className={styles.spaceing}></div>
<p className={styles.descriptionlargewhitebold}>Contact Now!</p>

  <p className={styles.descriptionlargewhite}>Contact Now!</p>


  <LinkContainer to="/Contact">
                <p>
                  <Button className={styles.mainbutton} variant="primary">Contact Now!</Button>
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