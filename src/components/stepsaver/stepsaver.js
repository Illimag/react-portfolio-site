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

export const Stepsaver = () => (
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

<p className={styles.titleblack}>Stepsaver</p>
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
*Legacy Films is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.*
</p>

<p className={styles.description}>I was approached by Matt looking for someone to sign a contract with a company looking for a redesign of a website. After the website is designed, Matthew would start development of the website. Over the span of 1-2months, they designed a redesign of their web platform. Used usability testing, as well as getting feedback from the executives,</p>


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
<p className={styles.descriptionblack}>Case Study: San Francisco Mobile Application Startup</p>
<p className={styles.descriptionblack}>Project Date: October 2016 - January 2017</p>
<p className={styles.descriptionblack}>Role: Graphic UI/UX Designer Intern</p>
<p className={styles.descriptionblack}>Location: San Francisco Bay Area</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>
*Legacy Films is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.*
</p>

<p className={styles.descriptionlargeblack}>I was approached by Matt looking for someone to sign a contract with a company looking for a redesign of a website. After the website is designed, Matthew would start development of the website. Over the span of 1-2months, they designed a redesign of their web platform. Used usability testing, as well as getting feedback from the executives,</p>


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
*Legacy Films is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.*
</p>

<p className={styles.descriptionlargeblack}>I was approached by Matt looking for someone to sign a contract with a company looking for a redesign of a website. After the website is designed, Matthew would start development of the website. Over the span of 1-2months, they designed a redesign of their web platform. Used usability testing, as well as getting feedback from the executives,</p>

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
 <p className={styles.descriptionblack}>Matt is a person that is looking for someone to complete a design task redesigning a website. I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>The users of the Legacy Pictures websites would be people such as executives, etc. Such as a videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representention of themselves on the internet, which could be a website that showcases information regarding the company.**</p>
   <p className={styles.descriptionblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.**This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.**</p>

 </Row>
       }

     {matches.medium &&
<Row className={styles.rowmedium}>


<p className={styles.titleblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionblack}>Matt is a person that is looking for someone to complete a design task redesigning a website. I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>The users of the Legacy Pictures websites would be people such as executives, etc. Such as a videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representention of themselves on the internet, which could be a website that showcases information regarding the company.**</p>
   <p className={styles.descriptionblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.**This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.**</p>


</Row>
       }

     {matches.large &&
   <Row className={styles.rowlarge}>


<p className={styles.titlelargeblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionlargeblack}>Matt is a person that is looking for someone to complete a design task redesigning a website. I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionlargeblack}>The users of the Legacy Pictures websites would be people such as executives, etc. Such as a videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representention of themselves on the internet, which could be a website that showcases information regarding the company.**</p>
   <p className={styles.descriptionlargeblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.**This is related to various stakeholders of the company, on how to design the application. Additionally the users of the website could be executives or creative managers who are looking to hire Legacy Pictures.**</p>

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
 <p className={styles.descriptionblack}>They had a website that needed to be updated. The website was a wordpress website that hasent been updated since the early 2000s. After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. The initial scope was to start a redesign process for the website, as well as converting it to new UI/UX Design trends.</p>
   <p className={styles.descriptionblack}>The project is a simple redesign of the company’s website. There would be designs done related to the usability of the website.</p>
   <p className={styles.descriptionblack}>**I was the sole UI/UX Designer for the whole thing. There were a few stakeholders, for example the CEO of the company, a lead developer who would considering technical parts, etc.**</p>
   <p className={styles.descriptionblack}>There was an internal team, as well as a larger outside team. Most of the communication was between the CEO, lead developer and myself.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Challenge:</p>
 <p className={styles.descriptionblack}>They had a website that needed to be updated. The website was a wordpress website that hasent been updated since the early 2000s. After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. The initial scope was to start a redesign process for the website, as well as converting it to new UI/UX Design trends.</p>
   <p className={styles.descriptionblack}>The project is a simple redesign of the company’s website. There would be designs done related to the usability of the website.</p>
   <p className={styles.descriptionblack}>**I was the sole UI/UX Designer for the whole thing. There were a few stakeholders, for example the CEO of the company, a lead developer who would considering technical parts, etc.**</p>
   <p className={styles.descriptionblack}>There was an internal team, as well as a larger outside team. Most of the communication was between the CEO, lead developer and myself.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Challenge:</p>
<p className={styles.descriptionlargeblack}>They had a website that needed to be updated. The website was a wordpress website that hasent been updated since the early 2000s. After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. The initial scope was to start a redesign process for the website, as well as converting it to new UI/UX Design trends.</p>
   <p className={styles.descriptionlargeblack}>The project is a simple redesign of the company’s website. There would be designs done related to the usability of the website.</p>
   <p className={styles.descriptionlargeblack}>**I was the sole UI/UX Designer for the whole thing. There were a few stakeholders, for example the CEO of the company, a lead developer who would considering technical parts, etc.**</p>
   <p className={styles.descriptionlargeblack}>There was an internal team, as well as a larger outside team. Most of the communication was between the CEO, lead developer and myself.</p>
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
 <p className={styles.descriptionblack}>Understanding that there are multiple stakeholders as well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>
 <p className={styles.descriptionblack}>After the tests, showcased various metrics based on the performance test, showed that an update to the website would greatly improve the performance of the website, which would be a better user experience.</p>
 <p className={styles.descriptionblack}>The designs of the website would have to keep Mobile Responsive methologoies in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
 <p className={styles.descriptionblack}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>
 <p className={styles.descriptionblack}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.</p>

      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>IDEATE:</p>
 <p className={styles.descriptionblack}>Understanding that there are multiple stakeholders as well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>
 <p className={styles.descriptionblack}>After the tests, showcased various metrics based on the performance test, showed that an update to the website would greatly improve the performance of the website, which would be a better user experience.</p>
 <p className={styles.descriptionblack}>The designs of the website would have to keep Mobile Responsive methologoies in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
 <p className={styles.descriptionblack}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>
 <p className={styles.descriptionblack}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>IDEATE:</p>
<p className={styles.descriptionlargeblack}>Understanding that there are multiple stakeholders as well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>
 <p className={styles.descriptionlargeblack}>After the tests, showcased various metrics based on the performance test, showed that an update to the website would greatly improve the performance of the website, which would be a better user experience.</p>
 <p className={styles.descriptionlargeblack}>The designs of the website would have to keep Mobile Responsive methologoies in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>
 <p className={styles.descriptionlargeblack}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>
 <p className={styles.descriptionlargeblack}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.</p>

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
      *The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.*</p>
      <p className={styles.descriptionblack}>
      Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>
      <p className={styles.descriptionblack}>After feedback from the team, as well as a group of internal employees we were able to understand what the company was looking for. Created a survey to gain insight on various problems that the internal team was having. To find out in depth problems that they were having.</p>
      <p className={styles.descriptionblack}>Initially started with various stylings. Also did a indepth look at various scores that showed where the website was in related to the tests done. There were various scores from various different providers that showed the website can be greatly improve with a few updates. During this ideation phase there was various ideas that were ideated. For example.</p>
   
   </Container>
             }

           {matches.medium &&
     <Container>
                         <p className={styles.titleblack}>Solution:</p>
                         <p className={styles.descriptionblack}>
      *The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.*</p>
      <p className={styles.descriptionblack}>
      Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>
      <p className={styles.descriptionblack}>After feedback from the team, as well as a group of internal employees we were able to understand what the company was looking for. Created a survey to gain insight on various problems that the internal team was having. To find out in depth problems that they were having.</p>
      <p className={styles.descriptionblack}>Initially started with various stylings. Also did a indepth look at various scores that showed where the website was in related to the tests done. There were various scores from various different providers that showed the website can be greatly improve with a few updates. During this ideation phase there was various ideas that were ideated. For example.</p>
   
       
       </Container>
             }

           {matches.large &&
         <Container>
                         <p className={styles.titlelargeblack}>Solution:</p>
                         <p className={styles.descriptionlargeblack}>
      *The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.*</p>
      <p className={styles.descriptionlargeblack}>
      Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>
      <p className={styles.descriptionlargeblack}>After feedback from the team, as well as a group of internal employees we were able to understand what the company was looking for. Created a survey to gain insight on various problems that the internal team was having. To find out in depth problems that they were having.</p>
      <p className={styles.descriptionlargeblack}>Initially started with various stylings. Also did a indepth look at various scores that showed where the website was in related to the tests done. There were various scores from various different providers that showed the website can be greatly improve with a few updates. During this ideation phase there was various ideas that were ideated. For example.</p>
   
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
 <p className={styles.descriptionblack}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro.**</p>
   <p className={styles.descriptionblack}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow, or just understanding the basic layout of the website, for example the home page, etc. Then based on the original design, a new iteration of the design can be done.</p>
   <p className={styles.descriptionblack}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>
   <p className={styles.descriptionblack}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>DESIGN:</p>
 <p className={styles.descriptionblack}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro.**</p>
   <p className={styles.descriptionblack}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow, or just understanding the basic layout of the website, for example the home page, etc. Then based on the original design, a new iteration of the design can be done.</p>
   <p className={styles.descriptionblack}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>
   <p className={styles.descriptionblack}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>DESIGN:</p>
<p className={styles.descriptionlargeblack}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro.**</p>
   <p className={styles.descriptionlargeblack}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow, or just understanding the basic layout of the website, for example the home page, etc. Then based on the original design, a new iteration of the design can be done.</p>
   <p className={styles.descriptionlargeblack}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>
   <p className={styles.descriptionlargeblack}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>
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
 <p className={styles.descriptionblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
 <p className={styles.descriptionblack}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>
 <p className={styles.descriptionblack}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>
 <p className={styles.descriptionblack}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>
 <p className={styles.descriptionblack}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>
 <p className={styles.descriptionblack}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>
      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Results:</p>
 <p className={styles.descriptionblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
 <p className={styles.descriptionblack}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>
 <p className={styles.descriptionblack}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>
 <p className={styles.descriptionblack}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>
 <p className={styles.descriptionblack}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>
 <p className={styles.descriptionblack}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Results:</p>
<p className={styles.descriptionlargeblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
 <p className={styles.descriptionlargeblack}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>
 <p className={styles.descriptionlargeblack}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>
 <p className={styles.descriptionlargeblack}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>
 <p className={styles.descriptionlargeblack}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>
 <p className={styles.descriptionlargeblack}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>

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
 <p className={styles.descriptionblack}>Wish had more time to do more user testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates and it was designed over a period of time.</p>
   <p className={styles.descriptionblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Reflection:</p>
 <p className={styles.descriptionblack}>Wish had more time to do more user testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates and it was designed over a period of time.</p>
   <p className={styles.descriptionblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Reflection:</p>
<p className={styles.descriptionlargeblack}>Wish had more time to do more user testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates and it was designed over a period of time.</p>
   <p className={styles.descriptionlargeblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>

     
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