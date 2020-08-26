import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './contact.module.css';
import './contact.css';


import Vid1 from '../../assets/vids/compress_sf.mp4';

export const Contact = () => (
    /* Start of JSX Fragment*/ 
    <>

<Container fluid>
     {/* Video */}
     <Row>
    <Col sm>
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid1} type="video/mp4" />
    </video>
      </Col>
      </Row>
</Container>

  <Jumbotron fluid>
    <Container>
      <h5>Contact Info</h5>
      <h1>Jae Min (John) Kim</h1>
      <p>
      San Francisco Bay Area / Silicon Valley Local
      </p>
      <h5>Phone Number:</h5>
      <p>
      (510)-000-0000
      </p>
      <h5>Email:</h5>
      <p>
      test@email.com
      </p>

    </Container>
  </Jumbotron>


  <Jumbotron fluid>
    <Container className={styles.iframeContainer}>
    <iframe className="resume" src="https://docs.google.com/presentation/d/e/2PACX-1vSusfndqlT0V0Na58SGU9zYXdebjBZxm_BLsXT-40UUZUL4ObuJiWjpUFWXAW4zvBPcM5T34yPpUA0f/embed?start=false&loop=false&delayms=3000" title="resume" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>    
    </Container>
  </Jumbotron>  


<Container fluid className={styles.test}>
        {/* img with text */}
        <Row>
    <Col sm>
      
      <p>“John (Jae Min) Kim is a resourceful worker and a self-starter. He has a passion for his design and cod
ing. He is great to work with and very knowledgeable about UX design, coding and graphic 
design. I recommend his work ethics in being a team player who always loves to help others
 around him as well as his skill set and independence. He is a great addition to any company t
hat hires him.”
</p>
<h3>Jessica Y.</h3>

<br></br>

<p>“Jaemin ‘John’  Kim helped me and my team create a virtual reality website from the groun
d up and it was a pleasure working with him every step of the way. His skill developing the s
ite from scratch and enthusiasm to explore new techniques to make a totally original websit
e is one of the many reasons he is a great choice to add to any team”
</p>
<h3>Franz E. Polar Productions</h3>

<br></br>

<p>“To whom it may concern: My name is Michael T. I am an artist out of Key West Florida. I h
ave a website that was created in part and certainly edited and maint
ained in different degrees with the astute and professional services of John (Jae Min) Kim. His knowled
ge and advice has been and still is of the utmost value to myself with respect to the present
 ordering and maintenance of my site. I would recommend him to any needing such services. 
He has conducted himself both honestly and professionally.

</p>
<h3>Sincerely”
Michael T.</h3>

<br></br>

<p>California College of the Arts BFA Interaction Design</p>
<h3>jkim17@cca.edu</h3>

<br></br>

<p>Portfolio 2020</p>
<h3>Many Thanks.</h3>

    </Col>
    </Row>

</Container>



    </>
      /* End of JSX Fragment*/
)