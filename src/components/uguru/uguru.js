import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Img34 from '../../assets/ugurumainpic-01-min.png';
import Img35 from '../../assets/mockuptest-02.png';
import Img36 from '../../assets/mockuptest-01.png';
import Img38 from '../../assets/phonemockuo.png';
import styles from '../css/style.module.css';
import '../css/style.css';
import PreloadUguruBackgroundImageTest from '../../assets/img/uguru/backtest-01-min.jpg';
import PreloadUguruBackgroundImageTestMobile from '../../assets/img/uguru/backtest-06-min.jpg';
import PreloadUguruBackgroundImageTest1 from '../../assets/img/uguru/backtest-02-min.jpg';
import PreloadUguruBackgroundImageTestMobile1 from '../../assets/img/uguru/backtest-07-min.jpg';
import PreloadUguruBackgroundImageTest2 from '../../assets/img/uguru/backtest-03-min.jpg';
import PreloadUguruBackgroundImageTestMobile2 from '../../assets/img/uguru/backtest-08-min.jpg';
import PreloadUguruBackgroundImageTest3 from '../../assets/img/uguru/backtest-04-min.jpg';
import PreloadUguruBackgroundImageTestMobile3 from '../../assets/img/uguru/backtest-09-min.jpg';
import PreloadUguruBackgroundImageTest4 from '../../assets/img/uguru/backtest-05-min.jpg';
import PreloadUguruBackgroundImageTestMobile4 from '../../assets/img/uguru/backtest-10-min.jpg';
import PreloadUguruBackgroundImageTest5 from '../../assets/img/uguru/1-05.jpg';
import PreloadUguruBackgroundImageTestMobile5 from '../../assets/img/uguru/1-05.jpg';

import Media from 'react-media';

export const Uguru = () => (
  /* Start of JSX Fragment*/
<>

  <Container fluid className={styles.test2}>
  <Media queries={{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
    }}>
    {matches => (
    <>
    {matches.small &&
      <div>
        <Image src={PreloadUguruBackgroundImageTestMobile} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.medium &&
      <div>
        <Image src={PreloadUguruBackgroundImageTestMobile} fluid className={styles.testgradientbackground}/>
      </div>
    }
    {matches.large &&
      <div>
        <Image src={PreloadUguruBackgroundImageTest} fluid className={styles.testgradientbackground}/>
      </div>
    }
    </>
    )}
  </Media>
  <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>
<div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
      <div className={styles.spaceing}></div>
  <Row className={styles.justifycontentcenter}>
    <Col xs={10} md={4}>
      <Fade>
        <p className={styles.subtitlesmallwhitecenter}>Uguru, INC</p>
        <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Startup</span> in San Francisco <span className={styles.grey}></span></p>
      </Fade>  
        <div className={styles.spaceing}></div>
    </Col>
  </Row>
  <Row className={styles.justifycontentcenter}>
    <Col xs={12} md={10}>
      <Fade>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
          }}>
          {matches => (
          <>
          {matches.small &&
            <Image src={Img34} fluid className={styles.centerimage}/>
          }
          {matches.medium &&
            <Image src={Img34} fluid className={styles.centerimage}/>
          }
                {matches.large &&
                
                <Image src={Img34} fluid className={styles.centerimage}/>

                  }

              </>
            )}
          </Media>
              </Fade>  

              <div className={styles.spaceing}></div>
          


              </Col>
  </Row>


<div className={styles.spaceing}></div>



<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>The product that they were developing was a mobile Application for college students.</span></p>
</Fade>   
<div className={styles.spaceing}></div>
<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>

      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.grey}></span>It was a small team, made up of a project manager, CEO, data science intern, software enginner intern, and myself. Eventually another designer was called in and boosted the User Interface designs. The startup was located in SOMA, which is down town san francisco right across from the ferry building.</p>
</Slide>
<div className={styles.spaceing}></div>

    
      </Card>

      <Card className={styles.backgroundtransparent}>

      </Card>
      </CardGroup>




</Col>
</Row>

<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img38} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img38} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img38} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>



</Container>















<Container fluid className={styles.test2}>
  
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={PreloadUguruBackgroundImageTestMobile1} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile1} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest1} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>


        <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<CardGroup className={styles.backgroundgadient}>
    <Card className={styles.backgroundtransparent}>
    <div className={styles.spaceing}></div>
    <Slide direction="up">
          <p className={styles.subtitlelargewhitecenter}>Uguru received their funding of around 300k.</p>
          <div className={styles.spaceing}></div>
          <p className={styles.descriptionlargewhitebold}>From an angel investor that was interested in building software product that would be able to create a platform for college students to get tutoring services, and other services.</p>
          </Slide>
    </Card>

    <Card className={styles.backgroundtransparent}>
    <Slide direction="up">
    <p className={styles.subtitlelargewhitecenter}>The peers would be able to tutor each other and be tutors for others.</p>
    <div className={styles.spaceing}></div>
    <p className={styles.descriptionlargewhitebold}>Over the feeling of the startup was one where there was alot of uncertainty with how the product was going to be developed and the CEO lacked the experience to really keep the team together and motivated. As well the people involved weren’t exactly knowing what to do.</p>

    <div className={styles.spaceing}></div>
    </Slide>
        </Card>
    </CardGroup>
    </Fade>  



</Col>
</Row>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={10}>
<Fade>
<CardGroup className={styles.backgroundgadient}>
    <Card className={styles.backgroundtransparent}>
      <Card.Body>
      <Fade>
      <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img36} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img36} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img36} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
        </Fade>
      </Card.Body>
    </Card>
    </CardGroup>
    </Fade>
  </Col>
</Row>

<div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>There was a ad that was looking for someone to be an office admin worker.</span></p>
</Fade>   
<div className={styles.spaceing}></div>
<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>

      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.grey}></span>After the initial interview I was able to get the internship and I started work at Uguru, INC. It was a fun experience that got me into UI/UX and without this experience I dont know if I would be able to have found my way out into a better way.</p>
</Slide>
<div className={styles.spaceing}></div>

    
      </Card>

      <Card className={styles.backgroundtransparent}>

      </Card>
      </CardGroup>




</Col>
</Row>

<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img38} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img38} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img38} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>


</Container>


























<Container fluid className={styles.test2}>
        <div id="test"></div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={PreloadUguruBackgroundImageTestMobile2} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile2} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest2} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>The first screens were mainly for the CEO, the CEO was a developer</span></p>
</Fade>   
<div className={styles.spaceing}></div>
<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>

      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.grey}></span>The userbase is college students, who are looking to help people as well as receive help for college. This is particularly useful for people that have majors in a particular subject but might need help with another topic. The main demographic that was ever reach was the local UC Berkeley Area. Because actually the CEO was a student at UC Berkeley.</p>
</Slide>
<div className={styles.spaceing}></div>

    
      </Card>

      <Card className={styles.backgroundtransparent}>

      </Card>
      </CardGroup>




</Col>
</Row>






<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img38} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img38} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img38} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>



<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>CEO needed a Graphic Designer who could transition into a User Interface Design/User Experience position. </span></p>
</Fade>    
<div className={styles.spaceing}></div>
<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>

      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.grey}></span>There were a few designs that I started with for example, I worked on the onboarding of the Mobile app. For this I designed it based on some sketches and created a higher fidelity for them. There were alot of times I didn’t know what to do, but I continued on them and made them as good as I could.</p>
</Slide>
<div className={styles.spaceing}></div>

    
      </Card>

      <Card className={styles.backgroundtransparent}>

      </Card>
      </CardGroup>




</Col>
</Row>

</Container>





<Container fluid className={styles.test2}>
        <div id="test"></div>

        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={PreloadUguruBackgroundImageTestMobile3} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTest3} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest3} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        <div className={styles.backoverlay}></div>

<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>CEO needed a Graphic Designer who could transition into a User Interface Design/User Experience position. </span></p>
</Fade>    
<div className={styles.spaceing}></div>
<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>

      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.grey}></span>There were a few designs that I started with for example, I worked on the onboarding of the Mobile app. For this I designed it based on some sketches and created a higher fidelity for them. There were alot of times I didn’t know what to do, but I continued on them and made them as good as I could.</p>
</Slide>
<div className={styles.spaceing}></div>

    
      </Card>

      <Card className={styles.backgroundtransparent}>

      </Card>
      </CardGroup>




</Col>
</Row>



<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img38} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img38} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img38} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>
</Container>








<Container fluid className={styles.test2}>
        <div id="test"></div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={PreloadUguruBackgroundImageTestMobile4} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile4} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest4} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>
        <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>After the designs were completed.</span></p>
</Fade>    
<div className={styles.spaceing}></div>
<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>

      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.grey}></span>CEO okayed them I started on creating rapid prototyping for them. This was done using proto.io and using this animation software I was able to show what the app would be like.</p>
</Slide>
<div className={styles.spaceing}></div>

    
      </Card>

      <Card className={styles.backgroundtransparent}>
      <Slide direction="up">
<p className={styles.descriptionlargewhitebold}><span className={styles.grey}>Additionally I made designs for the website, and various other parts of the interface.</span> For example I made designs for the home page of the app, the statistics page, and other pages such as they would be used on the production application that would be deployed and used.</p>
</Slide>
      </Card>
      </CardGroup>




</Col>
</Row>







<div className={styles.spaceing}></div>
<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>


<Fade>
<p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>Initially most of the designs were based on this fictional guru persona, whom was someone who would be able to teach students. Also the main point of this application is to create a social media, a community of people who could be at a state school, or at a university at California.</span></p>
</Fade>  
<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>


<div className={styles.spaceing}></div>

    
      </Card>

      <Card className={styles.backgroundtransparent}>

      </Card>
      </CardGroup>




</Col>
</Row>


<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>

<Fade>
<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img38} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img38} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img38} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
            </Fade>

            </Col>
</Row>



</Container>














<Container fluid className={styles.test2}>
        <div id="test"></div>

        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
              <div>
                    <Image src={PreloadUguruBackgroundImageTestMobile5} fluid className={styles.testgradientbackground}/>
            </div>
                }

              {matches.medium &&
              <div>
                  <Image src={PreloadUguruBackgroundImageTestMobile5} fluid className={styles.testgradientbackground}/>
                  </div>
                }

              {matches.large &&
               <div>
               <Image src={PreloadUguruBackgroundImageTest5} fluid className={styles.testgradientbackground}/>
               </div>
                }

            </>
          )}
        </Media>

        <div className={styles.backoverlay}></div>
<div className={styles.spaceing}></div>

<Row className={styles.justifycontentcenter}>
<Col xs={10} md={4}>



<CardGroup className={styles.backgroundtransparent}>
      <Card className={styles.backgroundtransparent}>
      <Fade>
      <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>I was able to create high fidelity mockups for the mobile application. As well as begining the rapid prototypes using static image files and animations.</span></p>
      </Fade> 
      <div className={styles.spaceing}></div>
      <Fade>
      <p className={styles.subtitlelargewhitecenter}><span className={styles.grey}>I was able to create high fidelity mockups for the mobile application. As well as begining the rapid prototypes using static image files and animations.</span></p>
      </Fade> 
      <div className={styles.spaceing}></div>

      <Slide direction="up">
            <p className={styles.descriptionlargewhitebold}>Graphic & UI/UX Designer Intern at the company, and later there was a lead designer that came in to help with moving the designs forwards faster. This was very great to learn from this individual and while working with the whole team it really showed me how a team would be able to create a production product.</p>
            </Slide>
    
      </Card>

      </CardGroup>




</Col>
</Row>




<Row className={styles.justifycontentcenter}>
<Col xs={12} md={10}>



<CardGroup className={styles.backgroundtransparent}>

      <Card className={styles.backgroundtransparent}>
      <Fade>
      <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                    <Image src={Img38} fluid className={styles.centerimage}/>
  
                }

              {matches.medium &&
                  <Image src={Img38} fluid className={styles.centerimage}/>
    
                }

              {matches.large &&
               
               <Image src={Img38} fluid className={styles.centerimage}/>

                }

            </>
          )}
        </Media>
      </Fade>
      </Card>
      </CardGroup>




</Col>
</Row>


</Container>
















<Container fluid className={styles.test2}>
<Row className="justify-content-md-center">
<Col xs lg="8">







<CardGroup>

<Card className={styles.cardborder}>
<div className={styles.spaceing}></div>
<p className={styles.descriptionlargewhitebold}>Artrendezvous</p>

  <p className={styles.descriptionlargewhite}>Mobile App Redesign</p>


  <LinkContainer to="/artrendezvous">
                <p>
                  <Button className={styles.mainbutton} variant="secondary">View Previous</Button>
                </p>
              </LinkContainer>


  
</Card>

<div className={styles.divider}/>

<Card className={styles.cardborder}>
    
<div className={styles.spaceing}></div>
<p className={styles.descriptionlargewhitebold}>Contact Now!</p>

  <p className={styles.descriptionlargewhite}>Contact Now!</p>


  <LinkContainer to="/Contact">
                <p>
                  <Button className={styles.mainbutton} variant="primary">Contact Now!</Button>
                </p>
              </LinkContainer>



  
</Card>
</CardGroup>




</Col>
</Row>
</Container>




















  </>
  /* End of JSX Fragment*/
)