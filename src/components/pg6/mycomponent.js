import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Img01 from '../../assets/img/nikerate/1-01.jpg';
import Img02 from '../../assets/img/nikerate/1-02.jpg';
import Img03 from '../../assets/img/nikerate/1-03.jpg';
import Img04 from '../../assets/img/nikerate/1-04.jpg';
import Img05 from '../../assets/img/nikerate/1-05.jpg';
import Img06 from '../../assets/img/nikerate/1-06.jpg';
import Img07 from '../../assets/img/nikerate/1-07.jpg';



import Vid1 from '../../assets/vids/videotest.mp4';

import Codepen from "react-codepen-embed";

export const Pg6 = () => (
    /* Start of JSX Fragment*/ 
    <>

<Jumbotron fluid>
    <Container>
      <h5>Case Study</h5>
      <h1>Nike Rate</h1>
      <p>
      React Web Application Demo      </p>
      <h5>Project Date:</h5>
      <p>
      July 2020 - July 2020      </p>
      <h5>Role:</h5>
      <p>
      UI/UX Developer as a personasl project that I put together, from a source code base I redesigned the User Interface and integrated the User Interface with CSS.      </p>

    </Container>
  </Jumbotron>

    <Container fluid>
    
        {/* left img right text */}
        <Row>
    <Col sm>
    <Image src={Img01} fluid className="pg1Img" />
    </Col>
    <Col sm>
      <h1>React Web Application</h1>
      <h3>This was a personal personal project because
I wanted to really go indepth into the React.JS
framework. Understanding what was going on.
I decided to recreate the React.JS web app
from scratch.

Nike Rate is based on a conceptual Web app
that can be used by individuals that are
interested in Nike shoes. They can go on the
platform and then they can start to figure out
what types of shoes they are interested in
and they can start ranking the shoes based 
on who gets the most clicks.</h3>
    </Col>
    </Row>

    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img02} fluid className="pg1Img" />
        </Col>
        </Row>

     {/* Video */}
     <Row>
    <Col sm>
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid1} type="video/mp4" />
    </video>
      </Col>
      </Row>

    {/* codepen*/}
    <Row>
            <Col sm>
            <Codepen
            hash="WNrqqqe"
            user="jaemnkm"
            defaultTab="result"
            preview="false"
        />
            </Col>
        </Row>

    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img03} fluid className="pg1Img" />
        </Col>
        </Row>


      {/* img without text */}
      <Row>
        <Col sm>
        <Image src={Img04} fluid className="pg1Img" />
        </Col>
        </Row>

        {/* left img right text */}
        <Row>
    <Col sm>
    <Image src={Img05} fluid className="pg1Img" />
    </Col>
    <Col sm>
      <h1>Designing the User Interface</h1>
      <h3>Can I design a better User Interface based on the
React.JS source code and then can I develop it from
scratch based on the docs. They project is a
React.JS Web app that is custom designed and
also built with Bootstrap 4, then it is deployed with
Heroku. This app is built as a concept for individual
who has an interest in Nike shoes.

With the web app they can rate a show up or down
depending on what they think of the shoes in
relation to other shoes on the application.</h3>
    </Col>
    </Row>

                {/* left text right img */}
                <Row>
        <Col sm>
        <h3>Source code</h3>
        <p>I took the application apart based on the
source code. Then I built it from scartch using
React.JS/HTML/CSS/JS. After I rebuilt it, I then
rebuilt the UI with Bootstrap. After I finished
developing the prototype, I deployed it using
Heroku.

I also custom designed the application thinking
about design methodology such as flat design,
so I used cards to showcase each individual shoe.
I finished up the design using Adobe Illustrator.</p>
        </Col>
        <Col sm>
        <Image src={Img06} fluid className="pg1Img" />
        </Col>
        </Row>

  
        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Completion of the Application</h3>
      <p>After completing this application, I was happy because I started to see that I was able to build out and app
using React.JS and use that for custom UI Components to design a custom UI Interface. I was pretty happy
that everything worked as I intended and I thought the designs came out nice as well. I was really happy that
my designs were able to be used as intended for React.JS as UI components, but additionally that the designs
would follow somewhat what was for React.JS.</p>
    <Image src={Img07} fluid className="pg1Img" />
    </Col>
    </Row>



           

    </Container>

    </>
      /* End of JSX Fragment*/
)