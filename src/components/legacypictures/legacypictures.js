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
import Img31 from '../../assets/legacypicturesimg1.png';
import Img32 from '../../assets/laptop-light.png';
import Img35 from '../../assets/businesswoman-planning-with-adhesive-notes-on-glas-JX7K3ZV.jpg';
import Img36 from '../../assets/testimg-01-min.png';
import Img37 from '../../assets/testimg-02-min.png';
import Img38 from '../../assets/img/legacypictures/Capture.PNG';
import Img39 from '../../assets/testtest-01.png';
import Img40 from '../../assets/legacypicturesimg1.png';
import Img41 from '../../assets/img/legacypictures/sanchezcoffee-01.png';
import Img42 from '../../assets/img/legacypictures/heatmap1.png';
import Img43 from '../../assets/img/legacypictures/test1.png';
import Img44 from '../../assets/img/legacypictures/3.PNG';
import Img45 from '../../assets/img/legacypictures/Mobile-Mockup.png';
import Img46 from '../../assets/img/legacypictures/4.PNG';

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

import video from '../../assets/vids/compressed_vid/vid7.mp4';


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
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>CASE STUDY</span></p>
          </Slide>
        <p className={styles.subtitlesmallwhitecenter}>LEGACY PICTURES</p>
        <p className={styles.subtitlesmallwhitecenter}><span className={styles.grey}></span> Los Angeles <span className={styles.grey}>Web App Re-Design</span></p>
    
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
          <div className={styles.spaceing}></div>
        </Fade>           
    </Col>
  </Row>
    <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={8}>
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
        </Fade>
        <div className={styles.spaceing}></div>
    </Col>
  </Row>


  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>INTRODUCTION</span></p>
          </Slide>
          <Slide direction="up">
            <p className={styles.subtitlesmallwhitecenter}>Legacy Pictures</p>
          </Slide>
          <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>A Los Angeles Videography Company with international offices in North America and Asia. They worked extensively with companies in the entertainment sector producing movies, films and commercials.</p>
          </Slide>
          </Col>
  </Row>

          <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={10}>
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
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>

            <div className={styles.spaceing}></div>

            <Slide direction="up">
              <p className={styles.subtitlesmallwhitecenter}>Beginning Proposals for Consultants and Freelancers </p>
            </Slide>

            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>The team’s Co-developer engaged the contract with the Legacy Pictures and began creating the design task of redesigning a demo website. After offering services as an UI/UX Designer, started the contract with the Legacy Pictures.</p>
            </Slide>

            <div className={styles.spaceing}></div>
            <Slide direction="up">
              <p className={styles.subtitlesmallwhitecenter}>Identification of the Type of Site</p>
            </Slide>
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>Design Goals based on problems that need to be solved or attributes within scope of site's visual design and interaction design were identified.</p>
            </Slide>

            <div className={styles.spaceing}></div>
            <Slide direction="up">
              <p className={styles.subtitlesmallwhitecenter}>Building Empathy</p>
            </Slide>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>The users of the Legacy Pictures websites would be people such as </p>
            </Slide>

            <div className={styles.spaceing}></div>
            <Slide direction="up">
              <ul className={styles.unorderlist}>
                <li>Executives</li>
                <li>Videography Company </li>
                <li>Outsource company for services</li>
              </ul>
            </Slide>
            <div className={styles.spaceing}></div>


    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={10}>

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
            </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
            <Slide direction="up">
              <p className={styles.subtitlesmallwhitecenter}>Use Case Scenarios</p>
            </Slide>

            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>Legacy Pictures website is a representation of the company on the internet, which would be a website that showcases information.</p>
            </Slide>
                     <div className={styles.spaceing}></div>
            <Slide direction="up">
              <p className={styles.subtitlesmallwhitecenter}>Stakeholders for the website</p>
            </Slide>
         
            <Slide direction="up">
              <p className={styles.descriptionlargewhitebold}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application. Direct feedback was received from the CEO, and his team.</p>
            </Slide>

            <div className={styles.spaceing}></div>

    </Col>
  </Row>
  <div className={styles.spaceing}></div>
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
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>CHALLENGE</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Initial Scope </p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>After several meetings with the client as well as with the lead developer of the project, and coworkers, discovered the redesign process for the website, as well as converting it to new UI/UX Design trends.</p>
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
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Understanding that there are multiple stakeholders </p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>As well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>
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
      </Fade>
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Mobile Responsive Web Design for Desktop and Mobile Devices </p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>The designs of the website would have to keep Mobile Responsive in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
        </Slide>

        <div className={styles.spaceing}></div>
            <Slide direction="up">
              <ul className={styles.unorderlist}>
                <li>Mobile</li>
                <li>Desktop</li>
                <li>Laptops</li>
              </ul>
            </Slide>
            <div className={styles.spaceing}></div>

      


        <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Showcase Website</p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Gained a better idea of the needs of the website in showcasing the information related to Legacy Pictures and getting the information across on the site. Starting to get a better understanding of the demographic, which were individuals in the videography industry.</p>
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
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>SOLUTION</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>User Interface Re-Design and Usability Testing</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>The solution was a website designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements. Additionally did Usability testing using heat maps.</p>
        </Slide>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
        </Slide>
        <div className={styles.spaceing}></div>
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
              <Image src={Img43} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.medium &&
            <div>
              <Image src={Img43} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.large &&
            <div>
              <Image src={Img43} fluid className={styles.centerimage}/>
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
        <p className={styles.subtitlesmallwhitecenter}>Feedback from team</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>After the first iteration of the re-design, received feedback from the team, as well as a group of internal employees. Created a survey to gain insight on in-depth problems.</p>
        </Slide>
        <div className={styles.spaceing}></div>
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
              <Image src={Img44} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.medium &&
            <div>
              <Image src={Img44} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.large &&
            <div>
              <Image src={Img44} fluid className={styles.centerimage}/>
            </div>
          }
          </>
          )}
        </Media>
      </Fade>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>UI Variant Iterations</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>After a few iterations of the design were started, there were various UIs that were discovered as well as understanding the full scope of what was needed in related to content.</p>
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
    <div className={styles.backoverlay}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>User Interface Design</p>
      </Fade>     
      <Slide direction="up">
        <p className={styles.descriptionlargewhitebold}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro.</p>
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
              <Image src={Img45} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.medium &&
            <div>
              <Image src={Img45} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.large &&
            <div>
              <Image src={Img45} fluid className={styles.centerimage}/>
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
      <div className={styles.spaceing}></div>
        <Fade>
          <p className={styles.subtitlesmallwhitecenter}>Adobe XD for User Interface Designs</p>
        </Fade>     
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>
        </Slide>
      <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Usability Testing for the User Interface Designs</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>
        </Slide>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={5}>
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
      </Fade>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>RESULTS</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Redesign of the Web Application User Interface</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Redesigns of the UI were created and sent as deliverables. The deliverables were Mobile and Desktop versions of the redesign of the website. Also results of the was usability test.</p>
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
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Adobe Creative Suite</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>
        </Slide>
        <div className={styles.spaceing}></div>
        <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Usability testing with Usabilityhub.com</p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>
        </Slide>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={5}>
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
              <Image src={Img42} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.medium &&
            <div>
              <Image src={Img42} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.large &&
            <div>
              <Image src={Img42} fluid className={styles.centerimage}/>
            </div>
          }
          </>
          )}
        </Media>
      </Fade>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Starting the Rapid Prototyping</p>
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
        <p className={styles.subtitlesmallwhitecenter}>Getting Tests from the Users</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>
        </Slide>
        <div className={styles.spaceing}></div>
        <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Heat Map Testing</p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>
        </Slide>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
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
              <Image src={Img46} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.medium &&
            <div>
              <Image src={Img46} fluid className={styles.centerimage}/>
            </div>
          }
          {matches.large &&
            <div>
              <Image src={Img46} fluid className={styles.centerimage}/>
            </div>
          }
          </>
          )}
        </Media>
      </Fade>
    </Col>
  </Row>
  <div className={styles.spaceing}></div>
  <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
    <Slide direction="up">
            <p className={styles.titlelargewhitebold}><span className={styles.grey}>REFLECTION</span></p>
          </Slide>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>More Time to explore UI and UX</p>
      </Fade>
      <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>More time to do User Testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates.</p>
        </Slide>
        <div className={styles.spaceing}></div>
        <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Completion of the Deliverables</p>
      </Fade>
        <Slide direction="up">
          <p className={styles.descriptionlargewhitebold}>Getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed with Legacy Pictures.</p>
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