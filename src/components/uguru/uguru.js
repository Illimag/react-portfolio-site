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
import Img34 from '../../assets/ugurumainpic-01-min.png';
import Img35 from '../../assets/mockuptest-02.png';
import Img36 from '../../assets/mockuptest-01.png';
import Img38 from '../../assets/phonemockuo.png';
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

              <div className={styles.spaceing}></div>
          


              </Col>
  </Row>


<div className={styles.spaceing}></div>




<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>INTRODUCTION</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Mobile Application Startup funded by Bay Angels</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Uguru, INC was a startup in San Francisco. The product that they were developing was a mobile Application for college students. It was a small team, made up of a project manager, CEO, data science intern, software enginner intern, and myself. Eventually another designer was called in and boosted the User Interface designs. The startup was located in SOMA, which is down town san francisco right across from the ferry building. </p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Uguru received their funding of around 300k from an angel investor that was interested in building software product that would be able to create a platform for college students to get tutoring services, and other services. The peers would be able to tutor each other and be tutors for others. Over the feeling of the startup was one where there was alot of uncertainty with how the product was going to be developed and the CEO lacked the experience to really keep the team together and motivated. As well the people involved weren’t exactly knowing what to do.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There was a ad that was looking for someone to be an office admin worker and I replied to the ad and it was the internship at the startup. After the initial interview I was able to get the internship and I started work at Uguru, INC. It was a fun experience that got me into UI/UX and without this experience I dont know if I would be able to have found my way out into a better way.</p>
          </Slide>
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
<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>EMPATHY</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The first screens were mainly for the CEO, the CEO was a developer, who was building a hybrid mobile application with Iconic. Iconic builds hybrid mobile applications that can be used to upload apps to both iOS and Andriod applications.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Additionally the CEO had various assets that he was looking for someone to redesign and to reiterate on.The userbase is college students, who are looking to help people as well as receive help for college. This is particularly useful for people that have majors in a particular subject but might need help with another topic.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The main demographic that was ever reach was the local UC Berkeley Area. Because actually the CEO was a student at UC Berkeley.</p>
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

<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Challenge:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>The CEO needed a Graphic Designer who could transition into a User Interface Design/User Experience position. He needed someone whom could create high-fidelilty user interface mockups and create the rapid prototypes. As well as needing someone whom could do various other office related tasks.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The projects were a series of various User Interface designs. Initially I designed some low level fidelity mockups that were brought into the fold to be used for the interface. I was really happy to get strated on the work. But I think some parts of the trouble was not really knowing how to start. Luckly enoughI was able to become better with time and grow as a person. </p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There were a few designs that I started with for example, I worked on the onboarding of the Mobile app. For this I designed it based on some sketches and created a higher fidelity for them. There were alot of times I didn’t know what to do, but I continued on them and made them as good as I could.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>After the designs were completed and the CEO okayed them I started on creating rapid prototyping for them. This was done using proto.io and using this animation software I was able to show what the app would be like. Additionally I made designs for the website, and various other parts of the interface. For example I made designs for the home page of the app, the statistics page, and other pages such as they would be used on the production application that would be deployed and used.</p>
          </Slide>
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
            <p className={styles.subtitlesmallwhitecenter}>IDEATE</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Initially most of the designs were based on this fictional guru persona, whom was someone who would be able to teach students. Also the main point of this application is to create a social media, a community of people who could be at a state school, or at a university at California.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>We started with Card Sorting? We are able to create a demographic of users based off what we know about the student population. Some of it is assumptions. But we are able to create various user journeys, or user flows.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Additionally we can start trying to understand our personas pain points. We create Personas of people who would be using the application. For example if they went to state school there can be a few personas like this:</p>
          </Slide>
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
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Solution:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>I was able to create high fidelity mockups for the mobile application. As well as begining the rapid prototypes using static image files and animations.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>I was the graphic & UI/UX Designer Intern at the company, and later there was a lead designer that came in to help with moving the designs forwards faster. This was very great to learn from this individual and while working with the whole team it really showed me how a team would be able to create a production product.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There were a few designs that I started with for example, I worked on the onboarding of the Mobile app. For this I designed it based on some sketches and created a higher fidelity for them. There were alot of times I didn’t know what to do, but I continued on them and made them as good as I could.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There were a few people in the team. There was a Project manager type person, the CEO who was also a software enginner, a software engineer intern, a data science intern, and me who was graphic & UI/UX design intern, later a lead designer who specalized in User Interface come in to help move the screen along better as well as building out more of the app flows.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There were alot of difficulties with workingon this application. For example the number of hours we were expected to work for example I was working from 8am to 8pm mon - sat or sometimes they expected me to come in on sundays. It was difficult to get to my internship and although the CEO was a cool guy he didnt seen to understand the basic things that are needed for his workers to be able to be successful. Even so we tried our best and worked to make his dream a reality..</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The User Interface Designs needed to be done, and I pushed hard to get them designed over time, I learned various things to make the designs look better and hopefully made a real difference in how the application would look and feel. For example for the Home page of the user interface in the mobile application, I was able to creating the layout and seeing the different parts of the interface that needed to be created..</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>We needed to do more research, such as what types of people would be using the interface, we were really focused on creating the MVP. But other that that we really didnt know how this was going to happen. After the interface is becoming better, I started creating a higher fidelity interface.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>I would be putting in the very high number of hours and it began becoming very stressful. Additionally I was For the home page interface after getting the sketch from the CEO and knowing what the layout needed to be I was able to start creating the visual look of the application based on the style guide.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>I was using tools mainly from adobe such as Illustrator and photoshop. This was before Adobe XD. Additionally I was using rapid prototyping software that was helping me with seeing how the animations of the user Interface would look. This really helped alot when trying to do the Onboarding screens.</p>
          </Slide>
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
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>DESIGN</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>When we started to do the design process, it was mainly to do low fidelity prototyping, such as balsamiqs, but preferably started on Adobe Illustrator. Adobe Illustrator which was used because Adobe XD, as well as Figma were both released after 2016.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>So for designers who did UI/UX Design at SOMA in Downtown San Francisco, we used Adobe Illustrator, which was much nicer to use than Adobe Photoshop to use, because we are able to use vectors rather than pixels.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>So we designed the User Interfaces on Adobe Illustrator because this was before Adobe XD and Figma. Also it took a few years for Adobe XD to build itself up to the functionalities that are available currently for Adobe XD and similar software applications.</p>
          </Slide>
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
            <p className={styles.subtitlesmallwhitecenter}>After my internship was completed, I continued my journey as a designer. And from this experience I returned to California College of the Arts changing my major from Industrial Design to Interaction design to focus on the User Interface and User Experience Design.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The CEO would want me to do the code of the interface but at the time I was unsure about what that would actually require me to do and as so I didn’t really know how to do that. LAter after my intership was over I learned HTML/CSS/JS and the web frameworks that would have been required to let me do what he expected of me.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>I completed my internship by creating the home page, onboarding screens, etc and I think over the level of quality was ok. I returned back to school.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>After my internship, this was my first taste of being part of the tech industry and it showed me a little about what direction I needed to go to be successful. For example after high school I was really unsure what to do, but I chose to go into Industrial Design, and I attended Hongik University for Industrial Design. After I came back from Korea, I transferred to De Anza for graphic design because of my art background this made alot of sense to me at the time.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Then I transfered to CCA california college of the arts in san francisco as industrial design major. This was because I didnt have any experience in the field and I didnt know what was more relevant for people around this area.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>When I did my internship I learned what was more relevant for the industry as well being able to make the change from Industrial Design to Interaction Design. I learned what it was like to work as a team.</p>
          </Slide>
          </Col>
  </Row>






  <div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>PROTOTYPE</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There were very primate types of rapid prototyping software used such as Proto.io, which were a good way to create rapid prototypes of the application.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>So taking the high fidelity prototypes and then creating prototypes of them using Proto.io, was what was used instead of the rapid prototyping functionality that is available for Adobe XD and Figma, as well as Sketch, and Invision.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>But at the time there wasent Adobe XD and Figma, so what we used instead was Adobe Illustrator and Proto.IO to rapid prototype the applications.</p>
          </Slide>
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
            <p className={styles.subtitlesmallwhitecenter}>TEST</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The main application was being developed by the CEO who was the lead developer.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There are several ways to test this application. Finding the correct demographic and getting the actual demographic to use the application, is one of the best ways to test this application. There are various User Interfaces that need to be User Tested.</p>
          </Slide>
          </Col>
  </Row>




<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>



<CardGroup className={styles.backgroundtransparent}>

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
      </Card>
      </CardGroup>




</Col>
</Row>


<div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Reflection:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>At my internship at Uguru, INC. It was a challenging task since I did not have the right skillset to be effective at my alloted tasks. Luckly I was working along side a very talented designer and learned by doing. My background in graphics helped me slowly develop my skillsets for User Interface design as well as an understanding of User Experience.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>This internship was really the first steps for me to being the journey as an UI/UX Designer as well as getting into the tech industry. Although it was difficult at times, and it was unsure for me to know what worked and didnt work, when the CEO suggested that I should start programming it took me a long time to start programming. </p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>After I started programming, it really opened up my world to the possibilities of what was possible as well as what types of mediums i would be interested in working in. For example I was interested in working with devices such as mobile devices, and design user Interfaces for mobile applications and websites.</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>After I started learning HTML/CSS to start building these websites that I designed it really opened my world up to understanding what was possible for me as a designer as well as being able to code. As so I continued on with learning how to code and I learned code such as CSS libraries such as bootstrap, and JavaScript frameworks. .</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Eventually I learned how to write logic code with python and even began building little software systems. Additionally I learned more about the technologies surround web languages and web browsers and learning how to code for web browsers, while keeping in mind all the design technicals for an amazin user interface.</p>
          </Slide>
          </Col>
  </Row>


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