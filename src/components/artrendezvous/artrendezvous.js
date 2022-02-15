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
import styles from '../css/style.module.css';
import '../css/style.css';
import Img28 from '../../assets/img/legacypictures/1-04.jpg';
import Img35 from '../../assets/phonehorizontal.png';
import Img36 from '../../assets/phonemockuo.png';
import Img37 from '../../assets/Flat.png';
import Img38 from '../../assets/phonetop-01.png';
import Media from 'react-media';
import PreloadArt from '../../assets/businessman-working-on-start-up-project-with-team--KG6C3DN.jpg';
import PreloadArt1 from '../../assets/mobile-01.png';
import PreloadArt11 from '../../assets/artrendezpicturemobile.jpg';
import PreloadArtBackgroundImageTest from '../../assets/img/art/back-02-min.jpg';
import PreloadArtBackgroundImageTestMobile from '../../assets/img/art/back-11-min.jpg';
import PreloadArtBackgroundImageTest1 from '../../assets/img/art/back-03-min.jpg';
import PreloadArtBackgroundImageTestMobile1 from '../../assets/img/art/back-12-min.jpg';
import PreloadArtBackgroundImageTest2 from '../../assets/img/art/back-04-min.jpg';
import PreloadArtBackgroundImageTestMobile2 from '../../assets/img/art/back-13-min.jpg';
import PreloadArtBackgroundImageTest3 from '../../assets/img/art/back-05-min.jpg';
import PreloadArtBackgroundImageTestMobile3 from '../../assets/img/art/back-14-min.jpg';
import PreloadArtBackgroundImageTest4 from '../../assets/img/art/back-06-min.jpg';
import PreloadArtBackgroundImageTestMobile4 from '../../assets/img/art/back-15-min.jpg';
import PreloadArtBackgroundImageTest5 from '../../assets/img/art/back-07-min.jpg';
import PreloadArtBackgroundImageTestMobile5 from '../../assets/img/art/back-16-min.jpg';

export const Artrendezvous = () => (
  /* Start of JSX Fragment*/
<>

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
        <Image src={PreloadArt11} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.medium &&
      <div>
        <Image src={PreloadArt11} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.large &&
      <div>
        <Image src={PreloadArt} fluid className={styles.testgradientbackground}/>
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
        <p className={styles.subtitlesmallwhitecenter}>Artrendezvous</p>
        <p className={styles.subtitlesmallwhitecenter}><span className={styles.grey}></span> New York City <span className={styles.grey}>Web Application Redesign</span></p>
    
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Project Date: <span className={styles.grey}>July 2021 - July 2021</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Role: <span className={styles.grey}>UI/UX Designer</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Location: <span className={styles.grey}>New York City, NY</span></p>
          </Slide>
          <div className={styles.spaceing}></div>
      </Fade>   
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={8}>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
          }}>
          {matches => (
          <>
          {matches.small &&
            <Image src={PreloadArt1} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={PreloadArt1} fluid className={styles.centerimage}/>
          }
          {matches.large &&
            <Image src={PreloadArt1} fluid className={styles.centerimage}/>
          }
          </>
          )}
        </Media>
    </Col>
  </Row>

  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>INTRODUCTION</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Artrendezvous</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>A mobile application startup with social media community integrated into the interface showcasing artworks. The CEO was looking for someone to do a quick gig to redesign the mobile applications, based on the original mobile application designs.</p>
          </Slide>
          </Col>
  </Row>
  <div className={styles.spaceing}></div>
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
          <Image src={PreloadArtBackgroundImageTestMobile} fluid className={styles.testgradientbackground}/>
        </div>
      }
      {matches.medium &&
        <div>
          <Image src={PreloadArtBackgroundImageTestMobile} fluid className={styles.testgradientbackground}/>
        </div>
      }
      {matches.large &&
        <div>
          <Image src={PreloadArtBackgroundImageTest} fluid className={styles.testgradientbackground}/>
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
            <p className={styles.subtitlesmallwhitecenter}>Details on the Client</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Found the client on Dribbble, looking for gig projects to get started on. After communicating with the client over the Dribbble portal, immediately got started on an assignment related to redesign of the mobile application.</p>
          </Slide>
          <div className={styles.spaceing}></div>


    </Col>
  </Row>
  <div className={styles.spaceing}></div>
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
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.medium &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.large &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              </>
              )}
            </Media>
          </Fade>
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
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.medium &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.large &&
                <Image src={Img28} fluid className={styles.centerimage}/>
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

        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Building Empathy</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Started by empathizing by understanding the user base of the application. Ideated personas that would represent potential virtual users of the mobile application.</p>
          </Slide>

        <div className={styles.spaceing}></div>
            <Slide direction="up">
              <ul className={styles.unorderlist}>
                <li>Personas that like going to Art Museums</li>
                <li>Personas that like going to Art Galleries</li>
                <li>Personas limited by Geolocation, not locals</li>
              </ul>
            </Slide>
            <div className={styles.spaceing}></div>
            <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Various people would use the application, as a way to communicate on art. Creating this community and envisioning the user, understanding that one of the main users of the application would be the CEO of the application.</p>
          </Slide>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
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
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.medium &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.large &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              </>
              )}
            </Media>
          </Fade>
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
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.medium &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.large &&
                <Image src={Img28} fluid className={styles.centerimage}/>
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
        <Image src={PreloadArtBackgroundImageTestMobile1} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.medium &&
      <div>
        <Image src={PreloadArtBackgroundImageTestMobile1} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.large &&
      <div>
        <Image src={PreloadArtBackgroundImageTest1} fluid className={styles.testgradientbackground}/>
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
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Challenge:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Starting from Scratch</p>
          </Slide>
    <div className={styles.spaceing}></div>
      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>Assets were not provided as well as no examples of previous designs for the redesigns. So everything had to be recreated from scratch. Also when creating prototypes, it was difficult to showcase the beginning video background using the prototyping tools. There was need of careful care to not change the logo, and make sure to use the logo sent from the client.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
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
            <Image src={Img35} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={Img35} fluid className={styles.centerimage}/>
          }
          {matches.large &&
            <Image src={Img35} fluid className={styles.centerimage}/>
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
            <p className={styles.subtitlesmallwhitecenter}>Working for the Stakeholder</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Communication was done directly with the CEO, who worked with a remote designer and a developer previous to build out an application that is on the iOS apple store.</p>
          </Slide>
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
        <Image src={PreloadArtBackgroundImageTestMobile2} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.medium &&
      <div>
        <Image src={PreloadArtBackgroundImageTestMobile2} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.large &&
      <div>
        <Image src={PreloadArtBackgroundImageTest2} fluid className={styles.testgradientbackground}/>
      </div>
    }
    </>
    )}
  </Media>
  <div className={styles.backoverlay}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <div className={styles.spaceing}></div>
      <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Limitations on Time</p>
          </Slide>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>There were a certain level of issues related to time, and getting the solution as effectively as possible. A certain level of quality was expected even with the limited time given to this project.</p>
        </Slide>
          <div className={styles.spaceing}></div>
          <div className={styles.spaceing}></div>
    </Col>
  </Row>
<div className={styles.spaceing}></div>
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
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.medium &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.large &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              </>
              )}
            </Media>
          </Fade>
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
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.medium &&
                <Image src={Img28} fluid className={styles.centerimage}/>
              }
              {matches.large &&
                <Image src={Img28} fluid className={styles.centerimage}/>
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
      <div className={styles.spaceing}></div>
      <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Understanding the Design Task</p>
          </Slide>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Because the client has a pre-existing design, the designs of the next iteration needs to be different, but still things such as the user flow will look similar to the original. There can be minor adjustments made, based on new information or different methods of doing things.</p>
        </Slide>
          <div className={styles.spaceing}></div>
            <Slide direction="up">
              <ul className={styles.unorderlist}>
                <li>Original color scheme</li>
                <li>Original typography</li>
              </ul>
            </Slide>
            <div className={styles.spaceing}></div>
            <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>The User Interface needed several iteration with the different kinds of elements in different locations on the screen.</p>
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
        <Image src={PreloadArtBackgroundImageTestMobile3} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.medium &&
      <div>
        <Image src={PreloadArtBackgroundImageTestMobile3} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.large &&
      <div>
        <Image src={PreloadArtBackgroundImageTest3} fluid className={styles.testgradientbackground}/>
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
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Solution:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Creation of the UI Assets with Figma</p>
          </Slide>
    <div className={styles.spaceing}></div>
      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>Designed the redesigns using Figma, and redesigned all the assets on Figma. Later came back later and also designed it on Adobe XD. With a simple test to compare and pick UIs, the CEO gave art directions.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
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
        </Card>
      </CardGroup>
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
          <Image src={PreloadArtBackgroundImageTestMobile4} fluid className={styles.testgradientbackground}/>
        </div>
      }
      {matches.medium &&
        <div>
          <Image src={PreloadArtBackgroundImageTestMobile4} fluid className={styles.testgradientbackground}/>
        </div>
      }
      {matches.large &&
        <div>
          <Image src={PreloadArtBackgroundImageTest4} fluid className={styles.testgradientbackground}/>
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
      <CardGroup className={styles.backgroundtransparent}>
        <Card className={styles.backgroundtransparent}>
        <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Design of the User Flow</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Started the initial design of the mobile application, created various UIs that had variants of the UIs. Then created multiple variants and then presented them as slides, which allowed the client to select the UI variant for each slide of the application.</p>
          </Slide>
        </Card>
      </CardGroup>
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
        </Card>
      </CardGroup>
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
        <Image src={PreloadArtBackgroundImageTestMobile5} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.medium &&
      <div>
        <Image src={PreloadArtBackgroundImageTestMobile5} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.large &&
      <div>
        <Image src={PreloadArtBackgroundImageTest5} fluid className={styles.testgradientbackground}/>
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
            <p className={styles.subtitlesmallwhitecenter}>Video Background Prototyping</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>There was another issue related to the homepage, where it was difficult to prototype something with video backgrounds. That's one of the main issues related to creating rapid prototypes. So used Uxpin to create prototypes with background with video.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
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
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.large &&
            <Image src={Img37} fluid className={styles.centerimage}/>
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
            <p className={styles.subtitlesmallwhitecenter}>Feedback from the Client</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>After showcasing the prototype as well as the various UI variants, the client was able to pick them out from the User Flow and then a completed interface could be designed from the screens that were selected. There were also various other requirements from the CEO, who was looking for someone to design certain aspects to the re-design. As well as integrating the correct logo which was provided later.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>User Interface Design of the Mobile iOS Application</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>The design of the application, started with using Adobe XD. There were several screens that had to be designed of the iOS Mobile Application. There was a redesign of the home screen, as well as redesigning the entire user flow of the application. There were issues related to padding and margins for example, that needed to be fixed, or to get the design up to a modern standard.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Material Design Methodology</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>There was features such as a bottom navigation bar, that was not implemented in the previous design. Additionally the designs were first based on the Material Design Methodology. So the bottom navigation bar was designed by following Material Design Principles.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Information Architecture and Color Scheme</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>Additionally there was more opportunities to take in reorganizing the information, as well as ways of displaying this information. So various different interfaces were explored, as well as two different types of color schemes. From these two different color schemes, a pattern of User Interface was explored, these UIs were based on the previous designs.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>Result:</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>A Happy CEO</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>The CEO was satisfied with the results of the redesign. As a designer knew that the User Interface would be to the CEO’s look and because of the feedback received from the CEO, she received a redesign that was to no surprise to her because she picked the UI elements from a list of UI elements.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
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
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.large &&
            <Image src={Img37} fluid className={styles.centerimage}/>
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
            <p className={styles.subtitlesmallwhitecenter}>Adobe XD Re-Design</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>The designs were additionally re-done on Adobe XD per the CEO’s request, and the prototyping was done on Adobe XD. Being able to design the redesigns of the original application, as well as being able to use modern design software application tools is very useful for the next designer on the project.</p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
    </Col>
  </Row>

  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>iOS Rapid Prototying with Adobe XD</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>The prototype was designed with Adobe XD, as well as Uxpin to showcase a video background image in the home UI screen. The initial screen with the video background image prototype, had to be prototyped on Uxpin because Adobe XD doesn’t allow Videos or Gifs to be used in the Prototyping of the User Interface Screens.</p>
      </Slide>

    <div className={styles.spaceing}></div>
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
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.large &&
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          </>
          )}
        </Media>
      </Fade>
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>User Testing via CEO Feedback</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>The testing of the user interfaces was based on the selection of the designs of the client, who is a stakeholder in the direction of the designs of the application. Different variations of the designs were selected under a letter “A”, “B”, etc, and then were selected, and then later the file was re-designed using the designs that were selected for the final re-design of the application.</p>
      </Slide>
    <div className={styles.spaceing}></div>
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
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={Img37} fluid className={styles.centerimage}/>
          }
          {matches.large &&
            <Image src={Img37} fluid className={styles.centerimage}/>
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
            <p className={styles.subtitlesmallwhitecenter}>Limitations on Scope of Project</p>
          </Slide>

      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>One of the main issues with the platform is that there are few users and was still in a MVP phase. One of the main things to do for that application is to start getting users, and put the design and the development of the application to rest, till more users are using the application. As an UI/UX Designer on the team, the re-designs of the iOS UIs were the limitations of that scope. </p>
      </Slide>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
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
<Container fluid className={styles.test1}>
  <Container fluid className={styles.test2}>
    <Row className="justify-content-md-center">
      <Col xs lg="8">
        <CardGroup>
          <Card className={styles.cardborder}>
          <div className={styles.spaceing}></div>
            <p className={styles.descriptionlargewhitebold}>Legacy Pictures</p>
            <p className={styles.descriptionlargewhite}>Mobile App Redesign</p>
            <LinkContainer to="/legacypictures">
                <p>
                  <Button className={styles.mainbutton} variant="secondary">View Previous</Button>
                </p>
            </LinkContainer>
          </Card>
          <div className={styles.divider}/>
          <Card className={styles.cardborder}>
          <div className={styles.spaceing}></div>
            <p className={styles.descriptionlargewhitebold}>Uguru, INC</p>
            <p className={styles.descriptionlargewhite}>Mobile App Redesign for Art Community iOS App</p>
              <LinkContainer to="/uguru">
              <p>
                <Button className={styles.mainbutton} variant="primary">View Next</Button>
              </p>
              </LinkContainer>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </Container>
</Container>
  </>
  /* End of JSX Fragment*/
)