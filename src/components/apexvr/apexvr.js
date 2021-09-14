import React from 'react';
import { Link } from 'react-router-dom'
//import { Slide } from "react-awesome-reveal";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { LinkContainer } from 'react-router-bootstrap';


//import { LinkContainer } from 'react-router-bootstrap';
//import Button from 'react-bootstrap/Button';

import Img00 from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Img01 from '../../assets/img/dominos/1-01.jpg';
import Img02 from '../../assets/img/dominos/1-02.jpg';
import Img03 from '../../assets/img/dominos/1-03.jpg';
import Img04 from '../../assets/img/dominos/1-04.jpg';
import Img05 from '../../assets/img/dominos/1-05.jpg';
import Img06 from '../../assets/img/dominos/1-06.jpg';
import Img07 from '../../assets/img/dominos/1-07.jpg';
import Img08 from '../../assets/img/dominos/1-08.jpg';
import Img09 from '../../assets/img/dominos/1-09.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from 'react-bootstrap/Button';



import styles from '../css/style.module.css';
import '../css/style.css';


import ImgA from '../../assets/img/uguru/testpics-02.png';
import ImgB from '../../assets/img/uguru/testpics-03.png';
import ImgC from '../../assets/img/uguru/testpics-03.png';

import ImgTablet from '../../assets/img/uguru/testpics-01.png';

import testimg from '../../assets/img/uguru/testpics-05.png';
import desktopImg from '../../assets/img/uguru/testpics-07.png';
import Twodesktop from '../../assets/img/uguru/testpics-06.png';
import duo from '../../assets/img/uguru/testpics-08.png';

//import testtest from '../../assets/img/uguru/ttt-01.png';

import Vid1 from '../../assets/home_page_vids/compress_vid0.mp4';
import Vid2 from '../../assets/vids/compressed_vid/vid2.m4v';


import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';
import Codepen from "react-codepen-embed";

import Media from 'react-media';


import video from '../../assets/newhomepagevids/5.mp4';
import videomobile from '../../assets/newhomepagevids/5-1.mp4';









export const Apexvr = () => {


  /* Start of JSX Fragment*/

  return <>
      













      <Container className={styles.test}>
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>VR Website</h1>
                <h5 className={styles.test1title}>Company VR website for VR Videography Company</h5>
                <h5 className={styles.test1title}>Case Study: ApexVR</h5>

                <AnchorLink href='#test' className={styles.paddingleft}>                

                <h1>
                  <Button className={styles.mainbutton} variant="primary">View Case Study</Button>
                </h1>

                </AnchorLink>

                <LinkContainer to="/portfolio">
                <h1>
                  <Button className={styles.mainbutton} variant="secondary">Go to Portfolio</Button>
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
 

 <div className={styles.spaceinglargewhite}></div>

<Container fluid className={styles.test1}>
{/* left text right img */}

<div className={styles.spaceingwhite}></div>

        <Media queries={{
small: "(max-width: 599px)",
medium: "(min-width: 600px) and (max-width: 1199px)",
large: "(min-width: 1200px)"
}}>
{matches => (
<>

{matches.small &&

<Row className={styles.rowsmall}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titleblack}>ApexVR</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: VR Conceptual Web App</p>
<p className={styles.descriptionblack}>Project Date: Jan 2017 - Jan 2018</p>
<p className={styles.descriptionblack}>Role: User Interface Designer</p>
<p className={styles.descriptionblack}>Location: San Francisco Bay Area</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>



<p className={styles.titleblack}>Introduction:</p>

<p className={styles.description}>
Virtual Reality (VR) Website for Videography company located in San Leandro, User interface designer working with a developer, working together built a web app with Angular and aframe.</p>

<p className={styles.description}>Polar Productions, Ted and cofounder, they are from san Leandro, they are locals. They were looking for someone who could help them build a website with a particular functionality the functionality is having a VR functionality.</p>


</Container>

</Col>

</Row>

  }

{matches.medium &&

<Row className={styles.rowmedium}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titleblack}>ApexVR</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: VR Conceptual Web App</p>
<p className={styles.descriptionblack}>Project Date: Jan 2017 - Jan 2018</p>
<p className={styles.descriptionblack}>Role: User Interface Designer</p>
<p className={styles.descriptionblack}>Location: San Francisco Bay Area</p>

</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.description}>
Virtual Reality (VR) Website for Videography company located in San Leandro, User interface designer working with a developer, working together built a web app with Angular and aframe.</p>

<p className={styles.description}>Polar Productions, Ted and cofounder, they are from san Leandro, they are locals. They were looking for someone who could help them build a website with a particular functionality the functionality is having a VR functionality.</p>


</Container>

</Col>

</Row>
  }

{matches.large &&
<Row className={styles.rowlarge}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titlelargeblack}>ApexVR</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>Case Study: VR Conceptual Web App</p>
<p className={styles.descriptionlargeblack}>Project Date: Jan 2017 - Jan 2018</p>
<p className={styles.descriptionlargeblack}>Role: User Interface Designer</p>
<p className={styles.descriptionlargeblack}>Location: San Francisco Bay Area</p>

</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>
Virtual Reality (VR) Website for Videography company located in San Leandro, User interface designer working with a developer, working together built a web app with Angular and aframe.</p>

<p className={styles.descriptionlargeblack}>Polar Productions, Ted and cofounder, they are from san Leandro, they are locals. They were looking for someone who could help them build a website with a particular functionality the functionality is having a VR functionality.</p>

</Container>

</Col>


</Row>
  }

</>
)}
</Media>





</Container>
















 <Container fluid className={styles.test1}>

<div className={styles.spaceingwhite}></div>
<Media queries={{
 small: "(max-width: 599px)",
 medium: "(min-width: 600px) and (max-width: 1199px)",
 large: "(min-width: 1200px)"
}}>
 {matches => (
   <>

     {matches.small &&
         <Container fluid>
<Row className={styles.rowsmall}>
 <Col sm className={styles.fonttest}>

 <p className={styles.titleblack}>High-fidelity <span className={styles.grey}>UI design.</span></p>
 <div className={styles.spaceingwhite}></div>
</Col>
</Row>

   <Row className={styles.rowsmall}>
     <Col sm>
       <Image src={desktopImg} fluid className={styles.imgstyle} />
       <p className={styles.description}>
Initial sneaker catalog overview
</p>
     </Col>
   </Row>
   </Container>
       }

     {matches.medium &&
       <Container fluid>
       <Row className={styles.rowmedium}>
         <Col sm className={styles.fonttest}>
     
         <p className={styles.titleblack}>High-fidelity <span className={styles.grey}>UI design.</span></p>
         <div className={styles.spaceingwhite}></div>
     </Col>
     </Row>
     
           <Row className={styles.rowmedium}>
             <Col sm>
               <Image src={desktopImg} fluid className={styles.imgstyle} />
               <p className={styles.description}>
     Initial sneaker catalog overview
     </p>
             </Col>
           </Row>
           </Container>
       }

     {matches.large &&
        <Container fluid>
        <Row className={styles.rowlarge}>
          <Col sm className={styles.fonttest}>
      
          <p className={styles.titlelargeblack}>High-fidelity <span className={styles.grey}>UI design.</span></p>
          <div className={styles.spaceingwhite}></div>
      </Col>
      </Row>
      
            <Row className={styles.rowlarge}>
              <Col sm>
                <Image src={desktopImg} fluid className={styles.imgstyle} />
                <p className={styles.description}>
      Initial sneaker catalog overview
      </p>
              </Col>
            </Row>
            </Container>
       }

   </>
 )}
</Media>
<div className={styles.spaceingwhite}></div>


</Container>










<Container fluid>
<div className={styles.spaceingwhite}></div>
{/* left text right img */}


{/* left text right img */}
<Row className={styles.test}>
<Col sm>
 <Image src={Img08} fluid className={styles.imgstyle} />
</Col>




<Col sm>
<Media queries={{
 small: "(max-width: 599px)",
 medium: "(min-width: 600px) and (max-width: 1199px)",
 large: "(min-width: 1200px)"
}}>
 {matches => (
   <>

     {matches.small &&
<Row className={styles.rowsmall}>

<p className={styles.titleblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionblack}>The Personas that would be interested in this product is videographers, as well as other various stakeholders, that are involved in the videography industry. Additionally maybe they would be interested in technology.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>Being able to create a mental model of the various ideas surrounding a central topic is one way to conceptually understanding information. So there can be various card sorts methods that can be used to start building up an idea of the demographic of users, to begin creating Personas.</p>
   <p className={styles.descriptionblack}>The Personas for ApexVR could be executives in the film industry, as well as the videography, and technology space. They maybe students, or graduates, or managers for their respective companies. Additionally there could be an User Journey map, to understanding what goes into the emotions of someone trying to find their way through the user flow of the mobile application.</p>

 </Row>
       }

     {matches.medium &&
<Row className={styles.rowmedium}>


<p className={styles.titleblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>The Personas that would be interested in this product is videographers, as well as other various stakeholders, that are involved in the videography industry. Additionally maybe they would be interested in technology.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>Being able to create a mental model of the various ideas surrounding a central topic is one way to conceptually understanding information. So there can be various card sorts methods that can be used to start building up an idea of the demographic of users, to begin creating Personas.</p>
   <p className={styles.descriptionblack}>The Personas for ApexVR could be executives in the film industry, as well as the videography, and technology space. They maybe students, or graduates, or managers for their respective companies. Additionally there could be an User Journey map, to understanding what goes into the emotions of someone trying to find their way through the user flow of the mobile application.</p>


</Row>
       }

     {matches.large &&
   <Row className={styles.rowlarge}>


<p className={styles.titlelargeblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>The Personas that would be interested in this product is videographers, as well as other various stakeholders, that are involved in the videography industry. Additionally maybe they would be interested in technology.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionlargeblack}>Being able to create a mental model of the various ideas surrounding a central topic is one way to conceptually understanding information. So there can be various card sorts methods that can be used to start building up an idea of the demographic of users, to begin creating Personas.</p>
   <p className={styles.descriptionlargeblack}>The Personas for ApexVR could be executives in the film industry, as well as the videography, and technology space. They maybe students, or graduates, or managers for their respective companies. Additionally there could be an User Journey map, to understanding what goes into the emotions of someone trying to find their way through the user flow of the mobile application.</p>

      </Row>
       }

   </>
 )}
</Media>
</Col>


</Row>


<Row className={styles.test}>
<Col sm className={styles.fonttest}>


<Media queries={{
 small: "(max-width: 599px)",
 medium: "(min-width: 600px) and (max-width: 1199px)",
 large: "(min-width: 1200px)"
}}>
 {matches => (
   <>

     {matches.small &&
<Container>

 <p className={styles.titleblack}>Challenge:</p>
 <p className={styles.descriptionblack}>Polar Productions wanted a website for their side business VR Videos. They wanted a website to showcase their portfolio. In particular they wanted a website that would be able to implement some type of VR videography photos and videos.</p>
   <p className={styles.descriptionblack}>How do we implement a VR functionality into a web application? As well as how do we design a web application to showcase this functiojality?</p>
   <p className={styles.descriptionblack}>VR Website with VR functionality I was the designer as well as the person who was communicating with the client.</p>
   <p className={styles.descriptionblack}>I was working very closely with a developer, as well as various other stakeholders. There was a client company, Polar Productions which was made up of various stakeholders such as the CEO of the company, Videographers, etc.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Challenge:</p>
 <p className={styles.descriptionblack}>Polar Productions wanted a website for their side business VR Videos. They wanted a website to showcase their portfolio. In particular they wanted a website that would be able to implement some type of VR videography photos and videos.</p>
   <p className={styles.descriptionblack}>How do we implement a VR functionality into a web application? As well as how do we design a web application to showcase this functiojality?</p>
   <p className={styles.descriptionblack}>VR Website with VR functionality I was the designer as well as the person who was communicating with the client.</p>
   <p className={styles.descriptionblack}>I was working very closely with a developer, as well as various other stakeholders. There was a client company, Polar Productions which was made up of various stakeholders such as the CEO of the company, Videographers, etc.</p>


</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Challenge:</p>
<p className={styles.descriptionlargeblack}>Polar Productions wanted a website for their side business VR Videos. They wanted a website to showcase their portfolio. In particular they wanted a website that would be able to implement some type of VR videography photos and videos.</p>
   <p className={styles.descriptionlargeblack}>How do we implement a VR functionality into a web application? As well as how do we design a web application to showcase this functiojality?</p>
   <p className={styles.descriptionlargeblack}>VR Website with VR functionality I was the designer as well as the person who was communicating with the client.</p>
   <p className={styles.descriptionlargeblack}>I was working very closely with a developer, as well as various other stakeholders. There was a client company, Polar Productions which was made up of various stakeholders such as the CEO of the company, Videographers, etc.</p>


      
      </Container>
       }

   </>
 )}
</Media>




</Col>
<Col sm>
 <Image src={Img00} fluid className={styles.imgstyle} />
 
</Col>
</Row>
</Container>




{/* img without text */}
<Row>
<Col sm>
 <Image src={Twodesktop} fluid className={styles.imgstyle} />
 <p className={styles.description}>
Initial sneaker catalog overview
</p>
</Col>
</Row>


   <Row className={styles.test}>
<Col sm className={styles.fonttest}>


<Media queries={{
 small: "(max-width: 599px)",
 medium: "(min-width: 600px) and (max-width: 1199px)",
 large: "(min-width: 1200px)"
}}>
 {matches => (
   <>

     {matches.small &&
<Container>

 <p className={styles.titleblack}>IDEATE:</p>
 <p className={styles.descriptionblack}>There were other various considerations, for example there was a lead developer who was in charge of the technology stack. Which ended up being Angular.JS 1 and AFrame. Angular.JS is the technology behind the front-end coding of the Web Application. AFrame is the technology behind the VR effect that would allow the mobile and desktop devices to showcase VR assets, that the videography company shot themselves.</p>
 <p className={styles.descriptionblack}>The concerns that Polar Productions had was that they wanted there to be a certain number of slides, as well as the functionality of the website to allow for the use of the VR assets.</p>

      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>IDEATE:</p>
 <p className={styles.descriptionblack}>There were other various considerations, for example there was a lead developer who was in charge of the technology stack. Which ended up being Angular.JS 1 and AFrame. Angular.JS is the technology behind the front-end coding of the Web Application. AFrame is the technology behind the VR effect that would allow the mobile and desktop devices to showcase VR assets, that the videography company shot themselves.</p>
 <p className={styles.descriptionblack}>The concerns that Polar Productions had was that they wanted there to be a certain number of slides, as well as the functionality of the website to allow for the use of the VR assets.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>IDEATE:</p>
<p className={styles.descriptionlargeblack}>There were other various considerations, for example there was a lead developer who was in charge of the technology stack. Which ended up being Angular.JS 1 and AFrame. Angular.JS is the technology behind the front-end coding of the Web Application. AFrame is the technology behind the VR effect that would allow the mobile and desktop devices to showcase VR assets, that the videography company shot themselves.</p>
 <p className={styles.descriptionlargeblack}>The concerns that Polar Productions had was that they wanted there to be a certain number of slides, as well as the functionality of the website to allow for the use of the VR assets.</p>

      </Container>
       }

   </>
 )}
</Media>




</Col>

</Row>


 <Container fluid>
 <div className={styles.spaceingwhite}></div>
   {/* left text right img */}
   <Row className={styles.test}>
     
   <Col sm>
       <Image src={Img00} fluid className={styles.imgstyle} />
       
     </Col>


     <Col sm className={styles.fonttest}>


     <Media queries={{
       small: "(max-width: 599px)",
       medium: "(min-width: 600px) and (max-width: 1199px)",
       large: "(min-width: 1200px)"
     }}>
       {matches => (
         <>

           {matches.small &&
     <Container>
           <p className={styles.titleblack}>Solution:</p>
      <p className={styles.descriptionblack}>
      Working with a codeveloper, I designed the interface and we developed the web app with angularjs and aframe. Aframe was used to implement the VR functionality.</p>
      <p className={styles.descriptionblack}>
      The main problem is that there needs to be a lead developer to develop the application, being able to integrate the VR functionality into the website itself.</p>
      <p className={styles.descriptionblack}>There needed to be a developer to help move the project forward so the developer was able to develop the project using Angular.JS and AFrame.</p>
 
   </Container>
             }

           {matches.medium &&
     <Container>
                         <p className={styles.titleblack}>Solution:</p>
                         <p className={styles.descriptionblack}>
      Working with a codeveloper, I designed the interface and we developed the web app with angularjs and aframe. Aframe was used to implement the VR functionality.</p>
      <p className={styles.descriptionblack}>
      The main problem is that there needs to be a lead developer to develop the application, being able to integrate the VR functionality into the website itself.</p>
      <p className={styles.descriptionblack}>There needed to be a developer to help move the project forward so the developer was able to develop the project using Angular.JS and AFrame.</p>
 
       
       </Container>
             }

           {matches.large &&
         <Container>
                         <p className={styles.titlelargeblack}>Solution:</p>
                         <p className={styles.descriptionlargeblack}>
      Working with a codeveloper, I designed the interface and we developed the web app with angularjs and aframe. Aframe was used to implement the VR functionality.</p>
      <p className={styles.descriptionlargeblack}>
      The main problem is that there needs to be a lead developer to develop the application, being able to integrate the VR functionality into the website itself.</p>
      <p className={styles.descriptionlargeblack}>There needed to be a developer to help move the project forward so the developer was able to develop the project using Angular.JS and AFrame.</p>
 
               </Container>
             }

         </>
       )}
     </Media>


     
     
     </Col>
   </Row>
 </Container>




 <Container fluid>






   {/* img without text */}
   <Row>
   <Col sm>
       <Image src={ImgTablet} fluid className={styles.imgstyle} />
       <p className={styles.description}>
Initial sneaker catalog overview
</p>
     </Col>
     <Col sm>
       <Image src={ImgC} fluid className={styles.imgstyle} />
       <p className={styles.description}>
Initial sneaker catalog overview
</p>
     </Col>
   </Row>




   <Row className={styles.test}>
<Col sm className={styles.fonttest}>


<Media queries={{
 small: "(max-width: 599px)",
 medium: "(min-width: 600px) and (max-width: 1199px)",
 large: "(min-width: 1200px)"
}}>
 {matches => (
   <>

     {matches.small &&
<Container>

 <p className={styles.titleblack}>RESULTS:</p>
 <p className={styles.descriptionblack}>After the development of the application was completed then the VR functionality was designed and implemented. There were other various parts of the website that needed content in particular parts, or just elements that needed to be developed.</p>
   <p className={styles.descriptionblack}>Being able to work as a team with the lead developer to create a designed web application was successful in being deployed to the internet and the MVP was viewed by the team to be successful demonstration of the VR web functionality.</p>
   <p className={styles.descriptionblack}>There was a main loading screen where the functionality was initially demonstrated, and then in the various other screens, that functionality also was implemented, as well as various other Elements, which were done in Bootstrap.</p>
   
   
  
 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>The prototype needed to be a MVP, which was eventually developed by the lead developer on the project, whom developed the MVP using Angular.JS and AFrame.</p>
 <p className={styles.descriptionblack}>The website was deployed on a live server and was viewable from the internet. From there the stakeholders of Polar Productions, could view the Prototype via their devices.</p>

 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>Polar Productions uses this application to showcase VR assets on the internet.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>RESULTS:</p>
 <p className={styles.descriptionblack}>After the development of the application was completed then the VR functionality was designed and implemented. There were other various parts of the website that needed content in particular parts, or just elements that needed to be developed.</p>
   <p className={styles.descriptionblack}>Being able to work as a team with the lead developer to create a designed web application was successful in being deployed to the internet and the MVP was viewed by the team to be successful demonstration of the VR web functionality.</p>
   <p className={styles.descriptionblack}>There was a main loading screen where the functionality was initially demonstrated, and then in the various other screens, that functionality also was implemented, as well as various other Elements, which were done in Bootstrap.</p>
   
   
  
 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>The prototype needed to be a MVP, which was eventually developed by the lead developer on the project, whom developed the MVP using Angular.JS and AFrame.</p>
 <p className={styles.descriptionblack}>The website was deployed on a live server and was viewable from the internet. From there the stakeholders of Polar Productions, could view the Prototype via their devices.</p>

 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>Polar Productions uses this application to showcase VR assets on the internet.</p>


</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>RESULTS:</p>
<p className={styles.descriptionlargeblack}>After the development of the application was completed then the VR functionality was designed and implemented. There were other various parts of the website that needed content in particular parts, or just elements that needed to be developed.</p>
   <p className={styles.descriptionlargeblack}>Being able to work as a team with the lead developer to create a designed web application was successful in being deployed to the internet and the MVP was viewed by the team to be successful demonstration of the VR web functionality.</p>
   <p className={styles.descriptionlargeblack}>There was a main loading screen where the functionality was initially demonstrated, and then in the various other screens, that functionality also was implemented, as well as various other Elements, which were done in Bootstrap.</p>
   
   
  
 <p className={styles.titlelargeblack}>Prototype:</p>
 
 <p className={styles.descriptionlargeblack}>The prototype needed to be a MVP, which was eventually developed by the lead developer on the project, whom developed the MVP using Angular.JS and AFrame.</p>
 <p className={styles.descriptionlargeblack}>The website was deployed on a live server and was viewable from the internet. From there the stakeholders of Polar Productions, could view the Prototype via their devices.</p>

 <p className={styles.titlelargeblack}>Test:</p>
 
 <p className={styles.descriptionlargeblack}>Polar Productions uses this application to showcase VR assets on the internet.</p>


      </Container>
       }

   </>
 )}
</Media>




</Col>
<Col sm>
 <Image src={Img00} fluid className={styles.imgstyle} />
 
</Col>
</Row>









{/* img without text */}
<Row>
<Col sm>
 <Image src={TestImg0} fluid className={styles.imgstyle} />
 <p className={styles.description}>
Initial sneaker catalog overview
</p>
</Col>
</Row>

{/* img without text */}
<Row>
<Col sm>
 <Image src={TestImg1} fluid className={styles.imgstyle} />
 <p className={styles.description}>
Initial sneaker catalog overview
</p>
</Col>
</Row>

{/* img without text */}
<Row>
<Col sm>
 <Image src={TestImg2} fluid className={styles.imgstyle} />
 <p className={styles.description}>
Initial sneaker catalog overview
</p>
</Col>
</Row>




   
 <Row className={styles.test}>
     <Col sm>
       <Image src={ImgA} fluid className={styles.imgstyle} />
       <p className={styles.description}>
Initial sneaker catalog overview
</p>
     </Col>
     <Col sm>
       <Image src={ImgB} fluid className={styles.imgstyle} />
       <p className={styles.description}>
Initial sneaker catalog overview
</p>
     </Col>
     <Col sm>
       <Image src={ImgC} fluid className={styles.imgstyle} />
       <p className={styles.description}>
Initial sneaker catalog overview
</p>
     </Col>
   </Row>


   <Row className={styles.test}>
<Col sm className={styles.fonttest}>


<Media queries={{
 small: "(max-width: 599px)",
 medium: "(min-width: 600px) and (max-width: 1199px)",
 large: "(min-width: 1200px)"
}}>
 {matches => (
   <>

     {matches.small &&
<Container>

 <p className={styles.titleblack}>Reflection:</p>
 <p className={styles.descriptionblack}>I wish I was able to help more, and make the designs for the website more inspiring like the founders of the company was looking for.</p>
   <p className={styles.descriptionblack}>As an User Experience designer it isnt often that I get to work on such an exciting product, and being able to design the user interfaces of the web application was an exciting experience.</p>

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Reflection:</p>
 <p className={styles.descriptionblack}>I wish I was able to help more, and make the designs for the website more inspiring like the founders of the company was looking for.</p>
   <p className={styles.descriptionblack}>As an User Experience designer it isnt often that I get to work on such an exciting product, and being able to design the user interfaces of the web application was an exciting experience.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Reflection:</p>
<p className={styles.descriptionlargeblack}>I wish I was able to help more, and make the designs for the website more inspiring like the founders of the company was looking for.</p>
   <p className={styles.descriptionlargeblack}>As an User Experience designer it isnt often that I get to work on such an exciting product, and being able to design the user interfaces of the web application was an exciting experience.</p>

     
      </Container>
       }

   </>
 )}
</Media>




</Col>
<Col sm>
 <Image src={Img00} fluid className={styles.imgstyle} />
 
</Col>
</Row>

 </Container>



 </Container>

<Jumbotron fluid className={styles.bottomNav}>
 <Container>
   <Row className={styles.bottomNavColor}>
   <Col sm={6} >
       <p className={styles.titleblack}>Sanchez Coffee Co</p>
       <p className={styles.description}>International Videography Website Redesign</p>
       <Link to={'/sanchezcoffeeco'}>
         <p className={styles.description}> View Previous </p>
       </Link>
     </Col>
     <Col sm={6} >
       <p className={styles.titleblack}>Stepsaver</p>
       <p className={styles.description}>International Videography Website Redesign</p>
       <Link to={'/stepsaver'}>
         <p className={styles.description}> View Next </p>
       </Link>
     </Col>
   </Row>
 </Container>
</Jumbotron>


  </>
  /* End of JSX Fragment*/
}