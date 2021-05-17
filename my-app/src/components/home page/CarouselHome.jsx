import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const styles = {
  marginTop: '-310px',
  marginLeft: '55px',
  maxWidth: '700px',
};

function Gallery() {
  return (
    <div style={styles}>
      <Carousel
        dynamicHeight
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        autoPlay
        transitionTime={300}
        showArrows={false}
      >
        <div>
          <img width="700" height="455" src="/karate.jpg" alt="Karate" />
        </div>
        <div>
          <img width="700" height="455" src="/djiu.jpg" alt="Djiu" />
        </div>
        <div>
          <img width="700" height="445" src="/tx.jpg" alt="Taekwondo" />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
