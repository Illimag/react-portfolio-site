import React from 'react';
import './feed.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Slide } from "react-awesome-reveal";

import { LazyLoadImage } from 'react-lazy-load-image-component';


import I128 from '../../assets/2020/Untitled presentation-29.jpg';
import I127 from '../../assets/2020/Untitled presentation-28.jpg';
import I126 from '../../assets/2020/Untitled presentation-27.jpg';

import I125 from '../../assets/2020/Untitled presentation-26.jpg';
import I124 from '../../assets/2020/Untitled presentation-25.jpg';
import I123 from '../../assets/2020/Untitled presentation-24.jpg';

import I122 from '../../assets/2020/Untitled presentation-23.jpg';
import I121 from '../../assets/2020/Untitled presentation-22.jpg';
import I120 from '../../assets/2020/Untitled presentation-21.jpg';

import I119 from '../../assets/2020/Untitled presentation-20.jpg';
import I118 from '../../assets/2020/Untitled presentation-19.jpg';
import I117 from '../../assets/2020/Untitled presentation-18.jpg';

import I116 from '../../assets/2020/Untitled presentation-17.jpg';
import I115 from '../../assets/2020/Untitled presentation-16.jpg';
import I114 from '../../assets/2020/Untitled presentation-15.jpg';

import I113 from '../../assets/2020/Untitled presentation-14.jpg';
import I112 from '../../assets/2020/Untitled presentation-13.jpg';
import I111 from '../../assets/2020/Untitled presentation-12.jpg';

import I110 from '../../assets/2020/Untitled presentation-11.jpg';
import I109 from '../../assets/2020/Untitled presentation-10.jpg';
import I108 from '../../assets/2020/Untitled presentation-09.jpg';

import I107 from '../../assets/2020/Untitled presentation-08.jpg';
import I106 from '../../assets/2020/Untitled presentation-07.jpg';
import I105 from '../../assets/2020/Untitled presentation-06.jpg';

import I104 from '../../assets/2020/Untitled presentation-05.jpg';
import I103 from '../../assets/2020/Untitled presentation-04.jpg';
import I102 from '../../assets/2020/Untitled presentation-03.jpg';

import I101 from '../../assets/2020/Untitled presentation-05.jpg';
import I100 from '../../assets/2020/Untitled presentation-04.jpg';
import I99 from '../../assets/2020/Untitled presentation-03.jpg';

import I98 from '../../assets/2020/Untitled presentation-05.jpg';
import I97 from '../../assets/2020/Untitled presentation-04.jpg';
import I96 from '../../assets/2020/Untitled presentation-03.jpg';

import I95 from '../../assets/2020/Untitled presentation-02.jpg';
import I94 from '../../assets/2020/Untitled presentation-01.jpg';
import I93 from '../../assets/2020/20191211_170830.jpg';

import I92 from '../../assets/2020/20191211_170809.jpg';
import I91 from '../../assets/2020/20191211_170759.jpg';
import I90 from '../../assets/2020/20191111_145942.jpg';

import I89 from '../../assets/2020/20191110_172758.jpg';
import I88 from '../../assets/2020/20191110_154405.jpg';
import I87 from '../../assets/2020/20191110_154333.jpg';

import I86 from '../../assets/2020/20191110_172758.jpg';
import I85 from '../../assets/2020/20191110_154405.jpg';
import I84 from '../../assets/2020/20191110_154333.jpg';

import I83 from '../../assets/2020/20191110_154351.jpg';
import I82 from '../../assets/2020/20191110_154341.jpg';
import I81 from '../../assets/2020/20191110_154333.jpg';

import I80 from '../../assets/2020/20191110_154351.jpg';
import I79 from '../../assets/2020/20191110_154341.jpg';
import I78 from '../../assets/2020/20191110_154333.jpg';

import I77 from '../../assets/2020/20191110_154322.jpg';
import I76 from '../../assets/2020/20191110_154315.jpg';
import I75 from '../../assets/2020/20191110_154304.jpg';

import I74 from '../../assets/2020/20191110_154256.jpg';
import I73 from '../../assets/2020/20191110_154214.jpg';
import I72 from '../../assets/2020/20191110_154206.jpg';

import I71 from '../../assets/2020/20191110_154150.jpg';
import I70 from '../../assets/2020/20191110_154137.jpg';
import I69 from '../../assets/2020/20191110_154120.jpg';

import I68 from '../../assets/2020/20191104_152200.jpg';
import I67 from '../../assets/2020/20191104_152153.jpg';
import I66 from '../../assets/2020/20191104_152149.jpg';

import I65 from '../../assets/2020/20191104_152143.jpg';
import I64 from '../../assets/2020/20191104_152137.jpg';
import I63 from '../../assets/2020/20191104_152133.jpg';

import I62 from '../../assets/2020/20191104_152114.jpg';
import I61 from '../../assets/2020/20191104_152130.jpg';
import I60 from '../../assets/2020/20191006_231527.jpg';

import I59 from '../../assets/2020/20191006_231519.jpg';
import I58 from '../../assets/2020/20191006_231454.jpg';
import I57 from '../../assets/2020/20191006_231443.jpg';

import I56 from '../../assets/2020/20191006_231429.jpg';
import I55 from '../../assets/2020/20191006_231423.jpg';
import I54 from '../../assets/2020/20191006_231404.jpg';

import I53 from '../../assets/2020/20191006_231355.jpg';
import I52 from '../../assets/2020/20191006_231308.jpg';
import I51 from '../../assets/2020/20191006_231256.jpg';

import I50 from '../../assets/2020/20191006_231240.jpg';
import I49 from '../../assets/2020/20191006_231221.jpg';
import I48 from '../../assets/2020/20191006_231158.jpg';

import I47 from '../../assets/2020/20191006_231150.jpg';
import I46 from '../../assets/2020/20191006_231130.jpg';
import I45 from '../../assets/2020/20191006_231119.jpg';

import I44 from '../../assets/2020/20191006_231102.jpg';
import I43 from '../../assets/2020/20191006_231050.jpg';
import I42 from '../../assets/2020/20191006_231040.jpg';

import I41 from '../../assets/2020/20191006_231031.jpg';
import I40 from '../../assets/2020/20191002_190900.jpg';
import I39 from '../../assets/2020/20191002_190850.jpg';

import I38 from '../../assets/2020/20191002_190842.jpg';
import I37 from '../../assets/2020/20191002_190834.jpg';
import I36 from '../../assets/2020/20191002_142826.jpg';

import I35 from '../../assets/2020/20191002_142813.jpg';
import I34 from '../../assets/2020/20191002_141401.jpg';
import I33 from '../../assets/2020/20191002_134800.jpg';

import I32 from '../../assets/2020/20191001_214027.jpg';
import I31 from '../../assets/2020/20191001_214020.jpg';
import I30 from '../../assets/2020/20191001_214015.jpg';

import I29 from '../../assets/2020/20191001_214011.jpg';
import I28 from '../../assets/2020/20191001_214006.jpg';
import I27 from '../../assets/2020/20191001_213952.jpg';

import I26 from '../../assets/2020/20191001_213938.jpg';
import I25 from '../../assets/2020/20191001_191533.jpg';
import I24 from '../../assets/2020/20190930_140221.jpg';

import I23 from '../../assets/2020/20190929_215814.jpg';
import I22 from '../../assets/2020/20190929_215809.jpg';
import I21 from '../../assets/2020/20190925_143418.jpg';

import I20 from '../../assets/2020/20190925_132928.jpg';
import I19 from '../../assets/2020/20190925_132925.jpg';
import I18 from '../../assets/2020/20190922_231426.jpg';

import I17 from '../../assets/2020/20190922_231344.jpg';
import I16 from '../../assets/2020/20190920_120425.jpg';
import I15 from '../../assets/2020/20190916_142643.jpg';

import I14 from '../../assets/2020/20190916_140256.jpg';
import I13 from '../../assets/2020/20190916_133037.jpg';
import I12 from '../../assets/2020/20190911_154548.jpg';

import I11 from '../../assets/2020/20190911_154541.jpg';
import I10 from '../../assets/2020/20190911_154534.jpg';
import I09 from '../../assets/2020/20190911_154518.jpg';

import I08 from '../../assets/2020/20190911_140310.jpg';
import I07 from '../../assets/2020/20190911_140244.jpg';
import I06 from '../../assets/2020/20190911_140235.jpg';

import I05 from '../../assets/2020/20190911_140229.jpg';
import I04 from '../../assets/2020/20190910_163140.jpg';
import I03 from '../../assets/2020/20190910_162005.jpg';

import I02 from '../../assets/2020/20190910_161222.jpg';
import I01 from '../../assets/2020/20190910_160049.jpg';
import I00 from '../../assets/2020/20190909_150622.jpg';

import Img00 from '../../assets/2019/bibis3_1-min.png';
import Img01 from '../../assets/2019/f_polar_4-min.png';
import Img02 from '../../assets/2019/f_stepsaver_1-min.png';
import Img03 from '../../assets/2019/f_warm_0-min.png';
import Img04 from '../../assets/2019/real_images/2.png';
import Img05 from '../../assets/2019/real_images/789tensmockup.png';
import Img06 from '../../assets/2019/real_images/apextest2.png';
import Img07 from '../../assets/2019/real_images/p_789_1_L-min.png';
import Img08 from '../../assets/2019/real_images/p_789_2_L-min.png';
import Img09 from '../../assets/2019/real_images/p_gv_0_L-min.png';
import Img10 from '../../assets/2019/real_images/p_gv_1_L-min.png';
import Img11 from '../../assets/2019/real_images/p_gv_2_L-min.png';
import Img12 from '../../assets/2019/real_images/p_gv_3_L-min.png';
import Img13 from '../../assets/2019/real_images/p_polar_0_L-min.png';
import Img14 from '../../assets/2019/real_images/p_polar_1_L-min.png';
import Img15 from '../../assets/2019/real_images/p_polar_2_L-min.png';
import Img16 from '../../assets/2019/real_images/p_polar_3_L-min.png';
import Img17 from '../../assets/2019/real_images/p_polar_4_L-min.png';
import Img18 from '../../assets/2019/real_images/p_splice_0_L-min.png';
import Img19 from '../../assets/2019/real_images/p_splice_1_L-min.png';
import Img20 from '../../assets/2019/real_images/p_splice_2_L-min.png';
import Img21 from '../../assets/2019/real_images/p_splice_3_L-min.png';
import Img22 from '../../assets/2019/real_images/p_warm_0_L-min.png';
import Img23 from '../../assets/2019/real_images/p_warm_1_L-min.png';
import Img24 from '../../assets/2019/real_images/p_warm_2_L-min.png';
import Img25 from '../../assets/2019/real_images/pro6.png';
import Img26 from '../../assets/2019/real_images/pro11.png';
import Img27 from '../../assets/2019/real_images/pro12.png';
import Img28 from '../../assets/2019/real_images/marconi/main_pic-min.png';
import Img29 from '../../assets/2019/real_images/marconi/part2_large-min.png';
import Img30 from '../../assets/2019/real_images/marconi/part3_large-min.png';
import Img31 from '../../assets/2019/real_images/marconi/part4_large-min.png';
import Img32 from '../../assets/2019/real_images/marconi/part4_large-min.png';
import Img33 from '../../assets/2019/real_images/marconi/part4_large-min.png';
import Img34 from '../../assets/2019/real_images/pro/bibis1_1.png';
import Img35 from '../../assets/2019/real_images/pro/cityxcape1_1.png';
import Img36 from '../../assets/2019/real_images/pro/cityxcape2_1.png';
import Img37 from '../../assets/2019/real_images/pro/cityxcape3_1.png';
import Img38 from '../../assets/2019/real_images/scorely/main_pic-min.png';
import Img39 from '../../assets/2019/real_images/scorely/part1_large-min.png';
import Img40 from '../../assets/2019/real_images/scorely/part2_large-min.png';
import Img41 from '../../assets/2019/real_images/scorely/part3_large-min.png';


export const Feed = () => (
    /* Start of JSX Fragment*/ 
    <>

<Container>

<Row>
    <Col sm={4}>   
    <LazyLoadImage
      src={I128} 
 />
    </Col>
    <Col sm={4}>
    <LazyLoadImage
      src={I127} 
 />
    </Col>
    <Col sm={4}>
    <LazyLoadImage
      src={I126} 
 />
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <LazyLoadImage
      src={I125} 
 />
    </Col>
    <Col sm={4}>
    <LazyLoadImage
      src={I124} 
 />
    </Col>
    <Col sm={4}>
    <LazyLoadImage
      src={I123} 
 />
    </Col>
  </Row>


<Row>
    <Col sm={4}>   
    <LazyLoadImage
      src={I122} 
 /> 
    </Col>
    <Col sm={4}>
    <LazyLoadImage
      src={I121} 
 />
    </Col>
    <Col sm={4}>
    <LazyLoadImage
      src={I120} 
 />
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I119} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I118} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I117} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I116} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I115} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I114} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I113} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I112} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I111} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I110} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I109} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I108} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I107} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I106} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I105} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I104} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I103} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I102} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I101} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I100} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I99} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I98} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I97} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I96} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I95} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I94} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I93} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I92} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I91} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I90} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I89} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I88} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I87} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I86} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I85} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I84} fluid/>
    </Col>
  </Row>



<Row>

    <Col sm={4}>    
    <Image src={I83} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I82} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I81} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I80} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I79} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I78} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I77} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I76} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I75} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I74} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I73} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I72} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I71} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I70} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I69} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I68} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I67} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I66} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I65} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I64} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I63} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I62} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I61} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I60} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I59} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I58} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I57} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I56} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I55} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I54} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I53} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I52} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I51} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I50} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I49} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I48} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I47} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I46} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I45} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I44} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I43} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I42} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I41} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I40} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I39} fluid/>
    </Col>
  </Row>


<Row>
    <Col sm={4}>    
    <Image src={I38} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I37} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I36} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I35} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I34} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I33} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I32} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I31} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I30} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I29} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I28} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I27} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I26} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I25} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I24} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I23} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I22} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I21} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I20} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I19} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I18} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I17} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I16} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I15} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I14} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I13} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I12} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I11} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I10} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I09} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I08} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I07} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I06} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I05} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I04} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I03} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={I02} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I01} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={I00} fluid/>
    </Col>
  </Row>

<Row>
    <Col sm={4}>    
    <Image src={Img00} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img01} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img02} fluid/>
    </Col>
  </Row>

  <Row>
    <Col sm={4}>
    <Image src={Img03} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img04} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img05} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img06} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img07} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img08} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img09} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img10} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img11} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img12} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img13} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img14} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img15} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img16} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img17} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img18} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img19} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img20} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img21} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img22} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img23} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img24} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img25} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img26} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img27} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img28} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img29} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img30} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img31} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img32} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img33} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img34} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img35} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img36} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img37} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img38} fluid/>
    </Col>
  </Row>
  <Row>
    <Col sm={4}>
    <Image src={Img39} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img40} fluid/>
    </Col>
    <Col sm={4}>
    <Image src={Img41} fluid/>
    </Col>
  </Row>
</Container>

</>
      /* End of JSX Fragment*/
)