
import React from 'react';

import { Link } from 'react-router-dom'
//import { Slide } from "react-awesome-reveal";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

//import { LinkContainer } from 'react-router-bootstrap';
//import Button from 'react-bootstrap/Button';

import Img00 from '../../assets/img/uguru/aerial-view-of-san-francisco-at-night-PDXCT9H.jpg';
//import Banner from '../../assets/img/uguru/banner-01.jpg';
import Img01 from '../../assets/img/uguru/1-05.jpg';
import Img02 from '../../assets/img/uguru/1-02.jpg';
import Img03 from '../../assets/img/uguru/1-03.jpg';
import Img04 from '../../assets/img/uguru/1-04.jpg';
import Img05 from '../../assets/img/uguru/1-05.jpg';
import Img06 from '../../assets/img/uguru/1-06.jpg';
import Img07 from '../../assets/img/uguru/1-07.jpg';
import Img08 from '../../assets/img/uguru/1-08.png';
import Img09 from '../../assets/img/uguru/1-09.png';
 
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


import Codepen from "react-codepen-embed";

//import BannerVid from '../../assets/vids/san-francisco-USMT8JR.mp4';


import styles from '../css/style.module.css';
import '../css/style.css';
import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';

import Media from 'react-media';


export const Uguru = () => (
  /* Start of JSX Fragment*/
  <>
  




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

<p className={styles.titleblack}>Uguru, INC</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: San Francisco Mobile Application Startup</p>
<p className={styles.descriptionblack}>Project Date: October 2016 - January 2017</p>
<p className={styles.descriptionblack}>Role: Graphic UI/UX Designer Intern</p>
<p className={styles.descriptionblack}>Location: San Francisco Bay Area</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>



<p className={styles.titleblack}>Introduction:</p>

<p className={styles.description}>
Uguru was a Mobile Application Startup funded by Bay Angels. And they were looking to launch thier client side app for the use of college students looking for tutoring services in a online marketplace.</p>

<p className={styles.description}>Uguru, INC was a startup in San Francisco. The product that they were developing was a mobile Application for college students. It was a small team, made up of a project manager, CEO, data science intern, software enginner intern, and myself. Eventually another designer was called in and boosted the User Interface designs. The startup was located in SOMA, which is down town san francisco right across from the ferry building. </p>


</Container>

</Col>

</Row>

  }

{matches.medium &&

<Row className={styles.rowmedium}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titleblack}>Uguru, INC</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: San Francisco Mobile Application Startup</p>
<p className={styles.descriptionblack}>Project Date: October 2016 - January 2017</p>
<p className={styles.descriptionblack}>Role: Graphic UI/UX Designer Intern</p>
<p className={styles.descriptionblack}>Location: San Francisco Bay Area</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titleblack}>Introduction:</p>

<p className={styles.description}>
Uguru was a Mobile Application Startup funded by Bay Angels. And they were looking to launch thier client side app for the use of college students looking for tutoring services in a online marketplace.</p>

<p className={styles.description}>Uguru, INC was a startup in San Francisco. The product that they were developing was a mobile Application for college students. It was a small team, made up of a project manager, CEO, data science intern, software enginner intern, and myself. Eventually another designer was called in and boosted the User Interface designs. The startup was located in SOMA, which is down town san francisco right across from the ferry building. </p>


</Container>

</Col>

</Row>
  }

{matches.large &&
<Row className={styles.rowlarge}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titlelargeblack}>Uguru, INC</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>Case Study: San Francisco Mobile Application Startup</p>
<p className={styles.descriptionlargeblack}>Project Date: October 2016 - January 2017</p>
<p className={styles.descriptionlargeblack}>Role: Graphic UI/UX Designer Intern</p>
<p className={styles.descriptionlargeblack}>Location: San Francisco Bay Area</p>

</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>
Uguru was a Mobile Application Startup funded by Bay Angels. And they were looking to launch thier client side app for the use of college students looking for tutoring services in a online marketplace.</p>

<p className={styles.descriptionlargeblack}>Uguru, INC was a startup in San Francisco. The product that they were developing was a mobile Application for college students. It was a small team, made up of a project manager, CEO, data science intern, software enginner intern, and myself. Eventually another designer was called in and boosted the User Interface designs. The startup was located in SOMA, which is down town san francisco right across from the ferry building. </p>

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
 <p className={styles.descriptionblack}>Uguru received their funding of around 300k from an angel investor that was interested in building software product that would be able to create a platform for college students to get tutoring services, and other services. The peers would be able to tutor each other and be tutors for others. Over the feeling of the startup was one where there was alot of uncertainty with how the product was going to be developed and the CEO lacked the experience to really keep the team together and motivated. As well the people involved weren’t exactly knowing what to do.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>There was a ad that was looking for someone to be an office admin worker and I replied to the ad and it was the internship at the startup. After the initial interview I was able to get the internship and I started work at Uguru, INC. It was a fun experience that got me into UI/UX and without this experience I dont know if I would be able to have found my way out into a better way.</p>
   <p className={styles.descriptionblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.**This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.**</p>
   <p className={styles.descriptionblack}>The first screens were mainly for the CEO, the CEO was a developer, who was building a hybrid mobile application with Iconic. Iconic builds hybrid mobile applications that can be used to upload apps to both iOS and Andriod applications.</p>
   <p className={styles.descriptionblack}>Additionally the CEO had various assets that he was looking for someone to redesign and to reiterate on.The userbase is college students, who are looking to help people as well as receive help for college. This is particularly useful for people that have majors in a particular subject but might need help with another topic.</p>
   <p className={styles.descriptionblack}>The main demographic that was ever reach was the local UC Berkeley Area. Because actually the CEO was a student at UC Berkeley.</p>



 </Row>
       }

     {matches.medium &&
<Row className={styles.rowmedium}>


<p className={styles.titleblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Uguru received their funding of around 300k from an angel investor that was interested in building software product that would be able to create a platform for college students to get tutoring services, and other services. The peers would be able to tutor each other and be tutors for others. Over the feeling of the startup was one where there was alot of uncertainty with how the product was going to be developed and the CEO lacked the experience to really keep the team together and motivated. As well the people involved weren’t exactly knowing what to do.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>There was a ad that was looking for someone to be an office admin worker and I replied to the ad and it was the internship at the startup. After the initial interview I was able to get the internship and I started work at Uguru, INC. It was a fun experience that got me into UI/UX and without this experience I dont know if I would be able to have found my way out into a better way.</p>
   <p className={styles.descriptionblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.**This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.**</p>
   <p className={styles.descriptionblack}>The first screens were mainly for the CEO, the CEO was a developer, who was building a hybrid mobile application with Iconic. Iconic builds hybrid mobile applications that can be used to upload apps to both iOS and Andriod applications.</p>
   <p className={styles.descriptionblack}>Additionally the CEO had various assets that he was looking for someone to redesign and to reiterate on.The userbase is college students, who are looking to help people as well as receive help for college. This is particularly useful for people that have majors in a particular subject but might need help with another topic.</p>
   <p className={styles.descriptionblack}>The main demographic that was ever reach was the local UC Berkeley Area. Because actually the CEO was a student at UC Berkeley.</p>


</Row>
       }

     {matches.large &&
   <Row className={styles.rowlarge}>


<p className={styles.titlelargeblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>Uguru received their funding of around 300k from an angel investor that was interested in building software product that would be able to create a platform for college students to get tutoring services, and other services. The peers would be able to tutor each other and be tutors for others. Over the feeling of the startup was one where there was alot of uncertainty with how the product was going to be developed and the CEO lacked the experience to really keep the team together and motivated. As well the people involved weren’t exactly knowing what to do.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionlargeblack}>There was a ad that was looking for someone to be an office admin worker and I replied to the ad and it was the internship at the startup. After the initial interview I was able to get the internship and I started work at Uguru, INC. It was a fun experience that got me into UI/UX and without this experience I dont know if I would be able to have found my way out into a better way.</p>
   <p className={styles.descriptionlargeblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.**This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.**</p>
   <p className={styles.descriptionlargeblack}>The first screens were mainly for the CEO, the CEO was a developer, who was building a hybrid mobile application with Iconic. Iconic builds hybrid mobile applications that can be used to upload apps to both iOS and Andriod applications.</p>
   <p className={styles.descriptionlargeblack}>Additionally the CEO had various assets that he was looking for someone to redesign and to reiterate on.The userbase is college students, who are looking to help people as well as receive help for college. This is particularly useful for people that have majors in a particular subject but might need help with another topic.</p>
   <p className={styles.descriptionlargeblack}>The main demographic that was ever reach was the local UC Berkeley Area. Because actually the CEO was a student at UC Berkeley.</p>

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
 <p className={styles.descriptionblack}>The CEO needed a Graphic Designer who could transition into a User Interface Design/User Experience position. He needed someone whom could create high-fidelilty user interface mockups and create the rapid prototypes. As well as needing someone whom could do various other office related tasks.</p>
   <p className={styles.descriptionblack}>The projects were a series of various User Interface designs. Initially I designed some low level fidelity mockups that were brought into the fold to be used for the interface. I was really happy to get strated on the work. But I think some parts of the trouble was not really knowing how to start. Luckly enoughI was able to become better with time and grow as a person.</p>
   <p className={styles.descriptionblack}>There were a few designs that I started with for example, I worked on the onboarding of the Mobile app. For this I designed it based on some sketches and created a higher fidelity for them. There were alot of times I didn’t know what to do, but I continued on them and made them as good as I could.</p>
   <p className={styles.descriptionblack}>After the designs were completed and the CEO okayed them I started on creating rapid prototyping for them. This was done using proto.io and using this animation software I was able to show what the app would be like. Additionally I made designs for the website, and various other parts of the interface. For example I made designs for the home page of the app, the statistics page, and other pages such as they would be used on the production application that would be deployed and used.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Challenge:</p>
 <p className={styles.descriptionblack}>The CEO needed a Graphic Designer who could transition into a User Interface Design/User Experience position. He needed someone whom could create high-fidelilty user interface mockups and create the rapid prototypes. As well as needing someone whom could do various other office related tasks.</p>
   <p className={styles.descriptionblack}>The projects were a series of various User Interface designs. Initially I designed some low level fidelity mockups that were brought into the fold to be used for the interface. I was really happy to get strated on the work. But I think some parts of the trouble was not really knowing how to start. Luckly enoughI was able to become better with time and grow as a person.</p>
   <p className={styles.descriptionblack}>There were a few designs that I started with for example, I worked on the onboarding of the Mobile app. For this I designed it based on some sketches and created a higher fidelity for them. There were alot of times I didn’t know what to do, but I continued on them and made them as good as I could.</p>
   <p className={styles.descriptionblack}>After the designs were completed and the CEO okayed them I started on creating rapid prototyping for them. This was done using proto.io and using this animation software I was able to show what the app would be like. Additionally I made designs for the website, and various other parts of the interface. For example I made designs for the home page of the app, the statistics page, and other pages such as they would be used on the production application that would be deployed and used.</p>


</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Challenge:</p>
<p className={styles.descriptionlargeblack}>The CEO needed a Graphic Designer who could transition into a User Interface Design/User Experience position. He needed someone whom could create high-fidelilty user interface mockups and create the rapid prototypes. As well as needing someone whom could do various other office related tasks.</p>
   <p className={styles.descriptionlargeblack}>The projects were a series of various User Interface designs. Initially I designed some low level fidelity mockups that were brought into the fold to be used for the interface. I was really happy to get strated on the work. But I think some parts of the trouble was not really knowing how to start. Luckly enoughI was able to become better with time and grow as a person.</p>
   <p className={styles.descriptionlargeblack}>There were a few designs that I started with for example, I worked on the onboarding of the Mobile app. For this I designed it based on some sketches and created a higher fidelity for them. There were alot of times I didn’t know what to do, but I continued on them and made them as good as I could.</p>
   <p className={styles.descriptionlargeblack}>After the designs were completed and the CEO okayed them I started on creating rapid prototyping for them. This was done using proto.io and using this animation software I was able to show what the app would be like. Additionally I made designs for the website, and various other parts of the interface. For example I made designs for the home page of the app, the statistics page, and other pages such as they would be used on the production application that would be deployed and used.</p>


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
 <p className={styles.descriptionblack}>Initially most of the designs were based on this fictional guru persona, whom was someone who would be able to teach students. Also the main point of this application is to create a social media, a community of people who could be at a state school, or at a university at California.</p>
 <p className={styles.descriptionblack}>We started with Card Sorting? We are able to create a demographic of users based off what we know about the student population. Some of it is assumptions. But we are able to create various user journeys, or user flows.</p>
 <p className={styles.descriptionblack}>Additionally we can start trying to understand our personas pain points. We create Personas of people who would be using the application. For example if they went to state school there can be a few personas like this:</p>

      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>IDEATE:</p>
 <p className={styles.descriptionblack}>Initially most of the designs were based on this fictional guru persona, whom was someone who would be able to teach students. Also the main point of this application is to create a social media, a community of people who could be at a state school, or at a university at California.</p>
 <p className={styles.descriptionblack}>We started with Card Sorting? We are able to create a demographic of users based off what we know about the student population. Some of it is assumptions. But we are able to create various user journeys, or user flows.</p>
 <p className={styles.descriptionblack}>Additionally we can start trying to understand our personas pain points. We create Personas of people who would be using the application. For example if they went to state school there can be a few personas like this:</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>IDEATE:</p>
<p className={styles.descriptionlargeblack}>Initially most of the designs were based on this fictional guru persona, whom was someone who would be able to teach students. Also the main point of this application is to create a social media, a community of people who could be at a state school, or at a university at California.</p>
 <p className={styles.descriptionlargeblack}>We started with Card Sorting? We are able to create a demographic of users based off what we know about the student population. Some of it is assumptions. But we are able to create various user journeys, or user flows.</p>
 <p className={styles.descriptionlargeblack}>Additionally we can start trying to understand our personas pain points. We create Personas of people who would be using the application. For example if they went to state school there can be a few personas like this:</p>

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
      I was able to create high fidelity mockups for the mobile application. As well as begining the rapid prototypes using static image files and animations. I was the graphic & UI/UX Designer Intern at the company, and later there was a lead designer that came in to help with moving the designs forwards faster. This was very great to learn from this individual and while working with the whole team it really showed me how a team would be able to create a production product.</p>
      <p className={styles.descriptionblack}>
      There were a few people in the team. There was a Project manager type person, the CEO who was also a software enginner, a software engineer intern, a data science intern, and me who was graphic & UI/UX design intern, later a lead designer who specalized in User Interface come in to help move the screen along better as well as building out more of the app flows.</p>
      <p className={styles.descriptionblack}>There were alot of difficulties with workingon this application. For example the number of hours we were expected to work for example I was working from 8am to 8pm mon - sat or sometimes they expected me to come in on sundays. It was difficult to get to my internship and although the CEO was a cool guy he didnt seen to understand the basic things that are needed for his workers to be able to be successful. Even so we tried our best and worked to make his dream a reality.</p>
      <p className={styles.descriptionblack}>The User Interface Designs needed to be done, and I pushed hard to get them designed over time, I learned various things to make the designs look better and hopefully made a real difference in how the application would look and feel. For example for the Home page of the user interface in the mobile application, I was able to creating the layout and seeing the different parts of the interface that needed to be created.</p>
      <p className={styles.descriptionblack}>We needed to do more research, such as what types of people would be using the interface, we were really focused on creating the MVP. But other that that we really didnt know how this was going to happen. After the interface is becoming better, I started creating a higher fidelity interface.</p>
      <p className={styles.descriptionblack}>I would be putting in the very high number of hours and it began becoming very stressful. Additionally I was For the home page interface after getting the sketch from the CEO and knowing what the layout needed to be I was able to start creating the visual look of the application based on the style guide.</p>
      <p className={styles.descriptionblack}>I was using tools mainly from adobe such as Illustrator and photoshop. This was before Adobe XD. Additionally I was using rapid prototyping software that was helping me with seeing how the animations of the user Interface would look. This really helped alot when trying to do the Onboarding screens.</p>
   
   </Container>
             }

           {matches.medium &&
     <Container>
                         <p className={styles.titleblack}>Solution:</p>
                         <p className={styles.descriptionblack}>
      I was able to create high fidelity mockups for the mobile application. As well as begining the rapid prototypes using static image files and animations. I was the graphic & UI/UX Designer Intern at the company, and later there was a lead designer that came in to help with moving the designs forwards faster. This was very great to learn from this individual and while working with the whole team it really showed me how a team would be able to create a production product.</p>
      <p className={styles.descriptionblack}>
      There were a few people in the team. There was a Project manager type person, the CEO who was also a software enginner, a software engineer intern, a data science intern, and me who was graphic & UI/UX design intern, later a lead designer who specalized in User Interface come in to help move the screen along better as well as building out more of the app flows.</p>
      <p className={styles.descriptionblack}>There were alot of difficulties with workingon this application. For example the number of hours we were expected to work for example I was working from 8am to 8pm mon - sat or sometimes they expected me to come in on sundays. It was difficult to get to my internship and although the CEO was a cool guy he didnt seen to understand the basic things that are needed for his workers to be able to be successful. Even so we tried our best and worked to make his dream a reality.</p>
      <p className={styles.descriptionblack}>The User Interface Designs needed to be done, and I pushed hard to get them designed over time, I learned various things to make the designs look better and hopefully made a real difference in how the application would look and feel. For example for the Home page of the user interface in the mobile application, I was able to creating the layout and seeing the different parts of the interface that needed to be created.</p>
      <p className={styles.descriptionblack}>We needed to do more research, such as what types of people would be using the interface, we were really focused on creating the MVP. But other that that we really didnt know how this was going to happen. After the interface is becoming better, I started creating a higher fidelity interface.</p>
      <p className={styles.descriptionblack}>I would be putting in the very high number of hours and it began becoming very stressful. Additionally I was For the home page interface after getting the sketch from the CEO and knowing what the layout needed to be I was able to start creating the visual look of the application based on the style guide.</p>
      <p className={styles.descriptionblack}>I was using tools mainly from adobe such as Illustrator and photoshop. This was before Adobe XD. Additionally I was using rapid prototyping software that was helping me with seeing how the animations of the user Interface would look. This really helped alot when trying to do the Onboarding screens.</p>
   
       </Container>
             }

           {matches.large &&
         <Container>
                         <p className={styles.titlelargeblack}>Solution:</p>
                         <p className={styles.descriptionlargeblack}>
      I was able to create high fidelity mockups for the mobile application. As well as begining the rapid prototypes using static image files and animations. I was the graphic & UI/UX Designer Intern at the company, and later there was a lead designer that came in to help with moving the designs forwards faster. This was very great to learn from this individual and while working with the whole team it really showed me how a team would be able to create a production product.</p>
      <p className={styles.descriptionblack}>
      There were a few people in the team. There was a Project manager type person, the CEO who was also a software enginner, a software engineer intern, a data science intern, and me who was graphic & UI/UX design intern, later a lead designer who specalized in User Interface come in to help move the screen along better as well as building out more of the app flows.</p>
      <p className={styles.descriptionlargeblack}>There were alot of difficulties with workingon this application. For example the number of hours we were expected to work for example I was working from 8am to 8pm mon - sat or sometimes they expected me to come in on sundays. It was difficult to get to my internship and although the CEO was a cool guy he didnt seen to understand the basic things that are needed for his workers to be able to be successful. Even so we tried our best and worked to make his dream a reality.</p>
      <p className={styles.descriptionlargeblack}>The User Interface Designs needed to be done, and I pushed hard to get them designed over time, I learned various things to make the designs look better and hopefully made a real difference in how the application would look and feel. For example for the Home page of the user interface in the mobile application, I was able to creating the layout and seeing the different parts of the interface that needed to be created.</p>
      <p className={styles.descriptionlargeblack}>We needed to do more research, such as what types of people would be using the interface, we were really focused on creating the MVP. But other that that we really didnt know how this was going to happen. After the interface is becoming better, I started creating a higher fidelity interface.</p>
      <p className={styles.descriptionlargeblack}>I would be putting in the very high number of hours and it began becoming very stressful. Additionally I was For the home page interface after getting the sketch from the CEO and knowing what the layout needed to be I was able to start creating the visual look of the application based on the style guide.</p>
      <p className={styles.descriptionlargeblack}>I was using tools mainly from adobe such as Illustrator and photoshop. This was before Adobe XD. Additionally I was using rapid prototyping software that was helping me with seeing how the animations of the user Interface would look. This really helped alot when trying to do the Onboarding screens.</p>
   
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
 <p className={styles.descriptionblack}>When we started to do the design process, it was mainly to do low fidelity prototyping, such as balsamiqs, but preferably started on Adobe Illustrator. Adobe Illustrator which was used because Adobe XD, as well as Figma were both released after 2016.</p>
   <p className={styles.descriptionblack}>So for designers who did UI/UX Design at SOMA in Downtown San Francisco, we used Adobe Illustrator, which was much nicer to use than Adobe Photoshop to use, because we are able to use vectors rather than pixels.</p>
   <p className={styles.descriptionblack}>So we designed the User Interfaces on Adobe Illustrator because this was before Adobe XD and Figma. Also it took a few years for Adobe XD to build itself up to the functionalities that are available currently for Adobe XD and similar software applications.</p>

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>DESIGN:</p>
 <p className={styles.descriptionblack}>When we started to do the design process, it was mainly to do low fidelity prototyping, such as balsamiqs, but preferably started on Adobe Illustrator. Adobe Illustrator which was used because Adobe XD, as well as Figma were both released after 2016.</p>
   <p className={styles.descriptionblack}>So for designers who did UI/UX Design at SOMA in Downtown San Francisco, we used Adobe Illustrator, which was much nicer to use than Adobe Photoshop to use, because we are able to use vectors rather than pixels.</p>
   <p className={styles.descriptionblack}>So we designed the User Interfaces on Adobe Illustrator because this was before Adobe XD and Figma. Also it took a few years for Adobe XD to build itself up to the functionalities that are available currently for Adobe XD and similar software applications.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>DESIGN:</p>
<p className={styles.descriptionlargeblack}>When we started to do the design process, it was mainly to do low fidelity prototyping, such as balsamiqs, but preferably started on Adobe Illustrator. Adobe Illustrator which was used because Adobe XD, as well as Figma were both released after 2016.</p>
   <p className={styles.descriptionlargeblack}>So for designers who did UI/UX Design at SOMA in Downtown San Francisco, we used Adobe Illustrator, which was much nicer to use than Adobe Photoshop to use, because we are able to use vectors rather than pixels.</p>
   <p className={styles.descriptionlargeblack}>So we designed the User Interfaces on Adobe Illustrator because this was before Adobe XD and Figma. Also it took a few years for Adobe XD to build itself up to the functionalities that are available currently for Adobe XD and similar software applications.</p>

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
 <p className={styles.descriptionblack}>After my internship was completed, I continued my journey as a designer. And from this experience I returned to California College of the Arts changing my major from Industrial Design to Interaction design to focus on the User Interface and User Experience Design.</p>
 <p className={styles.descriptionblack}>The CEO would want me to do the code of the interface but at the time I was unsure about what that would actually require me to do and as so I didn’t really know how to do that. LAter after my intership was over I learned HTML/CSS/JS and the web frameworks that would have been required to let me do what he expected of me.</p>
 <p className={styles.descriptionblack}>I completed my internship by creating the home page, onboarding screens, etc and I think over the level of quality was ok. I returned back to school.</p>
 <p className={styles.descriptionblack}>After my internship, this was my first taste of being part of the tech industry and it showed me a little about what direction I needed to go to be successful. For example after high school I was really unsure what to do, but I chose to go into Industrial Design, and I attended Hongik University for Industrial Design. After I came back from Korea, I transferred to De Anza for graphic design because of my art background this made alot of sense to me at the time.</p>
 <p className={styles.descriptionblack}>Then I transfered to CCA california college of the arts in san francisco as industrial design major. This was because I didnt have any experience in the field and I didnt know what was more relevant for people around this area.</p>
 <p className={styles.descriptionblack}>When I did my internship I learned what was more relevant for the industry as well being able to make the change from Industrial Design to Interaction Design. I learned what it was like to work as a team.</p>
      
 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>There were very primate types of rapid prototyping software used such as Proto.io, which were a good way to create rapid prototypes of the application.</p>
 <p className={styles.descriptionblack}>So taking the high fidelity prototypes and then creating prototypes of them using Proto.io, was what was used instead of the rapid prototyping functionality that is available for Adobe XD and Figma, as well as Sketch, and Invision.</p>
 <p className={styles.descriptionblack}>But at the time there wasent Adobe XD and Figma, so what we used instead was Adobe Illustrator and Proto.IO to rapid prototype the applications.</p>
        
 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>The main application was being developed by the CEO who was the lead developer.</p>
 <p className={styles.descriptionblack}>There are several ways to test this application. Finding the correct demographic and getting the actual demographic to use the application, is one of the best ways to test this application. There are various User Interfaces that need to be User Tested.</p>


      </Container>
       }

     {matches.medium &&
<Container>
 
<p className={styles.titleblack}>Results:</p>
 <p className={styles.descriptionblack}>After my internship was completed, I continued my journey as a designer. And from this experience I returned to California College of the Arts changing my major from Industrial Design to Interaction design to focus on the User Interface and User Experience Design.</p>
 <p className={styles.descriptionblack}>The CEO would want me to do the code of the interface but at the time I was unsure about what that would actually require me to do and as so I didn’t really know how to do that. LAter after my intership was over I learned HTML/CSS/JS and the web frameworks that would have been required to let me do what he expected of me.</p>
 <p className={styles.descriptionblack}>I completed my internship by creating the home page, onboarding screens, etc and I think over the level of quality was ok. I returned back to school.</p>
 <p className={styles.descriptionblack}>After my internship, this was my first taste of being part of the tech industry and it showed me a little about what direction I needed to go to be successful. For example after high school I was really unsure what to do, but I chose to go into Industrial Design, and I attended Hongik University for Industrial Design. After I came back from Korea, I transferred to De Anza for graphic design because of my art background this made alot of sense to me at the time.</p>
 <p className={styles.descriptionblack}>Then I transfered to CCA california college of the arts in san francisco as industrial design major. This was because I didnt have any experience in the field and I didnt know what was more relevant for people around this area.</p>
 <p className={styles.descriptionblack}>When I did my internship I learned what was more relevant for the industry as well being able to make the change from Industrial Design to Interaction Design. I learned what it was like to work as a team.</p>
      
 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>There were very primate types of rapid prototyping software used such as Proto.io, which were a good way to create rapid prototypes of the application.</p>
 <p className={styles.descriptionblack}>So taking the high fidelity prototypes and then creating prototypes of them using Proto.io, was what was used instead of the rapid prototyping functionality that is available for Adobe XD and Figma, as well as Sketch, and Invision.</p>
 <p className={styles.descriptionblack}>But at the time there wasent Adobe XD and Figma, so what we used instead was Adobe Illustrator and Proto.IO to rapid prototype the applications.</p>
        
 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>The main application was being developed by the CEO who was the lead developer.</p>
 <p className={styles.descriptionblack}>There are several ways to test this application. Finding the correct demographic and getting the actual demographic to use the application, is one of the best ways to test this application. There are various User Interfaces that need to be User Tested.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Results:</p>
<p className={styles.descriptionlargeblack}>After my internship was completed, I continued my journey as a designer. And from this experience I returned to California College of the Arts changing my major from Industrial Design to Interaction design to focus on the User Interface and User Experience Design.</p>
 <p className={styles.descriptionlargeblack}>The CEO would want me to do the code of the interface but at the time I was unsure about what that would actually require me to do and as so I didn’t really know how to do that. LAter after my intership was over I learned HTML/CSS/JS and the web frameworks that would have been required to let me do what he expected of me.</p>
 <p className={styles.descriptionlargeblack}>I completed my internship by creating the home page, onboarding screens, etc and I think over the level of quality was ok. I returned back to school.</p>
 <p className={styles.descriptionlargeblack}>After my internship, this was my first taste of being part of the tech industry and it showed me a little about what direction I needed to go to be successful. For example after high school I was really unsure what to do, but I chose to go into Industrial Design, and I attended Hongik University for Industrial Design. After I came back from Korea, I transferred to De Anza for graphic design because of my art background this made alot of sense to me at the time.</p>
 <p className={styles.descriptionlargeblack}>Then I transfered to CCA california college of the arts in san francisco as industrial design major. This was because I didnt have any experience in the field and I didnt know what was more relevant for people around this area.</p>
 <p className={styles.descriptionlargeblack}>When I did my internship I learned what was more relevant for the industry as well being able to make the change from Industrial Design to Interaction Design. I learned what it was like to work as a team.</p>
      
 <p className={styles.titlelargeblack}>Prototype:</p>
 
 <p className={styles.descriptionlargeblack}>The prototype was designed with Adobe XD, as well as another software application to showcase a video background image.</p>
 <p className={styles.descriptionlargeblack}>The initial screen with the video background image prototype, had to be prototyped on another prototyping software application because Adobe XD doesnt allow Videos or Gifs to be used in the Prototyping of the User Interface Screens.</p>
 <p className={styles.descriptionlargeblack}>So using the other prototyping software application I was able to prototype the iOS Mobile Application using a video background for the home screen of the app. The rest of the screens were prototyped using Adobe XD.</p>
        
 <p className={styles.titlelargeblack}>Test:</p>
 
 <p className={styles.descriptionlargeblack}>The testing of the user interface designs were done using a Google Doc, was able to test the user interfaces based on the design of the client, who is a stakeholder in the direction of the designs of the application.</p>
 <p className={styles.descriptionlargeblack}>The different variations of the designs were selected under a letter “A”, “B”, etc, and then were selected, and then later I redesigned the file using the designs that were selected for the final redesign of the application.</p>


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
 <p className={styles.descriptionblack}>At my internship at Uguru, INC. It was a challenging task since I did not have the right skillset to be effective at my alloted tasks. Luckly I was working along side a very talented designer and learned by doing. My background in graphics helped me slowly develop my skillsets for User Interface design as well as an understanding of User Experience.</p>
   <p className={styles.descriptionblack}>This internship was really the first steps for me to being the journey as an UI/UX Designer as well as getting into the tech industry. Although it was difficult at times, and it was unsure for me to know what worked and didnt work, when the CEO suggested that I should start programming it took me a long time to start programming. After I started programming, it really opened up my world to the possibilities of what was possible as well as what types of mediums i would be interested in working in. For example I was interested in working with devices such as mobile devices, and design user Interfaces for mobile applications and websites.</p>
   <p className={styles.descriptionblack}>After I started learning HTML/CSS to start building these websites that I designed it really opened my world up to understanding what was possible for me as a designer as well as being able to code. As so I continued on with learning how to code and I learned code such as CSS libraries such as bootstrap, and JavaScript frameworks. Eventually I learned how to write logic code with python and even began building little software systems. Additionally I learned more about the technologies surround web languages and web browsers and learning how to code for web browsers, while keeping in mind all the design technicals for an amazin user interface.</p>

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Reflection:</p>
 <p className={styles.descriptionblack}>At my internship at Uguru, INC. It was a challenging task since I did not have the right skillset to be effective at my alloted tasks. Luckly I was working along side a very talented designer and learned by doing. My background in graphics helped me slowly develop my skillsets for User Interface design as well as an understanding of User Experience.</p>
   <p className={styles.descriptionblack}>This internship was really the first steps for me to being the journey as an UI/UX Designer as well as getting into the tech industry. Although it was difficult at times, and it was unsure for me to know what worked and didnt work, when the CEO suggested that I should start programming it took me a long time to start programming. After I started programming, it really opened up my world to the possibilities of what was possible as well as what types of mediums i would be interested in working in. For example I was interested in working with devices such as mobile devices, and design user Interfaces for mobile applications and websites.</p>
   <p className={styles.descriptionblack}>After I started learning HTML/CSS to start building these websites that I designed it really opened my world up to understanding what was possible for me as a designer as well as being able to code. As so I continued on with learning how to code and I learned code such as CSS libraries such as bootstrap, and JavaScript frameworks. Eventually I learned how to write logic code with python and even began building little software systems. Additionally I learned more about the technologies surround web languages and web browsers and learning how to code for web browsers, while keeping in mind all the design technicals for an amazin user interface.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Reflection:</p>
<p className={styles.descriptionlargeblack}>At my internship at Uguru, INC. It was a challenging task since I did not have the right skillset to be effective at my alloted tasks. Luckly I was working along side a very talented designer and learned by doing. My background in graphics helped me slowly develop my skillsets for User Interface design as well as an understanding of User Experience.</p>
   <p className={styles.descriptionlargeblack}>This internship was really the first steps for me to being the journey as an UI/UX Designer as well as getting into the tech industry. Although it was difficult at times, and it was unsure for me to know what worked and didnt work, when the CEO suggested that I should start programming it took me a long time to start programming. After I started programming, it really opened up my world to the possibilities of what was possible as well as what types of mediums i would be interested in working in. For example I was interested in working with devices such as mobile devices, and design user Interfaces for mobile applications and websites.</p>
   <p className={styles.descriptionlargeblack}>After I started learning HTML/CSS to start building these websites that I designed it really opened my world up to understanding what was possible for me as a designer as well as being able to code. As so I continued on with learning how to code and I learned code such as CSS libraries such as bootstrap, and JavaScript frameworks. Eventually I learned how to write logic code with python and even began building little software systems. Additionally I learned more about the technologies surround web languages and web browsers and learning how to code for web browsers, while keeping in mind all the design technicals for an amazin user interface.</p>

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
            <p className={styles.titleblack}>Artrendezvous</p>
            <p className={styles.description}>International Videography Website Redesign</p>
            <Link to={'/artrendezvous'}>
              <p className={styles.description}> View Previous </p>
            </Link>
          </Col>
          <Col sm={6} >
            <p className={styles.titleblack}>Sanchez Coffee Co</p>
            <p className={styles.description}>International Videography Website Redesign</p>
            <Link to={'/sanchezcoffeeco'}>
              <p className={styles.description}> View Next </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  </>
  /* End of JSX Fragment*/
)