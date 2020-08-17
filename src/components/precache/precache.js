import React from 'react';
import PreCacheImg from 'react-precache-img';


class Loader extends React.Component {

    componentDidMount() {
        return (
            <PreCacheImg
              images={[
                '../../assets/vids/compress_sf.mp4', 
        '../../assets/vids/compress_vid0.mp4',
        '../../assets/vids/compress_vid1.mp4', 
         '../../assets/vids/compress_vid2.mp4', 
         '../../assets/vids/compress_vid3.mp4', 
        '../../assets/vids/compress_vid4.mp4', 
        '../../assets/vids/compress_vid5.mp4', 
         '../../assets/vids/compress_vid6.mp4',
    
        '../../assets/img/uguru/banner-01.jpg', 
     '../../assets/img/uguru/1-01.jpg',
       '../../assets/img/uguru/1-02.jpg',
        '../../assets/img/uguru/1-03.jpg', 
         '../../assets/img/uguru/1-04.jpg',
       '../../assets/img/uguru/1-05.jpg', 
     '../../assets/img/uguru/1-06.jpg', 
      '../../assets/img/uguru/1-07.jpg',
    
        '../../assets/img/dasdasdigital/banner-02.jpg',
         '../../assets/img/dasdasdigital/1-01.jpg',
         '../../assets/img/dasdasdigital/1-02.jpg', 
       '../../assets/img/dasdasdigital/1-03.jpg',
         '../../assets/img/dasdasdigital/1-04.jpg', 
        '../../assets/img/dasdasdigital/1-05.jpg',
       '../../assets/img/dasdasdigital/1-06.jpg', 
        '../../assets/img/dasdasdigital/1-07.jpg', 
    
        '../../assets/img/sanchezcoffeeco/banner-03.jpg', 
       '../../assets/img/sanchezcoffeeco/1-01.jpg',
       '../../assets/img/sanchezcoffeeco/1-02.jpg', 
       '../../assets/img/sanchezcoffeeco/1-03.jpg', 
       '../../assets/img/sanchezcoffeeco/1-04.jpg',
        '../../assets/img/sanchezcoffeeco/1-05.jpg', 
       '../../assets/img/sanchezcoffeeco/1-06.jpg',
       '../../assets/img/sanchezcoffeeco/1-07.jpg', 
    
        '../../assets/img/dominos/banner-04.jpg',
        '../../assets/img/dominos/1-01.jpg',
         '../../assets/img/dominos/1-02.jpg',
         '../../assets/img/dominos/1-03.jpg', 
      '../../assets/img/dominos/1-04.jpg', 
        '../../assets/img/dominos/1-05.jpg', 
     '../../assets/img/dominos/1-06.jpg', 
       '../../assets/img/dominos/1-07.jpg',
    
        '../../assets/img/stepsaver/banner-05.jpg',
       '../../assets/img/stepsaver/1-01.jpg',
        '../../assets/img/stepsaver/1-02.jpg', 
        '../../assets/img/stepsaver/1-03.jpg', 
     '../../assets/img/stepsaver/1-04.jpg',
       '../../assets/img/stepsaver/1-05.jpg', 
       '../../assets/img/stepsaver/1-06.jpg', 
       '../../assets/img/stepsaver/1-07.jpg',
    
         '../../assets/img/nikerate/banner-06.jpg', 
         '../../assets/img/nikerate/1-01.jpg', 
         '../../assets/img/nikerate/1-02.jpg', 
      '../../assets/img/nikerate/1-03.jpg', 
    '../../assets/img/nikerate/1-04.jpg',
      '../../assets/img/nikerate/1-05.jpg',
     '../../assets/img/nikerate/1-06.jpg',
      '../../assets/img/nikerate/1-07.jpg', 
              ]}
            />
        );
    }
  
    render() {
      console.log('Render lifecycle')
      return null;
    }
  }

export default Loader;