import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Img17 from '../../assets/img/legacypictures/5.PNG';
import Img31 from '../../assets/img/legacypictures/Untitled-1-01.png';
import Img32 from '../../assets/MacBook Pro Mockup.png';
import Img35 from '../../assets/businesswoman-planning-with-adhesive-notes-on-glas-JX7K3ZV.jpg';
import Img36 from '../../assets/testimg-01-min.png';
import Img37 from '../../assets/testimg-02-min.png';
import Img38 from '../../assets/testimg-03.png';
import Img39 from '../../assets/testtest-01.png';
import Img40 from '../../assets/img/legacypictures/ttt-01.png';
import Img41 from '../../assets/img/legacypictures/sanchezcoffee-01.png';
import styles from '../css/style.module.css';
import '../css/style.css';
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

export const Legacypictures = () => (
  /* Start of JSX Fragment*/
<>

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
    <div className={styles.backoverlay}></div>
    <div className={styles.spaceing}></div>
    <div className={styles.spaceing}></div>
    <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
        <Fade>
        <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>Case Study</span></p>
          </Slide>
        <p className={styles.subtitlesmallwhitecenter}>LEGACY PICTURES</p>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}></span> Los Angeles <span className={styles.grey}>Web App Re-Design</span></p>
    
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Project Date: <span className={styles.grey}>July 2021 - August 2021</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Role: <span className={styles.grey}>UI/UX Designer</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Location: <span className={styles.grey}>Los Angeles, CA</span></p>
          </Slide>
          <div className={styles.spaceing}></div>
        </Fade>           
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
    <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>Introduction</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlelargewhiteleft}>Legacy Pictures</p>
          </Slide>
            <div className={styles.spaceing}></div>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commercials around the world.</p>
          </Slide>

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
      
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

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
        
            <Slide direction="up">
              <p className={styles.subtitlelargewhitecenter}>Users</p>
            </Slide>
            <div className={styles.spaceing}></div>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>Users of the Legacy Pictures website would be looking for a representention of themselves on the internet, which could be a website that showcases information regarding the company.</p>
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
    <div className={styles.backoverlay}></div>
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
  <div className={styles.backoverlay}></div>
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
    <Col xs={12} md={4}>
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
              <Image src={Img40} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.medium &&
            <div>
              <Image src={Img40} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.large &&
            <div>
              <Image src={Img40} fluid className={styles.centerimage}/>
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
              <Image src={Img41} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.medium &&
            <div>
              <Image src={Img41} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.large &&
            <div>
              <Image src={Img41} fluid className={styles.centerimage}/>
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
        <div className={styles.spaceing}></div>`
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
    <div className={styles.backoverlay}></div>
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
  <div className={styles.backoverlay}></div>
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
        <p className={styles.descriptionlargewhitebold}>Go Home:</p>
        <p className={styles.descriptionlargewhite}>Go Back to Home</p>
          <LinkContainer to="/">
            <p>
              <Button className={styles.mainbutton} variant="secondary">Go Back to Home</Button>
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