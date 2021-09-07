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
import Gist from 'react-gist';

import Img00 from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Img01 from '../../assets/img/sanchezcoffeeco/1-01.jpg';
import Img02 from '../../assets/img/sanchezcoffeeco/1-02.jpg';
import Img03 from '../../assets/img/sanchezcoffeeco/1-03.jpg';
import Img04 from '../../assets/img/sanchezcoffeeco/1-04.jpg';
import Img05 from '../../assets/img/sanchezcoffeeco/1-05.jpg';
import Img06 from '../../assets/img/sanchezcoffeeco/1-06.jpg';
import Img07 from '../../assets/img/sanchezcoffeeco/1-07.jpg';
import Img08 from '../../assets/img/sanchezcoffeeco/1-08.jpg';

import customer_location from '../../assets/img/sanchezcoffeeco/customer_location.PNG';
import topcustromerbysalers from '../../assets/img/sanchezcoffeeco/topcustromerbysalers.PNG';
import volumne from '../../assets/img/sanchezcoffeeco/volumne.PNG';
import transaction from '../../assets/img/sanchezcoffeeco/transaction.PNG';
import ordersize from '../../assets/img/sanchezcoffeeco/ordersize.PNG';


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

//import Banner from '../../assets/vids/compress_vid5.mp4';

import styles from '../css/style.module.css';
import '../css/style.css';
import TestImg0 from '../../assets/img/uguru/hsl_3.jpg';
import TestImg1 from '../../assets/img/uguru/hsl-biz_3.jpg';
import TestImg2 from '../../assets/img/uguru/hsl-biz_4.jpg';

import Media from 'react-media';


export const Sanchezcoffeeco = () => (
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

<p className={styles.titleblack}>Sanchez Coffee Co.</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: Los Angeles E-commerce Company</p>
<p className={styles.descriptionblack}>Project Date: January 2018 - January 2019</p>
<p className={styles.descriptionblack}>Role: Web Designer/Developer</p>
<p className={styles.descriptionblack}>Location: Los Angeles, CA</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>



<p className={styles.titleblack}>Introduction:</p>

<p className={styles.description}>
Sanchez Coffee company was a custom branded coffee company located in Los Angelos, CA. They provided a good product via web platform.</p>

<p className={styles.description}>Sanchez Coffee Company was an ecommerce company that was selling custom branded coffee in Los Angeles. I was hired in as a remote web designer and web developer for the wordpress ecommerce platform.</p>


</Container>

</Col>

</Row>

  }

{matches.medium &&

<Row className={styles.rowmedium}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titleblack}>Sanchez Coffee Co.</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>Case Study: Los Angeles E-commerce Company</p>
<p className={styles.descriptionblack}>Project Date: January 2018 - January 2019</p>
<p className={styles.descriptionblack}>Role: Web Designer/Developer</p>
<p className={styles.descriptionblack}>Location: Los Angeles, CA</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.description}>
Sanchez Coffee company was a custom branded coffee company located in Los Angelos, CA. They provided a good product via web platform.</p>

<p className={styles.description}>Sanchez Coffee Company was an ecommerce company that was selling custom branded coffee in Los Angeles. I was hired in as a remote web designer and web developer for the wordpress ecommerce platform.</p>


</Container>

</Col>

</Row>
  }

{matches.large &&
<Row className={styles.rowlarge}>

<Col sm className={styles.fonttest}>
<Container className={styles.fonttest}>

<p className={styles.titlelargeblack}>Sanchez Coffee Co.</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>Case Study: Los Angeles E-commerce Company</p>
<p className={styles.descriptionlargeblack}>Project Date: January 2018 - January 2019</p>
<p className={styles.descriptionlargeblack}>Role: Web Designer/Developer</p>
<p className={styles.descriptionlargeblack}>Location: Los Angeles, CA</p>


</Container>
</Col>

<Col sm>

<Container className={styles.fonttest}>




<p className={styles.titlelargeblack}>Introduction:</p>

<p className={styles.descriptionlargeblack}>
Sanchez Coffee company was a custom branded coffee company located in Los Angelos, CA. They provided a good product via web platform.</p>

<p className={styles.descriptionlargeblack}>Sanchez Coffee Company was an ecommerce company that was selling custom branded coffee in Los Angeles. I was hired in as a remote web designer and web developer for the wordpress ecommerce platform.</p>

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
 <p className={styles.descriptionblack}>The people that works on SCC was a interesting group of people. Mainly the main part of the company we never meet, although we know that they were there because there probably was some kind of warehouse, as well as people who worked in the warehouse that shipped the product.</p>
 <div className={styles.spaceingwhite}></div>
   <p className={styles.descriptionblack}>The partner who controlled this part of it we didnt talk to much. Mainly we worked on the side of the company that was in charge of the design and development of the payment platform.</p>
   <p className={styles.descriptionblack}>So for example after build up the initial platform using wordpress, we put in the payment platform and the payment gateway, additionally we were incharge of the merchant account. The world we lived in was one where we worked mainly remotely, we never really got to meet and it was interesting to talk to people over the phone to collaborate and make it happen.</p>
   
   <p className={styles.descriptionblack}>This web application was designed and developed for pre existing company selling coffee over the internet. They moved over the site and then they changed payment processing, as well as doing the user interface designs and development of those designs using WordPress, and using HTML/CSS.</p>
   <p className={styles.descriptionblack}>The CEO and the broker of the agreement were all individuals that were involved with the project, and these were stakeholders who had influence on the design of the User Interface of the Application.</p>
   <p className={styles.descriptionblack}>Additionally there was another demographic of people who were the actual users of the website. Mainly these people would be using the website to place an order for the specialized coffee. So we can create a couple of personas that would represent what these coffee users are. But we need to understand the needs of the user.</p>
  
 </Row>
       }

     {matches.medium &&
<Row className={styles.rowmedium}>


<p className={styles.titleblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionblack}>The people that works on SCC was a interesting group of people. Mainly the main part of the company we never meet, although we know that they were there because there probably was some kind of warehouse, as well as people who worked in the warehouse that shipped the product.</p>
 <div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionblack}>The partner who controlled this part of it we didnt talk to much. Mainly we worked on the side of the company that was in charge of the design and development of the payment platform.</p>
   <p className={styles.descriptionblack}>So for example after build up the initial platform using wordpress, we put in the payment platform and the payment gateway, additionally we were incharge of the merchant account. The world we lived in was one where we worked mainly remotely, we never really got to meet and it was interesting to talk to people over the phone to collaborate and make it happen.</p>
   
   <p className={styles.descriptionblack}>This web application was designed and developed for pre existing company selling coffee over the internet. They moved over the site and then they changed payment processing, as well as doing the user interface designs and development of those designs using WordPress, and using HTML/CSS.</p>
   <p className={styles.descriptionblack}>The CEO and the broker of the agreement were all individuals that were involved with the project, and these were stakeholders who had influence on the design of the User Interface of the Application.</p>
   <p className={styles.descriptionblack}>Additionally there was another demographic of people who were the actual users of the website. Mainly these people would be using the website to place an order for the specialized coffee. So we can create a couple of personas that would represent what these coffee users are. But we need to understand the needs of the user.</p>
  

</Row>
       }

     {matches.large &&
   <Row className={styles.rowlarge}>


<p className={styles.titlelargeblack}>Building Empathy</p>
<div className={styles.spaceingwhite}></div>
<p className={styles.descriptionlargeblack}>The people that works on SCC was a interesting group of people. Mainly the main part of the company we never meet, although we know that they were there because there probably was some kind of warehouse, as well as people who worked in the warehouse that shipped the product.</p>
 <div className={styles.spaceingwhite}></div>
 <p className={styles.descriptionlargeblack}>The partner who controlled this part of it we didnt talk to much. Mainly we worked on the side of the company that was in charge of the design and development of the payment platform.</p>
   <p className={styles.descriptionlargeblack}>So for example after build up the initial platform using wordpress, we put in the payment platform and the payment gateway, additionally we were incharge of the merchant account. The world we lived in was one where we worked mainly remotely, we never really got to meet and it was interesting to talk to people over the phone to collaborate and make it happen.</p>
   
   <p className={styles.descriptionlargeblack}>This web application was designed and developed for pre existing company selling coffee over the internet. They moved over the site and then they changed payment processing, as well as doing the user interface designs and development of those designs using WordPress, and using HTML/CSS.</p>
   <p className={styles.descriptionlargeblack}>The CEO and the broker of the agreement were all individuals that were involved with the project, and these were stakeholders who had influence on the design of the User Interface of the Application.</p>
   <p className={styles.descriptionlargeblack}>Additionally there was another demographic of people who were the actual users of the website. Mainly these people would be using the website to place an order for the specialized coffee. So we can create a couple of personas that would represent what these coffee users are. But we need to understand the needs of the user.</p>
  
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
 <p className={styles.descriptionblack}>The pervious web based ecommerce platform for displaying products and accepting payments needed a new platform. So I designed and developed the website with WordPress CMS, Wocommerce and Custom CSS code, as well as integrating the Payment Gateway.As well as creating a simple product branding such as the logo for the company. Additionally I was in charge of maintaining relationships with the payment processor and merchant accounts.</p>
   <p className={styles.descriptionblack}>Sanchez Coffee Company needed a ecommerce platform and they need to start sending product out there. They needed sales online and they gave us the responsibility of controlling their entire payment infrastructure online. We were working with payment companies such as PayPal, Stripe, merchant accounts etc.</p>
   <p className={styles.descriptionblack}>But additionally I was designing the products and the website. Then I was developing the website with wordpress. I created the website using 1and1 for hosting services. After the wordpress website was hosted, I implemented the various plugins that would be used to accept payments.</p>
   <p className={styles.descriptionblack}>Then I designed the user Interface using CSS. I was the admin, user Interface web design and wordpress developer.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Challenge:</p>
 <p className={styles.descriptionblack}>The pervious web based ecommerce platform for displaying products and accepting payments needed a new platform. So I designed and developed the website with WordPress CMS, Wocommerce and Custom CSS code, as well as integrating the Payment Gateway.As well as creating a simple product branding such as the logo for the company. Additionally I was in charge of maintaining relationships with the payment processor and merchant accounts.</p>
   <p className={styles.descriptionblack}>Sanchez Coffee Company needed a ecommerce platform and they need to start sending product out there. They needed sales online and they gave us the responsibility of controlling their entire payment infrastructure online. We were working with payment companies such as PayPal, Stripe, merchant accounts etc.</p>
   <p className={styles.descriptionblack}>But additionally I was designing the products and the website. Then I was developing the website with wordpress. I created the website using 1and1 for hosting services. After the wordpress website was hosted, I implemented the various plugins that would be used to accept payments.</p>
   <p className={styles.descriptionblack}>Then I designed the user Interface using CSS. I was the admin, user Interface web design and wordpress developer.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Challenge:</p>
<p className={styles.descriptionlargeblack}>The pervious web based ecommerce platform for displaying products and accepting payments needed a new platform. So I designed and developed the website with WordPress CMS, Wocommerce and Custom CSS code, as well as integrating the Payment Gateway.As well as creating a simple product branding such as the logo for the company. Additionally I was in charge of maintaining relationships with the payment processor and merchant accounts.</p>
   <p className={styles.descriptionlargeblack}>Sanchez Coffee Company needed a ecommerce platform and they need to start sending product out there. They needed sales online and they gave us the responsibility of controlling their entire payment infrastructure online. We were working with payment companies such as PayPal, Stripe, merchant accounts etc.</p>
   <p className={styles.descriptionlargeblack}>But additionally I was designing the products and the website. Then I was developing the website with wordpress. I created the website using 1and1 for hosting services. After the wordpress website was hosted, I implemented the various plugins that would be used to accept payments.</p>
   <p className={styles.descriptionlargeblack}>Then I designed the user Interface using CSS. I was the admin, user Interface web design and wordpress developer.</p>

     
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
 <p className={styles.descriptionblack}>During this phase we began to understand the main functionality of the website should be providing the most streamlined methods. There were various parts of the website that needed to be designed based on key features of the web application.</p>
 <p className={styles.descriptionblack}>Many of these features were based on the needs of the stakeholders rather than the users. But at the end of the day, the users were satisfied with their orders.</p>
 <p className={styles.descriptionblack}>There were parts of the packaging of the coffee, as well as the branding of the coffee, which was all related to a backend of the site which had access to all of the parts of the site that was relevant to receiving payments.</p>
 <p className={styles.descriptionblack}>So the application would have to have had access to PayPal Manager, Stripe, Authorize.net, Square, and other Payment Processors, and Payment Gateways.</p>

      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>IDEATE:</p>
 <p className={styles.descriptionblack}>During this phase we began to understand the main functionality of the website should be providing the most streamlined methods. There were various parts of the website that needed to be designed based on key features of the web application.</p>
 <p className={styles.descriptionblack}>Many of these features were based on the needs of the stakeholders rather than the users. But at the end of the day, the users were satisfied with their orders.</p>
 <p className={styles.descriptionblack}>There were parts of the packaging of the coffee, as well as the branding of the coffee, which was all related to a backend of the site which had access to all of the parts of the site that was relevant to receiving payments.</p>
 <p className={styles.descriptionblack}>So the application would have to have had access to PayPal Manager, Stripe, Authorize.net, Square, and other Payment Processors, and Payment Gateways.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>IDEATE:</p>
<p className={styles.descriptionlargeblack}>During this phase we began to understand the main functionality of the website should be providing the most streamlined methods. There were various parts of the website that needed to be designed based on key features of the web application.</p>
 <p className={styles.descriptionlargeblack}>Many of these features were based on the needs of the stakeholders rather than the users. But at the end of the day, the users were satisfied with their orders.</p>
 <p className={styles.descriptionlargeblack}>There were parts of the packaging of the coffee, as well as the branding of the coffee, which was all related to a backend of the site which had access to all of the parts of the site that was relevant to receiving payments.</p>
 <p className={styles.descriptionlargeblack}>So the application would have to have had access to PayPal Manager, Stripe, Authorize.net, Square, and other Payment Processors, and Payment Gateways.</p>

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
      Using Wordpress CMS, I was able to create the Ecommerce Platform. As well as being able to design it using the WordPress builder plugin and integrating various CSS code Snipets.</p>
      <p className={styles.descriptionblack}>
      I worked with an remote team, there was a warehouse where the product was being shipped and a team that shipped out the product. Then there was a partner who collaborated with our agent who relayed the instructions to the design and development team who was incharge of the payment infrastructure such as payment gateway, payment processors, merchant accounts, as well as the designs of the logo, products, website design, and wordpress hosting and wordpress development. There were a few people but mainly I was incharge of the website design and development.</p>
      <p className={styles.descriptionblack}>There were alot of dead lines that needed to be accomplished, andwhat we needed to do was create a payment platform as soon as possible that would be able to be sent to PayPay the payment gateway to be able to accept the sales.</p>
      <p className={styles.descriptionblack}>So mainly the task was the design and develop a new site from scratch based on the previous site. I was in charge of doing this and I was able to successfully create the website with a nice minimalist design and implementing this design using CSS onto the wordpress site. Additionally i installed all the plugins for the site.</p>
     
      <p className={styles.descriptionblack}>
      How did I start with the design? First I created some user journeys or I created some personas for people who would use this platform.</p>
      <p className={styles.descriptionblack}>It was difficult because I would need to work remotely and it became more and more difficult to communicate correctly with my coworkers. Additionally as the sales began coming in it became more difficult to build trust between people whom never really worked together before.</p>
      <p className={styles.descriptionblack}>What kind of people would be able to use this platform and who wuld want to use this platform. I tried my best to maintain this website, while designing the website.</p>
      <p className={styles.descriptionblack}>I created a journey for the user, for example, they would go from the home page, view the products and then start making a purchase. We wanted to make the shopping experience as streamlined as possible.</p>
      <p className={styles.descriptionblack}>What happened is that the whole project feel through, the team wasent able to figure out how to work together and the trust was broken and the website became decrepitc.</p>
   
   </Container>
             }

           {matches.medium &&
     <Container>
                         <p className={styles.titleblack}>Solution:</p>
                         <p className={styles.descriptionblack}>
      Using Wordpress CMS, I was able to create the Ecommerce Platform. As well as being able to design it using the WordPress builder plugin and integrating various CSS code Snipets.</p>
      <p className={styles.descriptionblack}>
      I worked with an remote team, there was a warehouse where the product was being shipped and a team that shipped out the product. Then there was a partner who collaborated with our agent who relayed the instructions to the design and development team who was incharge of the payment infrastructure such as payment gateway, payment processors, merchant accounts, as well as the designs of the logo, products, website design, and wordpress hosting and wordpress development. There were a few people but mainly I was incharge of the website design and development.</p>
      <p className={styles.descriptionblack}>There were alot of dead lines that needed to be accomplished, andwhat we needed to do was create a payment platform as soon as possible that would be able to be sent to PayPay the payment gateway to be able to accept the sales.</p>
      <p className={styles.descriptionblack}>So mainly the task was the design and develop a new site from scratch based on the previous site. I was in charge of doing this and I was able to successfully create the website with a nice minimalist design and implementing this design using CSS onto the wordpress site. Additionally i installed all the plugins for the site.</p>
     
      <p className={styles.descriptionblack}>
      How did I start with the design? First I created some user journeys or I created some personas for people who would use this platform.</p>
      <p className={styles.descriptionblack}>It was difficult because I would need to work remotely and it became more and more difficult to communicate correctly with my coworkers. Additionally as the sales began coming in it became more difficult to build trust between people whom never really worked together before.</p>
      <p className={styles.descriptionblack}>What kind of people would be able to use this platform and who wuld want to use this platform. I tried my best to maintain this website, while designing the website.</p>
      <p className={styles.descriptionblack}>I created a journey for the user, for example, they would go from the home page, view the products and then start making a purchase. We wanted to make the shopping experience as streamlined as possible.</p>
      <p className={styles.descriptionblack}>What happened is that the whole project feel through, the team wasent able to figure out how to work together and the trust was broken and the website became decrepitc.</p>
   
       </Container>
             }

           {matches.large &&
         <Container>
                         <p className={styles.titlelargeblack}>Solution:</p>
                         <p className={styles.descriptionlargeblack}>
      Using Wordpress CMS, I was able to create the Ecommerce Platform. As well as being able to design it using the WordPress builder plugin and integrating various CSS code Snipets.</p>
      <p className={styles.descriptionlargeblack}>
      I worked with an remote team, there was a warehouse where the product was being shipped and a team that shipped out the product. Then there was a partner who collaborated with our agent who relayed the instructions to the design and development team who was incharge of the payment infrastructure such as payment gateway, payment processors, merchant accounts, as well as the designs of the logo, products, website design, and wordpress hosting and wordpress development. There were a few people but mainly I was incharge of the website design and development.</p>
      <p className={styles.descriptionlargeblack}>There were alot of dead lines that needed to be accomplished, andwhat we needed to do was create a payment platform as soon as possible that would be able to be sent to PayPay the payment gateway to be able to accept the sales.</p>
      <p className={styles.descriptionlargeblack}>So mainly the task was the design and develop a new site from scratch based on the previous site. I was in charge of doing this and I was able to successfully create the website with a nice minimalist design and implementing this design using CSS onto the wordpress site. Additionally i installed all the plugins for the site.</p>
     
      <p className={styles.descriptionlargeblack}>
      How did I start with the design? First I created some user journeys or I created some personas for people who would use this platform.</p>
      <p className={styles.descriptionlargeblack}>It was difficult because I would need to work remotely and it became more and more difficult to communicate correctly with my coworkers. Additionally as the sales began coming in it became more difficult to build trust between people whom never really worked together before.</p>
      <p className={styles.descriptionlargeblack}>What kind of people would be able to use this platform and who wuld want to use this platform. I tried my best to maintain this website, while designing the website.</p>
      <p className={styles.descriptionlargeblack}>I created a journey for the user, for example, they would go from the home page, view the products and then start making a purchase. We wanted to make the shopping experience as streamlined as possible.</p>
      <p className={styles.descriptionlargeblack}>What happened is that the whole project feel through, the team wasent able to figure out how to work together and the trust was broken and the website became decrepitc.</p>
   
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
 <p className={styles.descriptionblack}>The designs of the application were done by working with the stakeholders to understand what kind of application was needed as well as what would be the easiest way of allowing the users to make payments on the e-commerce site.</p>
   <p className={styles.descriptionblack}>We can create paper prototypes of various UI Elements, etc. Or what kind of prototyping was done, before hand, or was it more of a MVP?</p>
   <p className={styles.descriptionblack}>The sketches of the application could be done based on the previous website. There was a previous website that the coffee website, was using previous designs.</p>
   <p className={styles.descriptionblack}>So with this new information the website was created by using a user flow. To break apart the parts of the website that was necessary to be used, to create a new website.</p>
   <p className={styles.descriptionblack}>Also understanding more about the various parts of the product categories, such as if they were selling coffee, in what weight, as well as the packing that would be available to be purchased on the web application.</p>
   <p className={styles.descriptionblack}>Also if there were equipment for sale on the website, then making sure to have the correct filters, as well to being able to use the website it was built with WordPress.</p>


</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>DESIGN:</p>
 <p className={styles.descriptionblack}>The designs of the application were done by working with the stakeholders to understand what kind of application was needed as well as what would be the easiest way of allowing the users to make payments on the e-commerce site.</p>
   <p className={styles.descriptionblack}>We can create paper prototypes of various UI Elements, etc. Or what kind of prototyping was done, before hand, or was it more of a MVP?</p>
   <p className={styles.descriptionblack}>The sketches of the application could be done based on the previous website. There was a previous website that the coffee website, was using previous designs.</p>
   <p className={styles.descriptionblack}>So with this new information the website was created by using a user flow. To break apart the parts of the website that was necessary to be used, to create a new website.</p>
   <p className={styles.descriptionblack}>Also understanding more about the various parts of the product categories, such as if they were selling coffee, in what weight, as well as the packing that would be available to be purchased on the web application.</p>
   <p className={styles.descriptionblack}>Also if there were equipment for sale on the website, then making sure to have the correct filters, as well to being able to use the website it was built with WordPress.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>DESIGN:</p>
<p className={styles.descriptionlargeblack}>The designs of the application were done by working with the stakeholders to understand what kind of application was needed as well as what would be the easiest way of allowing the users to make payments on the e-commerce site.</p>
   <p className={styles.descriptionlargeblack}>We can create paper prototypes of various UI Elements, etc. Or what kind of prototyping was done, before hand, or was it more of a MVP?</p>
   <p className={styles.descriptionlargeblack}>The sketches of the application could be done based on the previous website. There was a previous website that the coffee website, was using previous designs.</p>
   <p className={styles.descriptionlargeblack}>So with this new information the website was created by using a user flow. To break apart the parts of the website that was necessary to be used, to create a new website.</p>
   <p className={styles.descriptionlargeblack}>Also understanding more about the various parts of the product categories, such as if they were selling coffee, in what weight, as well as the packing that would be available to be purchased on the web application.</p>
   <p className={styles.descriptionlargeblack}>Also if there were equipment for sale on the website, then making sure to have the correct filters, as well to being able to use the website it was built with WordPress.</p>

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
 <p className={styles.descriptionblack}>The web platform functioned successfully and we were able to get some success with around 100k in payments in a 6-9month period. As well as the client being happy with the website’s clean minimualistic design.</p>
 <p className={styles.descriptionblack}>We were able to process around 100K USD in transaction and a few thousand sales before the web platform was taken down. During this period my job was to maintain this flow of sales on the online platform.</p>
 <p className={styles.descriptionblack}>After this experience I became better at working remotely with teams, and understanding that I would have to be able to communicate more efficiently. Additionally because I designed the website and then implemented those designs with CSS, I was able to use some coding in a production environment which was nice.</p>
 <p className={styles.descriptionblack}>Additionally being able to start the hosting of the website, the implementation of the wordpress site, and then the maintenance of the website was a responsibility that was difficult for me to handle.</p>
 <p className={styles.descriptionblack}>There were several parts of the interface that were designed and then developed that allowed the user to navigate making a purchase. The main parts were the Checkout and the Cart screens, as well as the product screens being relevant.</p>
 <p className={styles.descriptionblack}>Additionally there was around 100K in transactions over 1000 transactions that were made using PayPal Manager, etc.</p>
     


 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>The quickest way to design this application as in to prototype it to MVP, or make an MVP and test it.  Many versions of these payment platforms were created, and there were many different product lines.</p>
 <p className={styles.descriptionblack}>The main focus was the E-Commerce functionality aspect, as well as being able to take payments over the internet, if the payment processors were connected or not.</p>
 <p className={styles.descriptionblack}>But the designs of the website was done with HTML/CSS into the WordPress Dashboard. Using this method, as well as creating the branding of the website was done using Adobe Illustrator.</p>
        
 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>After the prototype was completed and ready to be used, the website was used by users, and they were able to process around 100K transactions, over a 1000 transactions.</p>
 <p className={styles.descriptionblack}>They were happy with this amount of transactions, and the users were able to navigate through the website application.</p>


      </Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Results:</p>
 <p className={styles.descriptionblack}>The web platform functioned successfully and we were able to get some success with around 100k in payments in a 6-9month period. As well as the client being happy with the website’s clean minimualistic design.</p>
 <p className={styles.descriptionblack}>We were able to process around 100K USD in transaction and a few thousand sales before the web platform was taken down. During this period my job was to maintain this flow of sales on the online platform.</p>
 <p className={styles.descriptionblack}>After this experience I became better at working remotely with teams, and understanding that I would have to be able to communicate more efficiently. Additionally because I designed the website and then implemented those designs with CSS, I was able to use some coding in a production environment which was nice.</p>
 <p className={styles.descriptionblack}>Additionally being able to start the hosting of the website, the implementation of the wordpress site, and then the maintenance of the website was a responsibility that was difficult for me to handle.</p>
 <p className={styles.descriptionblack}>There were several parts of the interface that were designed and then developed that allowed the user to navigate making a purchase. The main parts were the Checkout and the Cart screens, as well as the product screens being relevant.</p>
 <p className={styles.descriptionblack}>Additionally there was around 100K in transactions over 1000 transactions that were made using PayPal Manager, etc.</p>
     
 <p className={styles.titleblack}>Prototype:</p>
 
 <p className={styles.descriptionblack}>The quickest way to design this application as in to prototype it to MVP, or make an MVP and test it.  Many versions of these payment platforms were created, and there were many different product lines.</p>
 <p className={styles.descriptionblack}>The main focus was the E-Commerce functionality aspect, as well as being able to take payments over the internet, if the payment processors were connected or not.</p>
 <p className={styles.descriptionblack}>But the designs of the website was done with HTML/CSS into the WordPress Dashboard. Using this method, as well as creating the branding of the website was done using Adobe Illustrator.</p>
        
 <p className={styles.titleblack}>Test:</p>
 
 <p className={styles.descriptionblack}>After the prototype was completed and ready to be used, the website was used by users, and they were able to process around 100K transactions, over a 1000 transactions.</p>
 <p className={styles.descriptionblack}>They were happy with this amount of transactions, and the users were able to navigate through the website application.</p>


   </Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Results:</p>
<p className={styles.descriptionlargeblack}>The web platform functioned successfully and we were able to get some success with around 100k in payments in a 6-9month period. As well as the client being happy with the website’s clean minimualistic design.</p>
 <p className={styles.descriptionlargeblack}>We were able to process around 100K USD in transaction and a few thousand sales before the web platform was taken down. During this period my job was to maintain this flow of sales on the online platform.</p>
 <p className={styles.descriptionlargeblack}>After this experience I became better at working remotely with teams, and understanding that I would have to be able to communicate more efficiently. Additionally because I designed the website and then implemented those designs with CSS, I was able to use some coding in a production environment which was nice.</p>
 <p className={styles.descriptionlargeblack}>Additionally being able to start the hosting of the website, the implementation of the wordpress site, and then the maintenance of the website was a responsibility that was difficult for me to handle.</p>
 <p className={styles.descriptionlargeblack}>There were several parts of the interface that were designed and then developed that allowed the user to navigate making a purchase. The main parts were the Checkout and the Cart screens, as well as the product screens being relevant.</p>
 <p className={styles.descriptionlargeblack}>Additionally there was around 100K in transactions over 1000 transactions that were made using PayPal Manager, etc.</p>
     
 <p className={styles.titlelargeblack}>Prototype:</p>
 
 <p className={styles.descriptionlargeblack}>The quickest way to design this application as in to prototype it to MVP, or make an MVP and test it.  Many versions of these payment platforms were created, and there were many different product lines.</p>
 <p className={styles.descriptionlargeblack}>The main focus was the E-Commerce functionality aspect, as well as being able to take payments over the internet, if the payment processors were connected or not.</p>
 <p className={styles.descriptionlargeblack}>But the designs of the website was done with HTML/CSS into the WordPress Dashboard. Using this method, as well as creating the branding of the website was done using Adobe Illustrator.</p>
        
 <p className={styles.titlelargeblack}>Test:</p>
 
 <p className={styles.descriptionlargeblack}>After the prototype was completed and ready to be used, the website was used by users, and they were able to process around 100K transactions, over a 1000 transactions.</p>
 <p className={styles.descriptionlargeblack}>They were happy with this amount of transactions, and the users were able to navigate through the website application.</p>

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
 <p className={styles.descriptionblack}>Because the position was mainly remote, communication with team members were a challenge. Additionally as the sole designer and developer of the website, there were several instances of issues related to mainting the server hosting, url and various tasks.</p>
   <p className={styles.descriptionblack}>Things I learned while working for Sanchez Coffee Co., is that designing the web application that is to be used in a production environment to take payments over the internet required alot of knowledge. For example there were various web compilances that I had to make sure to follow,</p>
   <p className={styles.descriptionblack}>To get the website to code, for accepting payments over the internet various things had to be done, and working with the stakeholders, as well as various different agents, and institutions that provided merchant accounts, as well as helping out the user, was difficult to do but was a rewarding experience.</p>

</Container>
       }

     {matches.medium &&
<Container>
 
 <p className={styles.titleblack}>Reflection:</p>
 <p className={styles.descriptionblack}>Because the position was mainly remote, communication with team members were a challenge. Additionally as the sole designer and developer of the website, there were several instances of issues related to mainting the server hosting, url and various tasks.</p>
   <p className={styles.descriptionblack}>Things I learned while working for Sanchez Coffee Co., is that designing the web application that is to be used in a production environment to take payments over the internet required alot of knowledge. For example there were various web compilances that I had to make sure to follow,</p>
   <p className={styles.descriptionblack}>To get the website to code, for accepting payments over the internet various things had to be done, and working with the stakeholders, as well as various different agents, and institutions that provided merchant accounts, as well as helping out the user, was difficult to do but was a rewarding experience.</p>

</Container>
       }

     {matches.large &&
   <Container>

<p className={styles.titlelargeblack}>Reflection:</p>
<p className={styles.descriptionlargeblack}>Because the position was mainly remote, communication with team members were a challenge. Additionally as the sole designer and developer of the website, there were several instances of issues related to mainting the server hosting, url and various tasks.</p>
   <p className={styles.descriptionlargeblack}>Things I learned while working for Sanchez Coffee Co., is that designing the web application that is to be used in a production environment to take payments over the internet required alot of knowledge. For example there were various web compilances that I had to make sure to follow,</p>
   <p className={styles.descriptionlargeblack}>To get the website to code, for accepting payments over the internet various things had to be done, and working with the stakeholders, as well as various different agents, and institutions that provided merchant accounts, as well as helping out the user, was difficult to do but was a rewarding experience.</p>

     
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
            <p className={styles.titleblack}>Uguru, INC</p>
            <p className={styles.description}>International Videography Website Redesign</p>
            <Link to={'/uguru'}>
              <p className={styles.description}> View Previous </p>
            </Link>
          </Col>
          <Col sm={6} >
            <p className={styles.titleblack}>ApexVR</p>
            <p className={styles.description}>International Videography Website Redesign</p>
            <Link to={'/apexvr'}>
              <p className={styles.description}> View Next </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>


  </>
  /* End of JSX Fragment*/
)