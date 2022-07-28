import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS_Folder/sleding.css'

function Sleding() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
    <Carousel style={{width: "100%", height: "67vmax"}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="slide"
          src="https://pertarung.kulonprogokab.go.id/files/news/normal/4d71eefe204a7a1b24c964ce1132fa4a.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='slide-capt'>
          <h3>Contoh Carousel #1</h3>
          <p>Berikut merupakan contoh Carousel #1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src="https://dishub.ntbprov.go.id/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-22-at-18.13.08.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption className='slide-capt'>
          <h3>Contoh Carousel #2</h3>
          <p>Berikut merupakan contoh Carousel #2</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}


export default Sleding;