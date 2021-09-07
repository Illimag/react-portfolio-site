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

import styles from '../css/style.module.css';
import '../css/style.css';

 
import ImgA from '../../assets/img/uguru/testpics-02.png';
import ImgB from '../../assets/img/uguru/testpics-03.png';
import ImgC from '../../assets/img/uguru/testpics-03.png';

import ImgTablet from '../../assets/img/uguru/testpics-01.png';

import testimg from '../../assets/img/uguru/testpics-05.png';
import desktopImg from '../../assets/img/uguru/fadetestpic.jpg';
import Twodesktop from '../../assets/img/uguru/testpics-06.png';
import duo from '../../assets/img/uguru/testpics-08.png';

//import testtest from '../../assets/img/uguru/ttt-01.png';

import Vid1 from '../../assets/home_page_vids/compress_vid0.mp4';
import Vid2 from '../../assets/vids/compressed_vid/vid2.m4v';

import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';

import Media from 'react-media';

export const Artrendezvous = () => (
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

<p className={styles.titleblack}>Art Rezden-vous</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: New York City Web Application Redesign</p>
<p className={styles.descriptionblack}>Project Date: July 2021 - July 2021</p>
<p className={styles.descriptionblack}>Role: UI/UX Designer</p>
<p className={styles.descriptionblack}>Location: New York City, NY</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>



<p className={styles.titleblack}>Introduction:</p>

<p className={styles.descriptionblack}>
ArtRENDEZVOUS is an mobile application startup with a social media community integrated into an interface showcasing artworks. The CEO was looking for someone to do a quick gig to redesign the mobile applications, based on the original mobile application designs.</p>

<p className={styles.descriptionblack}>Was connected on Dribbble, looking for gig projects that I could get started on. After communicating with a client over the Dribbble portal, got started on an assignment related to a redesign of a mobile application. The client needed a redesign of their mobile application.</p>


</Container>

</Col>

</Row>

  }

{matches.medium &&

<Row className={styles.rowmedium}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titleblack}>Art Rezden-vous</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: New York City Web Application Redesign</p>
<p className={styles.descriptionblack}>Project Date: July 2021 - July 2021</p>
<p className={styles.descriptionblack}>Role: UI/UX Designer</p>
<p className={styles.descriptionblack}>Location: New York City, NY</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionblack}>
ArtRENDEZVOUS is an mobile application startup with a social media community integrated into an interface showcasing artworks. The CEO was looking for someone to do a quick gig to redesign the mobile applications, based on the original mobile application designs.</p>

<p className={styles.descriptionblack}>Was connected on Dribbble, looking for gig projects that I could get started on. After communicating with a client over the Dribbble portal, got started on an assignment related to a redesign of a mobile application. The client needed a redesign of their mobile application.</p>


</Container>

</Col>

</Row>
  }

{matches.large &&
<Row className={styles.rowlarge}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titlelargeblack}>Art Rezden-vous</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>Case Study: New York City Web Application Redesign</p>
<p className={styles.descriptionlargeblack}>Project Date: July 2021 - July 2021</p>
<p className={styles.descriptionlargeblack}>Role: UI/UX Designer</p>
<p className={styles.descriptionlargeblack}>Location: New York City, NY</p>

</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>
ArtRENDEZVOUS is an mobile application startup with a social media community integrated into an interface showcasing artworks. The CEO was looking for someone to do a quick gig to redesign the mobile applications, based on the original mobile application designs.</p>

<p className={styles.descriptionlargeblack}>Was connected on Dribbble, looking for gig projects that I could get started on. After communicating with a client over the Dribbble portal, got started on an assignment related to a redesign of a mobile application. The client needed a redesign of their mobile application.</p>

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
 <p className={styles.descriptionblack}>When beginning to empathize with understanding the user base of the application. Created Personas that would represent potential users. These users would be the virtual personas that would use the application.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>Find empathy with those potential users, by creating Personas that would like going to Art Museums, as well as liking Art Galleries. But possibly were unable because of not being able to be there locally. There could be various people who could use the application, as a way to communicate on another platform which should be focused on art. Creating this community is hard to do and when thinking about the user it can be difficult to find the correct people to user test.</p>
   <p className={styles.descriptionblack}>But being able to at least user test the UI elements is better than nothing. But also understanding that one of the main users of the application would be the CEO of the application. They would use the application. So part of helping with a client that would need someone to create the designs that they are looking for.</p>

 </Row>
       }

     {matches.medium &&
<Row className={styles.rowmedium}>


<p className={styles.titleblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionblack}>When beginning to empathize with understanding the user base of the application. Created Personas that would represent potential users. These users would be the virtual personas that would use the application.</p>
 <div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionblack}>Find empathy with those potential users, by creating Personas that would like going to Art Museums, as well as liking Art Galleries. But possibly were unable because of not being able to be there locally. There could be various people who could use the application, as a way to communicate on another platform which should be focused on art. Creating this community is hard to do and when thinking about the user it can be difficult to find the correct people to user test.</p>
   <p className={styles.descriptionblack}>But being able to at least user test the UI elements is better than nothing. But also understanding that one of the main users of the application would be the CEO of the application. They would use the application. So part of helping with a client that would need someone to create the designs that they are looking for.</p>


</Row>
       }

     {matches.large &&
   <Row className={styles.rowlarge}>


<p className={styles.titlelargeblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>When beginning to empathize with understanding the user base of the application. Created Personas that would represent potential users. These users would be the virtual personas that would use the application.</p>
 <div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionlargeblack}>Find empathy with those potential users, by creating Personas that would like going to Art Museums, as well as liking Art Galleries. But possibly were unable because of not being able to be there locally. There could be various people who could use the application, as a way to communicate on another platform which should be focused on art. Creating this community is hard to do and when thinking about the user it can be difficult to find the correct people to user test.</p>
   <p className={styles.descriptionlargeblack}>But being able to at least user test the UI elements is better than nothing. But also understanding that one of the main users of the application would be the CEO of the application. They would use the application. So part of helping with a client that would need someone to create the designs that they are looking for.</p>

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
 <p className={styles.descriptionblack}>There were no assets, for example the previous design of the redesigns. So everything had to be recreated from scratch. Also when creating prototypes, it was difficult to showcase the beginning video background using the prototyping tools. There was need of careful care to not change the logo, and make sure to use the logo sent from the client.</p>
   <p className={styles.descriptionblack}>The project is to redesign a mobile application that has a social media community integrated into an list to various artworks and museums. My row to this project is to redesign app designs based on the pervious designs. There were no assets available, instead was given the application designs of the original, and then designed a redesign based on the previous designs.</p>
   <p className={styles.descriptionblack}>I was communicating directly with the CEO, who had worked with a remote designer and a developer previous to build out an application that is on the iOS apple store.</p>
   <p className={styles.descriptionblack}>There were a certain level of issues related to time, and getting the solution as effectively as possible. Also as a designer have had issues with clients where they are not looking to have designs that they do not like. The issue is that clients like having designs that they know will coming, as in they write if off as OK.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Challenge:</p>
 <p className={styles.descriptionblack}>There were no assets, for example the previous design of the redesigns. So everything had to be recreated from scratch. Also when creating prototypes, it was difficult to showcase the beginning video background using the prototyping tools. There was need of careful care to not change the logo, and make sure to use the logo sent from the client.</p>
   <p className={styles.descriptionblack}>The project is to redesign a mobile application that has a social media community integrated into an list to various artworks and museums. My row to this project is to redesign app designs based on the pervious designs. There were no assets available, instead was given the application designs of the original, and then designed a redesign based on the previous designs.</p>
   <p className={styles.descriptionblack}>I was communicating directly with the CEO, who had worked with a remote designer and a developer previous to build out an application that is on the iOS apple store.</p>
   <p className={styles.descriptionblack}>There were a certain level of issues related to time, and getting the solution as effectively as possible. Also as a designer have had issues with clients where they are not looking to have designs that they do not like. The issue is that clients like having designs that they know will coming, as in they write if off as OK.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Challenge:</p>
<p className={styles.descriptionlargeblack}>There were no assets, for example the previous design of the redesigns. So everything had to be recreated from scratch. Also when creating prototypes, it was difficult to showcase the beginning video background using the prototyping tools. There was need of careful care to not change the logo, and make sure to use the logo sent from the client.</p>
   <p className={styles.descriptionlargeblack}>The project is to redesign a mobile application that has a social media community integrated into an list to various artworks and museums. My row to this project is to redesign app designs based on the pervious designs. There were no assets available, instead was given the application designs of the original, and then designed a redesign based on the previous designs.</p>
   <p className={styles.descriptionlargeblack}>I was communicating directly with the CEO, who had worked with a remote designer and a developer previous to build out an application that is on the iOS apple store.</p>
   <p className={styles.descriptionlargeblack}>There were a certain level of issues related to time, and getting the solution as effectively as possible. Also as a designer have had issues with clients where they are not looking to have designs that they do not like. The issue is that clients like having designs that they know will coming, as in they write if off as OK.</p>

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
 <p className={styles.descriptionblack}>The main issue is that, there is a client that is looking for the app to be redesigned and they have a pre-exisiting design. Then the designs of the next iteration needs to be different, but still things such as the user flow will look similar to the original. Although there can be minor adjustments made, based on new information or different methods of doing things.</p>
 <p className={styles.descriptionblack}>The original color scheme needs to be the same, as well as using a particular typography.</p>
 <p className={styles.descriptionblack}>The designs of the website would have to keep Mobile Responsive methologoies in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
 <p className={styles.descriptionblack}>Additionally the User Interface needs to have UI elements that have several variations, different kinds of elements in different locations on the screen. Then based on this information there can be a different design of the application, based on previous Ui elements.</p>

      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>IDEATE:</p>
 <p className={styles.descriptionblack}>The main issue is that, there is a client that is looking for the app to be redesigned and they have a pre-exisiting design. Then the designs of the next iteration needs to be different, but still things such as the user flow will look similar to the original. Although there can be minor adjustments made, based on new information or different methods of doing things.</p>
 <p className={styles.descriptionblack}>The original color scheme needs to be the same, as well as using a particular typography.</p>
 <p className={styles.descriptionblack}>The designs of the website would have to keep Mobile Responsive methologoies in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
 <p className={styles.descriptionblack}>Additionally the User Interface needs to have UI elements that have several variations, different kinds of elements in different locations on the screen. Then based on this information there can be a different design of the application, based on previous Ui elements.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>IDEATE:</p>
<p className={styles.descriptionlargeblack}>The main issue is that, there is a client that is looking for the app to be redesigned and they have a pre-exisiting design. Then the designs of the next iteration needs to be different, but still things such as the user flow will look similar to the original. Although there can be minor adjustments made, based on new information or different methods of doing things.</p>
 <p className={styles.descriptionlargeblack}>The original color scheme needs to be the same, as well as using a particular typography.</p>
 <p className={styles.descriptionlargeblack}>The designs of the website would have to keep Mobile Responsive methologoies in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
 <p className={styles.descriptionlargeblack}>Additionally the User Interface needs to have UI elements that have several variations, different kinds of elements in different locations on the screen. Then based on this information there can be a different design of the application, based on previous Ui elements.</p>

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
      Designed the redesigns using Figma, and redesigned all the assets on Figma. Later came back later and also designed it on Adobe XD. Additionally used a simple test to compare UIs, and pick a screen based on the CEO who gave art directions.</p>
      <p className={styles.descriptionblack}>
      Started with creating a User Flow. As so started the initial design of the mobile application, created various UIs that had variants of the UIs. I created multiple variants and then created a slide, which allowed the client to select the UI variant for each slide of the application.</p>
      <p className={styles.descriptionblack}>There was another issue related to the homepage, where it was difficult to prototype something with video backgrounds. Thats one of the main issues that I have related to creating static prototypes. So I used another platform to create prototypes with background with video.</p>
      <p className={styles.descriptionblack}>After showcasing the prototype as well as the various UI variants, the client was able to pick them out from the User Flow and then a completed interface could be designed from the screens that were selected. There were also various other requirements from the CEO, who was looking for someone to design certain aspects to the redesign. As well as integrating the correct logo which was provided later.</p>
   
   </Container>
             }

           {matches.medium &&
     <Container>
                         <p className={styles.titleblack}>Solution:</p>
                         <p className={styles.descriptionblack}>
      Designed the redesigns using Figma, and redesigned all the assets on Figma. Later came back later and also designed it on Adobe XD. Additionally used a simple test to compare UIs, and pick a screen based on the CEO who gave art directions.</p>
      <p className={styles.descriptionblack}>
      Started with creating a User Flow. As so started the initial design of the mobile application, created various UIs that had variants of the UIs. I created multiple variants and then created a slide, which allowed the client to select the UI variant for each slide of the application.</p>
      <p className={styles.descriptionblack}>There was another issue related to the homepage, where it was difficult to prototype something with video backgrounds. Thats one of the main issues that I have related to creating static prototypes. So I used another platform to create prototypes with background with video.</p>
      <p className={styles.descriptionblack}>After showcasing the prototype as well as the various UI variants, the client was able to pick them out from the User Flow and then a completed interface could be designed from the screens that were selected. There were also various other requirements from the CEO, who was looking for someone to design certain aspects to the redesign. As well as integrating the correct logo which was provided later.</p>
   
       
       </Container>
             }

           {matches.large &&
         <Container>
                         <p className={styles.titlelargeblack}>Solution:</p>
                         <p className={styles.descriptionlargeblack}>
      Designed the redesigns using Figma, and redesigned all the assets on Figma. Later came back later and also designed it on Adobe XD. Additionally used a simple test to compare UIs, and pick a screen based on the CEO who gave art directions.</p>
      <p className={styles.descriptionlargeblack}>
      Started with creating a User Flow. As so started the initial design of the mobile application, created various UIs that had variants of the UIs. I created multiple variants and then created a slide, which allowed the client to select the UI variant for each slide of the application.</p>
      <p className={styles.descriptionlargeblack}>There was another issue related to the homepage, where it was difficult to prototype something with video backgrounds. Thats one of the main issues that I have related to creating static prototypes. So I used another platform to create prototypes with background with video.</p>
      <p className={styles.descriptionlargeblack}>After showcasing the prototype as well as the various UI variants, the client was able to pick them out from the User Flow and then a completed interface could be designed from the screens that were selected. There were also various other requirements from the CEO, who was looking for someone to design certain aspects to the redesign. As well as integrating the correct logo which was provided later.</p>
   
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
 <p className={styles.descriptionblack}>The design of the application, started with using Adobe XD. There were several screens that had to be designed of the iOS Mobile Application. There was a redesign of the home screen, as well as redesigning the entire user flow of the application.</p>
   <p className={styles.descriptionblack}>Although most of the designs were done based on a redesign of the visual design of the application. There were issues related to padding and margins for example, that needed to be fixed, or to get the design up to a modern standard.</p>
   <p className={styles.descriptionblack}>There was features such as a navigation bar, that was unable on the previous design. Additionally the designs were first based on the Material Design Methodology. So the bottom bar is following Material Design Principles.</p>
   <p className={styles.descriptionblack}>Additionally there was more opportunities to take in reorganizing the information, as well as ways of displaying this information. So various different interfaces were explored, as well as two different types of color schemes. From these two different color schemes, a pattern of User Interface was explored, these UIs were based on the previous designs.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>DESIGN:</p>
 <p className={styles.descriptionblack}>The design of the application, started with using Adobe XD. There were several screens that had to be designed of the iOS Mobile Application. There was a redesign of the home screen, as well as redesigning the entire user flow of the application.</p>
   <p className={styles.descriptionblack}>Although most of the designs were done based on a redesign of the visual design of the application. There were issues related to padding and margins for example, that needed to be fixed, or to get the design up to a modern standard.</p>
   <p className={styles.descriptionblack}>There was features such as a navigation bar, that was unable on the previous design. Additionally the designs were first based on the Material Design Methodology. So the bottom bar is following Material Design Principles.</p>
   <p className={styles.descriptionblack}>Additionally there was more opportunities to take in reorganizing the information, as well as ways of displaying this information. So various different interfaces were explored, as well as two different types of color schemes. From these two different color schemes, a pattern of User Interface was explored, these UIs were based on the previous designs.</p>


</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>DESIGN:</p>
<p className={styles.descriptionlargeblack}>The design of the application, started with using Adobe XD. There were several screens that had to be designed of the iOS Mobile Application. There was a redesign of the home screen, as well as redesigning the entire user flow of the application.</p>
   <p className={styles.descriptionlargeblack}>Although most of the designs were done based on a redesign of the visual design of the application. There were issues related to padding and margins for example, that needed to be fixed, or to get the design up to a modern standard.</p>
   <p className={styles.descriptionlargeblack}>There was features such as a navigation bar, that was unable on the previous design. Additionally the designs were first based on the Material Design Methodology. So the bottom bar is following Material Design Principles.</p>
   <p className={styles.descriptionlargeblack}>Additionally there was more opportunities to take in reorganizing the information, as well as ways of displaying this information. So various different interfaces were explored, as well as two different types of color schemes. From these two different color schemes, a pattern of User Interface was explored, these UIs were based on the previous designs.</p>


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
 <p className={styles.descriptionblack}>The CEO was happy with the results of the redesign. I knew that the User Interface would be to the CEO’s look and that because of the feedback I received from the CEO, she received a redesign that was to no surprise to her because she picked the UI elements from a list of UI elements.</p>
 <p className={styles.descriptionblack}>The designs were done on Adobe XD, and the prototyping was done on Adobe XD. Being able to design the redesigns of the original application, as well as being able to use modern design software application tools was very useful.</p>
 <p className={styles.descriptionblack}>There were several parts of the interface that required certain parts of the mental model, and the information archetecture to make sure so that the user can be guided throught the navigation.</p>
 <p className={styles.descriptionblack}>The home screen carousel was iterated multiple times and checked with various stakeholders who okayed the various user interface designs.</p>
 
 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>The prototype was designed with Adobe XD, as well as another software application to showcase a video background image.</p>
 <p className={styles.descriptionblack}>The initial screen with the video background image prototype, had to be prototyped on another prototyping software application because Adobe XD doesnt allow Videos or Gifs to be used in the Prototyping of the User Interface Screens.</p>
 <p className={styles.descriptionblack}>So using the other prototyping software application I was able to prototype the iOS Mobile Application using a video background for the home screen of the app. The rest of the screens were prototyped using Adobe XD.</p>
        
 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>The testing of the user interface designs were done using a Google Doc, was able to test the user interfaces based on the design of the client, who is a stakeholder in the direction of the designs of the application.</p>
 <p className={styles.descriptionblack}>The different variations of the designs were selected under a letter “A”, “B”, etc, and then were selected, and then later I redesigned the file using the designs that were selected for the final redesign of the application.</p>

      </Container>
       }

     {matches.medium &&
<Container>
 
<p className={styles.titleblack}>Results:</p>
 <p className={styles.descriptionblack}>The CEO was happy with the results of the redesign. I knew that the User Interface would be to the CEO’s look and that because of the feedback I received from the CEO, she received a redesign that was to no surprise to her because she picked the UI elements from a list of UI elements.</p>
 <p className={styles.descriptionblack}>The designs were done on Adobe XD, and the prototyping was done on Adobe XD. Being able to design the redesigns of the original application, as well as being able to use modern design software application tools was very useful.</p>
 <p className={styles.descriptionblack}>There were several parts of the interface that required certain parts of the mental model, and the information archetecture to make sure so that the user can be guided throught the navigation.</p>
 <p className={styles.descriptionblack}>The home screen carousel was iterated multiple times and checked with various stakeholders who okayed the various user interface designs.</p>
 
 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>The prototype was designed with Adobe XD, as well as another software application to showcase a video background image.</p>
 <p className={styles.descriptionblack}>The initial screen with the video background image prototype, had to be prototyped on another prototyping software application because Adobe XD doesnt allow Videos or Gifs to be used in the Prototyping of the User Interface Screens.</p>
 <p className={styles.descriptionblack}>So using the other prototyping software application I was able to prototype the iOS Mobile Application using a video background for the home screen of the app. The rest of the screens were prototyped using Adobe XD.</p>
        
 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>The testing of the user interface designs were done using a Google Doc, was able to test the user interfaces based on the design of the client, who is a stakeholder in the direction of the designs of the application.</p>
 <p className={styles.descriptionblack}>The different variations of the designs were selected under a letter “A”, “B”, etc, and then were selected, and then later I redesigned the file using the designs that were selected for the final redesign of the application.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Results:</p>
 <p className={styles.descriptionlargeblack}>The CEO was happy with the results of the redesign. I knew that the User Interface would be to the CEO’s look and that because of the feedback I received from the CEO, she received a redesign that was to no surprise to her because she picked the UI elements from a list of UI elements.</p>
 <p className={styles.descriptionlargeblack}>The designs were done on Adobe XD, and the prototyping was done on Adobe XD. Being able to design the redesigns of the original application, as well as being able to use modern design software application tools was very useful.</p>
 <p className={styles.descriptionlargeblack}>There were several parts of the interface that required certain parts of the mental model, and the information archetecture to make sure so that the user can be guided throught the navigation.</p>
 <p className={styles.descriptionlargeblack}>The home screen carousel was iterated multiple times and checked with various stakeholders who okayed the various user interface designs.</p>
 
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
 <p className={styles.descriptionblack}>One of the main issues with the platform is that there is basically no users. One of the main things to do for that application is to start getting users, and put the design and the development of the application to rest, till more users are using the application.</p>
   <p className={styles.descriptionblack}>Being able to work with the various stakeholders such as the CEO, as well as the lead developer was an rewarding experience.</p>

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Reflection:</p>
 <p className={styles.descriptionblack}>One of the main issues with the platform is that there is basically no users. One of the main things to do for that application is to start getting users, and put the design and the development of the application to rest, till more users are using the application.</p>
   <p className={styles.descriptionblack}>Being able to work with the various stakeholders such as the CEO, as well as the lead developer was an rewarding experience.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Reflection:</p>
<p className={styles.descriptionlargeblack}>One of the main issues with the platform is that there is basically no users. One of the main things to do for that application is to start getting users, and put the design and the development of the application to rest, till more users are using the application.</p>
   <p className={styles.descriptionlargeblack}>Being able to work with the various stakeholders such as the CEO, as well as the lead developer was an rewarding experience. </p>

     
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
       <p className={styles.titleblack}>Legacy Pictures</p>
       <p className={styles.description}>International Videography Website Redesign</p>
       <Link to={'/legacypictures'}>
         <p className={styles.description}> View Previous </p>
       </Link>
     </Col>
     <Col sm={6} >
       <p className={styles.titleblack}>Uguru, INC</p>
       <p className={styles.description}>International Videography Website Redesign</p>
       <Link to={'/uguru'}>
         <p className={styles.description}> View Next </p>
       </Link>
     </Col>
   </Row>
 </Container>
</Jumbotron>

  </>
  /* End of JSX Fragment*/
)