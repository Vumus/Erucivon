import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS_Folder/sleding.css'

function Sleding() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="slide"
          src="https://wallpapersmug.com/large/29e647/portrait-daisy.jpg"
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
          src="https://images.unsplash.com/photo-1629694242280-20637c63285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwZGFya3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Second slide"
        />
        <Carousel.Caption className='slide-capt'>
          <h3>Contoh Carousel #2</h3>
          <p>Berikut merupakan contoh Carousel #2</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Sleding;