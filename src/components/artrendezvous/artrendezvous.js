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
import PreloadArt1 from '../../assets/handheld.png';
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
      <div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Artrendezvous</p>
        <p className={styles.subtitlelargewhitecenter}>Mobile Application Startup</p>
      </Fade>   
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={10}>
      <div className={styles.spaceing}></div>
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
      <div className={styles.spaceing}></div>
        <Fade>
          <p className={styles.subtitlelargewhitecenter}>Social media community integrated into an interface showcasing artworks.</p>
        </Fade>    
      <div className={styles.spaceing}></div>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Was connected on Dribbble, looking for gig projects that I could get started on. After communicating with a client over the Dribbble portal, got started on an assignment related to a redesign of a mobile application.</p>
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
      <CardGroup className={styles.backgroundtransparent}>
        <Card className={styles.backgroundtransparent}>
          <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.white}>The client needed a redesign of their mobile application.</span> When beginning to empathize with understanding the user base of the application. Created Personas that would represent potential users. These users would be the virtual personas that would use the application.</p>
          </Slide>
          <div className={styles.spaceing}></div>
        </Card>
        <Card className={styles.backgroundtransparent}>
        </Card>
      </CardGroup>
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
      <CardGroup className={styles.backgroundtransparent}>
        <Card className={styles.backgroundtransparent}>
        <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.white}>Find empathy with those potential users, by creating Personas that would like going to Art Museums, as well as liking Art Galleries.</span> But possibly were unable because of not being able to be there locally. There could be various people who could use the application, as a way to communicate on another platform which should be focused on art. Creating this community is hard to do and when thinking about the user it can be difficult to find the correct people to user test.</p>
          </Slide>
        <div className={styles.spaceing}></div>
        </Card>
        <Card className={styles.backgroundtransparent}>
        </Card>
      </CardGroup>
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
      <Fade>
      <p className={styles.subtitlelargewhitecenter}>Redesign a mobile application</p>
      </Fade>
    <div className={styles.spaceing}></div>
      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>Social media community integrated into an list to various artworks and museums.</p>
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
      <CardGroup className={styles.backgroundtransparent}>
        <Card className={styles.backgroundtransparent}>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>My row to this project is to redesign app designs based on the pervious designs. There were no assets available, instead was given the application designs of the original, and then designed a redesign based on the previous designs.</p>
          </Slide>
        </Card>
        <Card className={styles.backgroundtransparent}>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.white}>I was communicating directly with the CEO, who had worked with a remote designer and a developer previous to build out an application that is on the iOS apple store.</span> </p>
          </Slide>
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
      <div className={styles.spaceing}></div>
        <Fade>
          <p className={styles.subtitlelargewhitecenter}>There were a certain level of issues related to time, and getting the solution as effectively as possible.</p>
        </Fade>
      <div className={styles.spaceing}></div>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>The main issue is that, there is a client that is looking for the app to be redesigned and they have a pre-exisiting design. Then the designs of the next iteration needs to be different, but still things such as the user flow will look similar to the original. Although there can be minor adjustments made, based on new information or different methods of doing things.</p>
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
      <CardGroup className={styles.backgroundtransparent}>
        <Card className={styles.backgroundtransparent}>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Additionally the User Interface needs to have UI elements that have several variations, different kinds of elements in different locations on the screen. Then based on this information there can be a different design of the application, based on previous Ui elements.</p>
          </Slide>
        <div className={styles.spaceing}></div>
        </Card>
        <Card className={styles.backgroundtransparent}>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.white}>Designed the redesigns using Figma, and redesigned all the assets on Figma. Later came back later and also designed it on Adobe XD. Additionally used a simple test to compare UIs, and pick a screen based on the CEO who gave art directions.</span> </p>
          </Slide>
        <div className={styles.spaceing}></div>
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
      <CardGroup className={styles.backgroundtransparent}>
        <Card className={styles.backgroundtransparent}>
          <Fade>
            <p className={styles.subtitlelargewhitecenter}>Started with creating a User Flow.</p>
          </Fade>
          <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>As so started the initial design of the mobile application, created various UIs that had variants of the UIs. I created multiple variants and then created a slide, which allowed the client to select the UI variant for each slide of the application.</p>
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
          <Fade>
            <p className={styles.subtitlelargewhitecenter}>After showcasing the prototype as well as the various UI variants.</p>
          </Fade>
            <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>There was another issue related to the homepage, where it was difficult to prototype something with video backgrounds. Thats one of the main issues that I have related to creating static prototypes. So I used another platform to create prototypes with background with video.</p>
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
      <Fade>
        <p className={styles.subtitlelargewhitecenter}>Design of the application.</p>
      </Fade>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>Most of the designs were done based on a redesign of the visual design of the application.</p>
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
      <CardGroup className={styles.backgroundtransparent}>
        <Card className={styles.backgroundtransparent}>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>The design of the application, started with using Adobe XD. There were several screens that had to be designed of the iOS Mobile Application. There was a redesign of the home screen, as well as redesigning the entire user flow of the application.</p>
          </Slide>
          <div className={styles.spaceing}></div>
        </Card>
        <Card className={styles.backgroundtransparent}>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.white}>Being able to design the redesigns of the original application, as well as being able to use modern design software application tools was very useful.</span> </p>
          </Slide>
        </Card>
      </CardGroup>
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