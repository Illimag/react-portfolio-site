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

import Vid1 from '../../assets/home_page_vids/compress_vid0.mp4';
import Vid2 from '../../assets/vids/compressed_vid/vid2.m4v';

import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';

import UserScenario from '../../assets/img/legacypictures/Website-User-scenario-workflow.png';


import video from '../../assets/newhomepagevids/6.mp4';
import videomobile from '../../assets/newhomepagevids/6-1.mp4';

import scrolldown from '../../assets/scrolldown-01.png';


import Media from 'react-media';


export const Legacypictures = () => (
  /* Start of JSX Fragment*/
  <>



























<Container className={styles.test}>
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Making Changes</h1>
                <h5 className={styles.test1title}>Los Angeles Web Application Re-Design</h5>
                <h5 className={styles.test1title}>Case Study: Legacy Pictures</h5>
                <h5 className={styles.test1title}>Project Date: July 2021 - August 2021</h5>
                <h5 className={styles.test1title}>Role: UI/UX Designer</h5>
                <h5 className={styles.test1title}>Location: Los Angeles, CA</h5>
                <AnchorLink href='#test' className={styles.paddingleft}>                

                <h1>
                  <Button className={styles.mainbutton} variant="primary">View Case Study</Button>
                </h1>

                </AnchorLink>

                <LinkContainer to="/portfolio">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">View More Pieces</Button>
                </h1>
              </LinkContainer>

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








    <Container fluid>




<div id="test"></div>











<Container fluid className={styles.test1}>

<div className={styles.spaceingwhite}></div>
{/* left text right img */}

<Row className="justify-content-md-center">
<Col xs lg="6">
<p className={styles.subtitlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

<p className={styles.subtitlelargeblack}>Los Angeles Skyline</p>
<Image src={Img08} fluid className={styles.imgstyle} />



<CardGroup>
<Card>
  <Card.Header>
    
  <p className={styles.subtitlelargeblack}>Scope of the Project</p>
  </Card.Header>
  <Card.Body>
  <p className={styles.descriptionblack}>Worked with lead developer looking to sign a contract with a company looking for the following services:</p>

  <div className={styles.paddingleft}>
    <ol className={styles.listblack}>
      <li className={styles.listitemblack}>Redesign of a website</li>
      <li className={styles.listitemblack}>Usability testing getting feedback from executives</li>
      <li className={styles.listitemblack}>Redesign of Web Platform</li>
    </ol>
    </div>
  </Card.Body>

  
</Card>
<Card>
  <Card.Header>
    
<p className={styles.subtitlelargeblack}>Writing contract with company</p>
  </Card.Header>
  <Card.Body>
 
    <p className={styles.descriptionblack}>I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
    
  </Card.Body>

  
</Card>
<Card>
  <Card.Header>
    
  <p className={styles.subtitlelargeblack}>Building Empathy</p>
  </Card.Header>
  <Card.Body>
 
  <p className={styles.descriptionblack}>Users of the Legacy Pictures website are demographics that are as follow:</p>
    
    <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>Executives</li>
      <li className={styles.listitemblack}>Videographers</li>
      <li className={styles.listitemblack}>Creative Managers</li>
    </ul>
    </div>
  </Card.Body>

  
</Card>
</CardGroup>









<Row xs={1} md={2} className="g-4">





    <Col>
      <Card>
      <Image src={Img04} fluid className={styles.imgstyle} />
        <Card.Body>
          <Card.Title>    
            <p className={styles.subtitlelargeblack}>Use Case Scenarios</p>
          </Card.Title>
          <Card.Text>
          <p className={styles.descriptionlargeblack}>Videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representation of themselves on the internet, which could be a website that showcases information regarding the company.</p>
    
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
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
    </Col>



</Row>




<Col>


<p className={styles.subtitlelargeblack}>Challenge:</p>

<p className={styles.descriptionlargeblack}>They had a website that needed to be updated. The website was a wordpress website that hasent been updated since the early 2000s. </p>
   

<div className={styles.spaceingwhite}></div>


<p className={styles.subtitlelargeblack}>Videographer Community</p>

<Image src={Img07} fluid className={styles.imgstyle} />

<Card>
<Card.Header>

<p className={styles.subtitlelargeblack}>Initial Scope</p>
</Card.Header>
<Card.Body>

<p className={styles.descriptionlargeblack}>After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. </p>
    <div className={styles.paddingleft}>
  <ul className={styles.listblack}>
    <li className={styles.listitemblack}>start a redesign process for the website</li>
    <li className={styles.listitemblack}>converting it to new UI/UX Design trends.</li>
  </ul>
  </div>

</Card.Body>


</Card>



</Col>


<Row xs={1} md={3} className="g-4">

  

    <Col>
      <Card>

        <Card.Body>
          <Card.Title>    
          <p className={styles.subtitlelargeblack}>User Flow</p>
          </Card.Title>
          <Card.Text>
          <p className={styles.descriptionlargeblack}>The project is a simple redesign of the company’s website. There would be designs done related to the usability of the website. I was the sole UI/UX Designer for the whole thing. </p>
         
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
          <p className={styles.subtitlelargeblack}>User Flow of Previous Website</p>
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
    </Col>


<Col>
<Card>
  
  <Card.Body>
  <p className={styles.subtitlelargeblack}>Mindmapping entire company scope</p>

  <div className={styles.paddingleft}>
  <ul className={styles.listlargeblack}>
      <li className={styles.listitemlargeblack}>CEO of the company,</li>
      <li className={styles.listitemlargeblack}>lead developer who would considering technical parts, etc.</li>
      <li className={styles.listitemlargeblack}>Internal team </li>
      <li className={styles.listitemlargeblack}>larger outside team. </li>
    </ul>
    </div>
  </Card.Body>

  
</Card>
</Col>




</Row>



<Col>

<Card>
  <Card.Header>
  
  <p className={styles.subtitlelargeblack}>Understanding that there are multiple stakeholders</p>

  </Card.Header>
  <Card.Body>
  <p className={styles.descriptionlargeblack}>As well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>


  <div className={styles.paddingleft}>
  <ul className={styles.listlargeblack}>
  <li className={styles.listitemblack}>Increase Usability of Website</li>
      <li className={styles.listitemlargeblack}>Improve Performance of Website</li>
      <li className={styles.listitemlargeblack}>Better User Experience </li>
    </ul>
  </div>
  </Card.Body>

  
</Card>
</Col>





<Row xs={1} md={2} className="g-4">

    <Col>
      <Card>
      <Image src={Img04} fluid className={styles.imgstyle} />
        <Card.Body>
          <Card.Title>    
          <p className={styles.subtitlelargeblack}>Mobile Responsive Web Design for Desktop and Mobile Devices</p>

          </Card.Title>
          <Card.Text>
          <p className={styles.descriptionlargeblack}>The designs of the website would have to keep Mobile Responsive in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
    
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
      <Image src={Img09} fluid className={styles.imgstyle} />
        <Card.Body>
          <Card.Title>
          <p className={styles.subtitlelargeblack}>Showcase Website</p>
          </Card.Title>
          <Card.Text>
          <p className={styles.descriptionblack}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>
   
              </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
      <Image src={Img10} fluid className={styles.imgstyle} />
        <Card.Body>
          <Card.Title>
          <p className={styles.subtitlelargeblack}>Minding Mapping concepts about the demographic and types of devices used by those individuals
</p>
          </Card.Title>
          <Card.Text>
          <p className={styles.descriptionblack}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.

</p>
   
              </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>




<Col>

<p className={styles.subtitlelargeblack}>Solution:</p>
    <p className={styles.descriptionlargeblack}>The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
     


    <p className={styles.subtitlelargeblack}>Los Angeles Skyline</p>

<Image src={Img08} fluid className={styles.imgstyle} />

</Col>

    <Row xs={1} md={2} className="g-4">

<Col>
  <Card>
  <Image src={Img12} fluid className={styles.imgstyle} />
    <Card.Body>
      <Card.Title>    
      <p className={styles.subtitlelargeblack}>Redesign of Website</p>

      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionlargeblack}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>

      </Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col>
  <Card>
  <Image src={Img13} fluid className={styles.imgstyle} />
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>Feedback from team</p>
      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionlargeblack}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>

          </Card.Text>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card>
  <Image src={Img14} fluid className={styles.imgstyle} />
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>UI Variant Iterations</p>
      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionlargeblack}>After a few iterations of the design were started, there were various UIs that were discovered as well as understanding the full scope of what was needed in related to content.</p>

          </Card.Text>
    </Card.Body>
  </Card>
</Col>



<Col>
  <Card>
  <Image src={Img16} fluid className={styles.imgstyle} />
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>User Interface Design</p>
      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionlargeblack}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow:</p>

      <div className={styles.paddingleft}>
  <ul className={styles.listlargeblack}>
  <li className={styles.listitemlargeblack}>just understanding the basic layout of the website, for example the home page, etc. </li>
      <li className={styles.listitemlargeblack}>Then based on the original design, a new iteration of the design can be done.</li>
    </ul>
  </div>

          </Card.Text>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card>
  <Image src={Img17} fluid className={styles.imgstyle} />
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>Adobe XD for User Interface Designs</p>

      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionblack}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>


          </Card.Text>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card>
  <Image src={Img18} fluid className={styles.imgstyle} />
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>Usability testing for the User Interface Designs</p>

      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionblack}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>


          </Card.Text>
    </Card.Body>
  </Card>
</Col>






<Col>
  <Card>
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>Adobe Creative Suite</p>

      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionblack}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>


          </Card.Text>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card>
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>Usability testing with Usabilityhub.com</p>

      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionblack}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>


          </Card.Text>
    </Card.Body>
  </Card>
</Col>




<Col>
  <Card>
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>Starting the Rapid Prototyping</p>
            </Card.Title>
      <Card.Text>
      <p className={styles.descriptionlargeblack}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>

          </Card.Text>
    </Card.Body>
  </Card>
</Col>



<Col>
  <Card>
    <Card.Body>
      <Card.Title>
      <p className={styles.subtitlelargeblack}>Getting Tests from the Users</p>
      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionlargeblack}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>


          </Card.Text>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card>
    <Card.Body>
    <Image src={Img22} fluid className={styles.imgstyle} />

      <Card.Title>
      <p className={styles.subtitlelargeblack}>Heat Map Testing</p>
      </Card.Title>
      <Card.Text>
      <p className={styles.descriptionlargeblack}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>


          </Card.Text>
    </Card.Body>
  </Card>
</Col>


</Row>

<Col>

<p className={styles.subtitlelargeblack}>Results:</p>
    <p className={styles.descriptionlargeblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
     
    <p className={styles.subtitlelargeblack}>Completion of the deliverables  </p>
      <p className={styles.descriptionlargeblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>


      <p className={styles.subtitlelargeblack}>User Interface Designs1 </p>
      <Image src={Img19} fluid className={styles.imgstyle} />

      <p className={styles.subtitlelargeblack}>User Interface Designs2 </p>
      <Image src={Img20} fluid className={styles.imgstyle} />
      
      <p className={styles.subtitlelargeblack}>User Interface Designs3 </p>
      <Image src={Img21} fluid className={styles.imgstyle} />

</Col>


<Col>

<p className={styles.subtitlelargeblack}>Art RendexVous</p>
<div className={styles.spaceingwhite}></div>

  <p className={styles.descriptionlargeblack}>Mobile App Redesign for Art Community iOS App</p>
  <div className={styles.spaceingwhite}></div>

  <LinkContainer to="/artrendezvous">
                <p>
                  <Button className={styles.mainbutton} variant="primary">View Next</Button>
                </p>
              </LinkContainer>

              <p className={styles.subtitlelargeblack}>Go to Portfolio:</p>
<div className={styles.spaceingwhite}></div>

  <p className={styles.descriptionlargeblack}>Go Back to Portfolio</p>
  <div className={styles.spaceingwhite}></div>

  <LinkContainer to="/portfolio">
                <p>
                  <Button className={styles.mainbutton} variant="secondary">View More Pieces</Button>
                </p>
              </LinkContainer>
              
</Col>


</Col>



    

</Row>


















</Container>
    </Container>




  </>
  /* End of JSX Fragment*/
)