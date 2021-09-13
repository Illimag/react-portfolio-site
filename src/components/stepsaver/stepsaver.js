import React from 'react';

import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';


import Img00 from '../../assets/img/dasdasdigital/banner-02.jpg';
import Img01 from '../../assets/img/dasdasdigital/1-01.jpg';
import Img02 from '../../assets/img/dasdasdigital/1-02.jpg';
import Img03 from '../../assets/img/dasdasdigital/1-03.jpg';
import Img04 from '../../assets/img/dasdasdigital/1-04.jpg';
import Img05 from '../../assets/img/dasdasdigital/1-05.jpg';
import Img06 from '../../assets/img/dasdasdigital/1-06.jpg';
import Img07 from '../../assets/img/dasdasdigital/1-07.jpg';
import Img08 from '../../assets/img/dasdasdigital/1-08.jpg';
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


import video from '../../assets/newhomepagevids/6.mp4';
import videomobile from '../../assets/newhomepagevids/6-6.mp4';













import Media from 'react-media';

export const Stepsaver = () => (
  /* Start of JSX Fragment*/
  <>
 








 <Container className={styles.test}>
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Making Changes</h1>
                <h5 className={styles.test1title}>How to Re-Design a Web App in 2021</h5>
                <h5 className={styles.test1title}>Legacy Pictures</h5>

                <AnchorLink href='#test' className={styles.paddingleft}>                

                <h1>
                  <Button className={styles.mainbutton} variant="primary">Case Study</Button>
                </h1>

                </AnchorLink>

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

<p className={styles.titleblack}>Stepsaver</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: Houston Valet Company User Interface Designs</p>
<p className={styles.descriptionblack}>Project Date: October 2017 - January 2018</p>
<p className={styles.descriptionblack}>Role: User Interface Designer</p>
<p className={styles.descriptionblack}>Location: Houston, TX (REMOTE)</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>



<p className={styles.titleblack}>Introduction:</p>

<p className={styles.descriptionblack}>
Stepsaver is an valet company that tracks vehicles, using it’s priotory softwre it would be able to be used and people would pay for it.</p>

<p className={styles.descriptionblack}>Stepsaver was a startup in Houston Texas, that had a web application and a mobile application that would be able to be used for valets. Basically it made it easier for people to find their cars where they parked based on gps tracking.</p>


</Container>

</Col>

</Row>

  }

{matches.medium &&

<Row className={styles.rowmedium}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titleblack}>Stepsaver</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: Houston Valet Company User Interface Designs</p>
<p className={styles.descriptionblack}>Project Date: October 2017 - January 2018</p>
<p className={styles.descriptionblack}>Role: User Interface Designer</p>
<p className={styles.descriptionblack}>Location: Houston, TX (REMOTE)</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionblack}>
Stepsaver is an valet company that tracks vehicles, using it’s priotory softwre it would be able to be used and people would pay for it.</p>

<p className={styles.descriptionblack}>Stepsaver was a startup in Houston Texas, that had a web application and a mobile application that would be able to be used for valets. Basically it made it easier for people to find their cars where they parked based on gps tracking.</p>


</Container>

</Col>

</Row>
  }

{matches.large &&
<Row className={styles.rowlarge}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titlelargeblack}>Stepsaver</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>Case Study: Houston Valet Company User Interface Designs</p>
<p className={styles.descriptionlargeblack}>Project Date: October 2017 - January 2018</p>
<p className={styles.descriptionlargeblack}>Role: User Interface Designer</p>
<p className={styles.descriptionlargeblack}>Location: Houston, TX (REMOTE)</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>
Stepsaver is an valet company that tracks vehicles, using it’s priotory softwre it would be able to be used and people would pay for it.</p>

<p className={styles.descriptionlargeblack}>Stepsaver was a startup in Houston Texas, that had a web application and a mobile application that would be able to be used for valets. Basically it made it easier for people to find their cars where they parked based on gps tracking.</p>

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
 <p className={styles.descriptionblack}>The CEO of Stepsaver was looking for a designer who could do some redesigns for the web application and website.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>This project was done remotely, and all communication was done over the phone. I was selected because of my rate and the CEO thought I could do a nice redesign for the application.</p>
   <p className={styles.descriptionblack}>Stepsaver had Personas that it offered it’s services to. There were stakeholders such as the CEO, as well as the lead developer for the website.</p>
   <p className={styles.descriptionblack}>Personas related to the startup whom would be using the application would be people that would be using Valets, or parking alot in various parking structures. Sometimes people can get easily lost, as so there is an web app that allows people to find their cars with a GPS signal.</p>
   <p className={styles.descriptionblack}>When the Persona finds the signal and tracks the location of their vehicle, they are able to safely access their accounts via Stepsaver.</p>

 </Row>
       }

     {matches.medium &&
<Row className={styles.rowmedium}>


<p className={styles.titleblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>The CEO of Stepsaver was looking for a designer who could do some redesigns for the web application and website.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>This project was done remotely, and all communication was done over the phone. I was selected because of my rate and the CEO thought I could do a nice redesign for the application.</p>
   <p className={styles.descriptionblack}>Stepsaver had Personas that it offered it’s services to. There were stakeholders such as the CEO, as well as the lead developer for the website.</p>
   <p className={styles.descriptionblack}>Personas related to the startup whom would be using the application would be people that would be using Valets, or parking alot in various parking structures. Sometimes people can get easily lost, as so there is an web app that allows people to find their cars with a GPS signal.</p>
   <p className={styles.descriptionblack}>When the Persona finds the signal and tracks the location of their vehicle, they are able to safely access their accounts via Stepsaver.</p>

</Row>
       }

     {matches.large &&
   <Row className={styles.rowlarge}>


<p className={styles.titlelargeblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>The CEO of Stepsaver was looking for a designer who could do some redesigns for the web application and website.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionlargeblack}>This project was done remotely, and all communication was done over the phone. I was selected because of my rate and the CEO thought I could do a nice redesign for the application.</p>
   <p className={styles.descriptionlargeblack}>Stepsaver had Personas that it offered it’s services to. There were stakeholders such as the CEO, as well as the lead developer for the website.</p>
   <p className={styles.descriptionlargeblack}>Personas related to the startup whom would be using the application would be people that would be using Valets, or parking alot in various parking structures. Sometimes people can get easily lost, as so there is an web app that allows people to find their cars with a GPS signal.</p>
   <p className={styles.descriptionlargeblack}>When the Persona finds the signal and tracks the location of their vehicle, they are able to safely access their accounts via Stepsaver.</p>

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
 <p className={styles.descriptionblack}>The CEO wanted a redesign of the current interface. There was a mobile app as well as a website. Both needed to be redesigned..</p>
   <p className={styles.descriptionblack}>The project was first a redesign of the Web Application as well as the Mobile Application. There were only a web application and based on the web application, I created the mobile application designs. There were some designs that needed to be done.</p>
   <p className={styles.descriptionblack}>My role was as a contract designer just for the redesign of the web application and the design of the mobile application based on the web application. There was alot of it based on the technical requirement of the application. There really wasent much there, to work with. So it was free form, but there were a couple of functionality that needed to be designed for.</p>
   <p className={styles.descriptionblack}>I was the sole contract responsible for the designs of the user interface. I worked directly with the CEO for stepsaver.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Challenge:</p>
 <p className={styles.descriptionblack}>The CEO wanted a redesign of the current interface. There was a mobile app as well as a website. Both needed to be redesigned..</p>
   <p className={styles.descriptionblack}>The project was first a redesign of the Web Application as well as the Mobile Application. There were only a web application and based on the web application, I created the mobile application designs. There were some designs that needed to be done.</p>
   <p className={styles.descriptionblack}>My role was as a contract designer just for the redesign of the web application and the design of the mobile application based on the web application. There was alot of it based on the technical requirement of the application. There really wasent much there, to work with. So it was free form, but there were a couple of functionality that needed to be designed for.</p>
   <p className={styles.descriptionblack}>I was the sole contract responsible for the designs of the user interface. I worked directly with the CEO for stepsaver.</p>


</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Challenge:</p>
<p className={styles.descriptionlargeblack}>The CEO wanted a redesign of the current interface. There was a mobile app as well as a website. Both needed to be redesigned..</p>
   <p className={styles.descriptionlargeblack}>The project was first a redesign of the Web Application as well as the Mobile Application. There were only a web application and based on the web application, I created the mobile application designs. There were some designs that needed to be done.</p>
   <p className={styles.descriptionlargeblack}>My role was as a contract designer just for the redesign of the web application and the design of the mobile application based on the web application. There was alot of it based on the technical requirement of the application. There really wasent much there, to work with. So it was free form, but there were a couple of functionality that needed to be designed for.</p>
   <p className={styles.descriptionlargeblack}>I was the sole contract responsible for the designs of the user interface. I worked directly with the CEO for stepsaver.</p>


      
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
 <p className={styles.descriptionblack}>Creating various methods to ideate and understand the user base to better cater to them. For example the application would be used by valets, as well as people that use the application online.</p>
 <p className={styles.descriptionblack}>So sometimes the application would be catering to a Customer or sometimes to a business operator. As so the application should be streamlined for people looking to get to their vehicles.</p>
 <p className={styles.descriptionblack}>Understanding where the target demographic might be located, as well as what kind of interests, or topics that would be something that can be something to build a mental model of the Personas that need to be created.</p>
 

      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>IDEATE:</p>
 <p className={styles.descriptionblack}>Creating various methods to ideate and understand the user base to better cater to them. For example the application would be used by valets, as well as people that use the application online.</p>
 <p className={styles.descriptionblack}>So sometimes the application would be catering to a Customer or sometimes to a business operator. As so the application should be streamlined for people looking to get to their vehicles.</p>
 <p className={styles.descriptionblack}>Understanding where the target demographic might be located, as well as what kind of interests, or topics that would be something that can be something to build a mental model of the Personas that need to be created.</p>
 

   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>IDEATE:</p>
<p className={styles.descriptionlargeblack}>Creating various methods to ideate and understand the user base to better cater to them. For example the application would be used by valets, as well as people that use the application online.</p>
 <p className={styles.descriptionlargeblack}>So sometimes the application would be catering to a Customer or sometimes to a business operator. As so the application should be streamlined for people looking to get to their vehicles.</p>
 <p className={styles.descriptionlargeblack}>Understanding where the target demographic might be located, as well as what kind of interests, or topics that would be something that can be something to build a mental model of the Personas that need to be created.</p>
 
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
      I was able to redesign bothe the app and the website, keeping all the elements the same and keeping the color scheme.</p>
      <p className={styles.descriptionblack}>
      What kind of people would be using this app? The personas what does this look like, the people who would use the app, arnt really looking for an app that is difficult to use, they are looking for their car they arnt looking to hard a difficult time navigating through an app.</p>
      <p className={styles.descriptionblack}>The user journey is that they need to go on the web app and being able to go from here to here to here. Then using the mobile app they would be able to do this and this.</p>
      <p className={styles.descriptionblack}>Starting with the web application, I took the designs from the original web app, then I figured out how every page fit with each other, the flow the web app. Then I created a very basic list of functionality that needed to be designed for. Mainly I also created the list of pages that were needed to be considered as a redesign.</p>
      <p className={styles.descriptionblack}>After I put together this map of functionality that the web app had, I started creating the UI Components that were needed, I tried to keep as close to the original design as possible without moving to far in any direct, also it was something where I wanted to see if there were any kinds of app flows that were unnecessary as well as seeing what kinds of implementation would need to be done.</p>
   
   </Container>
             }

           {matches.medium &&
     <Container>
                         <p className={styles.titleblack}>Solution:</p>
                         <p className={styles.descriptionblack}>
      I was able to redesign bothe the app and the website, keeping all the elements the same and keeping the color scheme.</p>
      <p className={styles.descriptionblack}>
      What kind of people would be using this app? The personas what does this look like, the people who would use the app, arnt really looking for an app that is difficult to use, they are looking for their car they arnt looking to hard a difficult time navigating through an app.</p>
      <p className={styles.descriptionblack}>The user journey is that they need to go on the web app and being able to go from here to here to here. Then using the mobile app they would be able to do this and this.</p>
      <p className={styles.descriptionblack}>Starting with the web application, I took the designs from the original web app, then I figured out how every page fit with each other, the flow the web app. Then I created a very basic list of functionality that needed to be designed for. Mainly I also created the list of pages that were needed to be considered as a redesign.</p>
      <p className={styles.descriptionblack}>After I put together this map of functionality that the web app had, I started creating the UI Components that were needed, I tried to keep as close to the original design as possible without moving to far in any direct, also it was something where I wanted to see if there were any kinds of app flows that were unnecessary as well as seeing what kinds of implementation would need to be done.</p>
   
       
       </Container>
             }

           {matches.large &&
         <Container>
                         <p className={styles.titlelargeblack}>Solution:</p>
                         <p className={styles.descriptionlargeblack}>
      I was able to redesign bothe the app and the website, keeping all the elements the same and keeping the color scheme.</p>
      <p className={styles.descriptionlargeblack}>
      What kind of people would be using this app? The personas what does this look like, the people who would use the app, arnt really looking for an app that is difficult to use, they are looking for their car they arnt looking to hard a difficult time navigating through an app.</p>
      <p className={styles.descriptionlargeblack}>The user journey is that they need to go on the web app and being able to go from here to here to here. Then using the mobile app they would be able to do this and this.</p>
      <p className={styles.descriptionlargeblack}>Starting with the web application, I took the designs from the original web app, then I figured out how every page fit with each other, the flow the web app. Then I created a very basic list of functionality that needed to be designed for. Mainly I also created the list of pages that were needed to be considered as a redesign.</p>
      <p className={styles.descriptionlargeblack}>After I put together this map of functionality that the web app had, I started creating the UI Components that were needed, I tried to keep as close to the original design as possible without moving to far in any direct, also it was something where I wanted to see if there were any kinds of app flows that were unnecessary as well as seeing what kinds of implementation would need to be done.</p>
   
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

 <p className={styles.titleblack}>DESIGN:</p>
 <p className={styles.descriptionblack}>The designs needed to be redesigns of the Mobile iOS Application, as well as a design of the web application. There were various user flows that need to be done to understand which user Interfaces screens need to be created, as well as understand the various contents, and User Interface Elements that need to be implemented into the design of the Mobile Application.</p>
   <p className={styles.descriptionblack}>The Desktop application also was designed based off of the Mobile application, as so the user flows are the same, and showcase similar information. The desktop version needed a login screen, and there were various edits done based on the feedback of the CEO. The designs were done in Adobe Illustrator.</p>
   

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>DESIGN:</p>
 <p className={styles.descriptionblack}>The designs needed to be redesigns of the Mobile iOS Application, as well as a design of the web application. There were various user flows that need to be done to understand which user Interfaces screens need to be created, as well as understand the various contents, and User Interface Elements that need to be implemented into the design of the Mobile Application.</p>
   <p className={styles.descriptionblack}>The Desktop application also was designed based off of the Mobile application, as so the user flows are the same, and showcase similar information. The desktop version needed a login screen, and there were various edits done based on the feedback of the CEO. The designs were done in Adobe Illustrator.</p>
   
</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>DESIGN:</p>
<p className={styles.descriptionlargeblack}>The designs needed to be redesigns of the Mobile iOS Application, as well as a design of the web application. There were various user flows that need to be done to understand which user Interfaces screens need to be created, as well as understand the various contents, and User Interface Elements that need to be implemented into the design of the Mobile Application.</p>
   <p className={styles.descriptionlargeblack}>The Desktop application also was designed based off of the Mobile application, as so the user flows are the same, and showcase similar information. The desktop version needed a login screen, and there were various edits done based on the feedback of the CEO. The designs were done in Adobe Illustrator.</p>
   
      
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

 <p className={styles.titleblack}>Results:</p>
 <p className={styles.descriptionblack}>I redesigned the web application and the designed the mobile application.</p>
 <p className={styles.descriptionblack}>The design was completed and the CEo found it to be satisfactory and he paid the amount that we discussed. Actually first I sent over the web app, then we renegotiated for the mobile app. Then I completed the mobile app and he paid for the mobile app.</p>
 <p className={styles.descriptionblack}>I was happy to complete the project and that the CEO was happy enough with the designs that he paid as we discussed. This was a happy confront and every left happy, afterwards, I dont know if they got enough funding to continue but overall I wish I was able to spend more time on the designs to make ti really to the next level.</p>
 <p className={styles.descriptionblack}>The mobile application was redesigned and the desktop application was designed. Sending the deliverables to the development team, who appreciated the help with the new designs.</p>
 <p className={styles.descriptionblack}>Also the loading screen was something that had to be designed and the development of the loading screen was something that had to have some custom css to be able to develop.</p>
 
       </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Results:</p>
 <p className={styles.descriptionblack}>I redesigned the web application and the designed the mobile application.</p>
 <p className={styles.descriptionblack}>The design was completed and the CEo found it to be satisfactory and he paid the amount that we discussed. Actually first I sent over the web app, then we renegotiated for the mobile app. Then I completed the mobile app and he paid for the mobile app.</p>
 <p className={styles.descriptionblack}>I was happy to complete the project and that the CEO was happy enough with the designs that he paid as we discussed. This was a happy confront and every left happy, afterwards, I dont know if they got enough funding to continue but overall I wish I was able to spend more time on the designs to make ti really to the next level.</p>
 <p className={styles.descriptionblack}>The mobile application was redesigned and the desktop application was designed. Sending the deliverables to the development team, who appreciated the help with the new designs.</p>
 <p className={styles.descriptionblack}>Also the loading screen was something that had to be designed and the development of the loading screen was something that had to have some custom css to be able to develop.</p>
 

   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Results:</p>
<p className={styles.descriptionlargeblack}>I redesigned the web application and the designed the mobile application.</p>
 <p className={styles.descriptionlargeblack}>The design was completed and the CEo found it to be satisfactory and he paid the amount that we discussed. Actually first I sent over the web app, then we renegotiated for the mobile app. Then I completed the mobile app and he paid for the mobile app.</p>
 <p className={styles.descriptionlargeblack}>I was happy to complete the project and that the CEO was happy enough with the designs that he paid as we discussed. This was a happy confront and every left happy, afterwards, I dont know if they got enough funding to continue but overall I wish I was able to spend more time on the designs to make ti really to the next level.</p>
 <p className={styles.descriptionlargeblack}>The mobile application was redesigned and the desktop application was designed. Sending the deliverables to the development team, who appreciated the help with the new designs.</p>
 <p className={styles.descriptionlargeblack}>Also the loading screen was something that had to be designed and the development of the loading screen was something that had to have some custom css to be able to develop.</p>
 
      </Container>
       }

   </>
 )}
</Media>




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
 <p className={styles.descriptionblack}>I wish I could work with companies that are more established with a income stream so I can have more consitten workj.</p>
   <p className={styles.descriptionblack}>What I learned while working for stepsaver is that remote work is possible with good communication with the stakeholders, as well as clear scope, and an understanding of the quality of the deliverables.</p>
   <p className={styles.descriptionblack}>Over it was an rewarding experience to be able to be part of the team at Stepsaver, and being able to contribute an important part of the startup’s applications.</p>

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Reflection:</p>
 <p className={styles.descriptionblack}>I wish I could work with companies that are more established with a income stream so I can have more consitten workj.</p>
   <p className={styles.descriptionblack}>What I learned while working for stepsaver is that remote work is possible with good communication with the stakeholders, as well as clear scope, and an understanding of the quality of the deliverables.</p>
   <p className={styles.descriptionblack}>Over it was an rewarding experience to be able to be part of the team at Stepsaver, and being able to contribute an important part of the startup’s applications.</p>
   
</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Reflection:</p>
<p className={styles.descriptionlargeblack}>I wish I could work with companies that are more established with a income stream so I can have more consitten workj.</p>
   <p className={styles.descriptionlargeblack}>What I learned while working for stepsaver is that remote work is possible with good communication with the stakeholders, as well as clear scope, and an understanding of the quality of the deliverables.</p>
   <p className={styles.descriptionlargeblack}>Over it was an rewarding experience to be able to be part of the team at Stepsaver, and being able to contribute an important part of the startup’s applications.</p>
   
     
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
          <Col sm={6}>
            <p className={styles.title}>Apex VR</p>
            <p className={styles.description}>New York City Art Community iOS App Redesign</p>
            <Link to={'/apexvr'}>
              <p className={styles.description}> View Previous </p>
            </Link>
          </Col>
          <Col sm={6} >
            <p className={styles.title}>Contact Info</p>
            <p className={styles.description}>Questions or just want to say hi?</p>
            <Link to={'/contact'}>
              <p className={styles.description}> Contact Now </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  </>
  /* End of JSX Fragment*/
)