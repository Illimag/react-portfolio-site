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
    <div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
    <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
        <Fade>
        <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>CASE STUDY</span></p>
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
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>INTRODUCTION</span></p>
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
            
            <Slide direction="up">
              <p className={styles.subtitlelargewhitecenter}>Scope of the project</p>
            </Slide>
            <div className={styles.spaceing}></div>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>Matt is a person that is looking for someone to complete a design task redesigning a website. I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
            </Slide>
      
            <Slide direction="up">
              <p className={styles.subtitlelargewhitecenter}>Writing contract with company</p>
            </Slide>
            <div className={styles.spaceing}></div>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>Matt is a person that is looking for someone to complete a design task redesigning a website. I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
            </Slide>

            <Slide direction="up">
              <p className={styles.subtitlelargewhitecenter}>Building Empathy</p>
            </Slide>
            <div className={styles.spaceing}></div>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>The users of the Legacy Pictures websites would be people such as executives, etc. Such as a videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representention of themselves on the internet, which could be a website that showcases information regarding the company.</p>
            </Slide>
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
              <p className={styles.subtitlelargewhitecenter}>Use Case Scenarios</p>
            </Slide>
            <div className={styles.spaceing}></div>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>Videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representation of themselves on the internet, which could be a website that showcases information regarding the company.</p>
            </Slide>
         
            <Slide direction="up">
              <p className={styles.subtitlelargewhitecenter}>Stakeholders for the website</p>
            </Slide>
            <div className={styles.spaceing}></div>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>**There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.**

**This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.**</p>
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
    <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>CHALLENGE</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Initial Scope</span> </p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. The initial scope was to start a redesign process for the website, as well as converting it to new UI/UX Design trends.</p>
        </Slide>
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

  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Understanding that there are multiple stakeholders </span> </p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>As well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>
        </Slide>
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
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Mobile Responsive Web Design for Desktop and Mobile Devices</span> </p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>The designs of the website would have to keep Mobile Responsive in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
        </Slide>

        <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Showcase Website</span> </p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>
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
    <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>SOLUTION</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Stakeholders for the website</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
        </Slide>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
        </Slide>
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
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Reedesign of Website</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>
        </Slide>
        <div className={styles.spaceing}></div>
        <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Feedback from team</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>After feedback from the team, as well as a group of internal employees we were able to understand what the company was looking for. Created a survey to gain insight on various problems that the internal team was having. To find out in depth problems that they were having.</p>
        </Slide>
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
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>UI Variant Iterations</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>After a few iterations of the design were started, there were various UIs that were discovered as well as understanding the full scope of what was needed in related to content.</p>
        </Slide>
        <div className={styles.spaceing}></div>
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
    <div className={styles.backoverlay}></div>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}>User Interface Design</p>
      </Fade>     
      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>**The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow:**

- **just understanding the basic layout of the website, for example the home page, etc.**
- **Then based on the original design, a new iteration of the design can be done.**</p>
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
          <p className={styles.subtitlelargewhitecenter}>Adobe XD for User Interface Designs</p>
        </Fade>     
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>
        </Slide>
      <div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Usability testing for the User Interface Designs</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>
        </Slide>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.</p>
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
    <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>RESULTS</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Redesign of the Web Application User Interface</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
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
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Adobe Creative Suite </span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>
        </Slide>
        <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Usability testing with Usabilityhub.com</span></p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>
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
      <Fade>
        <p className={styles.subtitlelargewhitecenter}>Starting the Rapid Prototyping</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>
        </Slide>
      <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Getting Tests from the Users</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>
        </Slide>
        <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Heat Map Testing</span></p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>
        </Slide>
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
    <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}><span className={styles.grey}>REFLECTION</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>More Time to explore UI and UX</span></p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Wish had more time to do more user testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates and it was designed over a period of time.</p>
        </Slide>
        <Fade>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Completion of the deliverables </span></p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>
        </Slide>
        <div className={styles.spaceing}></div>
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