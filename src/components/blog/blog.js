import React from 'react';
import './blog.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Gist from 'react-gist';
import Highlight from 'react-highlight.js';
import styles from './blog.module.css';

export const Blog = () => (
  /* Start of JSX Fragment*/
  <>


    <Jumbotron fluid className={styles.white}>
      <Container>
        <h1>3 page Nav Single Page Application with AngularJS</h1>
        <p>
          jaemnkm.github.io/angular_test0/index.html jaemnkm.github.io/angular_test1/index.html

          The Angular framework is very nice. I like how the website changes pages more smoothly because all the assets are preloaded.

          The downside is that it takes a while at the start to load, the upside is that once the assets are loaded it will be in the cache.

          I used the iFrame method to change urls when the tab is selected.

          I think that one of the main issues with using AngularJS for websites is that web crawlers have a more difficult time indexing them.

          So if you are planning to have your website's SEO effect your internet traffic, a single page application type framework would make the site not SEO friendly.

          With iFrame method I am able to keep the html in pages that are able to be indexed like a non-framework website.

          I do not think this is a good way to do things, but for something that is simple like my portfolio which is just a bunch of static photos, an AngularJS framework navigation that changes URLs when each tab is seclted, is an OK solution.

        </p>

      </Container>
    </Jumbotron>






    <Jumbotron fluid className={styles.white}>
      <Container>
        <h1>Double background-images and responsive 3 sizes images</h1>
        <p>
          Overlaying background-images, screen-size and image optimization.
        </p>
        <h1>Overlaying background-images:</h1>
        <p>
          Using CSS you can overlay background-images over each other. This is great when you want to make bottom image a gif and the top has a low opacity so it is transparent. This allows you to edit the color of the gif without editing it. You can also load multiple gifs over each other as a background.
        </p>
        <h1>Background-images screen-size optimization:</h1>
        <p>
          With CSS and Media Queries there are the following sizes for screens:
        </p>
        <Gist id='2de89cf80d88c584ad53fdf4539d81d3' />

        <p>
    In the images folder there are 8 of the same background(firstback) that are different sizes. The different between the firstbackbigcomp(1.02 MB) -> Large Screen(min-width : 1824px) and firstbackmobile1(66.7 KB) -> Smartphone(min-device-width : 320px) are that when the user views the website on a large desktop they will get the higher pixel/size image while on a smartphone they will get the lower pixel/size image. So the background-images are optimized toward specific devices which allows fastest load time while loading optimized image size by device.
        </p>
        <h1>Images Optimization:</h1>
        <p>
          Picture is stretch across screen so according to the max-width of the screen it will load one of three sizes.

          Small: max-width: 700px

          Medium: max-width: 1400px

          Large: min-width: 1401px

          Example image:

          Small: codepart1ver3.png (31.9 KB)

          Medium: codepart1ver2.png (93.5 KB)

          Large: codepart1ver1.png (256 KB)    </p>
        <h1>Advantages of optimizing images with CSS:
        </h1>
        <p>
Images files are widely used in web development. To be able to optimize them would decrease the amount of data sent from the server to the client. This is especially useful when the user is using mobile. The user would download >100 KB instead of a 1 MB file while keeping good pixel quality. While a desktop user would download the 1 MB file instead of the >100 KB so they wouldn't have a pixelated image.
        </p>
        <h1>Source Code
        </h1>
        <Gist id='2a7debdb21485e9f5d90bfa4e0e3e413' />
      </Container>
    </Jumbotron>

    <Jumbotron fluid className={styles.white}>
      <Container>
        <h1>JetBrain CLion WSL Setup</h1>
        <p>
          Setup for Windows Subsystem for Linux C complier on the JetBrain Clion IDE.

          Make sure to install CLion and Windows 10 ubuntu subsystem.

          Edit clion_wsl_setup.bat file by changing the username and hostname to the computer.

          Run batch file:
        </p>
        <Highlight>
          {"./clion_wsl_setup.bat"}
        </Highlight>

        <p>
          Open CLion and go to file then settings then build, execution, deployment then to toolchains.

          Change Toolchain to WSL, change the credentials.

          Add workaround for casesensitive:

          Go to Help then Edit Custom properties and add:
        </p>

        <Highlight>
          {"idea.case.sensitive.fs=true"}
        </Highlight>

        <p>
          Restart IDE using File then Invalidate Caches and Restart option.

          To Run a C program in CLion:

          Go to Run then Edit Configurations.

          Add target and executables.

          Then run. The IDE will build the everything and debug. Don't need to run complier from command line anymore.
        </p>

      </Container>
    </Jumbotron>

    <Jumbotron fluid className={styles.white}>
      <Container>
        <h1>The 17,576 Names of God</h1>
        <p>
          "In the Short short story 'The Nine Billion Names of God', author Arthur C. Clarke writes about a group of monks who are determined to figure out the names of God. They have devised a phonetic alphabet and have written down various combinations of sounds, but they can work only so fast. So, they hire a computer company to install a system that can quickly create 9 billion permutations of the sounds, one of which is likely to be the Name of God. The idea is that, after God's name is known, the world will end.
          <br></br>
          It's a charming story, all the more so because desktop computers can now also calculate the name of God, as long as you properly code them with the monk's alphabet, write the program, and then sit and wait for the output to compile.
          <br></br>
          The following program uses three nested loops to generate every possible 3-letter combination using the common English alphabet. This example isn't sufficient to produce the Name of God, so the world doesn't end when you run the program."
          <br></br>
          Here is the program that does 17,576 of the 9 billion:
        </p>

        <Gist id='950e5f0ba955cdbaf665fe1a3791a433' />

        <p>
          What if we need to find all 9 billion?
          <br></br>
          ? - ? = 9,000,000,000
        </p>

        <Gist id='615c1908218d77f19988134f4a40392e' />

        <p>
          AAAAAAA - ZZZZZZZ = 9,000,000,000 (it's way closer to 8,000,000,000 but let's just say 9,000,000,000)


          <br></br>
          Here is the program that does 9 billion:


        </p>
        <Gist id='4b134b8fedbd964db5432da2e3fb609e' />


      </Container>
    </Jumbotron>

  </>
  /* End of JSX Fragment*/
)