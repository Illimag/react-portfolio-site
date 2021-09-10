import React from 'react';

import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';


import Img00 from '../../assets/img/dasdasdigital/banner-02.jpg';
import Banner from '../../assets/img/nikerate/banner-06.jpg';
import Img01 from '../../assets/img/legacypictures/graphite-s6.png';
import Img02 from '../../assets/img/legacypictures/legacyfilms.png';
import Img03 from '../../assets/img/legacypictures/cardsort.jpg';
import Img04 from '../../assets/img/legacypictures/test.png';
import Img05 from '../../assets/img/legacypictures/test1.png';
import Img06 from '../../assets/img/legacypictures/test2.png';
import Img07 from '../../assets/img/legacypictures/video-production-concept-operator-working-with-a-c-2JS9M5Q.jpg';
import Img08 from '../../assets/img/legacypictures/team-of-photographers-MQNU8CK.jpg';
import Img09 from '../../assets/img/legacypictures/bubble-mindmap-template.png';
import Img10 from '../../assets/img/legacypictures/mind-mapping-diagram-8391.png';
import Img11 from '../../assets/img/legacypictures/male-videographer-editor-using-pc-computer-editing-R7QYFZS.jpg';
import Img12 from '../../assets/img/legacypictures/copy.png';
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




import Media from 'react-media';


export const Legacypictures = () => (
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

<p className={styles.titleblack}>Legacy Pictures</p>
<p className={styles.descriptionblack}>Case Study: Los Angeles Web Application Re-Design</p>
<p className={styles.descriptionblack}>Project Date: July 2021 - August 2021</p>
<p className={styles.descriptionblack}>Role: UI/UX Designer</p>
<p className={styles.descriptionblack}>Location: Los Angeles, CA</p>

<div className={styles.spaceingwhite}></div>


<p className={styles.subtitlelargeblack}>Introduction:</p>


<p className={styles.description}>
Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.*
</p>

</Container>
</Col>

</Row>

     }

   {matches.medium &&

 <Row className={styles.rowmedium}>

 <Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titleblack}>Legacy Pictures</p>
<p className={styles.descriptionblack}>Case Study: Los Angeles Web Application Re-Design</p>
<p className={styles.descriptionblack}>Project Date: July 2021 - August 2021</p>
<p className={styles.descriptionblack}>Role: UI/UX Designer</p>
<p className={styles.descriptionblack}>Location: Los Angeles, CA</p>

<div className={styles.spaceingwhite}></div>

<p className={styles.subtitlelargeblack}>Introduction:</p>



<p className={styles.descriptionlargeblack}>
Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

</Container>
</Col>


</Row>
     }

   {matches.large &&
 <Row className={styles.rowlarge}>

 <Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titlelargeblack}>Legacy Pictures</p>
<p className={styles.descriptionlargeblack}>Case Study: Los Angeles Web Application Re-Design</p>
<p className={styles.descriptionlargeblack}>Project Date: July 2021 - August 2021</p>
<p className={styles.descriptionlargeblack}>Role: UI/UX Designer</p>
<p className={styles.descriptionlargeblack}>Location: Los Angeles, CA</p>

<div className={styles.spaceingwhite}></div>


<p className={styles.subtitlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>
Legacy Pictures is a Los Angeles Videography Company with offices in North America and Asia. They have worked with various companies doing movies, films and commericals around the world.
</p>

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
<Image src={Img08} fluid className={styles.imgouterstyle} />
<div className={styles.spaceingwhite}></div>


</Container>





<Container fluid>
<div className={styles.spaceingwhite}></div>
{/* left text right img */}




  <Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }}>
    {matches => (
      <>

        {matches.small &&

<Row className={styles.rowsmall}>



<p className={styles.subtitlelargeblack}>Scope of the Project</p>
    <p className={styles.descriptionblack}>Worked with lead developer looking to sign a contract with a company looking for the following services:</p>

    <div className={styles.paddingleft}>
    <ol className={styles.listblack}>
      <li className={styles.listitemblack}>Redesign of a website</li>
      <li className={styles.listitemblack}>Usability testing getting feedback from executives</li>
      <li className={styles.listitemblack}>Redesign of Web Platform</li>
    </ol>
    </div>

    
  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>



<p className={styles.subtitlelargeblack}>Scope of the Project</p>
    <p className={styles.descriptionblack}>Worked with lead developer looking to sign a contract with a company looking for the following services:</p>

    <div className={styles.paddingleft}>
    <ol className={styles.listblack}>
      <li className={styles.listitemblack}>Redesign of a website</li>
      <li className={styles.listitemblack}>Usability testing getting feedback from executives</li>
      <li className={styles.listitemblack}>Redesign of Web Platform</li>
    </ol>
    </div>

  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


<p className={styles.subtitlelargeblack}>Scope of the Project</p>
    <p className={styles.descriptionlargeblack}>Worked with lead developer looking to sign a contract with a company looking for the following services:</p>

    <div className={styles.paddingleft}>
    <ol className={styles.listlargeblack}>
      <li className={styles.listitemlargeblack}>Redesign of a website</li>
      <li className={styles.listitemlargeblack}>Usability testing getting feedback from executives</li>
      <li className={styles.listitemlargeblack}>Redesign of Web Platform</li>
    </ol>
    </div>

  </Row>
          }

      </>
    )}
  </Media>






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
  <Row className={styles.rowsmall}>

    <p className={styles.subtitlelargeblack}>Writing contract with company</p>
    <p className={styles.descriptionblack}>I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
    
    <p className={styles.subtitlelargeblack}>Building Empathy</p>
    <p className={styles.descriptionblack}>Users of the Legacy Pictures website:</p>
    
    <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>Executives</li>
      <li className={styles.listitemblack}>Videographers</li>
      <li className={styles.listitemblack}>Creative Managers</li>
    </ul>
    </div>

          <Image src={personas} fluid className={styles.imgstyle} />

 

    <p className={styles.subtitlelargeblack}>Use Case Scenarios</p>
    <p className={styles.descriptionblack}>Videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representation of themselves on the internet, which could be a website that showcases information regarding the company.</p>
    
    <Image src={UserScenario} fluid className={styles.imgstyle} />


    <p className={styles.subtitlelargeblack}>Stakeholders for the website</p>
    <p className={styles.descriptionblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.</p>
    <p className={styles.descriptionblack}>This is related to various stakeholders of the company, on how to design the application. </p>
    
    <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>Users of the website</li>
      <li className={styles.listitemblack}>Executives</li>
      <li className={styles.listitemblack}>Creative Managers who are looking to hire Legacy Pictures</li>
    </ul>
    </div>

         </Row>
          }

        {matches.medium &&
  <Row className={styles.rowmedium}>
    
    <p className={styles.subtitlelargeblack}>Writing contract with company</p>
    <p className={styles.descriptionblack}>I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
    
    <p className={styles.subtitlelargeblack}>Building Empathy</p>
    <p className={styles.descriptionblack}>Users of the Legacy Pictures website:</p>
    
    <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>Executives</li>
      <li className={styles.listitemblack}>Videographers</li>
      <li className={styles.listitemblack}>Creative Managers</li>
    </ul>
    </div>

    <Image src={personas} fluid className={styles.imgstyle} />


    <p className={styles.subtitlelargeblack}>Use Case Scenarios</p>
    <p className={styles.descriptionblack}>Videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representation of themselves on the internet, which could be a website that showcases information regarding the company.</p>
    
    <Image src={UserScenario} fluid className={styles.imgstyle} />


    <p className={styles.subtitlelargeblack}>Stakeholders for the website</p>
    <p className={styles.descriptionblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.</p>
    <p className={styles.descriptionblack}>This is related to various stakeholders of the company, on how to design the application. </p>
    
    <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>Users of the website</li>
      <li className={styles.listitemblack}>Executives</li>
      <li className={styles.listitemblack}>Creative Managers who are looking to hire Legacy Pictures</li>
    </ul>
    </div>


      </Row>
          }

        {matches.large &&
      <Row className={styles.rowlarge}>

<p className={styles.subtitlelargeblack}>Writing contract with company</p>
    <p className={styles.descriptionlargeblack}>I offer my services as an UI/UX Designer, and am excited to get a contract started with the company.</p>
    
    <p className={styles.subtitlelargeblack}>Building Empathy</p>
    <p className={styles.descriptionlargeblack}>Users of the Legacy Pictures website:</p>
    
    <div className={styles.paddingleft}>
    <ul className={styles.listlargeblack}>
      <li className={styles.listitemlargeblack}>Executives</li>
      <li className={styles.listitemlargeblack}>Videographers</li>
      <li className={styles.listitemlargeblack}>Creative Managers</li>
    </ul>
    </div>

    <Image src={personas} fluid className={styles.imgstyle} />

    <p className={styles.subtitlelargeblack}>Use Case Scenarios</p>
    <p className={styles.descriptionlargeblack}>Videography company that is looking to outsource work to another videography company for services to be rendered. Or there could be other thing that the users of the Legacy Pictures website would be looking for a representation of themselves on the internet, which could be a website that showcases information regarding the company.</p>
    
    <Image src={UserScenario} fluid className={styles.imgstyle} />

    <p className={styles.subtitlelargeblack}>Stakeholders for the website</p>
    <p className={styles.descriptionlargeblack}>There were several stakeholders, that had various tasks that these designs had to center around their feedback and to take some of their feedback into the designs of the application.</p>
    <p className={styles.descriptionlargeblack}>This is related to various stakeholders of the company, on how to design the application. </p>
    
    <div className={styles.paddingleft}>
    <ul className={styles.listlargeblack}>
      <li className={styles.listitemlargeblack}>Users of the website</li>
      <li className={styles.listitemlargeblack}>Executives</li>
      <li className={styles.listitemlargeblack}>Creative Managers who are looking to hire Legacy Pictures</li>
    </ul>
    </div>

         </Row>
          }

      </>
    )}
  </Media>


  
  
  </Col>

</Row>















<Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }}>
    {matches => (
      <>

        {matches.small &&

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>Challenge:</p>
    <p className={styles.descriptionblack}>They had a website that needed to be updated. The website was a wordpress website that hasent been updated since the early 2000s. </p>
     
    <p className={styles.subtitlelargeblack}>Initial Scope :</p>

     
      <p className={styles.descriptionblack}>After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. </p>
      <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>start a redesign process for the website</li>
      <li className={styles.listitemblack}>converting it to new UI/UX Design trends.</li>
    </ul>
    </div>

    
<Image src={Img24} fluid className={styles.imgstyle} />


  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

  <p className={styles.subtitlelargeblack}>Challenge:</p>
    <p className={styles.descriptionblack}>They had a website that needed to be updated. The website was a wordpress website that hasent been updated since the early 2000s. </p>
     

    <p className={styles.subtitlelargeblack}>Initial Scope :</p>

    
     
      <p className={styles.descriptionblack}>After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. </p>
      <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>start a redesign process for the website</li>
      <li className={styles.listitemblack}>converting it to new UI/UX Design trends.</li>
    </ul>
    </div>

    
<Image src={Img24} fluid className={styles.imgstyle} />



 
  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


  <p className={styles.subtitlelargeblack}>Challenge:</p>
    <p className={styles.descriptionlargeblack}>They had a website that needed to be updated. The website was a wordpress website that hasent been updated since the early 2000s. </p>
     

    <p className={styles.subtitlelargeblack}>Initial Scope :</p>

  

      <p className={styles.descriptionlargeblack}>After several meetings with the client as well as with the lead developer of the project, and coworkers, we eventually figured out the scope of the project. </p>
      <div className={styles.paddingleft}>
    <ul className={styles.listblack}>
      <li className={styles.listitemblack}>start a redesign process for the website</li>
      <li className={styles.listitemblack}>converting it to new UI/UX Design trends.</li>
    </ul>
    </div>

    
<Image src={Img24} fluid className={styles.imgstyle} />


  </Row>
          }

      </>
    )}
  </Media>


</Container>
















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

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>User Flow</p>
    <p className={styles.descriptionblack}>The project is a simple redesign of the company’s website. There would be designs done related to the usability of the website. I was the sole UI/UX Designer for the whole thing.  </p>
    

    <p className={styles.subtitlelargeblack}>User Flow of Previous Website</p>

     
    <Image src={Img01} fluid className={styles.imgstyle} />
    <Image src={Img02} fluid className={styles.imgstyle} />

  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

  <p className={styles.subtitlelargeblack}>User Flow</p>
    <p className={styles.descriptionblack}>The project is a simple redesign of the company’s website. There would be designs done related to the usability of the website. I was the sole UI/UX Designer for the whole thing. </p>
     


    <p className={styles.subtitlelargeblack}>User Flow of Previous Website</p>

    <Image src={Img01} fluid className={styles.imgstyle} />
    <Image src={Img02} fluid className={styles.imgstyle} />
 
  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


  <p className={styles.subtitlelargeblack}>User Flow</p>
    <p className={styles.descriptionlargeblack}>The project is a simple redesign of the company’s website. There would be designs done related to the usability of the website. I was the sole UI/UX Designer for the whole thing. </p>
     

    <p className={styles.subtitlelargeblack}>User Flow of Previous Website</p>
    <Image src={Img01} fluid className={styles.imgstyle} />
    <Image src={Img02} fluid className={styles.imgstyle} />
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

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>Mindmapping entire company scope</p>
  <div className={styles.paddingleft}>
  <ul className={styles.listblack}>
      <li className={styles.listitemblack}>CEO of the company,</li>
      <li className={styles.listitemblack}>lead developer who would considering technical parts, etc.</li>
      <li className={styles.listitemblack}>Internal team </li>
      <li className={styles.listitemblack}>larger outside team. </li>
    </ul>
    </div>

    <p className={styles.subtitlelargeblack}>Card sorted a certain part of Legacy Pictures to ideate more about the company.</p>

     
    <Image src={Img03} fluid className={styles.imgstyle} />

  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

<p className={styles.subtitlelargeblack}>Mindmapping entire company scope</p>

<div className={styles.paddingleft}>
  <ul className={styles.listblack}>
      <li className={styles.listitemblack}>CEO of the company,</li>
      <li className={styles.listitemblack}>lead developer who would considering technical parts, etc.</li>
      <li className={styles.descriptionblack}>Internal team </li>
      <li className={styles.listitemblack}>larger outside team. </li>
    </ul>
    </div>

    <p className={styles.subtitlelargeblack}>Card sorted a certain part of Legacy Pictures to ideate more about the company.</p>

    <Image src={Img03} fluid className={styles.imgstyle} />
 
  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


<p className={styles.subtitlelargeblack}>Mindmapping entire company scope</p>

<div className={styles.paddingleft}>
  <ul className={styles.listlargeblack}>
      <li className={styles.listitemlargeblack}>CEO of the company,</li>
      <li className={styles.listitemlargeblack}>lead developer who would considering technical parts, etc.</li>
      <li className={styles.listitemlargeblack}>Internal team </li>
      <li className={styles.listitemlargeblack}>larger outside team. </li>
    </ul>
    </div>

    <p className={styles.subtitlelargeblack}>Card sorted a certain part of Legacy Pictures to ideate more about the company.</p>
    
    <Image src={Img03} fluid className={styles.imgstyle} />
  </Row>
          }

      </>
    )}
  </Media>

  
  
  </Col>

</Row>






{/* img without text */}
<Row>
  <Col sm>
    <Image src={Twodesktop} fluid className={styles.imgstyle} />

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

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>Understanding that there are multiple stakeholders</p>
  <p className={styles.descriptionblack}>As well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>

  <div className={styles.paddingleft}>
  <ul className={styles.listblack}>
      <li className={styles.listitemblack}>Increase Usability of Website</li>
      <li className={styles.listitemblack}>Improve Performance of Website</li>
      <li className={styles.listitemblack}>Better User Experience </li>
    </ul>
    </div>

     
    <Image src={Img04} fluid className={styles.imgstyle} />
    <Image src={Img05} fluid className={styles.imgstyle} />
    <Image src={Img06} fluid className={styles.imgstyle} />

  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>


<p className={styles.subtitlelargeblack}>Understanding that there are multiple stakeholders</p>
  <p className={styles.descriptionblack}>As well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>


  <div className={styles.paddingleft}>
  <ul className={styles.listblack}>
  <li className={styles.listitemblack}>Increase Usability of Website</li>
      <li className={styles.listitemblack}>Improve Performance of Website</li>
      <li className={styles.listitemblack}>Better User Experience </li>
    </ul>
    </div>

    <Image src={Img04} fluid className={styles.imgstyle} />
    <Image src={Img05} fluid className={styles.imgstyle} />
    <Image src={Img06} fluid className={styles.imgstyle} />
 
  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


<p className={styles.subtitlelargeblack}>Understanding that there are multiple stakeholders</p>
  <p className={styles.descriptionlargeblack}>As well as multiple personas of the users, did an initial test of the website itself to better understand the needs of the website itself, to be able to understand the needs of the stakeholder and the users.</p>


  <div className={styles.paddingleft}>
  <ul className={styles.listlargeblack}>
  <li className={styles.listitemblack}>Increase Usability of Website</li>
      <li className={styles.listitemlargeblack}>Improve Performance of Website</li>
      <li className={styles.listitemlargeblack}>Better User Experience </li>
    </ul>
  </div>

  <Image src={Img04} fluid className={styles.imgstyle} />
    <Image src={Img05} fluid className={styles.imgstyle} />
    <Image src={Img06} fluid className={styles.imgstyle} />


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

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>Mobile Responsive Web Design for Desktop and Mobile Devices</p>
  <p className={styles.descriptionblack}>The designs of the website would have to keep Mobile Responsive in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>

    <p className={styles.subtitlelargeblack}>Mind Mapping certain aspects centered around the company website.</p>

     
    <Image src={Img09} fluid className={styles.imgstyle} />

  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

<p className={styles.subtitlelargeblack}>Mobile Responsive Web Design for Desktop and Mobile Devices</p>
<p className={styles.descriptionblack}>The designs of the website would have to keep Mobile Responsive in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>

    <p className={styles.subtitlelargeblack}>Mind Mapping certain aspects centered around the company website.</p>

    <Image src={Img09} fluid className={styles.imgstyle} />
 
  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


<p className={styles.subtitlelargeblack}>Mobile Responsive Web Design for Desktop and Mobile Devices</p>
<p className={styles.descriptionlargeblack}>The designs of the website would have to keep Mobile Responsive in mind, while designing the screens for the desktop, finding the best pixel screen sizes for testing on. Also considering what kind of devices that most of the users will be visiting the website using.</p>

    <p className={styles.subtitlelargeblack}>Mind Mapping certain aspects centered around the company website.</p>
    
    <Image src={Img09} fluid className={styles.imgstyle} />
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

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>Showcase Website</p>
  <p className={styles.descriptionblack}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>

    <p className={styles.subtitlelargeblack}>Minding Mapping concepts about the demographic and types of devices used by those individuals</p>
    <p className={styles.descriptionblack}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.</p>

     
    <Image src={Img10} fluid className={styles.imgstyle} />

  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

<p className={styles.subtitlelargeblack}>Showcase Website</p>
<p className={styles.descriptionblack}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>

    <p className={styles.subtitlelargeblack}>Minding Mapping concepts about the demographic and types of devices used by those individuals</p>
    <p className={styles.descriptionblack}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.</p>

    <Image src={Img10} fluid className={styles.imgstyle} />
 
  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


<p className={styles.subtitlelargeblack}>Showcase Website</p>
<p className={styles.descriptionlargeblack}>Also getting a better idea of the needs of the website in showcasing the information and getting the information across on the site. Starting to get a better understanding of the demographic, which could be individuals in the videography industry.</p>

    <p className={styles.subtitlelargeblack}>Minding Mapping concepts about the demographic and types of devices used by those individuals</p>
    <p className={styles.descriptionlargeblack}>To understand what the needs of the company is, so being able to design it based on the previous design of the website.</p>

    <Image src={Img10} fluid className={styles.imgstyle} />
  </Row>
          }

      </>
    )}
  </Media>

  
  
  </Col>

</Row>








<div className={styles.spaceingwhite}></div>
<Image src={Img11} fluid className={styles.imgouterstyle} />
<div className={styles.spaceingblack}></div>


</Container>

<Container fluid className={styles.test3}>
<Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }}>
    {matches => (
      <>

        {matches.small &&

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargewhite}>Solution:</p>
    <p className={styles.descriptionwhite}>The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
     
    <p className={styles.subtitlelargewhite}>Redesign of Website</p>
      <p className={styles.descriptionwhite}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>

      <Image src={Img12} fluid className={styles.imgstyle} />

      <p className={styles.subtitlelargewhite}>Feedback from team</p>
      <p className={styles.descriptionwhite}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>


      <Image src={Img13} fluid className={styles.imgstyle} />
      <Image src={Img14} fluid className={styles.imgstyle} />
      <Image src={Img15} fluid className={styles.imgstyle} />

      
      <p className={styles.subtitlelargewhite}>UI Variant Iterations</p>
      <p className={styles.descriptionwhite}>After a few iterations of the design were started, there were various UIs that were discovered as well as understanding the full scope of what was needed in related to content.</p>


      <p className={styles.subtitlelargewhite}>User Interface Design</p>
      <p className={styles.descriptionwhite}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow:</p>

      <div className={styles.paddingleft}>
  <ul className={styles.listwhite}>
  <li className={styles.listitemwhite}>Usability testing for the User Interface Designs</li>
      <li className={styles.listitemwhite}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</li>
    </ul>
  </div>

  <Image src={Img16} fluid className={styles.imgstyle} />
  <Image src={Img17} fluid className={styles.imgstyle} />

        
  <p className={styles.subtitlelargewhite}>Adobe XD for User Interface Designs</p>
      <p className={styles.descriptionwhite}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>

      <Image src={Img18} fluid className={styles.imgstyle} />

      
  <p className={styles.subtitlelargewhite}>Adobe XD for User Interface Designs</p>
      <p className={styles.descriptionwhite}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>



  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

  <p className={styles.subtitlelargewhite}>Solution:</p>
    <p className={styles.descriptionwhite}>The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
     



    <p className={styles.subtitlelargewhite}>Redesign of Website</p>
      <p className={styles.descriptionwhite}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>

      <Image src={Img12} fluid className={styles.imgstyle} />

      
      <p className={styles.subtitlelargewhite}>Feedback from team</p>
      <p className={styles.descriptionwhite}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>

      <Image src={Img13} fluid className={styles.imgstyle} />
      <Image src={Img14} fluid className={styles.imgstyle} />
      <Image src={Img15} fluid className={styles.imgstyle} />

      <p className={styles.subtitlelargewhite}>UI Variant Iterations</p>
      <p className={styles.descriptionwhite}>After a few iterations of the design were started, there were various UIs that were discovered as well as understanding the full scope of what was needed in related to content.</p>

      <p className={styles.subtitlelargewhite}>User Interface Design</p>
      <p className={styles.descriptionwhite}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow:</p>

      <div className={styles.paddingleft}>
  <ul className={styles.listwhite}>
  <li className={styles.listitemwhite}>just understanding the basic layout of the website, for example the home page, etc. </li>
      <li className={styles.listitemwhite}>Then based on the original design, a new iteration of the design can be done.</li>
    </ul>
  </div>

  <Image src={Img16} fluid className={styles.imgstyle} />
  <Image src={Img17} fluid className={styles.imgstyle} />

        
  <p className={styles.subtitlelargewhite}>Adobe XD for User Interface Designs</p>
      <p className={styles.descriptionwhite}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>

      <Image src={Img18} fluid className={styles.imgstyle} />

      
  <p className={styles.subtitlelargewhite}>Usability testing for the User Interface Designs</p>
      <p className={styles.descriptionwhite}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>



  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>


  <p className={styles.subtitlelargewhite}>Solution:</p>
    <p className={styles.descriptionlargewhite}>The solution that they were looking was a website that was well designed to be ready to be used to showcase to potential clients as well as a platform to generate new leads. After initially working on first iterations of the design, created different variants of UI elements Additionally did Usability testing using heat maps to showcase, where the user has selected.</p>
     
    <p className={styles.subtitlelargewhite}>Redesign of Website</p>
    <p className={styles.descriptionlargewhite}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>

    <Image src={Img12} fluid className={styles.imgstyle} />

    
    <p className={styles.subtitlelargewhite}>Feedback from team</p>
      <p className={styles.descriptionlargewhite}>Created designs based on what the redesigns of the website needed. There were certain requirements that were still uncertain for example if there even needed to be a redesign.</p>

      <Image src={Img13} fluid className={styles.imgstyle} />
      <Image src={Img14} fluid className={styles.imgstyle} />
      <Image src={Img15} fluid className={styles.imgstyle} />

      <p className={styles.subtitlelargewhite}>UI Variant Iterations</p>
      <p className={styles.descriptionlargewhite}>After a few iterations of the design were started, there were various UIs that were discovered as well as understanding the full scope of what was needed in related to content.</p>

      <p className={styles.subtitlelargewhite}>User Interface Design</p>
      <p className={styles.descriptionlargewhite}>The designs were based on several types of companies, such as Apple.com, actually the font was based off of the Apple font which is SF Pro. From the User Flow:</p>

      <div className={styles.paddingleft}>
  <ul className={styles.listlargewhite}>
  <li className={styles.listitemlargewhite}>just understanding the basic layout of the website, for example the home page, etc. </li>
      <li className={styles.listitemlargewhite}>Then based on the original design, a new iteration of the design can be done.</li>
    </ul>
  </div>

  <Image src={Img16} fluid className={styles.imgstyle} />
  <Image src={Img17} fluid className={styles.imgstyle} />

        
  <p className={styles.subtitlelargewhite}>Adobe XD for User Interface Designs</p>
      <p className={styles.descriptionwhite}>Initially starting the User Interface Designs with Adobe XD, and starting prototyping using Adobe XD’s prototyping functionality. Able to redesign the original designs of the website.</p>

      <Image src={Img18} fluid className={styles.imgstyle} />

      
  <p className={styles.subtitlelargewhite}>Usability testing for the User Interface Designs</p>
      <p className={styles.descriptionwhite}>Designed several variations of the User Interface Designs, and User Tested various methods for example a simple questionnaire regarding the User Interface, as well as a heat map of where users click on the User Interface.</p>



  </Row>
          }

      </>
    )}
  </Media>







  <Container fluid className={styles.test1}>

<div className={styles.spaceingblack}></div>
<Image src={desktopImg} fluid className={styles.imgouterstyle} />
<div className={styles.spaceingwhite}></div>


</Container>

<Container fluid className={styles.test1}>
  <Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }}>
    {matches => (
      <>

        {matches.small &&

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>Results:</p>
  <p className={styles.subtitlelargeblack}>Redesign of the Web Application User Interface</p>
    <p className={styles.descriptionblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
     
    <Image src={Img19} fluid className={styles.imgstyle} />

    <p className={styles.subtitlelargeblack}>Adobe Creative Suite </p>
      <p className={styles.descriptionblack}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>

      <Image src={Img20} fluid className={styles.imgstyle} />

      <p className={styles.subtitlelargeblack}>Usability testing with Usabilityhub.com</p>
      <p className={styles.descriptionblack}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>


      <Image src={Img21} fluid className={styles.imgstyle} />

      
      <p className={styles.subtitlelargeblack}>Starting the Rapid Prototyping</p>
      <p className={styles.descriptionblack}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>


      <p className={styles.subtitlelargeblack}>Getting Tests from the Users</p>
      <p className={styles.descriptionblack}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>

  <p className={styles.subtitlelargeblack}>Heat Map Testing</p>
      <p className={styles.descriptionblack}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>

      <Image src={Img22} fluid className={styles.imgstyle} />



  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

<p className={styles.subtitlelargeblack}>Results:</p>
  <p className={styles.subtitlelargeblack}>Redesign of the Web Application User Interface</p>
    <p className={styles.descriptionblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
     
    <Image src={Img19} fluid className={styles.imgstyle} />

    <p className={styles.subtitlelargeblack}>Adobe Creative Suite </p>
      <p className={styles.descriptionblack}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>

      <Image src={Img20} fluid className={styles.imgstyle} />

      <p className={styles.subtitlelargeblack}>Usability testing with Usabilityhub.com</p>
      <p className={styles.descriptionblack}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>


      <Image src={Img21} fluid className={styles.imgstyle} />

      
      <p className={styles.subtitlelargeblack}>Starting the Rapid Prototyping</p>
      <p className={styles.descriptionblack}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>


      <p className={styles.subtitlelargeblack}>Getting Tests from the Users</p>
      <p className={styles.descriptionblack}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>

  <p className={styles.subtitlelargeblack}>Heat Map Testing</p>
      <p className={styles.descriptionblack}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>

      <Image src={Img22} fluid className={styles.imgstyle} />




  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>

<p className={styles.subtitlelargeblack}>Results:</p>
  <p className={styles.subtitlelargeblack}>Redesign of the Web Application User Interface</p>
    <p className={styles.descriptionlargeblack}>Redesigns of the UI were created and sent as deliverables. The deliverables weres Mobile and Desktop versions of the redesign of the website. Also there was usability testing done.</p>
     
    <Image src={Img19} fluid className={styles.imgstyle} />

    <p className={styles.subtitlelargeblack}>Adobe Creative Suite </p>
      <p className={styles.descriptionlargeblack}>Starting the User Interface designs on Adobe XD were started. The user interface screens for Legacy Films was completed on Adobe XD, and the prototypes were completed using Adobe XD. The initial designs were reiterated and there were serval variants to the UI design elements that were offered.</p>

      <Image src={Img20} fluid className={styles.imgstyle} />

      <p className={styles.subtitlelargeblack}>Usability testing with Usabilityhub.com</p>
      <p className={styles.descriptionlargeblack}>Getting the usability testing done for the various UI Elements variants, as well as the heat map test were useful in understanding the user and what they are seeing on the interface.</p>


      <Image src={Img21} fluid className={styles.imgstyle} />

      
      <p className={styles.subtitlelargeblack}>Starting the Rapid Prototyping</p>
      <p className={styles.descriptionlargeblack}>The prototype was built using Adobe XD. Using Adobe XD, the prototype of both mobile and desktop versions were done, and were tested by the stakeholders.</p>


      <p className={styles.subtitlelargeblack}>Getting Tests from the Users</p>
      <p className={styles.descriptionlargeblack}>There was a survey, that gained insight on various teammember’s thoughts and feelings about the website. Using the survey was able to get a better understanding of the stakeholder’s emotions.</p>

  <p className={styles.subtitlelargeblack}>Heat Map Testing</p>
      <p className={styles.descriptionlargeblack}>Also created tests related to Usability. Several tests related to various UIs, and generating a heat map based on where the users click on the elements on the interface.</p>

      <Image src={Img22} fluid className={styles.imgstyle} />



  </Row>
          }

      </>
    )}
  </Media>

  </Container>



  <Container fluid className={styles.test1}>

<div className={styles.spaceingwhite}></div>
<Image src={Img23} fluid className={styles.imgouterstyle} />
<div className={styles.spaceingwhite}></div>


</Container>


  <Container fluid className={styles.test4}>

  <Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }}>
    {matches => (
      <>

        {matches.small &&

<Row className={styles.rowsmall}>



  <p className={styles.subtitlelargeblack}>Reflection:</p>
  <p className={styles.subtitlelargeblack}>More Time to explore UI and UX</p>
    <p className={styles.descriptionblack}>Wish had more time to do more user testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates and it was designed over a period of time.</p>
     
    <p className={styles.subtitlelargeblack}>Completion of the deliverables  </p>
      <p className={styles.descriptionblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>


  </Row>
          }

        {matches.medium &&
          <Row className={styles.rowmedium}>

<p className={styles.subtitlelargeblack}>Reflection:</p>
  <p className={styles.subtitlelargeblack}>More Time to explore UI and UX</p>
    <p className={styles.descriptionlargeblack}>Wish had more time to do more user testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates and it was designed over a period of time.</p>
     
    <p className={styles.subtitlelargeblack}>Completion of the deliverables  </p>
      <p className={styles.descriptionlargeblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>




  </Row>
          }

        {matches.large &&
          <Row className={styles.rowlarge}>

<p className={styles.subtitlelargeblack}>Reflection:</p>
  <p className={styles.subtitlelargeblack}>More Time to explore UI and UX</p>
    <p className={styles.descriptionlargeblack}>Wish had more time to do more user testing as well as interviews to b e able to ideate a better digital solution. The User Interface was designed based off of various templates and it was designed over a period of time.</p>
     
    <p className={styles.subtitlelargeblack}>Completion of the deliverables  </p>
      <p className={styles.descriptionlargeblack}>Getting the deliverables to the client was the most difficult part of the application. And getting the completion of the design assets with the various stakeholders who all have different priorities made the project short lived, but the redesigns of the application were completed and a contract was signed between myself and Legacy Pictures.</p>



  </Row>
          }

      </>
    )}
  </Media>

</Container>



    </Container>


    <Jumbotron fluid className={styles.bottomNav}>
      <Container>
        <Row className={styles.bottomNavColor}>
        <Col sm={6} >
            <p className={styles.titleblack}>Go Home</p>
            <p className={styles.description}>Go Back Home</p>
            <Link to={'/'}>
              <p className={styles.description}> Go Home </p>
            </Link>
          </Col>
          <Col sm={6} >
            <p className={styles.titleblack}>Art Rendezvous</p>
            <p className={styles.description}>International Videography Website Redesign</p>
            <Link to={'/artrendezvous'}>
              <p className={styles.description}> View Next </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  </>
  /* End of JSX Fragment*/
)